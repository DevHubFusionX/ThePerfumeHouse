import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaSearch, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/theme.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="fixed top-0 w-full bg-beige-light/95 backdrop-blur-md elegant-shadow border-b elegant-border z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 elegant-transition hover:opacity-80">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 gradient-gold rounded-lg sm:rounded-xl flex items-center justify-center elegant-shadow">
                <span className="text-charcoal font-bold text-sm sm:text-lg lg:text-xl">PH</span>
              </div>
              <div className="hidden xs:block">
                <span className="text-sm sm:text-lg lg:text-2xl font-bold text-charcoal">theperfumehouse.ng</span>
                <p className="text-xs text-charcoal-light font-medium tracking-wider hidden sm:block">LUXURY FRAGRANCES</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" className="text-charcoal hover:text-gold font-medium elegant-transition relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold elegant-transition group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <Link to="/products" className="text-charcoal hover:text-gold font-medium elegant-transition relative">
                  Fragrances
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold elegant-transition group-hover:w-full"></span>
                </Link>
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

              <Link to="/about" className="text-charcoal hover:text-gold font-medium elegant-transition relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold elegant-transition group-hover:w-full"></span>
              </Link>
            </nav>
            
            {/* Action Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
              <button className="hidden lg:block p-2 sm:p-3 text-charcoal-light hover:text-gold elegant-transition rounded-lg hover:bg-nude-light">
                <FaSearch size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button className="hidden lg:block p-2 sm:p-3 text-charcoal-light hover:text-gold elegant-transition relative rounded-lg hover:bg-nude-light">
                <FaHeart size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold text-charcoal text-xs rounded-full flex items-center justify-center font-semibold">2</span>
              </button>
              <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="btn-primary flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base">
                <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Order</span>
                <span className="hidden sm:inline">Now</span>
              </a>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-charcoal hover:text-gold elegant-transition rounded-lg hover:bg-nude-light"
              >
                {mobileMenuOpen ? <FaTimes size={16} className="sm:w-[18px] sm:h-[18px]" /> : <FaBars size={16} className="sm:w-[18px] sm:h-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-charcoal/60 backdrop-blur-md elegant-transition ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-beige-light elegant-shadow-xl elegant-transition transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b elegant-border">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-charcoal font-bold text-sm sm:text-lg">PH</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-charcoal">Menu</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-charcoal hover:text-gold elegant-transition">
                <FaTimes size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto mobile-scroll p-4 sm:p-6">
              <nav className="space-y-2 sm:space-y-3">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-3 sm:py-4 text-charcoal hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-sm sm:text-base">Home</Link>
                
                <div className="space-y-1 sm:space-y-2">
                  <div className="px-3 sm:px-4 py-2">
                    <span className="text-xs text-gold font-semibold tracking-wider uppercase">Collections</span>
                  </div>
                  <Link to="/collections/men" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-charcoal rounded-lg flex items-center justify-center">
                      <span className="text-gold text-xs font-bold">M</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">Men's Perfumes</span>
                  </Link>
                  <Link to="/collections/women" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-nude rounded-lg flex items-center justify-center">
                      <span className="text-charcoal text-xs font-bold">W</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">Women's Perfumes</span>
                  </Link>
                  <Link to="/collections/unisex" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-charcoal hover:text-gold hover:bg-gold/10 rounded-xl elegant-transition">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-silver rounded-lg flex items-center justify-center">
                      <span className="text-charcoal text-xs font-bold">U</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">Unisex Perfumes</span>
                  </Link>
                  <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-2 sm:py-3 text-charcoal-light hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-xs sm:text-sm">All Perfumes</Link>
                </div>
                

                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 sm:px-4 py-3 sm:py-4 text-charcoal hover:text-gold hover:bg-nude-light font-medium rounded-xl elegant-transition text-sm sm:text-base">About Us</Link>
              </nav>
            </div>
            
            <div className="border-t elegant-border p-4 sm:p-6">
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <button className="p-2 sm:p-3 text-charcoal hover:text-gold elegant-transition rounded-lg hover:bg-nude-light">
                  <FaSearch size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
                <button className="p-2 sm:p-3 text-charcoal hover:text-gold elegant-transition relative rounded-lg hover:bg-nude-light">
                  <FaHeart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gold text-charcoal text-xs rounded-full flex items-center justify-center font-semibold">2</span>
                </button>
              </div>
            </div>
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