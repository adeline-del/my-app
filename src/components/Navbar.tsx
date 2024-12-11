import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center flex-grow">
        <a href="#home" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/djfnmztu9/image/upload/v1733642857/logo_no_background_xifxdq.png" 
            alt="Eggcelent Hatcheries Logo" 
            className="h-14 w-22" 
          />
          <span className="ml-0 text-3xl font-bold text-gray-800">Eggcelent Hatcheries</span>
        </a>
      </div>  
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <a href="#home" className=" text-gray-800 hover:text-yellow-500">Home</a>
            <a href="#products" className="text-gray-800 hover:text-yellow-500">Products</a>
            <a href="#about" className="text-gray-800 hover:text-yellow-500">About</a>
            <a href="#faqs" className="text-gray-800 hover:text-yellow-500">Educational FAQs</a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-500">Contact</a>
          </div>

          {/* Menu Button for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-yellow-500"
              title="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="#products" className="block px-3 py-2 text-gray-800 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>Products</a>
      <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>About</a>
      <a href="#faqs" className="block px-3 py-2 text-gray-800 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>Educational FAQs</a>
      <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </div>
  </div>
      )}
    </nav>
  );
}
