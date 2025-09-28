import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaSearch, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/theme.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <motion.header 
        className="fixed top-0 w-full bg-charcoal border-b border-charcoal-light z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-4 group">
                <motion.div 
                  className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-beige-light/10 group-hover:ring-gold/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/logo.jpg" 
                    alt="The Perfume House Logo" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <motion.h1 
                    className="text-xl font-medium text-beige-light tracking-wide group-hover:text-gold transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    The Perfume House
                  </motion.h1>
                  <p className="text-xs text-beige font-light tracking-widest uppercase mt-0.5">Authentic Fragrances</p>
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/home" className="text-beige-light hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
              <div className="relative group">
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/products" className="text-beige-light hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative">
                    Collections
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
                <div className="absolute top-full left-0 w-64 bg-beige-light elegant-shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible elegant-transition mt-3 elegant-border">
                  <div className="p-4">
                    <div className="mb-3">
                      <span className="text-xs text-gold font-semibold tracking-wider uppercase">Collections</span>
                    </div>
                    <Link to="/collections/men" className="flex items-center space-x-3 px-4 py-3 text-charcoal hover:bg-gold/10 hover:text-gold rounded-xl elegant-transition">
                      <div className="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center">
                        <span className="text-gold text-xs font-bold">M</span>
                      </div>
                      <div>
                        <div className="font-medium">Men's Perfumes</div>
                        <div className="text-xs text-charcoal-light">For men</div>
                      </div>
                    </Link>
                    <Link to="/collections/women" className="flex items-center space-x-3 px-4 py-3 text-charcoal hover:bg-gold/10 hover:text-gold rounded-xl elegant-transition">
                      <div className="w-8 h-8 gradient-nude rounded-lg flex items-center justify-center">
                        <span className="text-charcoal text-xs font-bold">W</span>
                      </div>
                      <div>
                        <div className="font-medium">Women's Perfumes</div>
                        <div className="text-xs text-charcoal-light">For women</div>
                      </div>
                    </Link>
                    <Link to="/collections/unisex" className="flex items-center space-x-3 px-4 py-3 text-charcoal hover:bg-gold/10 hover:text-gold rounded-xl elegant-transition">
                      <div className="w-8 h-8 gradient-silver rounded-lg flex items-center justify-center">
                        <span className="text-charcoal text-xs font-bold">U</span>
                      </div>
                      <div>
                        <div className="font-medium">Unisex Perfumes</div>
                        <div className="text-xs text-charcoal-light">For everyone</div>
                      </div>
                    </Link>
                    <div className="border-t elegant-border mt-3 pt-3">
                      <Link to="/products" className="block px-4 py-2 text-sm text-charcoal-light hover:text-gold elegant-transition font-medium">View All Perfumes →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ y: -2 }}>
                <Link to="/about" className="text-beige-light hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            </motion.nav>
            
            {/* Action Icons */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a 
                href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" 
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gold/10 hover:bg-gold text-beige-light hover:text-charcoal rounded-lg transition-all duration-300 border border-gold/20 hover:border-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={16} />
                <span className="font-medium text-sm tracking-wide">Contact Us</span>
              </motion.a>
              
              {/* Mobile menu button */}
              <motion.button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-beige-light hover:text-gold transition-colors duration-300 rounded-md hover:bg-charcoal-light/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-charcoal/60 backdrop-blur-md elegant-transition ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-beige-light elegant-shadow-xl elegant-transition transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>
          <div className="flex flex-col h-full">
            <motion.div 
              className="flex justify-between items-center p-4 sm:p-6 border-b elegant-border"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/logo.jpg" 
                    alt="The Perfume House Logo" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="text-base sm:text-lg font-bold text-charcoal">Menu</span>
              </div>
              <motion.button 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 text-charcoal hover:text-gold elegant-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>
            
            <div className="flex-1 overflow-y-auto mobile-scroll p-4 sm:p-6">
              <nav className="space-y-2 sm:space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-3 sm:py-4 text-charcoal hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-sm sm:text-base">Home</Link>
                </motion.div>
                
                <motion.div 
                  className="space-y-1 sm:space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="px-3 sm:px-4 py-2">
                    <span className="text-xs text-gold font-semibold tracking-wider uppercase">Collections</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link to="/collections/men" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-lg flex items-center justify-center">
                        <span className="text-gold text-xs font-bold">M</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base">Men's Perfumes</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link to="/collections/women" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-nude rounded-lg flex items-center justify-center">
                        <span className="text-charcoal text-xs font-bold">W</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base">Women's Perfumes</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link to="/collections/unisex" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-silver rounded-lg flex items-center justify-center">
                        <span className="text-charcoal text-xs font-bold">U</span>
                      </div>
                      <span className="font-medium text-sm sm:text-base">Unisex Perfumes</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-2 sm:py-3 text-charcoal-light hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-xs sm:text-sm">Shop All</Link>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-3 sm:py-4 text-charcoal hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-sm sm:text-base">About Us</Link>
                </motion.div>
              </nav>
            </div>
            
            <motion.div 
              className="border-t elegant-border p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <motion.button 
                  className="p-2 sm:p-3 text-charcoal hover:text-gold elegant-transition rounded-lg hover:bg-nude-light"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaSearch size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.button>
                <motion.button 
                  className="p-2 sm:p-3 text-charcoal hover:text-gold elegant-transition relative rounded-lg hover:bg-nude-light"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaHeart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold text-charcoal text-xs rounded-full flex items-center justify-center font-semibold">2</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl elegant-transition z-40 hover:scale-110">
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Header;