import React from 'react';
import { Link } from 'react-router-dom';
import { FaHammer, FaArrowLeft } from 'react-icons/fa';
import '../pagine_css/WorkInProgress.css';

const WorkInProgress = ({ pagina }) => {
  return (
    <div className="wip-container">
      <div className="wip-content">
        <div className="wip-icon-wrapper">
          <FaHammer className="wip-icon" />
        </div>
        <h1 className="wip-title">Lavori in Corso</h1>
        <p className="wip-text">
          Stiamo preparando qualcosa di speciale per la sezione 
          <strong> {pagina || "richiesta"}</strong>. 
          Torna a trovarci presto!
        </p>
        <Link to="/" className="wip-back-btn">
          <FaArrowLeft /> Torna alla Home
        </Link>
      </div>
      
      {/* Elementi decorativi di sfondo */}
      <div className="wip-bg-blob"></div>
    </div>
  );
};

export default WorkInProgress;