import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/courses" className={styles.link}>
        Courses
      </Link>
      <Link to="/quiz" className={styles.link}>
        Quiz
      </Link>
    </nav>
  );
}
