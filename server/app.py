from flask import Flask
from .config import Config
from .extensions import db, migrate, jwt, cors
from .routes.auth import auth_bp
from .routes.balance import balance_bp
from .routes.transfer import transfer_bp
from .utils.logger import logger

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, supports_credentials=True)

    # Blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(balance_bp, url_prefix="/balance")
    app.register_blueprint(transfer_bp, url_prefix="/transfer")
    @app.route('/')
    def index():
      return "Welcome to DevStations API!"

    return app