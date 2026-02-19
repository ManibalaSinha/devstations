##  Contributing & Volunteering

We welcome **contributors of all levels** to help improve DevStations! Whether you are a beginner learning full-stack development, or an experienced developer, your contributions are valuable.

### How to Contribute

1. **Fork the repository**
2. **Create a branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and test locally
4. **Commit your changes** with a clear message:

   ```bash
   git commit -m "Add feature X"
   ```
5. **Push your branch** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** to the main repository

> Make sure your PR is descriptive and references any related issues.

---

### Good First Issues

If you are new to the project or open-source, start with **beginner-friendly issues**:

* Improve or fix UI components
* Add a new API endpoint
* Add validation to existing endpoints
* Write or improve documentation
* Add tests for backend or frontend functionality

All beginner-friendly issues are labeled `good first issue` or `help wanted` on GitHub.

---

### Volunteer Opportunities

If you want to contribute **actively and regularly**:

* Help add new features or modules
* Improve cloud deployment and CI/CD setup
* Refactor code for performance or maintainability
* Mentor new contributors
* Help create tutorials, demos, or YouTube walkthroughs

> Volunteers will get recognition in the project, and you can list this experience on your **GitHub profile and resume** as open-source contributions.

---

### Code of Conduct

We expect all contributors to follow a **friendly, inclusive, and respectful approach** when collaborating.

* Be polite and constructive in discussions
* Respect other contributors’ time and work
* Follow GitHub workflow guidelines

# DevStations — Full Stack Web Platform (React + Python)

**DevStations** is a production-deployed full stack web application demonstrating end-to-end development using a **React frontend** and a **Python (Flask) backend**, exposed via REST APIs and deployed on modern cloud platforms including **Google Cloud Platform (GCP)**.

---

##  Live Applications

### Google Cloud (Primary Deployment)

* **Backend (GCP – Cloud Run)**
  [https://devstations-server-6351281086.us-central1.run.app](https://devstations-server-6351281086.us-central1.run.app)

* **Frontend (GCP)**
  [https://devstations-client-6351281086.us-central1.run.app](https://devstations-client-6351281086.us-central1.run.app)

### Alternative Deployments

* **Frontend (GitHub Pages)**
  [https://manibalasinha.github.io/devstations/](https://manibalasinha.github.io/devstations/)

* **Backend (Render)**
  [https://devstations-5.onrender.com/](https://devstations-5.onrender.com/)

 **Architecture & Walkthrough Video**
[https://youtube.com/live/nH6ib6JBxvo](https://youtube.com/live/nH6ib6JBxvo)

---

##  Overview

DevStations showcases how a modern **React application** communicates with a **Python backend** through clean, RESTful APIs.

The project focuses on:

* Clear frontend–backend separation
* API-driven architecture
* Cloud deployment and real-world hosting considerations

This project is suitable as a **reference full stack implementation** for small-to-medium web applications.

---

##  Tech Stack

| Layer       | Technology                |
| ----------- | ------------------------- |
| Frontend    | React, Vite               |
| Backend     | Python, Flask             |
| API         | REST (JSON)               |
| HTTP Client | Fetch API / Axios         |
| Cloud (GCP) | Cloud Run                 |
| Deployment  | GCP, GitHub Pages, Render |

---

##  Key Features

* RESTful API built with **Flask**
* React-based UI with API integration
* Cross-Origin Resource Sharing (CORS) configured
* Cloud-hosted backend with public API access
* Multiple deployment environments for comparison

---

##  Run Locally

### Backend (Flask)

```bash
cd server
pip install -r requirements.txt
python app.py
```

Backend runs on:
`http://localhost:5000`

---

### Frontend (React)

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
`http://localhost:5173`

 Ensure the backend is running before starting the frontend.

---

## 🔌 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /api/posts | Retrieve all posts |
| POST   | /api/posts | Create a new post  |

---

##  Author

**Manibala Sinha**
Senior Full Stack Engineer (React · Python · Cloud)

*  Blog: [https://devstations.blogspot.com](https://devstations.blogspot.com)
*  GitHub: [https://github.com/ManibalaSinha](https://github.com/ManibalaSinha)
*  YouTube: Python & React Concepts:  https://youtube.com/live/nH6ib6JBxvo?feature=share

---

##  License

This project is licensed under the **MIT License**.

