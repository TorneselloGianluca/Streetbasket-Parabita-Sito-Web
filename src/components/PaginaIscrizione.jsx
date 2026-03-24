import React from 'react';
import FormIscrizione from './FormIscrizione';
import '../components_css/PaginaIscrizione.css';

const PaginaIscrizione = () => {
  // Esempio dati squadre (da sostituire con database)
  const squadreIscritte = [
    { nome: "I Bulls di Parabita", cat: "Senior" },
    { nome: "Young Ballers", cat: "Under 19" },
    { nome: "Salento Dunkers", cat: "Senior" }
  ];

  return (
    <div className="iscrizione-page-wrapper">
      <header className="page-header">
        <h1 className="main-title">Streetbasket Parabita 2026</h1>
        <div className="title-underline"></div>
      </header>
      
      <div className="three-column-container">
        {/* COL 1: FORM */}
        <section className="column-section">
          <div className="section-header">
            <span className="step-number">01</span>
            <h3>Iscrizione Team</h3>
          </div>
          <FormIscrizione />
        </section>

        {/* COL 2: INFO */}
        <section className="column-section">
          <div className="section-header">
            <span className="step-number">02</span>
            <h3>Dettagli Evento</h3>
          </div>
          <div className="info-box-styled">
             <p><strong>📍 Location:</strong> Parabita, Via Roma</p>
             <p><strong>📅 Data:</strong> 15-18 Luglio 2026</p>
             <p><strong>🏀 Categoria:</strong> 3vs3 Open Mix</p>
             <button className="download-btn-minimal">Regolamento PDF</button>
          </div>
        </section>

        {/* COL 3: PRIVACY */}
        <section className="column-section">
          <div className="section-header">
            <span className="step-number">03</span>
            <h3>Privacy</h3>
          </div>
          <div className="privacy-text-small">
            <p>I dati sono raccolti per fini organizzativi e assicurativi (GDPR 2026).</p>
            <p>Responsabile: Comitato Streetbasket Parabita.</p>
          </div>
        </section>
      </div>


    </div>
  );
};

export default PaginaIscrizione;