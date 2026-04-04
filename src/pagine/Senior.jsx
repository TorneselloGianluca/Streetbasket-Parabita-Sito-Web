import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Senior = () => {
  // --- CAMBIA SOLO QUESTA RIGA IN BASE AL FILE ---
  const categoriaCorrente = "Senior"; // Metti "U19" o "U17" negli altri file
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

  if (loading) return <div className="h-screen flex justify-center items-center text-2xl font-black text-street-brand-blue uppercase tracking-widest">Aggiornamento Live...</div>;

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* HERO CATEGORIA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-5 text-center relative overflow-hidden shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-900 m-0 tracking-widest uppercase text-shadow-lg">TORNEO {categoriaCorrente}</h1>
        <div className="inline-block mt-5 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase animate-pulse-live shadow-lg shadow-red-600">LIVE UPDATES ACTIVE</div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-5 relative z-10">
        
        {/* SEZIONE 1: PREMI E GARA 3 PUNTI */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-yellow-400">
            <h3 className="text-2xl font-black text-gray-900 mb-4">🏆 Premi {categoriaCorrente}</h3>
            <p className="text-gray-600 leading-relaxed mb-2"><strong>1° Posto:</strong> Buono €200 + Trofeo Ufficiale</p>
            <p className="text-gray-600 leading-relaxed"><strong>MVP:</strong> Canotta Pro + Special Kit</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-street-brand-blue">
            <h3 className="text-2xl font-black text-gray-900 mb-4">🎯 Gara dei 3 Punti</h3>
            <p className="text-gray-600 leading-relaxed mb-3">Iscriviti subito al tavolo o tramite WhatsApp!</p>
            <a href="https://wa.me/391234567890" target="_blank" rel="noreferrer" className="inline-block text-street-brand-blue font-black text-sm uppercase transition-colors duration-200 hover:text-gray-900">
              Iscriviti ora →
            </a>
          </div>
        </section>

        {/* SEZIONE 2: SQUADRE ISCRITTE */}
        <section className="mb-12">
          <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900 mb-6 border-l-6 border-street-brand-blue pl-4.5">Squadre Partecipanti</h2>
          <div className="flex flex-wrap gap-3">
            {squadre.length > 0 ? squadre.map(s => (
              <span key={s.id} className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs shadow-md">{s.nome}</span>
            )) : <p className="text-gray-600">In attesa di iscrizioni...</p>}
          </div>
        </section>

        {/* SEZIONE 3: CLASSIFICA LIVE */}
        <section className="mb-12">
          <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900 mb-6 border-l-6 border-street-brand-blue pl-4.5">Classifica</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4.5 py-4.5 text-left uppercase text-xs font-black tracking-widest">Pos</th>
                  <th className="px-4.5 py-4.5 text-left uppercase text-xs font-black tracking-widest">Squadra</th>
                  <th className="px-4.5 py-4.5 text-left uppercase text-xs font-black tracking-widest">Punti</th>
                  <th className="px-4.5 py-4.5 text-left uppercase text-xs font-black tracking-widest">V</th>
                  <th className="px-4.5 py-4.5 text-left uppercase text-xs font-black tracking-widest">P</th>
                </tr>
              </thead>
              <tbody>
                {classifica.map((c, index) => (
                  <tr key={c.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4.5 py-4.5">{index + 1}°</td>
                    <td className="px-4.5 py-4.5"><strong className="text-gray-900">{c.nome_squadra}</strong></td>
                    <td className="px-4.5 py-4.5 font-black text-street-brand-blue text-xl">{c.punti}</td>
                    <td className="px-4.5 py-4.5">{c.vittorie}</td>
                    <td className="px-4.5 py-4.5">{c.sconfitte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEZIONE 4: CALENDARIO & RISULTATI */}
        <section>
          <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900 mb-6 border-l-6 border-street-brand-blue pl-4.5">Risultati & Calendario</h2>
          <div className="space-y-4.5">
            {partite.length > 0 ? partite.map((m) => (
              <div key={m.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 border border-gray-200 hover:border-street-brand-blue p-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:text-center">
                  <div className="text-2xl font-black text-gray-900 uppercase md:text-right">{m.squadra1}</div>
                  <div className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-3xl flex items-center gap-4 justify-center shadow-md">
                    <span>{m['punteggio squadra 1'] ?? 0}</span>
                    <span className="text-street-brand-blue text-2xl">-</span>
                    <span>{m['punteggio squadra 2'] ?? 0}</span>
                  </div>
                  <div className="text-2xl font-black text-gray-900 uppercase md:text-left">{m.squadra2}</div>
                </div>
                {m['squadra vincitrice'] && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-street-brand-blue text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase whitespace-nowrap">Vince: {m['squadra vincitrice']}</div>
                )}
              </div>
            )) : <p className="text-gray-600">Il calendario verrà pubblicato a breve.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Senior;