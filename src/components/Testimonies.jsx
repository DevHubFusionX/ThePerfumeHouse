import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonies = () => {
  const testimonies = [
    {
      id: 1,
      name: "Ahmad Ibrahim",
      location: "Lagos",
      rating: 5,
      text: "Excellent quality fabrics at affordable prices. The traditional wear I ordered exceeded my expectations. Fast delivery too!",
      image: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Fatima Yusuf",
      location: "Abuja",
      rating: 5,
      text: "Moderate's Textile has the best collection of modest wear. The customer service is outstanding and prices are very reasonable.",
      image: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Musa Abdullahi",
      location: "Kano",
      rating: 5,
      text: "I've been ordering from them for months. Quality is consistent and the WhatsApp ordering process is so convenient.",
      image: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      location: "Kaduna",
      rating: 5,
      text: "Beautiful designs and excellent fabric quality. My husband loves his new traditional outfits from Moderate's Textile.",
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <section id="testimonies" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Customer Testimonies</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers say about Moderate's Textile
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonies.map((testimony, index) => (
            <div 
              key={testimony.id} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaQuoteLeft className="text-green-600 text-2xl opacity-50" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimony.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimony.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">
                        {testimony.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimony.name}</h4>
                      <p className="text-gray-500 text-sm">{testimony.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-600 text-white p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Join Our Happy Customers</h3>
            <p className="mb-4">Experience premium quality at affordable prices</p>
            <a 
              href="https://wa.me/2347069257877" 
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Start Shopping Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;