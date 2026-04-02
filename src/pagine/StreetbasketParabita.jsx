import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import '../pagine_css/StreetbasketParabita.css';
import MaglieShop from '../components/MaglieShop';
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
    <div className="project-page">
      {/* Sezione Hero */}
      <section className="video-hero">
        <video ref={videoRef} loop muted playsInline className="bg-video" preload="auto">
          <source src={videoStreet} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1 className="project-title">STREETBASKET PARABITA VI</h1>
          <p className="hero-subtitle">IL TORNEO DI STREET BASKET DELLA CITTA' DI PARABITA</p>
          <div className="scroll-indicator">
            <span>Scorri per scoprire</span>
            <div className="arrow"></div>
          </div>
        </div>
      </section>

      {/* Navigazione Secondaria */}
      <StreetbasketNav />
      
      <section className="anni-section">
      <div className="social-header">
        <h2 className="social-main-title">Resta aggiornato con la nostra sezione <span className="highlight"> news</span></h2>
        <p className="social-sub-title">Nuova edizione in ARRIVO! </p>
      </div> 
      <NewEdition />
      </section>
      
      {/* Sezione 1: Progetto */}
      <section id="progetto">
      <div className="social-header">
        <h2 className="social-main-title">Noi siamo <span className="highlight">Streetbasket Parabita</span> </h2>
        <p className="social-sub-title">Chi siamo e cosa facciamo</p>
      </div> 
       
        <DescrizioneEvento />
      </section>
      
      {/* Sezione 2: Gallery */}
      <section id="gallery">
        <CaroselloFotoTorneo />
      </section>


      {/* Sezione 3: Shop */}
      <section id="shop">
         <MaglieShop />
      </section>

      <div className="social-header">
        <h2 className="social-main-title">Vieni a <span className="highlight">giocare</span> con noi</h2>
        <p className="social-sub-title">Ci trovi al campetto di Piazza Regina del Cielo</p>
      </div> 
      {/* Sezione Mappa (Opzionale: puoi darle un id se vuoi un tasto dedicato) */}
      <section className="location-section">
        <div className="location-container">
          
          {/* Colonna Mappa */}
          <div className="map-box">
            <iframe 
              src="https://maps.google.com/maps?q=40.0476257,18.123300&z=18&output=embed" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Streetbasket Parabita"
            ></iframe>
            <div className="location-badge">DOVE TROVARCI</div>
          </div>

          {/* Colonna Video */}
          <div className="location-video-box">
            <video autoPlay loop muted playsInline className="location-video">
              <source src={videoCampo} type="video/mp4" />
            </video>
            <div className="video-overlay-content">
              <span className="live-tag">Piazza Regina del Cielo</span>
              <h3>Il nostro campetto</h3>
            </div>
          </div>

        </div>
      </section>



      {/* Sezione 5: Contatti */}
      <section id="contatti">
      <SocialPreviews />
      </section>

            <div className="disclaimer-box">
        <p>
          <strong>Informativa Immagini:</strong> Partecipando all'evento, si acconsente alla realizzazione 
          e alla pubblicazione di foto e video sui nostri canali ufficiali. Tutti i partecipanti registrati 
          hanno sottoscritto apposita liberatoria in fase di iscrizione.
        </p>
      </div>


    </div>

  );
}

export default StreetbasketParabita;