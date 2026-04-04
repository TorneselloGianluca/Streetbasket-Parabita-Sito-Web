import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logoStreet from '../assets/logoTorneo.png';
import videoStreet from '../assets/foto_streetbasketParabita/video_torneo.mp4';
import CaroselloFotoTorneo from '../components/CaroselloFotoTorneo';
import DescrizioneEvento from '../components/DescrizioneEvento';
import StreetbasketNav from '../components/StreetbasketNav';
import Anni from '../components/Anni';
import InstagramPreview from '../components/InstagramPreview';
import SocialPreviews from '../components/SocialPreviews';
import NewEdition from '../components/NewEdition';
import videoCampo from '../assets/foto_streetbasketParabita/campo.mp4';  


function StreetbasketParabita() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay bloccato:", error);
      });
    }
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Sezione Hero */}
      <section className="relative h-screen w-full flex justify-center items-center overflow-hidden bg-black">
        <video ref={videoRef} loop muted playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full z-1 -translate-x-1/2 -translate-y-1/2 object-cover" preload="auto">
          <source src={videoStreet} type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white w-full h-full flex flex-col justify-center items-center pointer-events-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest m-0 text-shadow-lg">STREETBASKET PARABITA VI</h1>
          <p className="text-xl md:text-2xl mt-2.5 tracking-widest opacity-90 text-shadow-lg">IL TORNEO DI STREET BASKET DELLA CITTA' DI PARABITA</p>
          <div className="mt-12 text-center">
            <span className="block text-base">Scorri per scoprire</span>
            <div className="w-6 h-6 border-r-2 border-b-2 border-white mx-auto mt-4 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Navigazione Secondaria */}
      {/* <StreetbasketNav /> Momentaneamete rimossa, da capire se tenere */}
      
      <section className="bg-black py-15">
      <div className="text-center mb-16 px-5">
        <h2 className="text-4xl md:text-6xl font-black uppercase -tracking-1 leading-tight">Resta aggiornato con la nostra sezione <span className="text-street-orange italic"> news</span></h2>
        <p className="text-lg mt-3.75 tracking-widest text-street-secondary-text-dark uppercase font-semibold">Nuova edizione in ARRIVO!</p>
      </div> 
      <NewEdition />
      </section>
      
      {/* Sezione 1: Progetto */}
      <section id="progetto" className="bg-black py-10">
      <div className="text-center mb-16 px-5">
        <h2 className="text-4xl md:text-6xl font-black uppercase -tracking-1 leading-tight">Noi siamo <span className="text-street-orange italic">Streetbasket Parabita</span></h2>
        <p className="text-lg mt-3.75 tracking-widest text-street-secondary-text-dark uppercase font-semibold">Chi siamo e cosa facciamo</p>
      </div> 
       
        <DescrizioneEvento />
      </section>
      
      {/* Sezione 2: Gallery */}
      <section id="gallery">
        <CaroselloFotoTorneo />
      </section>

      <div className="text-center mb-16 px-5 py-10 bg-black">
        <h2 className="text-4xl md:text-6xl font-black uppercase -tracking-1 leading-tight">Vieni a <span className="text-street-orange italic">giocare</span> con noi</h2>
        <p className="text-lg mt-3.75 tracking-widest text-street-secondary-text-dark uppercase font-semibold">Ci trovi tutta l'estate a giocare</p>
      </div>

      {/* Sezione Mappa (Opzionale: puoi darle un id se vuoi un tasto dedicato) */}
      <section className="py-10 px-5 bg-black flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
          
          {/* Colonna Mappa */}
          <div className="relative h-56 md:h-96 rounded-3xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-street-orange hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-900"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
            <iframe 
              src="https://maps.google.com/maps?q=40.0476257,18.123300&z=18&output=embed" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
              className="w-full h-full hover:filter-[grayscale(0%) invert(0%) contrast(1)] transition-all duration-600"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Streetbasket Parabita"
            ></iframe>
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-80 text-white px-4 py-2 rounded-2xl text-xs font-black tracking-widest border border-gray-700 z-5">DOVE TROVARCI</div>
          </div>

          {/* Colonna Video */}
          <div className="relative h-56 md:h-96 rounded-3xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-street-orange hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-900"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover hover:scale-105 transition-transform duration-600">
              <source src={videoCampo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8 pointer-events-none z-4">
              <span className="text-street-orange font-black text-xs tracking-widest flex items-center gap-2 mb-2 before:content-[''] before:w-2 before:h-2 before:bg-street-orange before:rounded-full before:animate-pulse-orange">Campetto scuola media G. DIMO</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase m-0 text-white">PIAZZA SALVO D'ACQUISTO</h3>
            </div>
          </div>

        </div>
      </section>

      {/* Sezione 5: Contatti */}
      <section id="contatti">
      <SocialPreviews />
      </section>

      <div className="bg-gray-900 border-l-4 border-street-orange py-5 px-5 mx-auto my-10 max-w-5xl text-xs md:text-sm text-gray-600 rounded-2xl">
        <p>
          <strong className="text-white">Informativa Immagini:</strong> Partecipando all'evento, si acconsente alla realizzazione 
          e alla pubblicazione di foto e video sui nostri canali ufficiali. Tutti i partecipanti registrati 
          hanno sottoscritto apposita liberatoria in fase di iscrizione.
        </p>
      </div>

    </div>

  );
}

export default StreetbasketParabita;