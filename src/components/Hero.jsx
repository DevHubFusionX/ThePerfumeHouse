import React from 'react';
import { FaWhatsapp, FaStar, FaShippingFast, FaShieldAlt } from 'react-icons/fa';
import '../styles/theme.css';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-beige-light via-nude-light to-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">Luxury Fragrances</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Discover Your
                <span className="text-gold block mt-2">Signature Essence</span>
              </h1>
              <p className="text-xl text-charcoal-light mb-10 leading-relaxed">
                Nigeria's premier destination for authentic luxury fragrances. 
                Discover your perfect scent from our expertly curated collection of world-class perfumes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="btn-gold flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl transform hover:scale-105">
                  <FaWhatsapp size={20} />
                  <span>Consult Our Experts</span>
                </a>
                <a href="/products" className="btn-primary text-lg px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl transform hover:scale-105">
                  Explore Collection
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 text-charcoal-light">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-gold" size={16} />
                  </div>
                  <span className="font-medium">Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaShippingFast className="text-gold" size={16} />
                  </div>
                  <span className="font-medium">Express Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <FaStar className="text-gold" size={16} />
                  </div>
                  <span className="font-medium">Exceptional Service</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Perfume Collection" 
                  className="w-full h-[600px] object-cover rounded-3xl elegant-shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 gradient-silver rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
          
          {/* Featured Collections */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition">
              <div className="w-20 h-20 gradient-charcoal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-beige-light font-bold text-2xl">♂</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Masculine Collection</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Sophisticated and commanding fragrances that embody strength, confidence, and timeless elegance for the discerning gentleman.
              </p>
              <span className="text-gold font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>
            
            <div className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition">
              <div className="w-20 h-20 gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-charcoal font-bold text-2xl">♀</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Feminine Collection</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Enchanting and graceful scents that celebrate femininity, from delicate florals to bold, captivating compositions.
              </p>
              <span className="text-gold font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>
            
            <div className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition">
              <div className="w-20 h-20 gradient-silver rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-charcoal font-bold text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Luxury Gift Sets</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Thoughtfully curated collections presented in elegant packaging, perfect for celebrating life's most precious moments.
              </p>
              <span className="text-gold font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;