function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>💪 Strength & Power</h2>
      <ul style={styles.navLinks}>
        <li>
          <a 
            href="#home" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#4fc3f7'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#membership" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#4fc3f7'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Membership
          </a>
        </li>
        <li>
          <a 
            href="#facilities" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#4fc3f7'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Facilities
          </a>
        </li>
        <li>
          <a 
            href="#hours" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#4fc3f7'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Hours
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#4fc3f7'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Inline styles (temporary - we'll move to CSS later)
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a4d2e', // Dark green
    padding: '1rem 2rem',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  }
};

export default Navbar;