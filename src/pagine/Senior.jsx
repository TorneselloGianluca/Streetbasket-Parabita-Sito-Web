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

  if (loading) return <div className="h-screen flex justify-center items-center text-2xl font-black text-street-orange uppercase tracking-widest animate-fade-in">Aggiornamento Live...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 pb-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-street-orange rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* HERO CATEGORIA */}
      <div className="relative z-10 bg-gradient-to-r from-street-orange/20 to-black text-white py-24 px-5 text-center overflow-hidden border-b border-street-orange/20">
        <div className="absolute inset-0 bg-gradient-to-br from-street-orange/10 via-transparent to-transparent"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black m-0 tracking-widest uppercase [text-shadow:0_0_40px_rgba(235,101,5,0.3)] bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">TORNEO {categoriaCorrente}</h1>
          <div className="inline-block mt-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-lg shadow-red-600/50 relative">
            <span className="absolute inset-0 bg-red-600 rounded-full animate-pulse opacity-20"></span>
            <span className="relative">🔴 LIVE UPDATES ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-5 relative z-10">
        
        {/* SEZIONE 1: PREMI E GARA 3 PUNTI */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in">
          {/* Card Premi */}
          <div className="group relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/20 p-8 backdrop-blur-sm hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">🏆 Premi {categoriaCorrente}</h3>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed"><span className="text-yellow-400 font-black">1° Posto:</span> Buono €200 + Trofeo Ufficiale</p>
                <p className="text-gray-300 leading-relaxed"><span className="text-yellow-400 font-black">MVP:</span> Canotta Pro + Special Kit</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Card Gara 3 Punti */}
          <div className="group relative bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 p-8 backdrop-blur-sm hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-purple-400 mb-4">🎯 Gara dei 3 Punti</h3>
              <p className="text-gray-300 leading-relaxed mb-6">Iscriviti subito al tavolo o tramite WhatsApp!</p>
              <a href="https://wa.me/391234567890" target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-black text-sm uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1">
                Iscriviti ora →
              </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </section>

        {/* SEZIONE 2: SQUADRE ISCRITTE */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '50ms' }}>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-8 bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">Squadre Partecipanti</h2>
          <div className="flex flex-wrap gap-4">
            {squadre.length > 0 ? squadre.map((s, idx) => (
              <div 
                key={s.id} 
                className="px-6 py-3 rounded-full font-black uppercase text-sm bg-gradient-to-r from-street-orange/20 to-yellow-500/20 border border-street-orange/40 text-white hover:border-street-orange/80 hover:shadow-lg hover:shadow-street-orange/30 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${100 + idx * 30}ms` }}
              >
                {s.nome}
              </div>
            )) : <p className="text-gray-400 italic">In attesa di iscrizioni...</p>}
          </div>
        </section>

        {/* SEZIONE 3: CLASSIFICA LIVE */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-8 bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">Classifica</h2>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-street-orange/20 to-yellow-500/20 border-b border-street-orange/30">
                    <th className="px-6 py-4 text-left uppercase text-xs font-black tracking-widest text-street-orange">Pos</th>
                    <th className="px-6 py-4 text-left uppercase text-xs font-black tracking-widest text-street-orange">Squadra</th>
                    <th className="px-6 py-4 text-left uppercase text-xs font-black tracking-widest text-street-orange">Punti</th>
                    <th className="px-6 py-4 text-left uppercase text-xs font-black tracking-widest text-street-orange">V</th>
                    <th className="px-6 py-4 text-left uppercase text-xs font-black tracking-widest text-street-orange">P</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  {classifica.map((c, index) => (
                    <tr key={c.id} className="hover:bg-gray-700/20 transition-colors duration-200 group/row">
                      <td className="px-6 py-4 text-white font-black text-lg">{index + 1}°</td>
                      <td className="px-6 py-4 text-white font-black group-hover/row:text-street-orange transition-colors duration-200">{c.nome_squadra}</td>
                      <td className="px-6 py-4 font-black text-xl bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">{c.punti}</td>
                      <td className="px-6 py-4 text-gray-300 font-semibold">{c.vittorie}</td>
                      <td className="px-6 py-4 text-gray-300 font-semibold">{c.sconfitte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SEZIONE 4: CALENDARIO & RISULTATI */}
        <section className="animate-fade-in" style={{ animationDelay: '150ms' }}>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-8 bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">Risultati & Calendario</h2>
          <div className="space-y-6">
            {partite.length > 0 ? partite.map((m, idx) => (
              <div 
                key={m.id} 
                className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-street-orange/60 transition-all duration-500 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-street-orange/20 hover-lift animate-fade-in"
                style={{ animationDelay: `${200 + idx * 50}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-xl md:text-2xl font-black text-white uppercase md:text-right group-hover:text-street-orange transition-colors duration-300">{m.squadra1}</div>
                  <div className="bg-gradient-to-r from-street-orange to-yellow-500 text-black px-8 py-4 rounded-xl font-black text-3xl flex items-center gap-4 justify-center shadow-lg shadow-street-orange/30 transform group-hover:scale-105 transition-transform duration-300">
                    <span>{m['punteggio squadra 1'] ?? 0}</span>
                    <span className="text-black text-2xl">-</span>
                    <span>{m['punteggio squadra 2'] ?? 0}</span>
                  </div>
                  <div className="text-xl md:text-2xl font-black text-white uppercase md:text-left group-hover:text-street-orange transition-colors duration-300">{m.squadra2}</div>
                </div>
                {m['squadra vincitrice'] && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-street-orange to-yellow-500 text-black px-6 py-2 rounded-lg text-xs font-black uppercase whitespace-nowrap shadow-lg shadow-street-orange/50">🏆 Vince: {m['squadra vincitrice']}</div>
                )}
              </div>
            )) : <p className="text-gray-400 italic text-center py-12">Il calendario verrà pubblicato a breve.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Senior;