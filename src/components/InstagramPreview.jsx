import React from 'react';
import { FaInstagram } from 'react-icons/fa';

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
    <section className="py-15 px-5% bg-street-light-bg text-center">
      <div className="mb-10">
        <FaInstagram className="text-5xl text-[#E1306C] mx-auto mb-4" />
        <h2 className="text-4xl m-0 text-street-light-text">Seguici su Instagram</h2>
        <p className="text-street-secondary-text font-semibold mb-5">@streetbasket_parabita</p>
        <a 
          href="https://www.instagram.com/streetbasket_parabita" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block px-6 py-2.5 bg-[#646cff] text-white rounded-full font-bold transition hover:bg-[#E1306C] hover:-translate-y-1"
        >
          Segui il profilo
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-3.75 md:gap-4 max-w-2xl mx-auto sm:grid-cols-2 sm:gap-2">
        {instaPosts.map((post) => (
          <div key={post.id} className="group relative aspect-square overflow-hidden rounded cursor-pointer">
            <img 
              src={post.img} 
              alt="Instagram Post" 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300">
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramPreview;