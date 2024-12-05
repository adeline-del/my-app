import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Team } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { CartProvider } from './context/CartContext';
import { AboutCEO } from './components/About';



function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <Cart />
        <Hero />
        <AboutCEO />
        <Products />
        <Team />
        <Checkout />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;