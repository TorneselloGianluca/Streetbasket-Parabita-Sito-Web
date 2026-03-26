import React from 'react';
import '../pagine_css/Sponsor.css';

// Importa i loghi dei tuoi sponsor (sostituisci con i tuoi percorsi reali)
// import Logo1 from '../assets/sponsor/sponsor1.png';

import sponsor1 from "../assets/sponsor1.jpg";
import sponsor5 from "../assets/sponsor5.png";
import logo from "../assets/logoTorneo.png"; 


const Sponsor = () => {
  // Dati degli sponsor (puoi espandere questa lista quanto vuoi)
  const sponsorList = [
    { id: 1, nome: 'Sponsor Premium 1', logo: sponsor1, sito: 'https://www.google.com' },
    { id: 2, nome: 'Sponsor Gold 2', logo: sponsor1, sito: 'https://www.facebook.com' },
    { id: 3, nome: 'Partner Tecnico 3', logo: sponsor5, sito: 'https://www.instagram.com' },
    { id: 4, nome: 'Sponsor Locale 4', logo: sponsor5, sito: 'https://www.twitter.com' },
  ];

  return (
    <div className="sponsor-page-container">
      <div className="sponsor-header">
        <h1 className="sponsor-title">I Nostri Partner</h1>
        <p className="sponsor-subtitle">Ringraziamo chi sostiene lo sport e la nostra comunità.</p>
      </div>

      <div className="sponsor-grid">
        {sponsorList.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            {/* L'immagine del logo (sempre visibile) */}
            <div className="sponsor-logo-wrapper">
              <img src={sponsor.logo} alt={`Logo ${sponsor.nome}`} className="sponsor-logo" />
            </div>

            {/* L'overlay che appare al passaggio del mouse */}
            <div className="sponsor-card-overlay">
              <h3 className="sponsor-name">{sponsor.nome}</h3>
              <a 
                href={sponsor.sito} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="visit-site-btn"
              >
                Visita Sito
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;