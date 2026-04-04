import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBell } from 'react-icons/fa';
import videoNew from '../assets/foto_streetbasketParabita/download.mp4'; 

const NewEdition = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    {
      id: 1,
      titolo: "Apertura Iscrizioni 2026",
      dettagli: "Le iscrizioni apriranno ufficialmente il 1° Giugno. Preparate la vostra squadra, i posti sono limitati per ogni categoria!"
    },
    {
      id: 2,
      titolo: "After Party Confermato: DJ Set e Street Food",
      dettagli: "Quest'anno è previsto un after party dopo le finals del 26 luglio"
    },
  ];

  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* SINISTRA: VIDEO */}
        <div className="relative rounded-3xl overflow-hidden h-96">
          <video src={videoNew} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute top-5 left-5 bg-street-orange px-3.75 py-1.25 rounded-lg text-xs font-black tracking-widest">
            Nuovo video fuori ORA
          </div>
        </div>

        {/* CENTRO: SEZIONE NEWS */}
        <div className="bg-street-dark-card p-8 rounded-3xl border border-street-dark-border">
          <div className="flex items-center gap-3.75 mb-8">
            <FaBell className="text-street-orange text-2xl animate-swing" />
            <h2 className="text-2xl uppercase font-black text-white">Latest News</h2>
          </div>
          <div className="space-y-3.75">
            {newsList.map((news) => (
              <div 
                key={news.id} 
                className="bg-gray-800 hover:bg-gray-700 hover:border-street-orange p-5 rounded-2xl flex items-center gap-3.75 cursor-pointer transition-all duration-300 transform hover:translate-x-1.25 border border-transparent"
                onClick={() => setSelectedNews(news)}
              >
                <span className="w-2 h-2 bg-street-orange rounded-full flex-shrink-0"></span>
                <h3 className="text-base font-semibold text-white flex-1 m-0">{news.titolo}</h3>
                <span className="text-street-orange font-black">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* DESTRA: INFORMAZIONI */}
        <div className="flex items-center">
          <div className="w-full bg-gradient-to-br from-gray-800 to-black p-10 rounded-3xl border-l-4 border-street-orange">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <FaCalendarAlt className="text-street-orange text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase text-gray-500 font-black tracking-widest m-0">DATE</h3>
                  <p className="text-xl font-black text-white uppercase m-0 mt-1">24-25-26 LUGLIO 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <FaMapMarkerAlt className="text-street-orange text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase text-gray-500 font-black tracking-widest m-0">LOCATION</h3>
                  <p className="text-xl font-black text-white uppercase m-0 mt-1">Campetto Scuola Media G. Dimo</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3.75 bg-street-orange text-white font-black uppercase rounded-2xl hover:bg-white hover:text-street-orange transition-colors">
              Iscriviti Ora
            </button>
          </div>
        </div>
      </div>

      {/* MODAL PER NOTIFICHE */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-street-dark-card p-12 rounded-3xl max-w-md w-11/12 relative border border-street-dark-border"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-5 right-5 text-white text-2xl hover:text-street-orange transition-colors"
              onClick={() => setSelectedNews(null)}
            >
              <FaTimes />
            </button>
            <span className="inline-block bg-street-orange text-black px-3.75 py-1.25 text-xs font-black mb-3.75 rounded-lg">NOTIFICA</span>
            <h2 className="text-2xl font-black text-white mb-5">{selectedNews.titolo}</h2>
            <div className="w-full h-0.5 bg-street-orange mb-5"></div>
            <p className="text-base text-gray-300 leading-relaxed">{selectedNews.dettagli}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewEdition;
