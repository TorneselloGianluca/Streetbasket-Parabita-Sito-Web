import React from 'react';
import '../components_css/MaglieShop.css';

import maglia1 from '../assets/1.png';
import maglia2 from '../assets/2.png';
import maglia3 from '../assets/3.png';
import maglia4 from '../assets/4.png';
import maglia5 from '../assets/5.png';
import maglia6 from '../assets/6.png';
import maglia7 from '../assets/7.png';
import maglia8 from '../assets/8.png';
import maglia9 from '../assets/9.png';
import maglia10 from '../assets/10.png';
import maglia11 from '../assets/11.png';
import maglia12 from '../assets/12.png';
import maglia13 from '../assets/13.png';
import maglia14 from '../assets/14.png';
import maglia15 from '../assets/15.png';

const prodotti = [
  {
    id: 1,
    nome: "Maglia STAFF 2024",
    descrizione: "La maglia ufficiale della sesta edizione. Tessuto traspirante professionale.",
    prezzo: "10.00€",
    img: maglia10
  },
  {
    id: 2,
    nome: "Maglia Ufficiale 2025",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia2
  },
{
    id: 3,
    nome: "Maglia STAFF 2025" ,
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "10.00€",
    img: maglia3
  },
    {
    id: 4,
    nome: "Canotta Official 2026",
    descrizione: "La maglia ufficiale della sesta edizione. Tessuto traspirante professionale.",
    prezzo: "25.00€",
    img: maglia11
  },
  {
    id: 5,
    nome: "T-Shirt Street Legend",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia15
  },
{
    id: 6,
    nome: "T-Shirt Street Legend",
    descrizione: "Edizione limitata in cotone 100% per il tempo libero.",
    prezzo: "20.00€",
    img: maglia12
  }
];

function MaglieShop() {
  const handleCheck = (nomeProdotto) => {
    // Esempio: apre WhatsApp con messaggio automatico
    const messaggio = encodeURIComponent(`Ciao! Vorrei verificare la disponibilità della ${nomeProdotto}.`);
    window.open(`https://wa.me/393270000000?text=${messaggio}`, '_blank');
  };

  return (
    <section className="shop-section">
      <h2 className="shop-title">Merchandising Ufficiale</h2>
      <div className="shop-grid">
        {prodotti.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.img} alt={item.nome} />
              <span className="price-tag">{item.prezzo}</span>
            </div>
            <div className="product-info">
              <h3>{item.nome}</h3>
              <p>{item.descrizione}</p>
              <button 
                className="check-btn" 
                onClick={() => handleCheck(item.nome)}
              >
                Verifica Disponibilità
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MaglieShop;