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
    img: maglia10
  },
  {
    id: 2,
    nome: "Maglia Ufficiale 2025",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia2
  },
{
    id: 3,
    nome: "Maglia STAFF 2025" ,
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "10.00€",
    img: maglia3
  },
    {
    id: 4,
    nome: "Canotta Official 2026",
    descrizione: "La maglia ufficiale della sesta edizione. Tessuto traspirante professionale.",
    prezzo: "25.00€",
    img: maglia11
  },
  {
    id: 5,
    nome: "T-Shirt Street Legend",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia15
  },
{
    id: 6,
    nome: "T-Shirt Street Legend",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia12
  }
];

function MaglieShop() {
  const handleCheck = (nomeProdotto) => {
    // Esempio: apre WhatsApp con messaggio automatico
    const messaggio = encodeURIComponent(`Ciao! Vorrei verificare la disponibilità della ${nomeProdotto}.`);
    window.open(`https://wa.me/393270000000?text=${messaggio}`, '_blank');
  };

  return (
    <section className="py-15 px-4 bg-black">
      <div className="mb-10 text-center">
        <h2 className="text-clamp text-3xl md:text-4xl m-0 text-white uppercase tracking-widest">Guarda il nostro <span className="text-street-orange">merchandising</span> ufficiale</h2>
        <p className="text-street-secondary-text text-sm md:text-base">Ogni anno nuove maglie da gioco</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
        {prodotti.map((item) => (
          <div key={item.id} className="group bg-street-dark-card rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-600 transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer">
            <div className="relative h-48 md:h-56 lg:h-80 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.nome} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                {item.prezzo}
              </span>
            </div>
            <div className="p-4 text-center flex flex-col justify-between flex-grow">
              <div>
                <h3 className="m-0 mb-2 text-xs md:text-lg font-semibold text-white leading-tight">
                  {item.nome}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 line-clamp-2">
                  {item.descrizione}
                </p>
              </div>
              <button 
                className="w-full py-2 md:py-3 bg-white text-black rounded font-bold uppercase text-xs md:text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white"
                onClick={() => handleCheck(item.nome)}
              >
                Verifica Disponibilità
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MaglieShop;