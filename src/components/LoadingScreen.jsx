import React from 'react';
import '../styles/theme.css';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 gradient-charcoal flex items-center justify-center z-50">
      <div className="text-center">
        {/* Elegant Logo Animation */}
        <div className="mb-12 animate-float">
          <div className="w-24 h-24 gradient-gold rounded-3xl flex items-center justify-center mx-auto elegant-shadow-xl">
            <span className="text-charcoal font-bold text-3xl">PH</span>
          </div>
        </div>
        
        {/* Sophisticated Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-3 h-3 gradient-gold rounded-full animate-pulse-elegant" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 gradient-gold rounded-full animate-pulse-elegant" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 gradient-gold rounded-full animate-pulse-elegant" style={{ animationDelay: '400ms' }}></div>
        </div>
        
        {/* Elegant Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-beige-light animate-fade-in">theperfumehouse.ng</h2>
          <p className="text-gold font-medium tracking-wider text-sm uppercase animate-fade-in" style={{ animationDelay: '300ms' }}>Curating Excellence</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-beige-light/20 rounded-full mx-auto mt-8 overflow-hidden">
          <div className="h-full gradient-gold rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;