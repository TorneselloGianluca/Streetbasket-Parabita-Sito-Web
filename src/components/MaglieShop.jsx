import React from 'react';

import maglia1 from '../assets/1.png';
import maglia2 from '../assets/2.png';
import maglia3 from '../assets/3.png';
import maglia4 from '../assets/4.png';
import maglia5 from '../assets/5.png';
import maglia6 from '../assets/6.png';
import maglia7 from '../assets/7.png';
import maglia8 from '../assets/8.png';
import maglia9 from '../assets/9.png';
import maglia10 from '../assets/10.png';
import maglia11 from '../assets/11.png';
import maglia12 from '../assets/12.png';
import maglia13 from '../assets/13.png';
import maglia14 from '../assets/14.png';
import maglia15 from '../assets/15.png';

const prodotti = [
  {
    id: 1,
    nome: "Maglia STAFF 2024",
    descrizione: "La maglia ufficiale della sesta edizione. Tessuto traspirante professionale.",
    prezzo: "10.00€",
    img: maglia10,
    badge: "SOLD OUT"
  },
  {
    id: 2,
    nome: "Maglia Ufficiale 2025",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia2,
    badge: "LIMITATA"
  },
  {
    id: 3,
    nome: "Maglia STAFF 2025",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "10.00€",
    img: maglia3,
    badge: "HOT"
  },
  {
    id: 4,
    nome: "Canotta Official 2026",
    descrizione: "La maglia ufficiale della sesta edizione. Tessuto traspirante professionale.",
    prezzo: "25.00€",
    img: maglia11,
    badge: "NUOVA"
  },
  {
    id: 5,
    nome: "T-Shirt Street Legend",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia15,
    badge: "ESCLUSIVA"
  },
  {
    id: 6,
    nome: "T-Shirt Street Legend 2.0",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia12,
    badge: "TRENDING"
  }
];

function MaglieShop() {
  const handleCheck = (nomeProdotto) => {
    const messaggio = encodeURIComponent(`Ciao! Vorrei verificare la disponibilità della ${nomeProdotto}.`);
    window.open(`https://wa.me/393270000000?text=${messaggio}`, '_blank');
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'SOLD OUT': 'bg-red-600',
      'LIMITATA': 'bg-purple-600',
      'HOT': 'bg-red-500',
      'NUOVA': 'bg-green-600',
      'ESCLUSIVA': 'bg-yellow-600',
      'TRENDING': 'bg-blue-600'
    };
    return colors[badge] || 'bg-street-orange';
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-black to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-street-orange rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-widest mb-4 [text-shadow:0_0_30px_rgba(235,101,5,0.3)]">
            Merch <span className="bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">Ufficiale</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 uppercase tracking-widest font-semibold mb-2">Indossa lo spirito dello Streetbasket Parabita</p>
          <div className="h-1 w-24 bg-gradient-to-r from-street-orange to-yellow-500 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {prodotti.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card Container with glassmorphism */}
              <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-street-orange transition-all duration-500 hover:shadow-smooth-lg cursor-pointer flex flex-col hover-lift">
                
                {/* Image Section with Animation */}
                <div className="relative h-72 md:h-96 overflow-hidden bg-black">
                  <img 
                    src={item.img} 
                    alt={item.nome} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${getBadgeColor(item.badge)} text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    {item.badge}
                  </div>

                  {/* Price Badge - Prominent */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-street-orange to-yellow-500 text-black px-6 py-2 rounded-full font-black text-lg md:text-xl transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                    {item.prezzo}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight group-hover:text-street-orange transition-colors duration-300">
                      {item.nome}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.descrizione}
                    </p>
                  </div>

                  {/* Button */}
                  <button 
                    className="w-full py-3 md:py-4 px-4 bg-gradient-to-r from-street-orange to-yellow-500 text-black rounded-lg font-black uppercase text-sm md:text-base tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-street-orange/50 active:scale-95 transform hover:translate-y-[-2px] relative overflow-hidden group/btn"
                    onClick={() => handleCheck(item.nome)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🛒 Verifica Disponibilità
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-street-orange via-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-street-orange/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <p className="text-gray-400 mb-6 text-lg">
            Non trovi quello che cerchi?
          </p>
          <button 
            className="inline-block px-8 py-4 md:px-10 md:py-5 border-2 border-street-orange text-street-orange font-black uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-street-orange hover:text-black hover:shadow-lg hover:shadow-street-orange/50"
            onClick={() => window.open('https://wa.me/393270000000?text=Ciao!', '_blank')}
          >
            Contattaci su WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default MaglieShop;