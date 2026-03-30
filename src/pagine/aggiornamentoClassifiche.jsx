import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../pagine_css/AdminDashboard.css';

const AggiornamentoClassifiche = () => {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => { fetchClassifica(); }, []);

  const fetchClassifica = async () => {
    const { data } = await supabase.from('classifiche').select('*').order('categoria', { ascending: true });
    if (data) setClassifica(data);
  };

  const handleUpdate = async (id, field, value) => {
    await supabase.from('classifiche').update({ [field]: parseInt(value) }).eq('id', id);
    fetchClassifica();
  };

  return (
    <div className="admin-page">
      <h1>Gestione Classifiche</h1>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cat.</th>
              <th>Squadra</th>
              <th>Punti</th>
              <th>Vinte</th>
              <th>Perse</th>
            </tr>
          </thead>
          <tbody>
            {classifica.map(c => (
              <tr key={c.id}>
                <td>{c.categoria}</td>
                <td><strong>{c.nome_squadra}</strong></td>
                <td><input type="number" defaultValue={c.punti} onBlur={e => handleUpdate(c.id, 'punti', e.target.value)} /></td>
                <td><input type="number" defaultValue={c.vittorie} onBlur={e => handleUpdate(c.id, 'vittorie', e.target.value)} /></td>
                <td><input type="number" defaultValue={c.sconfitte} onBlur={e => handleUpdate(c.id, 'sconfitte', e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AggiornamentoClassifiche;