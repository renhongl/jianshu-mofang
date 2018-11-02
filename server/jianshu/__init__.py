
from jianshu.extensions import db, mail
from flask import Flask, jsonify
from jianshu.blueprints.auth import auth_bp
from jianshu.blueprints.user import user_bp
from jianshu.blueprints.article import article_bp
from jianshu.settings import config
import os

def register_extensions(app):
    db.init_app(app)
    mail.init_app(app)


def register_logging(app):
    pass


def register_blueprints(app):
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(user_bp)
    app.register_blueprint(article_bp)


def register_errors(app):
    @app.errorhandler(400)
    def bad_request(e):
        return jsonify(msg='bad request', status=400)

    @app.errorhandler(404)
    def page_not_found(e):
        return jsonify(msg='page not found', status=404)

    @app.errorhandler(500)
    def internal_server_error(e):
        return jsonify(msg='internal server error', status=500)



def create_app(config_name = None):
    if config_name is None:
        config_name = os.getenv('FLASK_CONFIG', 'development')


    app = Flask(__name__)
    app.config.from_object(config[config_name])

    register_extensions(app)
    register_logging(app)
    register_blueprints(app)
    register_errors(app)
    return app

