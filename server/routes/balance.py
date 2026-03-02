from flask import Blueprint, request, jsonify

balance_bp = Blueprint('balance', __name__)

@balance_bp.route('/', strict_slashes=False)
def get_balance():
    return {"balance": 100}