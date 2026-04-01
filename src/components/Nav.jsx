import { Link, useLocation } from 'react-router-dom';
import '../components_css/Nav.css';
import { FaCog } from 'react-icons/fa';
import logoStreet from '../assets/logoTorneo.png'; 

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-container">
          <img src={logoStreet} alt="Logo Streetbasket" className="nav-logo-img" />
          <span className="logo-text">STREETBASKET <span className="highlight">PARABITA</span></span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><Link to="/Edizione2026" className={`nav-item ${location.pathname === '/Edizione2026' ? 'active' : ''}`}>Edizione 2026</Link></li>
        <li><Link to="/sponsor" className={`nav-item ${location.pathname === '/sponsor' ? 'active' : ''}`}>Sponsor</Link></li>
        <li><Link to="/gallery" className={`nav-item ${location.pathname === '/workInProgress' ? 'active' : ''}`}>Gallery</Link></li>
        <li><Link to="/lavoraConNoi" className={`nav-item ${location.pathname === '/lavoraConNoi' ? 'active' : ''}`}>Staff</Link></li>
        <li>
          <Link to="/admin" className="nav-item settings-icon" title="Admin Panel">
            <FaCog />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;