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
    const subject = encodeURIComponent(`Candidatura ${formData.ruolo} - ${formData.nome}`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`);
    window.location.href = `mailto:tua-email@esempio.it?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen w-full pt-24 pb-20 px-5 flex flex-col items-center bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-street-orange rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase -tracking-0.5 leading-tight mb-6 bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">
            Entra nello <span className="text-white">Staff</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Vuoi aiutarci a rendere lo Streetbasket Parabita indimenticabile? Candidati ora!</p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '50ms' }}>
          {/* INFO CARD */}
          <div className="group relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-500/30 hover:border-yellow-500/60 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/20 md:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-yellow-400 mb-6">Perché aiutarci?</h3>
              <ul className="space-y-4 list-none p-0">
                <li className="text-base text-gray-300 font-medium flex items-start gap-3">
                  <span className="text-xl mt-0.5">✨</span>
                  <span>Esperienza nel cuore dell'organizzazione eventi</span>
                </li>
                <li className="text-base text-gray-300 font-medium flex items-start gap-3">
                  <span className="text-xl mt-0.5">👕</span>
                  <span>Kit Staff esclusivo (Maglia ufficiale 2026)</span>
                </li>
                <li className="text-base text-gray-300 font-medium flex items-start gap-3">
                  <span className="text-xl mt-0.5">🍕</span>
                  <span>Food & Drink inclusi durante i giorni del torneo</span>
                </li>
                <li className="text-base text-gray-300 font-medium flex items-start gap-3">
                  <span className="text-xl mt-0.5">🏀</span>
                  <span>Passione per il basket e divertimento assicurato</span>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* FORM DI CANDIDATURA */}
          <form className="flex flex-col gap-4 md:col-span-2 relative group" onSubmit={handleSubmit}>
            <div className="absolute inset-0 bg-gradient-to-r from-street-orange/10 to-yellow-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <div className="relative flex items-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl overflow-hidden focus-within:border-street-orange/60 transition-all duration-300">
              <FaUserTie className="absolute left-4 text-street-orange" />
              <input 
                type="text" 
                name="nome" 
                placeholder="Nome e Cognome" 
                required 
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border-none bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
              />
            </div>

            <div className="relative flex items-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl overflow-hidden focus-within:border-street-orange/60 transition-all duration-300">
              <FaEnvelope className="absolute left-4 text-street-orange" />
              <input 
                type="email" 
                name="email" 
                placeholder="La tua Email" 
                required 
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border-none bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
              />
            </div>

            <div className="relative flex items-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl overflow-hidden focus-within:border-street-orange/60 transition-all duration-300">
              <FaFileAlt className="absolute left-4 text-street-orange" />
              <select 
                name="ruolo" 
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border-none bg-transparent text-white focus:outline-none text-base appearance-none cursor-pointer"
              >
                <option value="Staff Generale" className="bg-gray-900">Staff Generale</option>
                <option value="Arbitro / Tavolo" className="bg-gray-900">Arbitro / Tavolo</option>
                <option value="Social Media Help" className="bg-gray-900">Social Media Help</option>
                <option value="Logistica & Allestimento" className="bg-gray-900">Logistica & Allestimento</option>
              </select>
            </div>

            <textarea 
              name="messaggio" 
              placeholder="Parlaci di te o delle tue esperienze passate..." 
              rows="5"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 text-white placeholder-gray-500 focus:outline-none focus:border-street-orange/60 rounded-xl text-base resize-none transition-all duration-300 backdrop-blur-sm"
            ></textarea>

            <button 
              type="submit" 
              className="bg-gradient-to-r from-street-orange to-yellow-500 text-black py-3 px-6 border-none rounded-lg text-lg font-black cursor-pointer flex justify-center items-center gap-3 transition-all duration-300 mt-2 hover:shadow-lg hover:shadow-street-orange/50 hover:-translate-y-1 transform hover:scale-105"
            >
              Invia Candidatura <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Lavora;