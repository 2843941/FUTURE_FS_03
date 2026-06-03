import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Facilities from './components/Facilities';
import HoursLocation from './components/HoursLocation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Membership />
      <Facilities />
      <HoursLocation/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;