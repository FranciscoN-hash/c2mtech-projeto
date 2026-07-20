import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import About from './components/About';
import Scarcity from './components/Scarcity';
import Curiosity from './components/Curiosity';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Marquee />
      <Problems />
      <Solutions />
      <Portfolio />
      <Stats />
      <About />
      <Scarcity />
      <Curiosity />
      <Offer />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
