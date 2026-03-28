import React from 'react';
import '../pagine_css/Sponsor.css';

import sponsor1 from "../assets/sponsor1.jpg";
import sponsor5 from "../assets/sponsor5.png";
import toma from "../assets/toma.png";
import sfondo from "../assets/sfondo.png";

const Sponsor = () => {
  const sponsorList = [
    { id: 1, nome: 'Toma Forniture Industriali', logo: toma, sito: 'https://www.torneriatoma.com/' },
    { id: 2, nome: 'Sponsor Gold 2', logo: sponsor1, sito: 'https://www.facebook.com' },
    { id: 3, nome: 'Partner Tecnico 3', logo: sponsor5, sito: 'https://www.instagram.com' },
    { id: 4, nome: 'Sponsor Locale 4', logo: sponsor5, sito: 'https://www.twitter.com' },
    { id: 5, nome: 'Sponsor Premium 1', logo: sponsor1, sito: 'https://www.google.com' },
    { id: 6, nome: 'Sponsor Gold 2', logo: sponsor1, sito: 'https://www.facebook.com' },
    { id: 7, nome: 'Partner Tecnico 3', logo: sponsor5, sito: 'https://www.instagram.com' },
    { id: 8, nome: 'Sponsor Locale 4', logo: sponsor5, sito: 'https://www.twitter.com' }
  ];

  const [mainSponsor, ...otherSponsors] = sponsorList;

  return (
    <div 
      className="sponsor-page-wrapper" 
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      <div className="sponsor-content-container">
        <div className="sponsor-header">
          <h1 className="sponsor-title">I Nostri PARTNER & SPONSOR</h1>
          <p className="sponsor-subtitle">Ringraziamo chi sostiene lo sport e la nostra comunità.</p>
        </div>

        <div className="featured-sponsor-section">
          <p className="featured-sponsor-label">Main Sponsor</p>
          <div className="sponsor-card sponsor-card-featured">
            <div className="sponsor-logo-wrapper">
              <img src={mainSponsor.logo} alt={`Logo ${mainSponsor.nome}`} className="sponsor-logo" />
            </div>
            <div className="sponsor-card-overlay sponsor-card-overlay-featured">
              <h3 className="sponsor-name">{mainSponsor.nome}</h3>
              <a href={mainSponsor.sito} target="_blank" rel="noopener noreferrer" className="visit-site-btn visit-site-btn-featured">
                Visita Sito
              </a>
            </div>
          </div>
        </div>

        <div className="sponsor-grid">
          {otherSponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <div className="sponsor-logo-wrapper">
                <img src={sponsor.logo} alt={`Logo ${sponsor.nome}`} className="sponsor-logo" />
              </div>
              <div className="sponsor-card-overlay">
                <h3 className="sponsor-name">{sponsor.nome}</h3>
                <a href={sponsor.sito} target="_blank" rel="noopener noreferrer" className="visit-site-btn">
                  Visita Sito
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;