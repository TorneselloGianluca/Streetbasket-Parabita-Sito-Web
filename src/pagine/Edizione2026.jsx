import React from 'react';
import { Link } from 'react-router-dom';
import '../pagine_css/Edizione2026.css';
import seniorImg from '../assets/senior.png';
import under19Img from '../assets/u18.png';
import u21Img from '../assets/u21.png';

const Edizione2026 = () => {
  const categorie = [
    {
      id: 'senior',
      titolo: 'SENIOR',
      sottotitolo: 'Oltre i 18 anni',
      img: seniorImg,
      path: '/iscrizione/senior'
    },
    {
      id: 'under19',
      titolo: 'UNDER 19',
      sottotitolo: 'Nati dal 2007',
      img: under19Img,
      path: '/iscrizione/under19'
    },
    {
      id: 'minibasket',
      titolo: 'U21',
      sottotitolo: 'Categoria Under 21 (2004-2006)',
      img: u21Img,
      path: '/iscrizione/minibasket'
    }
  ];

  return (
    <div className="categories-wrapper">
      {categorie.map((cat) => (
        <Link to={cat.path} key={cat.id} className="category-card">
          <div 
            className="category-bg" 
            style={{ backgroundImage: `url(${cat.img})` }}
          ></div>
          <div className="category-overlay"></div>
          <div className="category-text">
            <h2>{cat.titolo}</h2>
            <p>{cat.sottotitolo}</p>
            <span className="category-btn">Scopri di più</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Edizione2026;
