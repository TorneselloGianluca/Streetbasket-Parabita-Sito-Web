import React, { useState } from 'react';
import { FaPaperPlane, FaUserTie, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
    <div className="relative min-h-screen w-full pt-24 pb-20 px-5 flex flex-col items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/staff.png)' }}>
      
      <div className="text-center mb-12 text-white z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase -tracking-0.5 leading-tight mb-4">
          Entra nello <span className="text-street-brand-blue">Staff</span>
        </h1>
        <p className="text-lg">Vuoi aiutarci a rendere lo Streetbasket Parabita indimenticabile? Candidati ora!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full bg-white bg-opacity-90 backdrop-blur-glass p-12 md:p-12 rounded-3xl shadow-2xl z-20">
        {/* INFO CARD */}
        <div className="bg-street-brand-blue bg-opacity-5 p-8 rounded-2xl border-l-6 border-street-brand-blue md:col-span-1">
          <h3 className="text-2xl font-black text-gray-900 mb-5">Perché aiutarci?</h3>
          <ul className="space-y-4 list-none p-0">
            <li className="text-base text-gray-700 font-medium">✨ Esperienza nel cuore dell'organizzazione eventi</li>
            <li className="text-base text-gray-700 font-medium">👕 Kit Staff esclusivo (Maglia ufficiale 2026)</li>
            <li className="text-base text-gray-700 font-medium">🍕 Food & Drink inclusi durante i giorni del torneo</li>
            <li className="text-base text-gray-700 font-medium">🏀 Passione per il basket e divertimento assicurato</li>
          </ul>
        </div>

        {/* FORM DI CANDIDATURA */}
        <form className="flex flex-col gap-4 md:col-span-2" onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <FaUserTie className="absolute left-4 text-street-brand-blue" />
            <input 
              type="text" 
              name="nome" 
              placeholder="Nome e Cognome" 
              required 
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base bg-white transition-all duration-300 focus:border-street-brand-blue focus:shadow-lg focus:shadow-blue-100"
            />
          </div>

          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-4 text-street-brand-blue" />
            <input 
              type="email" 
              name="email" 
              placeholder="La tua Email" 
              required 
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base bg-white transition-all duration-300 focus:border-street-brand-blue focus:shadow-lg focus:shadow-blue-100"
            />
          </div>

          <div className="relative flex items-center">
            <FaFileAlt className="absolute left-4 text-street-brand-blue" />
            <select name="ruolo" onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base bg-white transition-all duration-300 focus:border-street-brand-blue focus:shadow-lg focus:shadow-blue-100">
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
            className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl text-base bg-white transition-all duration-300 focus:border-street-brand-blue focus:shadow-lg focus:shadow-blue-100 resize-none"
          ></textarea>

          <button type="submit" className="bg-street-brand-blue text-white py-4 border-none rounded-xl text-lg font-black cursor-pointer flex justify-center items-center gap-4 transition-all duration-300 mt-2.5 hover:bg-blue-600 hover:-translate-y-0.75 hover:shadow-2x">
            Invia Candidatura <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lavora;