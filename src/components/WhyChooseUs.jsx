import React from 'react';
import { FaCheckCircle, FaTruck, FaHeadphones, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCheckCircle,
      title: 'Quality Guarantee',
      description: 'Premium fabrics sourced from trusted suppliers with quality assurance on every product.'
    },
    {
      icon: FaTruck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Nigeria with real-time tracking and secure packaging.'
    },
    {
      icon: FaHeadphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team available round the clock via WhatsApp and phone.'
    },
    {
      icon: FaAward,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and combo deals for maximum value.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Moderate's Textile</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional service and premium quality products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;