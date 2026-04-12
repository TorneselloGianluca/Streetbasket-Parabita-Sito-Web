import React from 'react';

const StreetbasketNav = () => {
  const menuItems = [
    { label: 'Il Progetto', target: '#descrizione' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Shop', target: '#shop' },
    { label: 'Contatti', target: '#contatti' },
  ];

  return (
    <nav className="sticky top-[70px] md:top-15 bg-white z-50 border-b border-gray-200 py-3.75 w-full flex justify-center shadow-sm">
      <ul className="flex justify-center gap-10 md:gap-6 list-none m-0 p-0">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <a 
              href={item.target} 
              className="group no-underline text-gray-600 font-bold text-sm uppercase tracking-px transition-all duration-300 hover:text-blue-600 relative cursor-pointer"
            >
              {item.label}
              <span className="absolute w-0 h-0.5 bottom-[-5px] left-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      <style>{`
        section[id], footer[id] {
          scroll-margin-top: 130px;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};

export default StreetbasketNav;