from ..extensions import db
from datetime import datetime

class IdempotencyKey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(255), unique=True, nullable=False)
    user_id = db.Column(db.Integer)
    response = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)