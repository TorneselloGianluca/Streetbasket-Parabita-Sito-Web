import React from 'react';
import '../components_css/StreetbasketNav.css';

const StreetbasketNav = () => {
  const menuItems = [
    { label: 'Il Progetto', target: '#descrizione' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Shop', target: '#shop' },
    { label: 'Iscrizioni', target: '#iscrizione' },
    { label: 'Contatti', target: '#contatti' },
  ];

  return (
    <nav className="sb-secondary-nav">
      <ul className="sb-nav-list">
        {menuItems.map((item, index) => (
          <li key={index} className="sb-nav-item">
            <a href={item.target} className="sb-nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StreetbasketNav;