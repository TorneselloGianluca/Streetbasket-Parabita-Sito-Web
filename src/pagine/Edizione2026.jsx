import React from 'react';
import { Link } from 'react-router-dom';
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
      path: '/iscrizione/u19'
    },
    {
      id: 'minibasket',
      titolo: 'U21',
      sottotitolo: 'Categoria Under 21 (2004-2006)',
      img: u21Img,
      path: '/iscrizione/u21'
    }
  ];

  return (
    <div className="flex w-full h-screen overflow-hidden m-0 p-0">
      {categorie.map((cat) => (
        <Link to={cat.path} key={cat.id} className="relative flex-1 flex justify-center items-center text-decoration-none overflow-hidden transition-all duration-500 no-underline"
          style={{
            flex: 1,
            transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.flex = '1.5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.flex = '1';
          }}>
          {/* Immagine di sfondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ backgroundImage: `url(${cat.img})` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          ></div>

          {/* Overlay scuro */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(100, 108, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            }}
          ></div>

          {/* Testo centrale */}
          <div className="relative z-2 text-center text-white">
            <h2 className="text-6xl md:text-7xl font-black m-0 tracking-widest uppercase">
              {cat.titolo}
            </h2>
            <p className="text-xl mt-1.25 tracking-widest opacity-80 font-semibold">
              {cat.sottotitolo}
            </p>
            <span className="inline-block mt-5 px-6 py-2.5 border-2 border-white font-black uppercase text-xs opacity-0 -translate-y-5 transition-all duration-500"
              style={{
                background: 'transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'translateY(20px)';
              }}>
              Scopri di più
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Edizione2026;
