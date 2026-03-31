import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBell } from 'react-icons/fa';
import '../components_css/NewEdition.css';
import videoNew from '../assets/foto_streetbasketParabita/download.mp4'; 

const NewEdition = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    {
      id: 1,
      titolo: "Apertura Iscrizioni 2026",
      dettagli: "Le iscrizioni apriranno ufficialmente il 1° Giugno. Preparate la vostra squadra, i posti sono limitati per ogni categoria!"
    },
    {
      id: 2,
      titolo: "After Party Confermato: DJ Set e Street Food",
      dettagli: "Quest'anno è previsto un after party dopo le finals del 26 luglio"
    },

  ];

  return (
    <section className="new-edition-section">
      <div className="new-edition-grid">
        
        {/* SINISTRA: VIDEO */}
        <div className="edition-video-container">
          <video src={videoNew} autoPlay loop muted playsInline />
          <div className="video-label">Nuovo video fuori ORA</div>
        </div>

        {/* CENTRO: SEZIONE NEWS */}
        <div className="edition-news-container">
          <div className="news-header">
            <FaBell className="bell-icon" />
            <h2>Latest News</h2>
          </div>
          <div className="news-list">
            {newsList.map((news) => (
              <div 
                key={news.id} 
                className="news-item" 
                onClick={() => setSelectedNews(news)}
              >
                <span className="news-dot"></span>
                <h3>{news.titolo}</h3>
                <span className="news-arrow">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* DESTRA: INFORMAZIONI */}
        <div className="edition-info-container">
          <div className="info-box">
            <div className="info-item">
              <FaCalendarAlt className="info-icon" />
              <div>
                <h3>DATE</h3>
                <p>24-25-26 LUGLIO 2026</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>LOCATION</h3>
                <p>Campetto Scuola Media G. Dimo</p>
              </div>
            </div>
            <button className="btn-iscrizione-news">Iscriviti Ora</button>
          </div>
        </div>
      </div>

      {/* MODAL PER NOTIFICHE */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="news-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedNews(null)}>
              <FaTimes />
            </button>
            <span className="modal-tag">NOTIFICA</span>
            <h2>{selectedNews.titolo}</h2>
            <div className="modal-divider"></div>
            <p>{selectedNews.dettagli}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewEdition;