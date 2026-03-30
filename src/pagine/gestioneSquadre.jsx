import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../pagine_css/AdminDashboard.css';

const GestioneSquadre = () => {
  const [squadre, setSquadre] = useState([]);
  const [formData, setFormData] = useState({
    nome: '', categoria: 'Senior', partecipanti: ''
  });

  useEffect(() => { fetchSquadre(); }, []);

  const fetchSquadre = async () => {
    const { data } = await supabase.from('squadre').select('*').order('categoria');
    if (data) setSquadre(data);
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('squadre').insert([formData]);
    if (!error) {
      alert("Squadra registrata con successo!");
      fetchSquadre();
    }
  };

  return (
    <div className="admin-page">
      <h1>Gestione Squadre</h1>
      
      <form className="admin-form-card" onSubmit={handleAddTeam}>
        <h3>Registra Nuova Squadra</h3>
        <div className="form-row">
          <input type="text" placeholder="Nome Squadra" onChange={e => setFormData({...formData, nome: e.target.value})} required />
          <input type="text" placeholder="Partecipanti (separati da virgola)" onChange={e => setFormData({...formData, partecipanti: e.target.value})} required />
          <select onChange={e => setFormData({...formData, categoria: e.target.value})}>
            <option value="Senior">Senior</option>
            <option value="U19">U19</option>
            <option value="U21">U21</option>
          </select>
          <button type="submit" className="btn-add">Registra</button>
        </div>
      </form>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Squadra</th>
              <th>Partecipanti</th>
            </tr>
          </thead>
          <tbody>
            {squadre.map(s => (
              <tr key={s.id}>
                <td><span className={`badge ${s.categoria}`}>{s.categoria}</span></td>
                <td><strong>{s.nome}</strong></td>
                <td>{s.partecipanti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestioneSquadre;