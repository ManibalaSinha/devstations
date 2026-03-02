import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/courses" className="navbar-link">Courses</Link>
      <Link to="/quiz" className="navbar-link">Quiz</Link>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
