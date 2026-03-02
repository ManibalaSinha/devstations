from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.user import User
from ..models.transaction import Transaction, AuditLog
from ..models.idempotency import IdempotencyKey
from flask_jwt_extended import jwt_required, get_jwt_identity

transfer_bp = Blueprint("transfer", __name__)

@transfer_bp.route("/", methods=["POST"])
@jwt_required()
def transfer():
    user_id = get_jwt_identity()
    data = request.json
    key = request.headers.get("Idempotency-Key")

    # Idempotency check
    existing = IdempotencyKey.query.filter_by(key=key, user_id=user_id).first()
    if existing:
        return existing.response

    # Transaction-safe transfer
    try:
        with db.session.begin():
            sender = db.session.execute(
                db.select(User).where(User.id==user_id).with_for_update()
            ).scalar_one()
            receiver = User.query.filter_by(id=data["to"]).with_for_update().first()

            if sender.balance < data["amount"]:
                return jsonify({"msg": "Insufficient balance"}), 400

            sender.balance -= data["amount"]
            receiver.balance += data["amount"]

            txn = Transaction(sender_id=sender.id, receiver_id=receiver.id, amount=data["amount"])
            db.session.add(txn)

            # Audit log
            audit = AuditLog(user_id=user_id, action="TRANSFER",
                             metadata={"to": receiver.id, "amount": data["amount"]},
                             ip_address=request.remote_addr)
            db.session.add(audit)

            # Save idempotency
            response = jsonify({"msg": "Transfer successful"})
            db.session.add(IdempotencyKey(key=key, user_id=user_id, response=response.get_json()))
        return response
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": str(e)}), 500