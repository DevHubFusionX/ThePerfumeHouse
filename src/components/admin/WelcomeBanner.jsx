import React from 'react';
import { FaStar, FaCrown } from 'react-icons/fa';

const WelcomeBanner = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Good Morning';
    if (currentHour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="relative overflow-hidden gradient-charcoal rounded-2xl p-8 mb-8 elegant-shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute top-12 right-8 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-8 left-12 w-6 h-6 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <FaCrown className="text-gold text-2xl" />
            <h1 className="text-2xl md:text-3xl font-bold text-beige-light">
              {getGreeting()}, Admin!
            </h1>
          </div>
          <p className="text-beige text-lg mb-4">
            Welcome to theperfumehouse.ng Admin Dashboard
          </p>
          <p className="text-beige-light text-sm max-w-2xl">
            Manage your perfume collection, create gift sets, and track your fragrance business all in one place.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="w-24 h-24 bg-beige-light/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FaStar className="text-4xl text-gold" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 gradient-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-beige-light/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default WelcomeBanner;