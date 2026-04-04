import React from 'react';
import FormIscrizione from './FormIscrizione';

const PaginaIscrizione = () => {
  // Esempio dati squadre (da sostituire con database)
  const squadreIscritte = [
    { nome: "I Bulls di Parabita", cat: "Senior" },
    { nome: "Young Ballers", cat: "Under 19" },
    { nome: "Salento Dunkers", cat: "Senior" }
  ];

  return (
    <div className="w-full px-2.5 py-10 box-border">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-5">Streetbasket Parabita 2026</h1>
        <div className="h-1 bg-street-orange w-24 mx-auto"></div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {/* COL 1: FORM */}
        <section className="w-full p-5 box-border">
          <div className="mb-5">
            <span className="inline-block text-2xl font-black text-street-orange">01</span>
            <h3 className="text-xl font-bold mt-2">Iscrizione Team</h3>
          </div>
          <FormIscrizione />
        </section>

        {/* COL 2: INFO */}
        <section className="w-full p-5 box-border">
          <div className="mb-5">
            <span className="inline-block text-2xl font-black text-street-orange">02</span>
            <h3 className="text-xl font-bold mt-2">Dettagli Evento</h3>
          </div>
          <div className="bg-gray-50 dark:bg-street-dark-card p-5 rounded-lg space-y-4">
             <p><strong>📍 Location:</strong> Parabita, Via Roma</p>
             <p><strong>📅 Data:</strong> 15-18 Luglio 2026</p>
             <p><strong>🏀 Categoria:</strong> 3vs3 Open Mix</p>
             <button className="w-full py-2.5 bg-gray-200 dark:bg-street-dark-border text-gray-800 dark:text-street-dark-text font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
               Regolamento PDF
             </button>
          </div>
        </section>

        {/* COL 3: PRIVACY */}
        <section className="w-full p-5 box-border">
          <div className="mb-5">
            <span className="inline-block text-2xl font-black text-street-orange">03</span>
            <h3 className="text-xl font-bold mt-2">Privacy</h3>
          </div>
          <div className="bg-gray-50 dark:bg-street-dark-card p-5 rounded-lg text-sm text-gray-700 dark:text-street-dark-text space-y-3">
            <p>I dati sono raccolti per fini organizzativi e assicurativi (GDPR 2026).</p>
            <p>Responsabile: Comitato Streetbasket Parabita.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaginaIscrizione;