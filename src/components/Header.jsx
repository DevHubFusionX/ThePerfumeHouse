import React from 'react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-amber-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">MU</span>
            </div>
            <h1 className="text-2xl font-bold text-amber-900">Moderate Ustaz</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-stone-700 hover:text-amber-700 font-medium transition-colors">Home</a>
            <a href="#about" className="text-stone-700 hover:text-amber-700 font-medium transition-colors">About</a>
            <a href="#shop" className="text-stone-700 hover:text-amber-700 font-medium transition-colors">Shop</a>
            <a href="#thoughts" className="text-stone-700 hover:text-amber-700 font-medium transition-colors">Thoughts</a>
            <a href="#contact" className="text-stone-700 hover:text-amber-700 font-medium transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-3">
            <a href="https://wa.me/your-number" className="text-green-600 hover:text-green-700 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://twitter.com/moderate_ustaz" className="text-blue-500 hover:text-blue-600 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </header>
      
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/your-number" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50">
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Header;