// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Main App component
import { HashRouter } from 'react-router-dom';
import './index.css';    // Optional global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter> {/* or HashRouter if deploying to GitHub Pages */}
    <App />
    </HashRouter>
  </React.StrictMode>
);
