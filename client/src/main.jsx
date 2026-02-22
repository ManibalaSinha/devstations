// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import './index.css';    // Optional global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
