import React from 'react';

const AboutUs = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem'
    },
    aboutHero: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    aboutTitle: {
      fontSize: '3rem',
      color: '#ff6b6b',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block'
    },
    aboutSubtitle: {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.8'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      marginBottom: '3rem'
    },
    contentCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '4px solid #ff6b6b'
    },
    sectionIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      display: 'block'
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    sectionContent: {
      color: '#666',
      lineHeight: '1.8'
    },
    locationDetails: {
      marginTop: '1rem'
    },
    locationDetailsP: {
      marginBottom: '0.5rem',
      fontWeight: '500'
    },
    contactInfo: {
      marginTop: '1rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '0.5rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      transition: 'background 0.3s ease'
    },
    contactItemStrong: {
      color: '#ff6b6b',
      marginRight: '0.5rem',
      minWidth: '80px'
    },
    contactItemA: {
      color: '#007bff',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    featuresSection: {
      background: 'white',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      marginBottom: '3rem'
    },
    featuresTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#ff6b6b',
      marginBottom: '2rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    featureItem: {
      textAlign: 'center',
      padding: '1.5rem',
      borderRadius: '10px',
      background: '#f8f9fa',
      transition: 'transform 0.3s ease, background 0.3s ease'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    featureTitle: {
      fontSize: '1.2rem',
      color: '#333',
      marginBottom: '0.5rem'
    },
    featureDescription: {
      color: '#666',
      fontSize: '0.9rem'
    },
    ctaSection: {
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      color: 'white',
      padding: '3rem',
      borderRadius: '15px',
      marginTop: '3rem'
    },
    ctaTitle: {
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    ctaText: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      opacity: '0.9'
    },
    ctaButton: {
      display: 'inline-block',
      background: 'white',
      color: '#ff6b6b',
      padding: '1rem 2rem',
      textDecoration: 'none',
      borderRadius: '25px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
    }
  };

  return (
    <div style={styles.body}>
      <main style={styles.aboutContainer}>
        {/* Hero Section */}
        <section style={styles.aboutHero}>
          <h1 style={styles.aboutTitle}>About SweetBite</h1>
          <p style={styles.aboutSubtitle}>
            Welcome to SweetBite — your go-to cake customization bakery. We specialize in crafting personalized cakes made with love, creativity, and the finest ingredients.
          </p>
        </section>

        {/* Content Grid */}
        <div style={styles.contentGrid}>
          {/* Location Card */}
          <div style={styles.contentCard}>
            <span style={styles.sectionIcon}>📍</span>
            <h2 style={styles.sectionTitle}>Our Location</h2>
            <div style={styles.sectionContent}>
              <div style={styles.locationDetails}>
                <p style={styles.locationDetailsP}><strong>SweetBite Bakery</strong></p>
                <p style={styles.locationDetailsP}>123 Cupcake Lane</p>
                <p style={styles.locationDetailsP}>Nairobi, Kenya</p>
              </div>
              <p style={{marginTop: '1rem'}}>
                Located in the heart of Nairobi, our bakery is a warm and welcoming space where sweet dreams come to life. Visit us to experience the magic of custom cake creation!
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div style={styles.contentCard}>
            <span style={styles.sectionIcon}>📞</span>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <div style={styles.sectionContent}>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <strong style={styles.contactItemStrong}>General:</strong>
                  <a href="mailto:info@sweetbite.com" style={styles.contactItemA}>info@sweetbite.com</a>
                </div>
                <div style={styles.contactItem}>
                  <strong style={styles.contactItemStrong}>Orders:</strong>
                  <a href="mailto:orders@sweetbite.com" style={styles.contactItemA}>orders@sweetbite.com</a>
                </div>
                <div style={styles.contactItem}>
                  <strong style={styles.contactItemStrong}>Support:</strong>
                  <a href="mailto:support@sweetbite.com" style={styles.contactItemA}>support@sweetbite.com</a>
                </div>
              </div>
              <p style={{marginTop: '1rem'}}>
                Have questions about your custom cake order? Our friendly team is here to help make your vision a delicious reality!
              </p>
            </div>
          </div>
        </div>

        
        <section style={styles.featuresSection}>
          <h2 style={styles.featuresTitle}>Why Choose SweetBite?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🎨</div>
              <h3 style={styles.featureTitle}>Custom Designs</h3>
              <p style={styles.featureDescription}>Every cake is uniquely designed to match your vision and celebration needs.</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🌟</div>
              <h3 style={styles.featureTitle}>Premium Ingredients</h3>
              <p style={styles.featureDescription}>We use only the finest, freshest ingredients to ensure exceptional taste and quality.</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Fast Delivery</h3>
              <p style={styles.featureDescription}>Quick and reliable delivery service to bring your perfect cake right to your door.</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>💝</div>
              <h3 style={styles.featureTitle}>Special Occasions</h3>
              <p style={styles.featureDescription}>From birthdays to weddings, we create memorable cakes for all of life's sweet moments.</p>
            </div>
          </div>
        </section>

        
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Create Your Dream Cake?</h2>
          <p style={styles.ctaText}>
            Join thousands of satisfied customers who have trusted SweetBite to make their celebrations extra special.
          </p>
          <a href="/" style={styles.ctaButton}>Start Customizing Now</a>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;