import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaTruck, FaWhatsapp, FaStar, FaAward, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-5xl font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            What Makes Us Special
          </motion.h2>
          <motion.div 
            className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We offer authentic designer perfumes with great service and fast delivery across Nigeria.
          </motion.p>
        </motion.div>
        
        {/* Desktop Grid */}
        <motion.div 
          className="hidden lg:grid lg:grid-cols-4 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className="inline-flex items-center justify-center w-24 h-24 bg-gold/10 text-gold rounded-3xl group-hover:bg-gold group-hover:text-charcoal elegant-transition elegant-shadow group-hover:elegant-shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={36} />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-6 h-6 gradient-silver rounded-full opacity-60 group-hover:opacity-100 elegant-transition"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                ></motion.div>
              </div>
              <motion.h3 
                className="text-2xl font-bold text-charcoal mb-4 group-hover:text-gold elegant-transition"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-charcoal-light leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

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
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="card-elegant p-8 max-w-2xl mx-auto"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-charcoal mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Find Your Perfect Scent?
            </motion.h3>
            <motion.p 
              className="text-charcoal-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join thousands of happy customers who shop with us for their favorite perfumes.
            </motion.p>
            <motion.a 
              href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" 
              className="btn-gold inline-flex items-center space-x-3 px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={20} />
              <span>Start Your Journey</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;