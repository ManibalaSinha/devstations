from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.user import User
from flask_jwt_extended import create_access_token, create_refresh_token
from datetime import timedelta

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json or {}
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "User already exists"}), 400

    user = User(username=username)
    user.set_password(password)
    try:
        db.session.add(user)
        db.session.commit()
    except Exception:
        db.session.rollback()
        return jsonify({"msg": "Database error"}), 500

    return jsonify({"msg": "User created"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json or {}
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=30))
        refresh_token = create_refresh_token(identity=user.id)
        return jsonify({"access_token": access_token, "refresh_token": refresh_token})
    
    return jsonify({"msg": "Invalid credentials"}), 401
