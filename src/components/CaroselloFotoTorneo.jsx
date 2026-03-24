import React from 'react';
import '../components_css/CaroselloFotoTorneo.css';

// Importazioni (assumendo che le foto siano 10)
import Foto1 from '../assets/foto_torneo/foto1.jpg';
import Foto2 from '../assets/foto_torneo/foto2.jpg';
import Foto3 from '../assets/foto_torneo/foto3.jpg';
import Foto4 from '../assets/foto_torneo/foto4.jpg';
import Foto5 from '../assets/foto_torneo/foto5.jpg';
import Foto6 from '../assets/foto_torneo/foto6.jpg';
import Foto7 from '../assets/foto_torneo/foto7.jpg';
import Foto8 from '../assets/foto_torneo/foto8.jpg';
import Foto9 from '../assets/foto_torneo/foto9.jpg';
import Foto10 from '../assets/foto_torneo/foto10.jpg';

const CaroselloFotoTorneo = () => {
  const listaBase = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10];
  const immagini = [...listaBase, ...listaBase]; 

  return (
    <div className="carosello-container-full">
      <div className="carosello-track">
        {immagini.map((img, index) => (
          <div className="carosello-slide" key={index}>
            <img src={img} alt={`Streetbasket Parabita ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaroselloFotoTorneo;