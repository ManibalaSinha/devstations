import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Python Quiz</Link></li>
        <li><Link to="/">Javascript Quiz</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
