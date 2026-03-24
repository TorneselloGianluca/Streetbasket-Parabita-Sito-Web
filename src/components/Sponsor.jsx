import React from 'react';
import '../components_css/Sponsor.css';


import Sponsor1 from "../assets/sponsor1.jpg";
import Sponsor5 from "../assets/sponsor5.png";
import Logo from "../assets/logoTorneo.png";

const sponsorLoghi = [
  { id: 1, name: "Sponsor 1", img: Sponsor1 },
  { id: 2, name: "Sponsor 2", img: Sponsor5 },
  { id: 3, name: "Sponsor 3", img: Logo }
];


function Sponsor() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {/* Prima serie di loghi */}
        {sponsorLoghi.map((logo) => (
          <div className="marquee-item" key={logo.id}>
            <img src={logo.img} alt={logo.name} />
          </div>
        ))}
        {/* Seconda serie identica per il loop infinito */}
        {sponsorLoghi.map((logo) => (
          <div className="marquee-item" key={`copy-${logo.id}`}>
            <img src={logo.img} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;