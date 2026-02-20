from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

posts_bp = Blueprint('posts', __name__)
posts = {}

@posts_bp.route('', methods=['GET'])
def get_posts():
    return jsonify(list(posts.values()))

@posts_bp.route('', methods=['POST'])
@jwt_required()
def create_post():
    current_user = get_jwt_identity()
    data = request.get_json()
    post_id = str(len(posts) + 1)
    posts[post_id] = {'id': post_id, 'title': data['title'], 'content': data['content'], 'author': current_user}
    return jsonify(posts[post_id]), 201