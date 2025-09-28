import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import Logo from './ui/Logo';
import '../styles/theme.css';

const Footer = () => {
  return (
    <footer className="gradient-charcoal text-beige-light py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Logo size="md" showDetails={false} />
              <h3 className="text-2xl font-bold text-gold mt-3">theperfumehouse.ng</h3>
            </div>
            <p className="text-beige leading-relaxed text-lg">
              Your trusted source for authentic designer perfumes with great service and fast delivery across Nigeria.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">Quick Links</h4>
            <div className="space-y-4">
              <a href="#home" className="block text-beige hover:text-gold elegant-transition text-lg">Home</a>
              <a href="#shop" className="block text-beige hover:text-gold elegant-transition text-lg">All Perfumes</a>
              <a href="#combos" className="block text-beige hover:text-gold elegant-transition text-lg">Gift Sets</a>
              <a href="#order" className="block text-beige hover:text-gold elegant-transition text-lg">How to Order</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">Follow Us</h4>
            <div className="flex space-x-6 mb-6">
              <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="gradient-gold p-4 rounded-2xl elegant-transition transform hover:scale-110 elegant-shadow">
                <FaWhatsapp size={24} className="text-charcoal" />
              </a>
              <a href="https://www.instagram.com/theperfumehouse.ng?igsh=MW12a2hvYmlheThwbg%3D%3D&utm_source=qr" className="bg-nude p-4 rounded-2xl elegant-transition transform hover:scale-110 elegant-shadow">
                <FaInstagram size={24} className="text-charcoal" />
              </a>
              <a href="https://www.tiktok.com/@theperfumehouse.ng?_t=ZS-905LqqCMg9l&_r=1" className="bg-silver p-4 rounded-2xl elegant-transition transform hover:scale-110 elegant-shadow">
                <FaTiktok size={24} className="text-charcoal" />
              </a>
            </div>
            <p className="text-beige text-lg font-medium">
              Call or WhatsApp: +234 703 186 2712
            </p>
          </div>
        </div>
        
        <div className="border-t border-beige-dark/30 pt-12 text-center">
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"></div>
          <p className="text-beige text-lg font-light">
            © 2025 theperfumehouse.ng. Crafted with distinction.
          </p>
          <p className="text-gold text-sm mt-2 font-medium tracking-wider uppercase">
            Quality Perfumes Since Day One
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;