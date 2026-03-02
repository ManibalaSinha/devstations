# server/models/user.py
from ..extensions import db
from passlib.hash import bcrypt_sha256

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

    # Method to hash the password
    def set_password(self, password):
        self.password_hash = bcrypt_sha256.hash(password)

    # Method to check password
    def check_password(self, password):
        return bcrypt_sha256.verify(password, self.password_hash)