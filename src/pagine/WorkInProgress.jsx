import React from 'react';
import { Link } from 'react-router-dom';
import { FaHammer, FaArrowLeft } from 'react-icons/fa';

const WorkInProgress = ({ pagina }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white relative overflow-hidden p-5">
      <div className="text-center z-20 max-w-xl">
        <div className="text-6xl text-street-orange mb-5 animate-hammer-swing flex justify-center">
          <FaHammer />
        </div>
        <h1 className="text-4xl font-900 text-gray-900 mb-4 uppercase">Lavori in Corso</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Stiamo preparando qualcosa di speciale per la sezione 
          <strong> {pagina || "richiesta"}</strong>. 
          Torna a trovarci presto!
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-bold transition-all duration-300 hover:bg-street-orange hover:-translate-x-1">
          <FaArrowLeft /> Torna alla Home
        </Link>
      </div>
      
      {/* Elementi decorativi di sfondo */}
      <div className="absolute w-96 h-96 bg-gradient-to-br from-street-orange/10 to-transparent z-1 rounded-full"></div>
    </div>
  );
};

export default WorkInProgress;