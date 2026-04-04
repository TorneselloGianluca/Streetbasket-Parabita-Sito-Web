import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaArrowRight } from 'react-icons/fa';

// Importa le copertine (i tuoi percorsi restano validi)
import cover2020 from '../assets/staff.png';
import cover2021 from '../assets/u18.png';
import cover2022 from '../assets/u21.png';
import cover2024 from '../assets/senior.png';
import cover2025 from '../assets/foto_torneo/foto1.jpg';
import cover2026 from '../assets/foto_torneo/foto2.jpg';

const Gallery = () => {
  const edizioni = [
    { id: '2026', titolo: 'VI EDIZIONE', anno: '2026', img: cover2026, path: '/gallery/2026' },
    { id: '2025', titolo: 'V EDIZIONE', anno: '2025', img: cover2025, path: '/gallery/2025' },
    { id: '2024', titolo: 'IV EDIZIONE', anno: '2024', img: cover2024, path: '/gallery/2024' },
    { id: '2022', titolo: 'III EDIZIONE', anno: '2022', img: cover2022, path: '/gallery/2022' },
    { id: '2021', titolo: 'II EDIZIONE', anno: '2021', img: cover2021, path: '/gallery/2021' },
    { id: '2020', titolo: 'I EDIZIONE', anno: '2020', img: cover2020, path: '/gallery/2020' },
  ];

  return (
    <div className="bg-black min-h-screen py-24 text-white overflow-x-hidden">
      
      <div className="w-screen h-65vh flex items-center justify-center">
        <div className="flex w-full h-full gap-0"
          onMouseEnter={(e) => {
            e.currentTarget.querySelectorAll('.edizione-card').forEach(card => {
              card.style.flex = '0.5';
              card.style.opacity = '0.6';
            });
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelectorAll('.edizione-card').forEach(card => {
              card.style.flex = '1';
              card.style.opacity = '1';
            });
          }}>
          {edizioni.map((edi) => (
            <Link to={edi.path} key={edi.id} className="edizione-card relative flex-1 h-full overflow-hidden text-decoration-none flex items-end py-10 px-10 transition-all duration-700 border-r border-gray-800 no-underline hover:z-10"
              style={{
                flex: 1,
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                minWidth: '80px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.flex = '4';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.zIndex = '10';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.flex = '1';
                // Reset is handled by parent
              }}>
              {/* Sfondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-800"
                style={{ backgroundImage: `url(${edi.img})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-300"></div>

              {/* Contenuto */}
              <div className="relative z-2 text-white">
                <span 
                  className="block text-xs opacity-70 mb-2 font-black uppercase tracking-widest"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}>
                  {edi.anno}
                </span>
                <h2 
                  className="text-4xl md:text-5xl font-black m-0 uppercase tracking-wider"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  style={{
                    transition: 'transform 0.3s ease'
                  }}>
                  {edi.titolo}
                </h2>
                <div 
                  className="mt-5 text-sm font-black uppercase tracking-widest flex items-center gap-3 opacity-0 -translate-y-2 transition-all duration-500"
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                    e.currentTarget.style.transform = 'translateY(8px)';
                  }}>
                  VEDI FOTO <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;