import React, { useState } from 'react';
import '../components_css/FormIscrizione.css';

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
    <form className="iscrizione-form-compact" onSubmit={handleSubmit}>
      <div className="form-row">
        <input 
          type="text" 
          placeholder="Nome Squadra" 
          required 
          onChange={(e) => setFormData({...formData, nomeSquadra: e.target.value})}
        />
        <select 
          className="category-select"
          onChange={(e) => setFormData({...formData, categoria: e.target.value})}
        >
          <option value="Senior">Senior</option>
          <option value="Under 19">Under 19</option>
        </select>
      </div>

      <div className="giocatori-grid">
        {formData.giocatori.map((g, i) => (
          <div key={i} className="giocatore-row">
            <span>#{i + 1}</span>
            <input type="text" placeholder="Nome" required onChange={(e) => handleGiocatoreChange(i, 'nome', e.target.value)} />
            <input type="text" placeholder="Cognome" required onChange={(e) => handleGiocatoreChange(i, 'cognome', e.target.value)} />
          </div>
        ))}
      </div>

      <div className="privacy-mini">
        <input type="checkbox" id="privacy" required onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})} />
        <label htmlFor="privacy">Accetto la Privacy Policy</label>
      </div>

      <button type="submit" className="submit-btn-premium">Invia Iscrizione</button>
    </form>
  );
};

export default FormIscrizione;