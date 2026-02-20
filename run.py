from server import create_app

app = create_app()

@app.route('/')
def home():
    return '✅ Devstations Flask API is running'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)