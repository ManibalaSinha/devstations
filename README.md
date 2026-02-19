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
### **Proof Project / MVP Highlights

Why DevStations is production-ready and a solid reference project:

End-to-end functionality: Fully working React frontend connected to Flask backend with REST APIs.

Cloud deployment: Backend hosted on GCP Cloud Run and frontend on GitHub Pages and GCP, showing multi-environment support.

Authentication-ready: Designed to easily integrate user authentication modules.

CRUD Operations: Demonstrates complete create, read, update, delete flows for posts.

Extensible Architecture: Modular structure for both frontend and backend for future feature expansion.

CI/CD Friendly: Can be deployed on other cloud platforms with minimal setup.

Learning & Proof: Perfect showcase for recruiters to see a developer’s full-stack skills, cloud deployment, and clean architecture in action.

This MVP proves DevStations is a realistic, deployable full stack application.

### **Step A: Basic Badges**

At the top of your README, under the title:

```markdown
![License](https://img.shields.io/badge/License-MIT-green)
![Issues](https://img.shields.io/github/issues/ManibalaSinha/devstations)
![Good First Issues](https://img.shields.io/github/issues/ManibalaSinha/devstations/good%20first%20issue)
![Forks](https://img.shields.io/github/forks/ManibalaSinha/devstations?style=social)
![Stars](https://img.shields.io/github/stars/ManibalaSinha/devstations?style=social)
```
---

## **2️⃣ Issues & Pull Requests Guidance**

You can create a new section in your **CONTRIBUTING.md** called:

### **Pull Requests & Issues Guidelines**

```markdown
## 🔄 Issues & Pull Requests

To make contributions smooth:

1. **Link PRs to issues**  
   - If you are fixing a bug or adding a feature, link your PR to the relevant issue using:  
     `Closes #issue-number`  
     This will automatically close the issue when the PR is merged.

2. **Clear commit messages**  
   - Use descriptive commit messages like:  
     `Add API endpoint for posts`  
     `Fix frontend bug in navbar`

3. **Describe your changes in PR**  
   - Include what you changed, why, and any steps to test it.

4. **Review & testing**  
   - Ensure your code runs locally.
   - Check that new features don’t break existing functionality.
```

---

## **3️⃣ Optional: Issue Templates**

GitHub lets you **standardize bug reports or feature requests**.

### **Step A: Create template folder**

* In your repo, create:

```
.github/ISSUE_TEMPLATE/
```

### **Step B: Example templates**

**bug_report.md**

```markdown
---
name: Bug Report
about: Report a problem with DevStations
title: "[BUG] "
labels: bug
assignees: ''

---

**Describe the bug**
A clear description of the problem.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click '...'
3. See error

**Expected behavior**
A clear description of what you expected.

**Screenshots**
If applicable, add screenshots to help explain.

**Additional context**
Add any other context about the problem here.
```

**feature_request.md**

```markdown
---
name: Feature Request
about: Suggest a new feature or improvement
title: "[FEATURE] "
labels: enhancement
assignees: ''
---

**Describe the feature**
A clear and concise description of the feature.

**Why is this needed?**
Explain why this feature is useful.

**Additional context**
Add any other context or screenshots about the feature request.
```

After this, when someone clicks **“New Issue”**, GitHub will show these templates. It’s **super helpful for volunteers**.

---

✅ **Summary:**

* **Badges:** Add at top of README for license, issues, stars, live deployments.
* **PR & Issues guidance:** Add section in CONTRIBUTING.md.
* **Issue templates:** Add `.github/ISSUE_TEMPLATE/` folder with `bug_report.md` and `feature_request.md`.

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
## 📬 Get Involved

Want to contribute or have questions? You can **email me directly** at:

**smanibala.it@gmail.com**  

Feel free to reach out — I’m happy to guide you and help you get started right away!  

You can also start immediately by checking out the **good first issues** in this repository and submitting a pull request.

##  Author

**Manibala Sinha**
Senior Full Stack Engineer (React · Python · Cloud)

*  Blog: [https://devstations.blogspot.com](https://devstations.blogspot.com)
*  GitHub: [https://github.com/ManibalaSinha](https://github.com/ManibalaSinha)
*  YouTube: Python & React Concepts:  https://youtube.com/live/nH6ib6JBxvo?feature=share

---


##  License

This project is licensed under the **MIT License**.

