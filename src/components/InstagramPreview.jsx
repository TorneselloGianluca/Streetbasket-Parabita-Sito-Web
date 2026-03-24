import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../components_css/InstagramPreview.css';

// Importa 6 foto rappresentative dal tuo cartella assets
// In alternativa usa URL di placeholder come ho fatto qui sotto
const instaPosts = [
  { id: 1, img: "https://via.placeholder.com/400/1a1a1a/ffffff?text=Post+1" },
  { id: 2, img: "https://via.placeholder.com/400/646cff/ffffff?text=Post+2" },
  { id: 3, img: "https://via.placeholder.com/400/1a1a1a/ffffff?text=Post+3" },
  { id: 4, img: "https://via.placeholder.com/400/646cff/ffffff?text=Post+4" },
  { id: 5, img: "https://via.placeholder.com/400/1a1a1a/ffffff?text=Post+5" },
  { id: 6, img: "https://via.placeholder.com/400/646cff/ffffff?text=Post+6" },
];

const InstagramPreview = () => {
  return (
    <section className="insta-preview-section">
      <div className="insta-header">
        <FaInstagram className="insta-icon-main" />
        <h2>Seguici su Instagram</h2>
        <p>@streetbasket_parabita</p>
        <a 
          href="https://www.instagram.com/streetbasket_parabita" 
          target="_blank" 
          rel="noreferrer" 
          className="follow-btn"
        >
          Segui il profilo
        </a>
      </div>

      <div className="insta-grid">
        {instaPosts.map((post) => (
          <div key={post.id} className="insta-item">
            <img src={post.img} alt="Instagram Post" />
            <div className="insta-overlay">
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramPreview;