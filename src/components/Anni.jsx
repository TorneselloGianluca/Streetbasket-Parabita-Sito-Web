import React from 'react';
import { Link } from 'react-router-dom';


const Anni = () => {
  const edizioniData = [
    { anno: '2021', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2021' },
    { anno: '2022', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2022' },
    { anno: '2023', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2023' },
    { anno: '2024', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2024' },
    { anno: '2025', img: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=2025' },
    { anno: '2026', img: 'https://via.placeholder.com/400x600/646cff/ffffff?text=2026' },
  ];

  // Duplichiamo l'array per l'effetto loop infinito nel CSS
  const loopData = [...edizioniData, ...edizioniData];

  return (
    <section className="py-20 bg-street-light-bg overflow-hidden">
      <div className="w-full flex">
        <div 
          className="flex gap-8 animate-scroll-edizioni hover:pause"
          style={{
            animation: 'scrollEdizioni 40s linear infinite',
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {loopData.map((ed, index) => (
            <Link 
              to={`/edizione/${ed.anno}`} 
              key={index} 
              className="group relative w-70 h-96 rounded-3xl overflow-hidden no-underline flex justify-center items-center transition-transform duration-400 hover:scale-105 flex-shrink-0 z-10"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-filter duration-400"
                style={{ 
                  backgroundImage: `url(${ed.img})`,
                  filter: 'blur(4px) brightness(0.6)'
                }}
              ></div>
              <div className="group-hover:invert-0" style={{ filter: 'blur(0px) brightness(0.8)' }}>
                <div className="absolute inset-0 group-hover:filter" style={{ backgroundImage: `url(${ed.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
              <div className="relative z-20 text-center text-white">
                <span className="block text-5xl font-black leading-tight" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                  {ed.anno}
                </span>
                <span className="block text-sm uppercase tracking-widest mt-1 font-semibold">
                  Edizione
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anni;