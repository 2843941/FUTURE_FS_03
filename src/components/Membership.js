function Membership() {
  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Membership Plans</h2>
        <p style={styles.subtitle}>Simple pricing. No surprises.</p>
        
        <div style={styles.card}>
          <h3 style={styles.planName}>Basic Monthly</h3>
          <div style={styles.price}>
            R100 <span style={styles.perMonth}>/ month</span>
          </div>
          <ul style={styles.features}>
            <li>✅ Free Weights Area</li>
            <li>✅ Cardio Machines</li>
            <li>✅ Locker Room Access</li>
            <li>✅ No Contract - Cancel Anytime</li>
          </ul>
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
             R100/month
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: '#1a4d2e',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '3rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    borderTop: '5px solid #4fc3f7'
  },
  planName: {
    fontSize: '1.8rem',
    color: '#1a4d2e',
    marginBottom: '1rem'
  },
  price: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1a4d2e',
    marginBottom: '1.5rem'
  },
  perMonth: {
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#666'
  },
  features: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    marginBottom: '2rem'
  },
  button: {
    backgroundColor: '#4fc3f7',
    color: '#1a4d2e',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    width: '100%',
    transition: 'transform 0.3s, background-color 0.3s'
  }
};

export default Membership;