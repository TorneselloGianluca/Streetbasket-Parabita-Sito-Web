import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaArrowRight } from 'react-icons/fa';

// Importa le copertine
import cover2020 from '../assets/staff.png';
import cover2021 from '../assets/u18.png';
import cover2022 from '../assets/u21.png';
import cover2024 from '../assets/senior.png';
import cover2025 from '../assets/foto_torneo/foto1.jpg';
import cover2026 from '../assets/foto_torneo/foto2.jpg';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const edizioni = [
    { id: '2026', titolo: 'VI EDIZIONE', anno: '2026', img: cover2026, path: '/gallery/2026' },
    { id: '2025', titolo: 'V EDIZIONE', anno: '2025', img: cover2025, path: '/gallery/2025' },
    { id: '2024', titolo: 'IV EDIZIONE', anno: '2024', img: cover2024, path: '/gallery/2024' },
    { id: '2022', titolo: 'III EDIZIONE', anno: '2022', img: cover2022, path: '/gallery/2022' },
    { id: '2021', titolo: 'II EDIZIONE', anno: '2021', img: cover2021, path: '/gallery/2021' },
    { id: '2020', titolo: 'I EDIZIONE', anno: '2020', img: cover2020, path: '/gallery/2020' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-street-dark-bg to-black relative overflow-hidden py-20">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-street-orange/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-street-orange/10 border border-street-orange/30 text-street-orange text-sm font-semibold tracking-widest">
              <FaCamera className="text-lg" />
              GALLERIA
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Momenti<br />
            <span className="bg-gradient-to-r from-street-orange to-street-yellow bg-clip-text text-transparent">
              Indimenticabili
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Rivivi le emozioni di ogni edizione dello Street Basket Parabita. Scopri i momenti più belli, le partite più intense e la comunità che ce l'ha resa possibile.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edizioni.map((edi) => (
            <Link
              key={edi.id}
              to={edi.path}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
              onMouseEnter={() => setHoveredId(edi.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${edi.img})` }}
              ></div>

              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-street-orange/0 via-transparent to-street-orange/0 group-hover:from-street-orange/20 group-hover:to-street-orange/10 transition-all duration-500 pointer-events-none"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform transition-all duration-500">
                {/* Year Label */}
                <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-black uppercase tracking-widest text-street-orange mb-2 block">
                    {edi.anno}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-black uppercase tracking-wider mb-4 transform group-hover:translate-y-0 translate-y-1 transition-transform duration-500">
                  {edi.titolo}
                </h2>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-street-orange opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  VEDI FOTO <FaArrowRight className="text-lg" />
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;