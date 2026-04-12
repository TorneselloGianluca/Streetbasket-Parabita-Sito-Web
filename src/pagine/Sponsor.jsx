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
    <div className="w-full min-h-screen py-32 bg-gradient-to-b from-black via-black to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-street-orange rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 uppercase tracking-widest [text-shadow:0_0_40px_rgba(235,101,5,0.3)] bg-gradient-to-r from-street-orange to-yellow-500 bg-clip-text text-transparent">I Nostri PARTNER & SPONSOR</h1>
          <p className="text-xl text-gray-400 font-semibold">Ringraziamo chi sostiene lo sport e la nostra comunità.</p>
        </div>

        {/* Main Sponsor */}
        <div className="flex flex-col items-center mb-20 animate-fade-in" style={{ animationDelay: '50ms' }}>
          <p className="m-0 text-xs font-black tracking-widest uppercase text-street-orange mb-6">🌟 Main Sponsor</p>
          <div className="group relative w-96 h-auto backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-street-orange/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-street-orange/30 group-hover:border-street-orange/60 rounded-3xl overflow-hidden transition-all duration-500 py-12 px-8 hover-lift">
              <div className="flex justify-center items-center mb-6">
                <img src={mainSponsor.logo} alt={`Logo ${mainSponsor.nome}`} className="max-w-4/5 max-h-56 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-black text-white mb-4">{mainSponsor.nome}</h3>
                <a href={mainSponsor.sito} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-2 bg-gradient-to-r from-street-orange to-yellow-500 text-black font-black uppercase text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-street-orange/50">
                  Visita Sito →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSponsors.map((sponsor, idx) => (
            <div 
              key={sponsor.id} 
              className="group relative backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${100 + idx * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-street-orange/10 to-yellow-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 group-hover:border-street-orange/60 rounded-2xl overflow-hidden transition-all duration-500 p-6 h-48 flex justify-center items-center hover-lift">
                <div className="flex justify-center items-center w-full h-full">
                  <img src={sponsor.logo} alt={`Logo ${sponsor.nome}`} className="max-w-xs max-h-40 object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/80 rounded-2xl flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <h3 className="text-lg font-black text-white text-center px-4">{sponsor.nome}</h3>
                  <a href={sponsor.sito} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-street-orange to-yellow-500 text-black font-black uppercase text-xs rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-street-orange/50">
                    Visita Sito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;