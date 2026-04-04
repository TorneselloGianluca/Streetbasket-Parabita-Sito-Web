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
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Official Merchandise</h1>
        <p>Wear your passion. High-quality jerseys for true fans.</p>
      </header>

      <div style={styles.grid}>
        {jerseys.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={item.image} alt={item.name} style={styles.image} />
            </div>
            <div style={styles.details}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.description}>{item.description}</p>
              <p style={styles.price}>{item.price}</p>
              <button 
                style={styles.button}
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

// Simple CSS-in-JS for styling
const styles = {
  page: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1a1a1a',
    marginBottom: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    width: '100%',
    height: '350px',
    backgroundColor: '#eee'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  details: {
    padding: '1.5rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  itemName: {
    fontSize: '1.25rem',
    margin: '0 0 0.5rem 0'
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem',
    flexGrow: 1
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: '1rem'
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s'
  }
};

// THIS IS THE LINE THAT FIXES YOUR ERROR:
export default Merchandising;