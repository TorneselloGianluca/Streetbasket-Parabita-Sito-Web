import React from 'react';
import '../components_css/DescrizioneEvento.css';
import logoStreet from '../assets/logoTorneo.png';

const DescrizioneEvento = () => {
  return (
    <section className="event-description-section">
      <div className="event-container">
        
        {/* COLONNA SINISTRA: LOGO SINGOLO */}
        <div className="event-images-column">
          <div className="logo-wrapper">
            <img 
              src={logoStreet} 
              alt="Logo Streetbasket Parabita" 
              className="img-single-logo"
            />
          </div>
        </div>

        {/* COLONNA DESTRA: TESTO */}
        <div className="event-text-column">
          <div className="badge">Edizione VI • 2026</div>
          <h2 className="section-title">Più di un <span className="highlight">Torneo</span>, È un’<span className="highlight">Esperienza</span></h2>
          
          <div className="description-content">
            <p>
              <strong>Streetbasket Parabita</strong> giunge alla sua sesta edizione, trasformando l’estate salentina in una celebrazione pura dello sport e dell’inclusione sociale.
            </p>
            <p>
              Agonismo, musica, street food e condivisione creano un’atmosfera unica nel cuore del centro storico. Unisciti a noi per vivere l’evento che coinvolge atleti e appassionati da tutta la regione.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Location Ufficiale</span>
              <span className="spec-value">Via Roma (LE), Parabita</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Resta aggioranto su tutte le news</span>
              <span className="spec-value">Seguici su tutti i social</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DescrizioneEvento;