import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Logo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="md" showDetails={false} />
              <h3 className="text-xl font-bold text-green-400 mt-2">Moderate's Textile</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium quality traditional and urban wear at affordable prices. Your trusted clothing partner.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#shop" className="block text-gray-300 hover:text-green-400 transition-colors">Shop</a>
              <a href="#combos" className="block text-gray-300 hover:text-green-400 transition-colors">Combos</a>
              <a href="#order" className="block text-gray-300 hover:text-green-400 transition-colors">How to Order</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://wa.me/your-number" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://instagram.com/moderate_ustaz" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              WhatsApp: +234 706 925 7877
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Moderate's Textile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;