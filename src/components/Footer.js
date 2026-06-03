function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Column */}
          <div style={styles.column}>
            <h3 style={styles.logo}>💪 Strength & Power</h3>
            <p style={styles.tagline}>Affordable fitness for everyone.</p>
            <p style={styles.price}>Just R100/month</p>
          </div>
          
          {/* Quick Links Column */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li><a href="#home" style={styles.link}>Home</a></li>
              <li><a href="#membership" style={styles.link}>Membership</a></li>
              <li><a href="#facilities" style={styles.link}>Facilities</a></li>
              <li><a href="#hours" style={styles.link}>Hours</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info Column */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Contact Us</h4>
            <ul style={styles.contactList}>
              <li>📍 123 Main Street, Sunnyside, JHB</li>
              <li>📞 (012) 345 6789</li>
              <li>💬 <a href="https://wa.me/27721234567" style={styles.inlineLink}>WhatsApp: 072 123 4567</a></li>
              <li>✉️ <a href="mailto:info@strengthpowergym.co.za" style={styles.inlineLink}>info@strengthpowergym.co.za</a></li>
            </ul>
          </div>
          
          {/* Hours Column */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Opening Hours</h4>
            <ul style={styles.hoursList}>
              <li>Mon-Fri: 5am - 10pm</li>
              <li>Sat: 6am - 8pm</li>
              <li>Sun: 7am - 6pm</li>
              <li>Public Holidays: 8am - 4pm</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>&copy; {currentYear} Strength & Power Gym. All rights reserved.</p>
          <p style={styles.credit}>Website built for Future Interns - Full Stack Task 3</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a4d2e',
    color: 'white',
    padding: '3rem 2rem 1rem',
    marginTop: '0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  column: {
    textAlign: 'left'
  },
  logo: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#4fc3f7'
  },
  tagline: {
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    opacity: 0.9
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4fc3f7',
    marginTop: '0.5rem'
  },
  columnTitle: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    color: '#4fc3f7'
  },
  linkList: {
    listStyle: 'none',
    padding: 0
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '1.8'
  },
  hoursList: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '1.8'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    lineHeight: '2',
    transition: 'color 0.3s'
  },
  inlineLink: {
    color: '#4fc3f7',
    textDecoration: 'none'
  },
  bottomBar: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    fontSize: '0.8rem',
    opacity: 0.8
  },
  credit: {
    marginTop: '0.5rem',
    fontSize: '0.75rem'
  }
};

// Add hover effect for links
const addLinkHover = () => {
  const links = document.querySelectorAll('footer a');
  links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      e.target.style.color = '#4fc3f7';
    });
    link.addEventListener('mouseleave', (e) => {
      if (e.target.closest('.footer-link')) {
        e.target.style.color = 'white';
      } else {
        e.target.style.color = '#4fc3f7';
      }
    });
  });
};

// Run after component mounts
setTimeout(addLinkHover, 100);

export default Footer;