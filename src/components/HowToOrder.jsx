import React from 'react';
import { FaSearch, FaWhatsapp, FaShoppingCart, FaTruck } from 'react-icons/fa';

const HowToOrder = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-green-600" />,
      title: "Browse Products",
      description: "Explore our collection of quality wears and combos"
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-600" />,
      title: "Click WhatsApp",
      description: "Tap the WhatsApp button on any product you like"
    },
    {
      icon: <FaShoppingCart className="text-3xl text-green-600" />,
      title: "Place Your Order",
      description: "Send us your size, color preference, and quantity"
    },
    {
      icon: <FaTruck className="text-3xl text-green-600" />,
      title: "Get Delivery",
      description: "We'll deliver to your location within 2-3 days"
    }
  ];

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Order</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple 4-step process to get your perfect outfit</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">Our customer service is available 24/7 to assist you</p>
            <a href="https://wa.me/2347069257877" className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all">
              <FaWhatsapp size={20} />
              <span>Chat with Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;