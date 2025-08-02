import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
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
          <div className="flex space-x-3">
            <a href="https://wa.me/your-number" className="text-green-600 hover:text-green-700 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://instagram.com/moderate_ustaz" className="text-pink-500 hover:text-pink-600 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </header>
      
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/your-number" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 animate-pulse">
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Header;