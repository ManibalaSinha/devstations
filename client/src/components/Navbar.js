import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',       // space between links
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        fontWeight: 'bold',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        Home
      </Link>
      <Link to="/courses" style={{ textDecoration: 'none', color: '#333' }}>
        Courses
      </Link>
      <Link to="/quiz" style={{ textDecoration: 'none', color: '#333' }}>
        Quiz
      </Link>
    </nav>
  );
}


