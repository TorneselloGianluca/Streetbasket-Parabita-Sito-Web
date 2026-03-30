import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Usiamo react-icons per loghi vettoriali perfetti
import '../components_css/SocialPreviews.css';


import previewInsta from '../assets/foto_torneo/foto1.jpg';
import previewFb from '../assets/foto_torneo/foto2.jpg';
import previewTiktok from '../assets/foto_torneo/foto3.jpg';

const SocialPreviews = () => {
  const socialPanels = [
    {
      id: 1,
      name: 'Instagram',
      handle: '@streetbasket_parabita',
      icon: <FaInstagram />,
      backgroundImage: previewInsta,
      link: 'https://www.instagram.com/streetbasket_parabita/',
      color: '#E1306C' // Colore brand per l'hover
    },
    {
      id: 2,
      name: 'Facebook',
      handle: 'Streetbasket Parabita',
      icon: <FaFacebookF />,
      backgroundImage: previewFb,
      link: 'https://www.facebook.com/profile.php?id=100070723039265', // Metti il link reale
      color: '#1877F2'
    },
    {
      id: 3,
      name: 'TikTok',
      handle: '@streetbasketparabita',
      icon: <FaTiktok />,
      backgroundImage: previewTiktok,
      link: 'https://www.tiktok.com/@tuoprofilo', // Metti il link reale
      color: '#000000'
    }
  ];

 return (
    <section className="social-previews-section">
      {/* --- AGGIUNTO: TITOLO SEZIONE --- */}
      <div className="social-header">
        <h2 className="social-main-title">Seguici sui <span className="highlight">Social</span></h2>
        <p className="social-sub-title">Entra nel cuore dello Streetbasket Parabita</p>
      </div>

      <div className="social-container-full">
        {socialPanels.map((panel) => (
          <a 
            href={panel.link} 
            key={panel.id} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-panel"
            style={{ '--hover-color': panel.color }}
          >
            <div className="panel-bg" style={{ backgroundImage: `url(${panel.backgroundImage})` }}></div>
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <div className="social-icon-wrapper">{panel.icon}</div>
              <div className="social-text">
                <h3>{panel.name}</h3>
                <p>{panel.handle}</p>
              </div>
              <span className="follow-btn">Seguici →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialPreviews;