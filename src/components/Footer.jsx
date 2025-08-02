import React from 'react';
import { FaWhatsapp, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MU</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-400">Moderate Ustaz</h3>
            </div>
            <p className="text-stone-300 leading-relaxed">
              A Nigerian, student of knowledge. Sharing wisdom, reflections, and quality clothing materials with the community.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-stone-300 hover:text-amber-400 transition-colors">Home</a>
              <a href="#about" className="block text-stone-300 hover:text-amber-400 transition-colors">About</a>
              <a href="#shop" className="block text-stone-300 hover:text-amber-400 transition-colors">Shop</a>
              <a href="#thoughts" className="block text-stone-300 hover:text-amber-400 transition-colors">Thoughts</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://wa.me/your-number" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://twitter.com/moderate_ustaz" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
            <p className="text-stone-300 text-sm">
              WhatsApp: +234 XXX XXX XXXX
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8 text-center">
          <p className="text-stone-400 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-2" /> for the community
          </p>
          <p className="text-stone-500 text-sm mt-2">
            © 2025 Moderate Ustaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;