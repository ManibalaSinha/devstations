import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/courses" className="navbar-link">
        Courses
      </Link>
      <Link to="/quiz" className="navbar-link">
        Quiz
      </Link>
    </nav>
  );
}
