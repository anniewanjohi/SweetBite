import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CakeCustomizer from './CakeCustomizer';
import AboutUs from './aboutUs';
import Gallery from './gallery'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar" style={{
          backgroundColor: '#ff6b6b',
          padding: '1rem 0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem'
          }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                🍰 SweetBite order system
              </div>
            </Link>
                     
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/" style={{ 
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}>
                HOME
              </Link>
              <Link to="/about" style={{ 
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}>
                ABOUT US
              </Link>
              <Link to="/gallery" style={{ 
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}>
                GALLERY
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<CakeCustomizer />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;