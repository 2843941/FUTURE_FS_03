function Hero() {
  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Strong Body. <span style={{ color: '#4fc3f7' }}>Strong Mind.</span>
        </h1>
        <p style={styles.subtitle}>
          Only <strong style={{ color: '#4fc3f7', fontSize: '2rem' }}>R100/month</strong>
          <br />
          No contracts. No hidden fees. Just results.
        </p>
        <button 
          style={styles.button}
          onClick={scrollToContact}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1a4d2e';
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#4fc3f7';
            e.target.style.color = '#1a4d2e';
            e.target.style.transform = 'scale(1)';
          }}
        >
          💪 Join Now 
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '80vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  overlay: {
    backgroundColor: 'rgba(26, 77, 46, 0.85)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '2rem'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem'
  },
  button: {
    backgroundColor: '#4fc3f7',
    color: '#1a4d2e',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s'
  }
};

export default Hero;