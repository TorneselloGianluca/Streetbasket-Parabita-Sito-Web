import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaArrowRight } from 'react-icons/fa';
import '../pagine_css/Gallery.css';

// Importa le copertine (i tuoi percorsi restano validi)
import cover2020 from '../assets/staff.png';
import cover2021 from '../assets/u18.png';
import cover2022 from '../assets/u21.png';
import cover2024 from '../assets/senior.png';
import cover2025 from '../assets/foto_torneo/foto1.jpg';
import cover2026 from '../assets/foto_torneo/foto2.jpg';

const Gallery = () => {
  const edizioni = [
    { id: '2026', titolo: 'VI EDIZIONE', anno: '2026', img: cover2026, path: '/gallery/2026' },
    { id: '2025', titolo: 'V EDIZIONE', anno: '2025', img: cover2025, path: '/gallery/2025' },
    { id: '2024', titolo: 'IV EDIZIONE', anno: '2024', img: cover2024, path: '/gallery/2024' },
    { id: '2022', titolo: 'III EDIZIONE', anno: '2022', img: cover2022, path: '/gallery/2022' },
    { id: '2021', titolo: 'II EDIZIONE', anno: '2021', img: cover2021, path: '/gallery/2021' },
    { id: '2020', titolo: 'I EDIZIONE', anno: '2020', img: cover2020, path: '/gallery/2020' },
  ];

  return (
    <div className="gallery-page-wrapper">
      
      <div className="gallery-carousel-container">
        <div className="edizioni-flex-wrapper">
          {edizioni.map((edi) => (
            <Link to={edi.path} key={edi.id} className="edizione-card">
              <div 
                className="edizione-bg" 
                style={{ backgroundImage: `url(${edi.img})` }}
              ></div>
              <div className="edizione-overlay"></div>
              
              <div className="edizione-content">
                <span className="edizione-year">{edi.anno}</span>
                <h2 className="edizione-title">{edi.titolo}</h2>
                <div className="edizione-btn">
                  VEDI FOTO <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;