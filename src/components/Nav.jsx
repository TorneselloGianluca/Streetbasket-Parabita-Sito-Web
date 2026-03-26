import { Link } from 'react-router-dom';
import '../components_css/Nav.css';
import { FaCog } from 'react-icons/fa';
// Importa il tuo logo (assicurati che il percorso sia corretto)
import logoStreet from '../assets/logoTorneo.png'; 

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-container">
          {/* Foto del logo in piccolo */}
          <img src={logoStreet} alt="Logo Streetbasket" className="nav-logo-img" />
          {/* Scritta nera */}
          <span className="logo-text">STREETBASKET PARABITA</span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/workInProgress" className="nav-item">Fotogallery</Link></li>
        <li><Link to="/Edizione2026" className="nav-item">Edizione 2026</Link></li>
        <li><Link to="/workInProgress" className="nav-item">Lavora con noi</Link></li>
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li>
          <Link to="/workInProgress" className="nav-item settings-icon" title="Impostazioni">
            <FaCog />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;