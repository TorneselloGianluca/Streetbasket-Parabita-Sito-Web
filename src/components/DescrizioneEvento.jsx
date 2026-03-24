import React from 'react';
import '../components_css/DescrizioneEvento.css';
import logoStreet from '../assets/logoTorneo.png';
import logoParabita from '../assets/sponsor5.png';


const DescrizioneEvento = () => {
  return (
    <section className="event-description-section">
      <div className="event-container">
        
        {/* COLONNA SINISTRA: LOGO */}
        <div className="event-images-column">
          <div className="image-stack">
            <img 
              src={logoStreet} 
              alt="Logo Streetbasket" 
              className="img-top"
            />
            <img 
              src={logoParabita} 
              alt="Momento Torneo" 
              className="img-bottom"
            />
          </div>
        </div>

        {/* COLONNA DESTRA: TESTO */}
        <div className="event-text-column">
          <div className="badge">Edizione VI • 2026</div>
          <h2 className="section-title">Il Progetto</h2>
          
          <div className="description-content">
            <p>
              <strong>Streetbasket Parabita</strong> è molto più di un semplice torneo: è un evento 3vs3 
              giunto alla sua sesta edizione che trasforma l'estate salentina in una celebrazione dello sport 
              e dell'inclusione sociale.
            </p>
            <p>
              In un'atmosfera festosa tra musica, street food e competizione agonistica, il torneo coinvolge 
              atleti e appassionati da tutta la regione, creando un'esperienza unica nel cuore di Parabita.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Location</span>
              <span className="spec-value">Parabita (LE), Italia</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Il mio Ruolo</span>
              <span className="spec-value">Creatore, Organizzatore, Creatore contenuti social</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DescrizioneEvento;