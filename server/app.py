from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
CORS(app)
app.config['JWT_SECRET_KEY'] = 'devstations-secret'  # Change for production
jwt = JWTManager(app)

# In-memory user and post storage
users = {}
posts = {}

@app.route('/')
def home():
    return '✅ Devstations Flask API is running'

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.get_jscd on()
    username = data['username']
    password = data['password']
    if username in users:
        return jsonify({'message': 'User already exists'}), 400
    users[username] = password
    return jsonify({'message': 'User registered successfully'})

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if users.get(username) != password:
        return jsonify({'message': 'Invalid credentials'}), 401
    access_token = create_access_token(identity=username)
    return jsonify({'access_token': access_token})

# Get all posts (public)
@app.route('/api/posts', methods=['GET'])
def get_posts():
    return jsonify(list(posts.values()))

# Add a post (protected)
@app.route('/api/posts', methods=['POST'])
@jwt_required()
def create_post():
    current_user = get_jwt_identity()
    data = request.get_json()
    post_id = str(len(posts) + 1)
    post = {
        'id': post_id,
        'title': data['title'],
        'content': data['content'],
        'author': current_user
    }
    posts[post_id] = post
    return jsonify(post), 201

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
