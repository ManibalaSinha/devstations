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

