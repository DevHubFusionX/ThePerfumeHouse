import React from 'react';
import { FaUsers, FaShippingFast, FaStar, FaGlobe } from 'react-icons/fa';

const BusinessStats = () => {
  const stats = [
    { icon: FaUsers, number: '5,000+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: FaShippingFast, number: '10,000+', label: 'Orders Delivered', color: 'text-green-600' },
    { icon: FaStar, number: '4.9/5', label: 'Customer Rating', color: 'text-yellow-500' },
    { icon: FaGlobe, number: '36', label: 'States Covered', color: 'text-purple-600' }
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gray-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;