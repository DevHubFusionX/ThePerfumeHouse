import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from '../assets/moderate_ustaz.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Affordable Wears<br />
              <span className="text-green-800">for the Modest Man</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium quality traditional and urban wear at unbeatable prices. 
              Shop directly via WhatsApp for instant service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/your-number" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <FaWhatsapp size={20} />
                <span>Shop on WhatsApp</span>
              </a>
              <a href="#shop" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all text-center">
                Browse Products
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Moderate Ustaz Wears" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;