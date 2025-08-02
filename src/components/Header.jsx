import React, { useState } from 'react';
import { FaWhatsapp, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MU</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Moderate Ustaz Wears</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Shop</a>
            <a href="#combos" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Combos</a>
            <a href="#order" className="text-gray-700 hover:text-green-800 font-medium transition-colors">How to Order</a>
            <a href="#contact" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex space-x-3">
              <a href="https://wa.me/2347069257877" className="text-green-600 hover:text-green-700 transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://x.com/moderate_ustaz" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-green-800 transition-colors"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-6 py-4 space-y-4">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Home
              </a>
              <a 
                href="#shop" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Shop
              </a>
              <a 
                href="#combos" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Combos
              </a>
              <a 
                href="#order" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                How to Order
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Contact
              </a>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <a href="https://wa.me/2347069257877" className="text-green-600 hover:text-green-700 transition-colors">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://x.com/moderate_ustaz" className="text-blue-500 hover:text-blue-600 transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/2347069257877" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 animate-pulse">
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Header;