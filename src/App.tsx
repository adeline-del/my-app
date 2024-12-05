import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Team } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AboutCEO } from './components/About';



function App() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Products />
         <AboutCEO />
         <Team />
        <Footer />
      </div>
  );
}

export default App;