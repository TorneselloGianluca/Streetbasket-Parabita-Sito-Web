import React, { useState } from 'react';

const FormIscrizione = () => {
  const [formData, setFormData] = useState({
    nomeSquadra: '',
    categoria: 'Senior', // Valore di default
    giocatori: [
      { nome: '', cognome: '' },
      { nome: '', cognome: '' },
      { nome: '', cognome: '' },
      { nome: '', cognome: '' }
    ],
    privacyAccepted: false
  });

  const handleGiocatoreChange = (index, field, value) => {
    const nuoviGiocatori = [...formData.giocatori];
    nuoviGiocatori[index][field] = value;
    setFormData({ ...formData, giocatori: nuoviGiocatori });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.privacyAccepted) return alert("Accetta la privacy.");
    console.log(formData);
  };

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2.5">
        <input 
          type="text" 
          placeholder="Nome Squadra" 
          required 
          className="flex-1 px-3.75 py-3 border-2 border-gray-200 rounded-2.5 focus:outline-none focus:border-blue-500 transition-colors"
          onChange={(e) => setFormData({...formData, nomeSquadra: e.target.value})}
        />
        <select 
          className="flex-1 px-3.75 py-3 border-2 border-gray-200 rounded-2.5 focus:outline-none focus:border-blue-500 transition-colors"
          onChange={(e) => setFormData({...formData, categoria: e.target.value})}
        >
          <option value="Senior">Senior</option>
          <option value="Under 19">Under 19</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3.75">
        {formData.giocatori.map((g, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-1.25 items-center">
            <span className="text-sm font-semibold text-gray-700">#{i + 1}</span>
            <input 
              type="text" 
              placeholder="Nome" 
              required 
              className="px-3.75 py-3 border-2 border-gray-200 rounded-2.5 focus:outline-none focus:border-blue-500 transition-colors"
              onChange={(e) => handleGiocatoreChange(i, 'nome', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Cognome" 
              required 
              className="px-3.75 py-3 border-2 border-gray-200 rounded-2.5 focus:outline-none focus:border-blue-500 transition-colors"
              onChange={(e) => handleGiocatoreChange(i, 'cognome', e.target.value)} 
            />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2.5 my-5">
        <input 
          type="checkbox" 
          id="privacy" 
          required 
          className="mt-1 cursor-pointer"
          onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})} 
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">Accetto la Privacy Policy</label>
      </div>

      <button 
        type="submit" 
        className="w-full py-3.75 bg-street-orange text-white font-bold rounded-2.5 cursor-pointer transition-transform hover:translate-y-[-2px] active:translate-y-0"
      >
        Invia Iscrizione
      </button>
    </form>
  );
};

export default FormIscrizione;