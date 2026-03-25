import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")  

    # Database connection URL
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    
    # SQLAlchemy settings
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT settings
    JWT_SECRET_KEY = os.getenv("JWT_SECRET") 
    JWT_ACCESS_TOKEN_EXPIRES = 900          # 15 min
    JWT_REFRESH_TOKEN_EXPIRES = 604800      # 7 days
