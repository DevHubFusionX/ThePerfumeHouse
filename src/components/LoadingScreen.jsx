import React from 'react';
import '../styles/theme.css';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center max-w-md mx-auto px-8">
        {/* Clean Logo */}
        <div className="mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <img
              src="/logo.jpg"
              alt="The Perfume House"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <h1 className="text-2xl font-light text-gray-900 mb-2 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Perfume House
          </h1>
          <p className="text-sm text-gray-500 font-light tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
            Authentic Fragrances
          </p>
        </div>

        {/* Minimal Loading */}
        <div className="flex justify-center space-x-1 mb-8">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Simple Text */}
        <p className="text-xs text-gray-400 font-light tracking-wide">
          Loading
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;