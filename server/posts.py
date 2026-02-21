from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

posts_bp = Blueprint('posts', __name__)
posts = {
    "1": {
        "id": "1",
        "title": "Getting Started with Python: A Beginner's Guide",
        "content": "Python is one of the most beginner-friendly programming languages out there. In this post, we cover how to install Python, set up your first virtual environment, and write your very first script. By the end, you'll understand variables, loops, and functions — the building blocks of every Python program.",
        "author": "admin"
    },
    "2": {
        "id": "2",
        "title": "Understanding REST APIs: What They Are and How to Use Them",
        "content": "REST (Representational State Transfer) is the architectural style that powers the modern web. This post walks you through HTTP methods (GET, POST, PUT, DELETE), status codes, and how to consume a public API using Python's requests library with practical examples you can run immediately.",
        "author": "admin"
    },
    "3": {
        "id": "3",
        "title": "JavaScript ES6+ Features Every Developer Should Know",
        "content": "ECMAScript 2015 and beyond introduced game-changing syntax to JavaScript. We deep-dive into arrow functions, destructuring, spread/rest operators, template literals, async/await, and optional chaining — all with side-by-side comparisons of the old way vs the new way so the benefits are crystal clear.",
        "author": "admin"
    },
    "4": {
        "id": "4",
        "title": "How Git Works Under the Hood",
        "content": "Most developers use Git every day but few understand what actually happens when you run git commit or git merge. This post opens the .git folder and explains objects, refs, the index, and how branches are just lightweight pointers — giving you the mental model to debug any Git situation confidently.",
        "author": "admin"
    },
    "5": {
        "id": "5",
        "title": "Building Your First React App from Scratch",
        "content": "Forget Create React App — let's scaffold a React project with Vite, understand JSX, manage component state with useState, fetch data with useEffect, and wire up client-side routing with React Router. This hands-on tutorial ends with a fully functional to-do list you built yourself.",
        "author": "admin"
    },
    "6": {
        "id": "6",
        "title": "SQL Fundamentals: Queries Every Developer Must Master",
        "content": "Databases are at the heart of nearly every application. This post covers SELECT, WHERE, JOIN (INNER, LEFT, RIGHT), GROUP BY, and subqueries using a real-world e-commerce schema. You'll also learn how indexes work and why a missing index can slow a query from milliseconds to minutes.",
        "author": "admin"
    },
    "7": {
        "id": "7",
        "title": "Docker for Developers: Containers Explained Simply",
        "content": "Docker lets you ship your app along with everything it needs to run. We walk through writing a Dockerfile, building an image, running a container, and composing multi-service stacks with docker-compose — using this very project (a Flask + React app) as the live example throughout.",
        "author": "admin"
    },
    "8": {
        "id": "8",
        "title": "Introduction to Algorithms: Big-O Notation Made Easy",
        "content": "Big-O notation answers the question 'how does my code scale?'. This post demystifies O(1), O(n), O(log n), O(n²) and beyond with visual charts and concrete code examples in Python. By the end, you'll be able to look at a loop and immediately reason about its time complexity.",
        "author": "admin"
    },
    "9": {
        "id": "9",
        "title": "Securing Your Flask API: Authentication and Authorization",
        "content": "A public API without security is an open door. This post shows how to add JWT-based authentication with Flask-JWT-Extended, hash passwords with bcrypt, protect routes with decorators, and validate incoming data — turning a vulnerable prototype into a production-ready service.",
        "author": "admin"
    },
    "10": {
        "id": "10",
        "title": "CSS Grid vs Flexbox: When to Use Which",
        "content": "Flexbox and Grid are both powerful layout tools but they shine in different scenarios. This post breaks down the key differences with interactive diagrams, explains one-dimensional vs two-dimensional layouts, and provides a decision checklist so you'll always reach for the right tool on your next project.",
        "author": "admin"
    },
    "11": {
        "id": "11",
        "title": "Test-Driven Development: Write Tests First, Code Second",
        "content": "TDD flips the normal workflow: you write a failing test before writing any production code. This post introduces the Red-Green-Refactor cycle, demonstrates it in Python with pytest, and shows how TDD leads to cleaner interfaces, fewer bugs, and code that's genuinely easy to change months later.",
        "author": "admin"
    },
    "12": {
        "id": "12",
        "title": "How the Web Works: DNS, HTTP, and the Request-Response Cycle",
        "content": "What actually happens when you type a URL and press Enter? This post traces a request from your browser through DNS resolution, TCP handshake, HTTP negotiation, server processing, and back — with diagrams at every step. Understanding this cycle makes you a better debugger and a better architect.",
        "author": "admin"
    },
    "13": {
        "id": "13",
        "title": "Python Virtual Environments and Package Management",
        "content": "Dependency conflicts are a rite of passage for every Python developer. This post explains why virtual environments exist, how venv and pip work together, what requirements.txt is really doing, and introduces modern tooling like pipenv and uv that make dependency management far less painful.",
        "author": "admin"
    },
    "14": {
        "id": "14",
        "title": "Deploying a Full-Stack App to the Cloud: GCP Cloud Run Guide",
        "content": "Cloud Run lets you deploy containerised apps without managing servers. We walk through containerising the DevStations Flask backend with Docker, pushing the image to Google Artifact Registry, and deploying it to Cloud Run with environment variables and HTTPS — all from the command line.",
        "author": "admin"
    },
    "15": {
        "id": "15",
        "title": "Open Source Contribution: How to Make Your First Pull Request",
        "content": "Contributing to open source is one of the fastest ways to grow as a developer. This post covers finding a good first issue, forking and cloning a repository, making a focused change on a feature branch, writing a clear PR description, and handling review feedback — using DevStations itself as the example project.",
        "author": "admin"
    },
}

@posts_bp.route('', methods=['GET'])
def get_posts():
    page = request.args.get('page', 1, type=int)
    per_page = 10

    all_posts = list(posts.values())
    total = len(all_posts)
    total_pages = max(1, -(-total // per_page))  # ceiling division
    page = max(1, min(page, total_pages))

    start = (page - 1) * per_page
    paginated = all_posts[start:start + per_page]

    return jsonify({
        'posts': paginated,
        'page': page,
        'per_page': per_page,
        'total': total,
        'total_pages': total_pages,
    })

@posts_bp.route('', methods=['POST'])
@jwt_required()
def create_post():
    current_user = get_jwt_identity()
    data = request.get_json()
    post_id = str(len(posts) + 1)
    posts[post_id] = {'id': post_id, 'title': data['title'], 'content': data['content'], 'author': current_user}
    return jsonify(posts[post_id]), 201