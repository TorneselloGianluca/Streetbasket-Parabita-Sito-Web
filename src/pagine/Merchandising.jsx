import React from 'react';

// Data for the jerseys you are selling
const jerseys = [
  {
    id: 1,
    name: "Home Jersey 2026",
    price: "85.00€",
    image: "https://via.placeholder.com/300x400?text=Home+Jersey",
    description: "The classic colors for our home matches."
  },
  {
    id: 2,
    name: "Away Jersey 2026",
    price: "80.00€",
    image: "https://via.placeholder.com/300x400?text=Away+Jersey",
    description: "Elegant white and gold design for away games."
  },
  {
    id: 3,
    name: "Third Kit - Neon",
    price: "80.00€",
    image: "https://via.placeholder.com/300x400?text=Third+Kit",
    description: "Limited edition electric neon style."
  },
  {
    id: 4,
    name: "Training Top",
    price: "45.00€",
    image: "https://via.placeholder.com/300x400?text=Training+Top",
    description: "Breathable fabric, perfect for high performance."
  }
];

const Merchandising = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Official Merchandise</h1>
        <p className="text-gray-600">Wear your passion. High-quality jerseys for true fans.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {jerseys.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg flex flex-col hover-lift">
            <div className="w-full h-96 bg-gray-200">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
              <p className="text-lg font-bold text-street-orange mb-4">{item.price}</p>
              <button 
                className="bg-black text-white px-4 py-2 rounded font-semibold transition-colors duration-300 hover:bg-gray-800 cursor-pointer"
                onClick={() => alert(`Added ${item.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// THIS IS THE LINE THAT FIXES YOUR ERROR:
export default Merchandising;