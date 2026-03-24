import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import '../pagine_css/StreetbasketParabita.css';
import Sponsor from '../components/Sponsor';
import MaglieShop from '../components/MaglieShop';
import logoStreet from '../assets/logoTorneo.png';
import videoStreet from '../assets/foto_streetbasketParabita/video_torneo.mp4';
import FormIscrizione from '../components/FormIscrizione';
import PaginaIscrizione from '../components/PaginaIscrizione';
import CaroselloFotoTorneo from '../components/CaroselloFotoTorneo';
import DescrizioneEvento from '../components/DescrizioneEvento';
import StreetbasketNav from '../components/StreetbasketNav';
import Anni from '../components/Anni';
import InstagramPreview from '../components/InstagramPreview';

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
      
      {/* Sezione 1: Progetto */}
      <section id="progetto">
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
      
      {/* Sezione 4: Iscrizione */}
      <section id="iscrizione">
        <PaginaIscrizione />
      </section>
      
      {/* Sezione Mappa (Opzionale: puoi darle un id se vuoi un tasto dedicato) */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://maps.google.com/maps?q=40.0476257,18.123300&z=18&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Streetbasket Parabita"
          ></iframe>
        </div>
      </section>


      {/* Sezione 5: Contatti */}
      <section id="contatti">
        <footer className="project-footer">
          <div className="footer-content">
            <h2>Contatti</h2>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-item">
                <FaInstagram className="icon" />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-item">
                <FaFacebook className="icon" />
                <span>Facebook</span>
              </a>
              <a href="mailto:info@esempio.it" className="social-item">
                <FaEnvelope className="icon" />
                <span>Email</span>
              </a>
            </div>
            <p className="copyright">© 2026 Streetbasket Parabita | Gianluca Tornesello</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default StreetbasketParabita;