import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from '../assets/moderate_ustaz.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
              Premium Textiles<br />
              <span className="text-green-800 animate-pulse">at Affordable Prices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Discover Moderate's Textile - your trusted source for quality fabrics, traditional wear, and modern designs. 
              Experience premium textiles at prices that won't break the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
              <a href="https://wa.me/2347069257877" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-1 hover:scale-105">
                <FaWhatsapp size={20} className="animate-bounce" />
                <span>Shop on WhatsApp</span>
              </a>
              <a href="#shop" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all text-center transform hover:-translate-y-1 hover:scale-105">
                Browse Products
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-right">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
              <img src={heroImage} alt="Moderate's Textile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;