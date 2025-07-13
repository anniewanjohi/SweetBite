import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Cakes');

  const cakes = [
   
    
    {
      id: 3,
      name: 'Chocolate Decadence',
      description: 'Rich chocolate cake with ganache and fresh berries',
      price: 'KSH 12,900',
      category: 'Custom',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Anniversary cake',
      description: 'Heart-shaped strawberry cake with cream cheese frosting',
      price: 'KSH 14,900',
      category: 'Anniversary',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop'
    },
    
    {
      id: 6,
      name: 'Garden Wedding',
      description: 'Floral wedding cake with edible flowers and natural decorations',
      price: 'KSH 34,900',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop'
    },
    
    
    {
      id: 9,
      name: 'Unicorn Dreams',
      description: 'Magical unicorn cake with rainbow layers and sparkles',
      price: 'KSH 11,900',
      category: 'Birthday',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop'
    }
  ];

  const categories = ['All Cakes', 'Wedding', 'Birthday', 'Anniversary', 'Custom'];

  const filteredCakes = activeFilter === 'All Cakes' 
    ? cakes 
    : cakes.filter(cake => cake.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      'Wedding': '#ff6b6b',
      'Birthday': '#ff6b6b',
      'Anniversary': '#ff6b6b',
      'Custom': '#ff6b6b'
    };
    return colors[category] || '#ff6b6b';
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      padding: '2rem 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem' 
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: '1rem'
          }}>
            Our Cake Gallery
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover our stunning collection of handcrafted cakes, each one a masterpiece of flavor and artistry
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: activeFilter === category ? 'none' : '2px solid #ff6b6b',
                backgroundColor: activeFilter === category ? '#ff6b6b' : 'transparent',
                color: activeFilter === category ? 'white' : '#ff6b6b',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== category) {
                  e.target.style.backgroundColor = '#ff6b6b';
                  e.target.style.color = 'white';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== category) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ff6b6b';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cake Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredCakes.map(cake => (
            <div
              key={cake.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src={cake.image} 
                alt={cake.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>
                  {cake.name}
                </h3>
                <p style={{ 
                  color: '#666', 
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {cake.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#ff6b6b'
                  }}>
                    {cake.price}
                  </span>
                  <span 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      backgroundColor: getCategoryColor(cake.category),
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    {cake.category.toLowerCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;