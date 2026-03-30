import React from 'react';
import { Link } from 'react-router-dom';
import { FaBasketballBall, FaTrophy, FaUserShield, FaCogs } from 'react-icons/fa';
import '../pagine_css/Admin.css';

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
        icon: <FaUserShield />, // Oppure un'altra icona come FaUsers
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
    <div className="admin-dashboard-wrapper">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>ADMIN PANEL</h2>
          <span>Streetbasket Parabita</span>
        </div>
        <nav className="admin-nav-simple">
            <Link to="/"><FaCogs /> Torna al Sito</Link>
        </nav>
      </div>

      <main className="admin-main-content">
        <header className="admin-welcome">
          <h1>Bentornato, <span className="admin-name">Organizzatore</span></h1>
          <p>Seleziona un'area per iniziare la gestione del torneo.</p>
        </header>

        <div className="admin-cards-grid">
          {adminOptions.map((option) => (
            <Link to={option.path} key={option.id} className="admin-option-card">
              <div className="option-icon" style={{ color: option.color }}>
                {option.icon}
              </div>
              <div className="option-info">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
              <div className="option-arrow">→</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;