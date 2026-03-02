import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecret")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "postgresql://user:pass@localhost/devstations")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET", "jwtsecret")
    JWT_ACCESS_TOKEN_EXPIRES = 900   # 15 min
    JWT_REFRESH_TOKEN_EXPIRES = 604800  # 7 days