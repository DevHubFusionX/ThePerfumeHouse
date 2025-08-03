import React, { useState } from 'react';
import { FaWhatsapp, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Logo size="md" />
            <h1 className="text-2xl font-bold text-gray-800">Moderate's Textile</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Products</Link>
            <Link to="/combos" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Combos</Link>
            <Link to="/#order" className="text-gray-700 hover:text-green-800 font-medium transition-colors">How to Order</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Contact</Link>
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
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Products
              </Link>
              <Link 
                to="/combos" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Combos
              </Link>
              <Link 
                to="/#order" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                How to Order
              </Link>
              <Link 
                to="/#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              >
                Contact
              </Link>
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