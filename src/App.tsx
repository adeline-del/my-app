import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { FAQS } from './components/Faq';
import { Footer } from './components/Footer';
import { AboutCEO } from './components/About';




function App() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Products />
         <AboutCEO />
         <FAQS />
        <Footer />
      </div>
  );
}

export default App;