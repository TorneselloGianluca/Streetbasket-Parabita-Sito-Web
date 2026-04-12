import React from 'react';
import { Link } from 'react-router-dom';
import { FaBasketballBall, FaTrophy, FaUserShield, FaCogs } from 'react-icons/fa';

const Admin = () => {
  const adminOptions = [
    {
      id: 1,
      title: 'Gestione Partite',
      description: 'Aggiorna i risultati live, aggiungi nuovi match e dichiara i vincitori.',
      icon: <FaBasketballBall />,
      path: '/admin/partite',
      color: '#646cff'
    },
    {
      id: 2,
      title: 'Classifiche',
      description: 'Modifica i punti, le vittorie e le sconfitte delle squadre per categoria.',
      icon: <FaTrophy />,
      path: '/admin/classifiche',
      color: '#ffb22c'
    },
    {
      id: 3,
      title: 'Iscrizioni Staff',
      description: 'Visualizza chi si è candidato per lavorare nel team (Work in progress).',
      icon: <FaUserShield />,
      path: '/workInProgress',
      color: '#444'
    },
    {
        id: 4,
        title: 'Gestione Squadre',
        description: 'Iscrivi nuove squadre al torneo e gestisci i nomi dei partecipanti.',
        icon: <FaUserShield />,
        path: '/admin/squadre',
        color: '#2ecc71'
    }, 
        {
        id: 5,
        title: 'Aggiornamento Sezione News',
        description: 'Iscrivi nuove squadre al torneo e gestisci i nomi dei partecipanti.',
        icon: <FaUserShield />, 
        path: '/admin/squadre',
        color: '#2ecc71'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-72 bg-gray-900 text-white p-10 flex flex-col">
        <div className="mb-12">
          <h2 className="text-xl font-black tracking-widest mb-1">ADMIN PANEL</h2>
          <span className="text-xs text-gray-500 uppercase">Streetbasket Parabita</span>
        </div>
        <nav className="space-y-2.5">
            <Link to="/" className="flex items-center gap-2.5 text-gray-400 no-underline py-3 px-3 rounded-2xl transition-all hover:bg-gray-800 hover:text-white">
              <FaCogs /> Torna al Sito
            </Link>
        </nav>
      </div>

      <main className="flex-1 py-15 px-10">
        <header className="mb-10">
          <h1 className="text-5xl text-gray-900 font-black mb-2.5">
            Bentornato, <span className="text-street-brand-blue">Organizzatore</span>
          </h1>
          <p className="text-gray-600">Seleziona un'area per iniziare la gestione del torneo.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-fit">
          {adminOptions.map((option) => (
            <Link to={option.path} key={option.id} className="bg-white p-8 rounded-3xl no-underline flex items-center gap-5 shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-1.25 hover:border-street-brand-blue hover:shadow-lg relative group">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 flex justify-center items-center text-3xl transition-all duration-300 group-hover:scale-110" style={{ color: option.color }}>
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-gray-900 m-0">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed m-0 mt-1.5">{option.description}</p>
              </div>
              <div className="absolute right-8 text-2xl text-gray-300 transition-all duration-300 group-hover:text-street-brand-blue group-hover:translate-x-1.25">→</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;