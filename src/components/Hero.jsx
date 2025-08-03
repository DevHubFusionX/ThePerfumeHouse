import React from 'react';
import { FaWhatsapp, FaPhone, FaCheckCircle, FaShippingFast } from 'react-icons/fa';
import heroImage from '../assets/moderate_textile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Banner */}
         
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nigeria's Premier
                <span className="block text-green-700">Textile Supplier</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Moderate's Textile</strong> is your trusted partner for premium quality fabrics, 
                traditional wear, and modern textiles. We serve businesses, tailors, and individuals 
                across all 36 states with guaranteed quality and competitive wholesale prices.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-600 text-lg" />
                  <span className="text-gray-700 font-medium">Wholesale Prices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaShippingFast className="text-green-600 text-lg" />
                  <span className="text-gray-700 font-medium">Nationwide Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-600 text-lg" />
                  <span className="text-gray-700 font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-600 text-lg" />
                  <span className="text-gray-700 font-medium">24/7 Business Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="https://wa.me/2347069257877" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <FaWhatsapp size={20} />
                  <span>Get Quote Now</span>
                </a>
                <a href="/products" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold transition-all text-center">
                  Browse Catalog
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Business Hours:</strong> Mon-Sat 8AM-6PM</p>
                <p className="text-sm text-gray-600"><strong>Contact:</strong> 0706 925 7877 | WhatsApp Available</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img src={heroImage} alt="Moderate's Textile Showroom" className="w-full h-[400px] object-cover rounded-xl" />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">5K+</div>
                      <div className="text-xs text-gray-600">Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">36</div>
                      <div className="text-xs text-gray-600">States</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">100+</div>
                      <div className="text-xs text-gray-600">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;