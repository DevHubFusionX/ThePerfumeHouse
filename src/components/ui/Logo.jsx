import React from 'react';
import { FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

const Logo = ({ size = 'md', showDetails = false }) => {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-xs', monogram: 'text-lg' },
    md: { container: 'w-12 h-12', text: 'text-sm', monogram: 'text-xl' },
    lg: { container: 'w-16 h-16', text: 'text-base', monogram: 'text-2xl' },
    xl: { container: 'w-24 h-24', text: 'text-lg', monogram: 'text-4xl' }
  };

  const MonogramIcon = () => (
    <div className={`${sizes[size].container} rounded-xl overflow-hidden shadow-lg`}>
      <img 
        src="/logo.jpg" 
        alt="The Perfume House Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );

  if (!showDetails) {
    return <MonogramIcon />;
  }

  return (
    <div className="text-center">
      <MonogramIcon />
      <div className="mt-3">
        <h1 className={`${sizes[size].text} font-bold text-charcoal tracking-wider`}>
          THE PERFUME HOUSE
        </h1>
        <div className="flex justify-center space-x-3 mt-2">
          <a href="https://www.instagram.com/theperfumehouse.ng" className="text-gold hover:text-gold-light transition-colors">
            <FaInstagram size={14} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=%2B2347031862712" className="text-gold hover:text-gold-light transition-colors">
            <FaWhatsapp size={14} />
          </a>
        </div>
        <p className="text-xs text-charcoal-light mt-1">+234 703 186 2712</p>
      </div>
    </div>
  );
};

export default Logo;