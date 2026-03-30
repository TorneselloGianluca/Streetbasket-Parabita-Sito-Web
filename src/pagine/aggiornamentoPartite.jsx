import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../pagine_css/AdminDashboard.css';

const AggiornamentoPartite = () => {
  const [partite, setPartite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMatch, setNewMatch] = useState({
    squadra1: '', squadra2: '', categoria: 'Senior'
  });

  useEffect(() => { fetchPartite(); }, []);

  const fetchPartite = async () => {
    const { data } = await supabase.from('partite').select('*').order('id', { ascending: false });
    if (data) setPartite(data);
  };

  const handleAddMatch = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('partite').insert([newMatch]);
    if (!error) {
      alert("Partita aggiunta!");
      fetchPartite();
    }
  };

  const handleUpdateScore = async (id, field, value) => {
    const { error } = await supabase.from('partite')
      .update({ [field]: parseInt(value) })
      .eq('id', id);
    if (!error) fetchPartite();
  };

  const handleUpdateWinner = async (id, winner) => {
    await supabase.from('partite').update({ "squadra vincitrice": winner }).eq('id', id);
    fetchPartite();
  };

  return (
    <div className="admin-page">
      <h1>Gestione Partite</h1>
      
      <form className="admin-form-card" onSubmit={handleAddMatch}>
        <h3>Aggiungi Nuova Partita</h3>
        <div className="form-row">
          <input type="text" placeholder="Squadra 1" onChange={e => setNewMatch({...newMatch, squadra1: e.target.value})} required />
          <span>VS</span>
          <input type="text" placeholder="Squadra 2" onChange={e => setNewMatch({...newMatch, squadra2: e.target.value})} required />
          <select onChange={e => setNewMatch({...newMatch, categoria: e.target.value})}>
            <option value="Senior">Senior</option>
            <option value="U19">U19</option>
            <option value="U21">U21</option>
          </select>
          <button type="submit" className="btn-add">Salva</button>
        </div>
      </form>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Squadra 1</th>
              <th>Punt. 1</th>
              <th>Punt. 2</th>
              <th>Squadra 2</th>
              <th>Vincitore</th>
            </tr>
          </thead>
          <tbody>
            {partite.map(p => (
              <tr key={p.id}>
                <td><span className={`badge ${p.categoria}`}>{p.categoria}</span></td>
                <td>{p.squadra1}</td>
                <td><input type="number" defaultValue={p['punteggio squadra 1']} onBlur={e => handleUpdateScore(p.id, 'punteggio squadra 1', e.target.value)} /></td>
                <td><input type="number" defaultValue={p['punteggio squadra 2']} onBlur={e => handleUpdateScore(p.id, 'punteggio squadra 2', e.target.value)} /></td>
                <td>{p.squadra2}</td>
                <td>
                  <select defaultValue={p['squadra vincitrice']} onChange={e => handleUpdateWinner(p.id, e.target.value)}>
                    <option value="">-</option>
                    <option value={p.squadra1}>{p.squadra1}</option>
                    <option value={p.squadra2}>{p.squadra2}</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AggiornamentoPartite;