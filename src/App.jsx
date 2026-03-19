import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="font-heebo">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Benefits />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
