import React from 'react';
import logoStreet from '../assets/logoTorneo.png';

const DescrizioneEvento = () => {
  return (
    <section className="py-20 px-5 bg-black flex justify-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-20 bg-gray-900 border border-gray-800 rounded-3xl p-10 lg:p-16 shadow-2xl">
        
        {/* COLONNA SINISTRA: LOGO SINGOLO */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center justify-center">
            <img 
              src={logoStreet} 
              alt="Logo Streetbasket Parabita" 
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* COLONNA DESTRA: TESTO */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-blue-900 bg-opacity-15 text-blue-400 px-3.75 py-1.5 rounded-full text-xs font-bold mb-5">Edizione VI • 2026</div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
            Più di un <span className="text-street-orange italic">Torneo</span>, È un'<span className="text-street-orange italic">Esperienza</span>
          </h2>
          
          <div className="space-y-5 text-gray-300 text-base leading-relaxed mb-10">
            <p>
              <strong>Streetbasket Parabita</strong> giunge alla sua sesta edizione, trasformando l'estate salentina in una celebrazione pura dello sport e dell'inclusione sociale.
            </p>
            <p>
              Agonismo, musica, street food e condivisione creano un'atmosfera unica nel cuore del centro storico. Unisciti a noi per vivere l'evento che coinvolge atleti e appassionati da tutta la regione.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
            <div>
              <span className="text-xs uppercase text-gray-500 font-bold tracking-wider block mb-1.25">Location Ufficiale</span>
              <span className="text-base font-bold text-white">Via Roma (LE), Parabita</span>
            </div>
            <div>
              <span className="text-xs uppercase text-gray-500 font-bold tracking-wider block mb-1.25">Resta aggioranto su tutte le news</span>
              <span className="text-base font-bold text-white">Seguici su tutti i social</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DescrizioneEvento;
