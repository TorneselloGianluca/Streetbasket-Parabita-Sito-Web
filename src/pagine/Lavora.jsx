import React, { useState } from 'react';
import { FaPaperPlane, FaUserTie, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import '../pagine_css/Lavora.css';

const Lavora = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    ruolo: 'Staff Generale',
    messaggio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Costruiamo il link mailto con i dati del form
    const subject = encodeURIComponent(`Candidatura ${formData.ruolo} - ${formData.nome}`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`);
    
    window.location.href = `mailto:tua-email@esempio.it?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="work-page-container">
      <div className="work-hero">
        <h1>Entra nello <span className="highlight">Staff</span></h1>
        <p>Vuoi aiutarci a rendere lo Streetbasket Parabita indimenticabile? Candidati ora!</p>
      </div>

      <div className="work-grid">
        {/* INFO CARD */}
        <div className="work-info">
          <h3>Perché aiutarci?</h3>
          <ul className="benefits-list">
            <li>✨ Esperienza nel cuore dell'organizzazione eventi</li>
            <li>👕 Kit Staff esclusivo (Maglia ufficiale 2026)</li>
            <li>🍕 Food & Drink inclusi durante i giorni del torneo</li>
            <li>🏀 Passione per il basket e divertimento assicurato</li>
          </ul>
        </div>

        {/* FORM DI CANDIDATURA */}
        <form className="work-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUserTie className="input-icon" />
            <input 
              type="text" 
              name="nome" 
              placeholder="Nome e Cognome" 
              required 
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              name="email" 
              placeholder="La tua Email" 
              required 
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaFileAlt className="input-icon" />
            <select name="ruolo" onChange={handleChange}>
              <option value="Staff Generale">Staff Generale</option>
              <option value="Arbitro / Tavolo">Arbitro / Tavolo</option>
              <option value="Social Media Help">Social Media Help</option>
              <option value="Logistica & Allestimento">Logistica & Allestimento</option>
            </select>
          </div>

          <textarea 
            name="messaggio" 
            placeholder="Parlaci di te o delle tue esperienze passate..." 
            rows="5"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-work-btn">
            Invia Candidatura <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lavora;