import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Software </Link></li>
        <li><Link to="/">APP</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
