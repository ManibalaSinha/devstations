import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Python</Link></li>
        <li><Link to="/courses">Javascript</Link></li>
        <li><Link to="/quiz">HTML/CSS</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
