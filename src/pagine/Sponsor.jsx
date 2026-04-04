import React from 'react';

import sponsor1 from "../assets/sponsor1.jpg";
import sponsor5 from "../assets/sponsor5.png";
import toma from "../assets/toma.png";
import sfondo from "../assets/sfondo.png";

const Sponsor = () => {
  const sponsorList = [
    { id: 1, nome: 'Toma Forniture Industriali', logo: toma, sito: 'https://www.torneriatoma.com/' },
    { id: 2, nome: 'Sponsor Gold 2', logo: sponsor1, sito: 'https://www.facebook.com' },
    { id: 3, nome: 'Partner Tecnico 3', logo: sponsor5, sito: 'https://www.instagram.com' },
    { id: 4, nome: 'Sponsor Locale 4', logo: sponsor5, sito: 'https://www.twitter.com' },
    { id: 5, nome: 'Sponsor Premium 1', logo: sponsor1, sito: 'https://www.google.com' },
    { id: 6, nome: 'Sponsor Gold 2', logo: sponsor1, sito: 'https://www.facebook.com' },
    { id: 7, nome: 'Partner Tecnico 3', logo: sponsor5, sito: 'https://www.instagram.com' },
    { id: 8, nome: 'Sponsor Locale 4', logo: sponsor5, sito: 'https://www.twitter.com' }
  ];

  const [mainSponsor, ...otherSponsors] = sponsorList;

  return (
    <div 
      className="w-full min-h-screen py-32 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      {/* Velo bianco semitrasparente */}
      <div className="absolute inset-0 bg-white bg-opacity-85 z-0"></div>

      <div className="relative z-1 max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-2.5 uppercase tracking-wide">I Nostri PARTNER & SPONSOR</h1>
          <p className="text-xl text-gray-700 font-medium">Ringraziamo chi sostiene lo sport e la nostra comunità.</p>
        </div>

        <div className="flex flex-col items-center mb-14">
          <p className="m-0 text-xs font-black tracking-widest uppercase text-amber-600 mb-4.5">Main Sponsor</p>
          <div className="relative bg-gradient-to-br from-amber-50 to-white w-96 h-auto py-12 rounded-3xl shadow-2xl shadow-amber-200 border-2 border-amber-300 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center items-center px-5">
              <img src={mainSponsor.logo} alt={`Logo ${mainSponsor.nome}`} className="max-w-4/5 max-h-4/5 object-contain" />
            </div>
            <div 
              className="absolute inset-0 bg-white bg-opacity-98 rounded-3xl flex flex-col justify-center items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 p-5"
            >
              <h3 className="text-xl md:text-2xl font-black text-gray-900 text-center">{mainSponsor.nome}</h3>
              <a href={mainSponsor.sito} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-street-brand-blue text-white text-sm font-black uppercase rounded-xl hover:bg-blue-600 transition-colors duration-300">
                Visita Sito
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSponsors.map((sponsor) => (
            <div key={sponsor.id} className="relative bg-white h-48 rounded-3xl shadow-md border border-gray-200 flex justify-center items-center p-5 overflow-hidden hover:-translate-y-2 hover:border-street-brand-blue hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center items-center w-full h-full">
                <img src={sponsor.logo} alt={`Logo ${sponsor.nome}`} className="max-w-xs max-h-xs object-contain" />
              </div>
              <div 
                className="absolute inset-0 bg-white bg-opacity-98 rounded-3xl flex flex-col justify-center items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 p-5"
              >
                <h3 className="text-lg font-black text-gray-900 text-center">{sponsor.nome}</h3>
                <a href={sponsor.sito} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-street-brand-blue text-white text-xs font-black uppercase rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Visita Sito
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;