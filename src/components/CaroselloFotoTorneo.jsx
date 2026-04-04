import React from 'react';

// Importazioni (assumendo che le foto siano 10)
import Foto1 from '../assets/foto_torneo/foto1.jpg';
import Foto2 from '../assets/foto_torneo/foto2.jpg';
import Foto3 from '../assets/foto_torneo/foto3.jpg';
import Foto4 from '../assets/foto_torneo/foto4.jpg';
import Foto5 from '../assets/foto_torneo/foto5.jpg';
import Foto6 from '../assets/foto_torneo/foto6.jpg';
import Foto7 from '../assets/foto_torneo/foto7.jpg';
import Foto8 from '../assets/foto_torneo/foto8.jpg';
import Foto9 from '../assets/foto_torneo/foto9.jpg';
import Foto10 from '../assets/foto_torneo/foto10.jpg';

const CaroselloFotoTorneo = () => {
  const listaBase = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10];
  const immagini = [...listaBase, ...listaBase]; 

  return (
    <div className="relative w-full h-96 bg-black overflow-hidden">
      {/* Fade edges left */}
      <div className="absolute top-0 left-0 w-[10%] h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
      {/* Fade edges right */}
      <div className="absolute top-0 right-0 w-[10%] h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>

      <div className="flex w-max h-full hover:pause animate-scroll-flexible group" style={{
        animation: 'scroll-flexible 60s linear infinite',
        cursor: 'pointer'
      }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {immagini.map((img, index) => (
          <div key={index} className="h-full flex-shrink-0">
            <img 
              src={img} 
              alt={`Streetbasket Parabita ${index}`} 
              className="h-full w-auto object-contain hover:scale-103 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaroselloFotoTorneo;