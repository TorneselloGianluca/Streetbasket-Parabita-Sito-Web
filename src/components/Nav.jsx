import { Link, useLocation } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import logoStreet from '../assets/logoTorneo.png'; 

function Nav() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full px-[5%] py-3 flex justify-between items-center bg-black bg-opacity-85 backdrop-blur-glass border-b border-white border-opacity-5 transition-all duration-300">
      <div>
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src={logoStreet} alt="Logo Streetbasket" className="h-11 w-auto drop-shadow-lg" />
          <span className="font-black text-white uppercase text-lg tracking-widest">
            STREETBASKET <span className="text-street-orange">PARABITA</span>
          </span>
        </Link>
      </div>
      
      <ul className="flex list-none items-center gap-6 m-0 p-0">
        <li>
          <Link 
            to="/" 
            className={`relative no-underline font-bold text-sm uppercase tracking-widest transition-colors duration-300 pb-1.25 ${
              location.pathname === '/' 
                ? 'text-street-orange' 
                : 'text-white text-opacity-70 hover:text-white'
            }`}
            style={{
              background: location.pathname === '/' 
                ? `linear-gradient(to right, #eb6505, #eb6505) bottom left no-repeat`
                : 'none',
              backgroundSize: location.pathname === '/' ? '100% 2px' : '0 2px',
              backgroundOrigin: 'border-box',
              transition: 'background-size 0.3s ease'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/Edizione2026" 
            className={`relative no-underline font-bold text-sm uppercase tracking-widest transition-colors duration-300 pb-1.25 ${
              location.pathname === '/Edizione2026' 
                ? 'text-street-orange' 
                : 'text-white text-opacity-70 hover:text-white'
            }`}
            style={{
              background: location.pathname === '/Edizione2026' 
                ? `linear-gradient(to right, #eb6505, #eb6505) bottom left no-repeat`
                : 'none',
              backgroundSize: location.pathname === '/Edizione2026' ? '100% 2px' : '0 2px',
              backgroundOrigin: 'border-box',
              transition: 'background-size 0.3s ease'
            }}
          >
            Edizione 2026
          </Link>
        </li>
        <li>
          <Link 
            to="/sponsor" 
            className={`relative no-underline font-bold text-sm uppercase tracking-widest transition-colors duration-300 pb-1.25 ${
              location.pathname === '/sponsor' 
                ? 'text-street-orange' 
                : 'text-white text-opacity-70 hover:text-white'
            }`}
            style={{
              background: location.pathname === '/sponsor' 
                ? `linear-gradient(to right, #eb6505, #eb6505) bottom left no-repeat`
                : 'none',
              backgroundSize: location.pathname === '/sponsor' ? '100% 2px' : '0 2px',
              backgroundOrigin: 'border-box',
              transition: 'background-size 0.3s ease'
            }}
          >
            Sponsor
          </Link>
        </li>
        <li>
          <Link 
            to="/gallery" 
            className={`relative no-underline font-bold text-sm uppercase tracking-widest transition-colors duration-300 pb-1.25 ${
              location.pathname === '/workInProgress' 
                ? 'text-street-orange' 
                : 'text-white text-opacity-70 hover:text-white'
            }`}
            style={{
              background: location.pathname === '/workInProgress' 
                ? `linear-gradient(to right, #eb6505, #eb6505) bottom left no-repeat`
                : 'none',
              backgroundSize: location.pathname === '/workInProgress' ? '100% 2px' : '0 2px',
              backgroundOrigin: 'border-box',
              transition: 'background-size 0.3s ease'
            }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link 
            to="/lavoraConNoi" 
            className={`relative no-underline font-bold text-sm uppercase tracking-widest transition-colors duration-300 pb-1.25 ${
              location.pathname === '/lavoraConNoi' 
                ? 'text-street-orange' 
                : 'text-white text-opacity-70 hover:text-white'
            }`}
            style={{
              background: location.pathname === '/lavoraConNoi' 
                ? `linear-gradient(to right, #eb6505, #eb6505) bottom left no-repeat`
                : 'none',
              backgroundSize: location.pathname === '/lavoraConNoi' ? '100% 2px' : '0 2px',
              backgroundOrigin: 'border-box',
              transition: 'background-size 0.3s ease'
            }}
          >
            Staff
          </Link>
        </li>
        <li>
          <Link 
            to="/admin" 
            className="text-white text-opacity-70 hover:text-street-orange flex items-center text-lg transition-all duration-300 hover:rotate-90"
            title="Admin Panel"
          >
            <FaCog />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
