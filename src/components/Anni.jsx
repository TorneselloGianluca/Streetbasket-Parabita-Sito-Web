import React from 'react';
import '../components_css/Anni.css';
import { Link } from 'react-router-dom';


const Anni = () => {
  const edizioniData = [
    { anno: '2021', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2021' },
    { anno: '2022', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2022' },
    { anno: '2023', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2023' },
    { anno: '2024', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2024' },
    { anno: '2025', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2025' },
    { anno: '2026', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2026' },
  ];

  // Duplichiamo l'array per l'effetto loop infinito nel CSS
  const loopData = [...edizioniData, ...edizioniData];

  return (
    <section className="edizioni-section">
      <div className="edizioni-slider">
        <div className="edizioni-track">
          {loopData.map((ed, index) => (
            <Link to={`/edizione/${ed.anno}`} key={index} className="edizione-card">
              <div 
                className="edizione-bg" 
                style={{ backgroundImage: `url(${ed.img})` }}
              ></div>
              <div className="edizione-content">
                <span className="anno-text">{ed.anno}</span>
                <span className="edizione-label">Edizione</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anni;