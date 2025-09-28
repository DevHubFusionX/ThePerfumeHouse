import React from 'react';
import '../styles/theme.css';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal flex items-center justify-center z-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nude/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Professional Logo Container */}
        <div className="mb-16 animate-float">
          <div className="relative">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 w-32 h-32 bg-gold/20 rounded-2xl blur-xl mx-auto animate-logo-glow"></div>

            {/* Logo Container */}
            <div className="relative w-32 h-32 bg-white rounded-2xl overflow-hidden mx-auto elegant-shadow-xl border-2 border-gold/30 animate-logo-glow">
              <img
                src="/logo.jpg"
                alt="The Perfume House Logo"
                className="w-full h-full object-cover"
              />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 animate-shimmer-gold"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full animate-pulse-elegant"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-nude rounded-full animate-pulse-elegant" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Professional Loading Dots */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <div className="w-4 h-4 bg-gold rounded-full animate-pulse-elegant shadow-lg" style={{ animationDelay: '0ms' }}></div>
          <div className="w-4 h-4 bg-gold rounded-full animate-pulse-elegant shadow-lg" style={{ animationDelay: '200ms' }}></div>
          <div className="w-4 h-4 bg-gold rounded-full animate-pulse-elegant shadow-lg" style={{ animationDelay: '400ms' }}></div>
        </div>

        {/* Brand Identity */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-beige-light animate-fade-in tracking-wide">
            theperfumehouse.ng
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-gold font-medium tracking-widest text-sm uppercase animate-fade-in" style={{ animationDelay: '300ms' }}>
            Curating Excellence
          </p>
        </div>

        {/* Professional Progress Bar */}
        <div className="w-80 h-2 bg-beige-light/10 rounded-full mx-auto overflow-hidden backdrop-blur-sm border border-beige-light/20">
          <div className="h-full bg-gradient-to-r from-gold via-gold-light to-gold rounded-full animate-progress shadow-lg relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-gold"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-beige-light/70 text-sm mt-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
          Preparing your olfactory journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;