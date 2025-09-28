import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaTruck, FaWhatsapp, FaStar, FaAward, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/theme.css';

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: FaShieldAlt,
      title: '100% Authentic',
      description: 'All our perfumes are genuine and come directly from official suppliers. We guarantee every product is real.'
    },
    {
      icon: FaTruck,
      title: 'Fast Delivery',
      description: 'Quick and safe delivery to all 36 states in Nigeria. Your perfumes are carefully packed to arrive in perfect condition.'
    },
    {
      icon: FaHeart,
      title: 'Great Customer Service',
      description: 'Our team is here to help you find the perfect perfume. We answer questions and give advice to help you choose.'
    },
    {
      icon: FaAward,
      title: 'Top Quality Brands',
      description: 'We only sell perfumes from the best brands in the world. Every product meets our high standards for quality.'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-nude-light via-beige-light to-nude">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-5xl font-bold text-charcoal mb-6">What Makes Us Special</h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            We offer authentic designer perfumes with great service and fast delivery across Nigeria.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gold/10 text-gold rounded-3xl group-hover:bg-gold group-hover:text-charcoal elegant-transition transform group-hover:scale-110 elegant-shadow group-hover:elegant-shadow-lg">
                  <feature.icon size={36} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 gradient-silver rounded-full opacity-60 group-hover:opacity-100 elegant-transition"></div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-gold elegant-transition">{feature.title}</h3>
              <p className="text-charcoal-light leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-4">
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 text-gold rounded-3xl elegant-shadow">
                      <feature.icon size={28} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-5 h-5 gradient-silver rounded-full opacity-60"></div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{feature.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm text-charcoal p-3 rounded-full elegant-shadow hover:bg-gold hover:text-charcoal elegant-transition"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm text-charcoal p-3 rounded-full elegant-shadow hover:bg-gold hover:text-charcoal elegant-transition"
          >
            <FaChevronRight size={16} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full elegant-transition ${
                  index === currentSlide ? 'bg-gold' : 'bg-gold/30'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Find Your Perfect Scent?</h3>
            <p className="text-charcoal-light mb-6">Join thousands of happy customers who shop with us for their favorite perfumes.</p>
            <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="btn-gold inline-flex items-center space-x-3 px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl transform hover:scale-105">
              <FaWhatsapp size={20} />
              <span>Start Your Journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;