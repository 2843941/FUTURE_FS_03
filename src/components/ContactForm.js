import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function ContactForm() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // State to show success/error messages
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ submitted: false, loading: true, error: null });
    
    try {
      // Send data to Firebase Firestore
      await addDoc(collection(db, 'leads'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: new Date().toISOString(),
        status: 'new' // new, contacted, converted
      });
      
      // Success - clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus({ submitted: true, loading: false, error: null });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, loading: false, error: null });
      }, 5000);
      
    } catch (error) {
      console.error('Error adding lead:', error);
      setStatus({ submitted: false, loading: false, error: 'Failed to submit. Please try again.' });
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Join Strength & Power</h2>
        <p style={styles.subtitle}>Fill out the form below and we'll contact you within 24 hours</p>
        
        <div style={styles.formContainer}>
          {/* Special Offer Banner */}
          <div style={styles.offerBanner}>
             First month FREE for first 50 members! 
          </div>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your full name"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your email"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={styles.textarea}
                placeholder="Any questions about membership?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              style={styles.button}
              disabled={status.loading}
              onMouseEnter={(e) => {
                if (!status.loading) {
                  e.target.style.backgroundColor = '#1a4d2e';
                  e.target.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!status.loading) {
                  e.target.style.backgroundColor = '#4fc3f7';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              {status.loading ? 'Sending...' : 'Send Message - Join Now!'}
            </button>
            
            {/* Success Message */}
            {status.submitted && (
              <div style={styles.successMessage}>
                ✅ Thank you! We'll contact you within 24 hours about your R100/month membership!
              </div>
            )}
            
            {/* Error Message */}
            {status.error && (
              <div style={styles.errorMessage}>
                ❌ {status.error}
              </div>
            )}
          </form>
          
          {/* Alternative Contact */}
          <div style={styles.alternativeContact}>
            <p>Or contact us directly:</p>
            <div style={styles.contactIcons}>
              <span>📞 <a href="tel:+27123456789" style={styles.contactLink}>073 293 5642</a></span>
              <span>💬 <a href="https://wa.me/27721234567" style={styles.contactLink}>WhatsApp</a></span>
              <span>📧 <a href="mailto:info@strengthpowergym.co.za" style={styles.contactLink}>Email Us</a></span>
            </div>
          </div>
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
    maxWidth: '800px',
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
  formContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
  },
  offerBanner: {
    backgroundColor: '#1a4d2e',
    color: '#4fc3f7',
    padding: '1rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    textAlign: 'left'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#1a4d2e'
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#4fc3f7',
    color: '#1a4d2e',
    border: 'none',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s',
    marginTop: '1rem'
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem'
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem'
  },
  alternativeContact: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #ddd'
  },
  contactIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '0.5rem',
    flexWrap: 'wrap'
  },
  contactLink: {
    color: '#1a4d2e',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default ContactForm;