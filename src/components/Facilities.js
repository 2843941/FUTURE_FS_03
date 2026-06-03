function Facilities() {
  const facilitiesList = [
    {
      emoji: "🏋️",
      title: "Free Weights",
      description: "Dumbbells from 5kg to 50kg, barbells, benches, and squat racks"
    },
    {
      emoji: "🏃",
      title: "Cardio Machines",
      description: "Treadmills, stationary bikes, rowing machines, and ellipticals"
    },
    {
      emoji: "🔒",
      title: "Lockers & Showers",
      description: "Secure lockers and clean shower facilities with hot water"
    },
    {
      emoji: "💪",
      title: "Strength Machines",
      description: "Leg press, cable machines, lat pulldown, and chest press"
    },
    {
      emoji: "🧘",
      title: "Stretching Area",
      description: "Mats, foam rollers, and dedicated space for warm-ups"
    },
    {
      emoji: "🎵",
      title: "Sound System",
      description: "High-quality audio system to keep you motivated"
    }
  ];

  return (
    <section id="facilities" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Our Facilities</h2>
        <p style={styles.subtitle}>Everything you need for a great workout</p>
        
        <div style={styles.grid}>
          {facilitiesList.map((facility, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.emoji}>{facility.emoji}</div>
              <h3 style={styles.cardTitle}>{facility.title}</h3>
              <p style={styles.cardDescription}>{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: 'white'
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },
  emoji: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#1a4d2e',
    marginBottom: '0.8rem'
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.5'
  }
};

export default Facilities;