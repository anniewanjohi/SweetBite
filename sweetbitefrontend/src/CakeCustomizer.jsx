import React, { useState, useEffect } from 'react';

const backgroundImage = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop';

const flavorImages = {
  vanilla: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
  chocolate: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop',
  strawberry: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop',
  'red-velvet': 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=200&fit=crop',
  lemon: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=300&h=200&fit=crop',
  carrot: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=200&fit=crop'
};

const SweetBiteCakeDesigner = () => {
  const [cakeConfig, setCakeConfig] = useState({
    size: 'medium',
    layers: 2,
    flavor: 'vanilla',
    frosting: 'buttercream',
    color: 'pink',
    decorations: [],
    occasion: 'birthday',
    customMessage: '',
    specialInstructions: ''
  });

  const [totalPrice, setTotalPrice] = useState(55);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const sizeOptions = {
    small: { price: 4550, display: 'Small (6")' },     
    medium: { price: 7150, display: 'Medium (8")' },   
    large: { price: 9750, display: 'Large (10")' },     
    xlarge: { price: 12350, display: 'Extra Large (12")' } 
  };

  const decorationPrices = {
    flowers: 1950,
    sprinkles: 650,
    fruits: 1300,
    chocolate: 1560,
    figurines: 3250
  };

  const flavorPrices = {
    vanilla: 0,        
    chocolate: 650,   
    strawberry: 780,   
    'red-velvet': 1040,
    lemon: 520,        
    carrot: 910       
  };

  const colorSchemes = {
    pink: 'pink-gradient',
    blue: 'blue-gradient',
    rainbow: 'rainbow-gradient',
    chocolate: 'chocolate-gradient',
    elegant: 'elegant-gradient'
  };

  useEffect(() => {
    calculatePrice();
  }, [cakeConfig]);

  const calculatePrice = () => {
    let price = sizeOptions[cakeConfig.size].price;
    
    if (cakeConfig.layers > 1) {
      price += (cakeConfig.layers - 1) * 900;
    }
    
    price += flavorPrices[cakeConfig.flavor];
    
    cakeConfig.decorations.forEach(decoration => {
      price += decorationPrices[decoration];
    });
    
    setTotalPrice(price);
  };

  const handleSizeChange = (size) => {
    setCakeConfig(prev => ({ ...prev, size }));
  };

  const handleLayerChange = (layers) => {
    setCakeConfig(prev => ({ ...prev, layers: parseInt(layers) }));
  };

  const handleOptionChange = (option, value) => {
    setCakeConfig(prev => ({ ...prev, [option]: value }));
  };

  const handleDecorationToggle = (decoration) => {
    setCakeConfig(prev => ({
      ...prev,
      decorations: prev.decorations.includes(decoration)
        ? prev.decorations.filter(d => d !== decoration)
        : [...prev.decorations, decoration]
    }));
  };

  const scrollToCustomizer = () => {
    document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' });
  };

  const orderCake = () => {
    alert('Order placed! We will contact you shortly to confirm your custom cake order.');
  };

  const renderCakePreview = () => {
    return (
      <div 
        className="single-cake-preview"
        style={{ 
          backgroundImage: `url(${flavorImages[cakeConfig.flavor]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          height: '200px',
          borderRadius: '8px',
          position: 'relative'
        }}
      >
        <div className={`cake-overlay ${colorSchemes[cakeConfig.color]}`} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="cake-content">
            <span className="cake-flavor-label" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
              {cakeConfig.flavor.charAt(0).toUpperCase() + cakeConfig.flavor.slice(1).replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const getDecorationDisplay = () => {
    if (cakeConfig.decorations.length === 0) return 'No decorations';
    return cakeConfig.decorations.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ');
  };

  const getAIResponse = (message) => {
    const responses = {
      flavor: "I recommend trying our signature Red Velvet with cream cheese frosting! It's perfect for special occasions. You could also consider chocolate with raspberry filling for a rich, fruity combination.",
      decoration: "For beautiful decorations, try fresh edible flowers like roses or peonies! Macarons around the base also add elegant color and texture. Gold leaf accents can make any cake look luxurious.",
      birthday: "For birthdays, I suggest a vanilla base with colorful buttercream flowers and a fun drip effect! Add some sparklers on top for extra magic. What age are we celebrating?",
      wedding: "Wedding cakes look stunning with cascading sugar flowers and pearl details. A classic vanilla and strawberry combination with elegant white fondant never goes out of style!",
      theme: "What's your theme? I can suggest superhero designs with fondant figures, princess cakes with edible tiaras, or rustic naked cakes with fresh berries!",
      default: "That sounds delicious! I'd recommend starting with a classic flavor base and adding your personal touch with unique decorations. What occasion is this cake for?"
    };
    
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('flavor') || lowerMessage.includes('taste')) {
      return responses.flavor;
    } else if (lowerMessage.includes('decoration') || lowerMessage.includes('design')) {
      return responses.decoration;
    } else if (lowerMessage.includes('birthday')) {
      return responses.birthday;
    } else if (lowerMessage.includes('wedding')) {
      return responses.wedding;
    } else if (lowerMessage.includes('theme') || lowerMessage.includes('idea')) {
      return responses.theme;
    } else {
      return responses.default;
    }
  };

  const AIChatModal = ({ isOpen, onClose }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (message.trim()) {
        const response = getAIResponse(message);
        console.log('AI Response:', response);
        setMessage('');
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.5)' 
          }} 
          onClick={onClose}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          width: '90%',
          maxWidth: '500px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🤖</div>
            <h2 style={{ margin: 0, color: '#c44569' }}>Ask AI for Cake Inspirations</h2>
          </div>
          
          <div style={{ marginBottom: '1.5rem', color: '#666' }}>
            Hello! I'm your personal cake designer assistant. Ask me about flavors, decorations, or get creative cake ideas! 🍰
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
              placeholder="Ask me about cake designs, flavors, or decorating tips..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button 
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#c44569',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Ask AI
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#ff6b6b', color: 'white', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
          
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
              
             
              
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Design Your Dream Cake</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Interactive cake customization with real-time preview and pricing</p>
          <button 
            onClick={scrollToCustomizer}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Start Customizing
          </button>
        </div>
      </section>

      {/* AI Section */}
      <section style={{ padding: '2rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <button 
            onClick={() => setIsAIModalOpen(true)}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: '#c44569',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              margin: '0 auto'
            }}
          >
            <span>🍰</span>
            <span>Ask me about cake designs</span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Ask AI</span>
          </button>
        </div>
      </section>

      {/* Customization Section */}
      <section id="customize" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Cake Customization Studio</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Customization Panel */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '12px' }}>
              {/* Size Selection */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Cake Size</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {Object.entries(sizeOptions).map(([size, info]) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      style={{
                        padding: '0.75rem',
                        border: `2px solid ${cakeConfig.size === size ? '#ff6b6b' : '#ddd'}`,
                        backgroundColor: cakeConfig.size === size ? '#ff6b6b' : 'white',
                        color: cakeConfig.size === size ? 'white' : '#333',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {info.display}<br/>
                      KSH {info.price.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Layers */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Number of Layers</label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={cakeConfig.layers}
                  onChange={(e) => handleLayerChange(e.target.value)}
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>1 Layer</span>
                  <span>{cakeConfig.layers} Layer{cakeConfig.layers > 1 ? 's' : ''}</span>
                  <span>4 Layers</span>
                </div>
              </div>

              {/* Flavor */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Cake Flavor</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {Object.entries(flavorPrices).map(([flavor, price]) => (
                    <button
                      key={flavor}
                      onClick={() => handleOptionChange('flavor', flavor)}
                      style={{
                        padding: '0.75rem',
                        border: `2px solid ${cakeConfig.flavor === flavor ? '#ff6b6b' : '#ddd'}`,
                        backgroundColor: cakeConfig.flavor === flavor ? '#ff6b6b' : 'white',
                        color: cakeConfig.flavor === flavor ? 'white' : '#333',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {flavor.charAt(0).toUpperCase() + flavor.slice(1).replace('-', ' ')}
                      {price > 0 && <span> (+KSH {price.toLocaleString()})</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorations */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Decorations</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {Object.entries(decorationPrices).map(([decoration, price]) => (
                    <button
                      key={decoration}
                      onClick={() => handleDecorationToggle(decoration)}
                      style={{
                        padding: '0.75rem',
                        border: `2px solid ${cakeConfig.decorations.includes(decoration) ? '#ff6b6b' : '#ddd'}`,
                        backgroundColor: cakeConfig.decorations.includes(decoration) ? '#ff6b6b' : 'white',
                        color: cakeConfig.decorations.includes(decoration) ? 'white' : '#333',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {decoration.charAt(0).toUpperCase() + decoration.slice(1)}<br/>
                      (+KSH {price.toLocaleString()})
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>Custom Message</label>
                <input
                  type="text"
                  placeholder="Enter your custom message..."
                  value={cakeConfig.customMessage}
                  onChange={(e) => handleOptionChange('customMessage', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            {/* Preview Panel */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '12px' }}>
              <div style={{ marginBottom: '2rem' }}>
                {renderCakePreview()}
              </div>
              
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '1rem', 
                color: '#ff6b6b' 
              }}>
                KSH {totalPrice.toLocaleString()}
              </div>
              
              <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  {sizeOptions[cakeConfig.size].display} • {cakeConfig.layers} Layer{cakeConfig.layers > 1 ? 's' : ''} • {cakeConfig.flavor.charAt(0).toUpperCase() + cakeConfig.flavor.slice(1).replace('-', ' ')}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  Decorations: {getDecorationDisplay()}
                </div>
                <div>
                  Occasion: {cakeConfig.occasion.charAt(0).toUpperCase() + cakeConfig.occasion.slice(1).replace('-', ' ')}
                </div>
              </div>
              
              <button 
                onClick={orderCake}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Order This Cake
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Modal */}
      <AIChatModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
};

export default SweetBiteCakeDesigner;