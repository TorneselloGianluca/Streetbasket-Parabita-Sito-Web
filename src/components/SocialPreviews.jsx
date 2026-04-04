import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

import previewInsta from '../assets/foto_torneo/foto1.jpg';
import previewFb from '../assets/foto_torneo/foto2.jpg';
import previewTiktok from '../assets/foto_torneo/foto3.jpg';

const SocialPreviews = () => {
  const socialPanels = [
    {
      id: 1,
      name: 'Instagram',
      handle: '@streetbasket_parabita',
      icon: <FaInstagram />,
      backgroundImage: previewInsta,
      link: 'https://www.instagram.com/streetbasket_parabita/',
      color: '#E1306C'
    },
    {
      id: 2,
      name: 'Facebook',
      handle: 'Streetbasket Parabita',
      icon: <FaFacebookF />,
      backgroundImage: previewFb,
      link: 'https://www.facebook.com/profile.php?id=100070723039265',
      color: '#1877F2'
    },
    {
      id: 3,
      name: 'TikTok',
      handle: '@streetbasketparabita',
      icon: <FaTiktok />,
      backgroundImage: previewTiktok,
      link: 'https://www.tiktok.com/@tuoprofilo',
      color: '#000000'
    }
  ];

  return (
    <section className="w-full overflow-hidden m-0 p-0 bg-black">
      {/* HEADER CON TITOLO */}
      <div className="text-center py-20 px-5 bg-black">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase -tracking-0.5 m-0 leading-tight">
          Seguici sui <span className="text-street-orange italic inline-block">Social</span>
        </h2>
        <p className="text-lg opacity-50 mt-3.75 tracking-widest uppercase font-semibold">Entra nel cuore dello Streetbasket Parabita</p>
      </div>

      {/* CONTENITORE PANNELLI */}
      <div className="flex w-full h-screen lg:h-80vh border-t border-gray-800">
        {socialPanels.map((panel) => (
          <a 
            href={panel.link} 
            key={panel.id} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 relative flex justify-center items-center text-decoration-none overflow-hidden transition-all duration-700"
            style={{
              flex: 1,
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
              '--hover-color': panel.color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.flex = '1.6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.flex = '1';
            }}
          >
            {/* BG IMMAGINE */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{ backgroundImage: `url(${panel.backgroundImage})` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            ></div>

            {/* OVERLAY DARK */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-70 transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              }}
            ></div>

            {/* CONTENUTO */}
            <div 
              className="relative z-10 text-center text-white flex flex-col items-center gap-3.75 transition-transform duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3.75)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* ICON */}
              <div 
                className="text-8xl transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = panel.color;
                  e.currentTarget.style.transform = 'scale(1.1) rotate(-2deg)';
                  e.currentTarget.style.filter = `drop-shadow(0 0 20px ${panel.color})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1) rotate(0)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0,0,0,0.5))';
                }}
              >
                {panel.icon}
              </div>

              {/* TESTO */}
              <div>
                <h3 className="text-5xl font-black m-0 uppercase tracking-wide leading-tight">
                  {panel.name}
                </h3>
                <p className="text-lg m-2 opacity-70 font-semibold tracking-wide">
                  {panel.handle}
                </p>
              </div>

              {/* BOTTONE */}
              <span
                className="inline-block mt-5 px-7.5 py-3 border-2 border-white text-white rounded-none font-black uppercase text-sm opacity-0 -translate-y-7.5 transition-all duration-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                  e.currentTarget.style.transform = 'translateY(7.5px)';
                }}
                style={{
                  background: 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (e.currentTarget.parentElement && e.currentTarget.parentElement.parentElement) {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                Seguici →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialPreviews;
