function HoursLocation() {
  return (
    <section id="hours" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Hours & Location</h2>
        <p style={styles.subtitle}>Come visit us or check our operating hours</p>
        
        <div style={styles.grid}>
          {/* Hours Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            }}
          >
            <div style={styles.icon}>🕐</div>
            <h3 style={styles.cardTitle}>Opening Hours</h3>
            <ul style={styles.hoursList}>
              <li><span>Monday - Friday:</span><span>5:00 AM - 10:00 PM</span></li>
              <li><span>Saturday:</span><span>6:00 AM - 8:00 PM</span></li>
              <li><span>Sunday:</span><span>7:00 AM - 6:00 PM</span></li>
              <li><span>Public Holidays:</span><span>8:00 AM - 4:00 PM</span></li>
            </ul>
            <div style={styles.badge}>Open 7 Days a Week!</div>
          </div>

          {/* Location Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            }}
          >
            <div style={styles.icon}>📍</div>
            <h3 style={styles.cardTitle}>Our Location</h3>
            <p style={styles.address}>
              123 Main Street<br />
              Sunnyside<br />
              Johannesburg, 2000
            </p>
            <div style={styles.mapContainer}>
              <iframe 
                title="gym-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.234567890123!2d28.047305!3d-26.195246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c0a5c5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sJohannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button 
              style={styles.directionsButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1a4d2e';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4fc3f7';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => window.open('https://maps.google.com/?q=Johannesburg+gym', '_blank')}
            >
              🗺️ Get Directions
            </button>
          </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#1a4d2e',
    marginBottom: '1.5rem'
  },
  hoursList: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  address: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  mapContainer: {
    marginBottom: '1.5rem',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  directionsButton: {
    backgroundColor: '#4fc3f7',
    color: '#1a4d2e',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s'
  },
  badge: {
    backgroundColor: '#1a4d2e',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    display: 'inline-block',
    fontSize: '0.9rem',
    marginTop: '1rem'
  }
};

export default HoursLocation;