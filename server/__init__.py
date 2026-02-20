# server/__init__.py
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

jwt = JWTManager()

def create_app(config_name=None):
    app = Flask(__name__)
    CORS(app)
    
    # Configuration
    app.config['JWT_SECRET_KEY'] = 'devstations-secret'  # secure in production
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 600  # 10 min

    # Initialize extensions
    jwt.init_app(app)
    
    # Register blueprints
    from .auth import auth_bp
    from .posts import posts_bp
    
    app.register_blueprint(auth_bp)
    app.register_blueprint(posts_bp, url_prefix='/api/posts')
    
    return app