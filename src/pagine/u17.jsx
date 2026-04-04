import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Senior = () => {
  // --- CAMBIA SOLO QUESTA RIGA IN BASE AL FILE ---
  const categoriaCorrente = "u21"; 
  // ----------------------------------------------

  const [partite, setPartite] = useState([]);
  const [classifica, setClassifica] = useState([]);
  const [squadre, setSquadre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDati();

    // Configurazione Realtime: se l'admin cambia un punteggio, la pagina si aggiorna DA SOLA
    const subscription = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'partite' }, fetchDati)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'classifiche' }, fetchDati)
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  async function fetchDati() {
    setLoading(true);
    
    // 1. Carica Squadre Iscritte
    const { data: teams } = await supabase.from('squadre').select('*').eq('categoria', categoriaCorrente);
    
    // 2. Carica Partite (Usa i nomi con spazi come da tua foto database)
    const { data: matches } = await supabase.from('partite')
      .select('*')
      .eq('categoria', categoriaCorrente)
      .order('id', { ascending: true });

    // 3. Carica Classifica
    const { data: standings } = await supabase.from('classifiche')
      .select('*')
      .eq('categoria', categoriaCorrente)
      .order('punti', { ascending: false });

    if (teams) setSquadre(teams);
    if (matches) setPartite(matches);
    if (standings) setClassifica(standings);
    setLoading(false);
  }

  if (loading) return <div className="loading-screen">Aggiornamento Live...</div>;

  return (
    <div className="category-page">
      {/* HERO CATEGORIA */}
      <div className="category-hero-simple">
        <h1>TORNEO {categoriaCorrente}</h1>
        <div className="badge-live">LIVE UPDATES ACTIVE</div>
      </div>

      <div className="content-container">
        
        {/* SEZIONE 1: PREMI E GARA 3 PUNTI */}
        <section className="section-info-grid">
          <div className="info-card gold-border">
            <h3>🏆 Premi {categoriaCorrente}</h3>
            <p><strong>1° Posto:</strong> Buono €200 + Trofeo Ufficiale</p>
            <p><strong>MVP:</strong> Canotta Pro + Special Kit</p>
          </div>
          <div className="info-card purple-border">
            <h3>🎯 Gara dei 3 Punti</h3>
            <p>Iscriviti subito al tavolo o tramite WhatsApp!</p>
            <a href="https://wa.me/391234567890" target="_blank" rel="noreferrer" className="btn-contest-small">
              Iscriviti ora →
            </a>
          </div>
        </section>

        {/* SEZIONE 2: SQUADRE ISCRITTE */}
        <section className="section-results">
          <h2 className="section-title">Squadre Partecipanti</h2>
          <div className="teams-pill-container">
            {squadre.length > 0 ? squadre.map(s => (
              <span key={s.id} className="team-pill">{s.nome}</span>
            )) : <p>In attesa di iscrizioni...</p>}
          </div>
        </section>

        {/* SEZIONE 3: CLASSIFICA LIVE */}
        <section className="section-results">
          <h2 className="section-title">Classifica</h2>
          <div className="table-responsive">
            <table className="standings-table-live">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Squadra</th>
                  <th>Punti</th>
                  <th>V</th>
                  <th>P</th>
                </tr>
              </thead>
              <tbody>
                {classifica.map((c, index) => (
                  <tr key={c.id}>
                    <td>{index + 1}°</td>
                    <td><strong>{c.nome_squadra}</strong></td>
                    <td className="points-cell">{c.punti}</td>
                    <td>{c.vittorie}</td>
                    <td>{c.sconfitte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEZIONE 4: CALENDARIO & RISULTATI */}
        <section className="section-results">
          <h2 className="section-title">Risultati & Calendario</h2>
          <div className="matches-list">
            {partite.length > 0 ? partite.map((m) => (
              <div key={m.id} className="match-strip">
                <div className="team-name">{m.squadra1}</div>
                <div className="score-box">
                  {/* Riferimento esatto alle colonne con spazi del tuo DB */}
                  <span>{m['punteggio squadra 1'] ?? 0}</span>
                  <span className="separator">-</span>
                  <span>{m['punteggio squadra 2'] ?? 0}</span>
                </div>
                <div className="team-name">{m.squadra2}</div>
                {m['squadra vincitrice'] && (
                  <div className="winner-tag">Vince: {m['squadra vincitrice']}</div>
                )}
              </div>
            )) : <p>Il calendario verrà pubblicato a breve.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Senior;