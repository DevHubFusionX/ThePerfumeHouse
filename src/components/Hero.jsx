import React from 'react';
import { FaWhatsapp, FaStar, FaShippingFast, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/theme.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-beige-light via-nude-light to-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="text-charcoal-light font-medium tracking-wider text-sm uppercase mb-4 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Luxury Fragrances
              </motion.span>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Discover Your
                <span className="text-charcoal block mt-2">Signature Essence</span>
              </motion.h1>
              <p className="text-xl text-charcoal-light mb-10 leading-relaxed">
                Nigeria's premier destination for authentic luxury fragrances.
                Discover your perfect scent from our expertly curated collection of world-class perfumes.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.a
                  href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0"
                  className="btn-gold flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={20} />
                  <span>Consult Our Experts</span>
                </motion.a>
                <motion.a
                  href="/products"
                  className="btn-primary text-lg px-8 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Collection
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 text-charcoal-light">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-beige-light" size={16} />
                  </div>
                  <span className="font-medium">Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center">
                    <FaShippingFast className="text-beige-light" size={16} />
                  </div>
                  <span className="font-medium">Express Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center">
                    <FaStar className="text-beige-light" size={16} />
                  </div>
                  <span className="font-medium">Exceptional Service</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative z-10">
                <motion.img
                  src="/logo.jpg"
                  alt="The Perfume House Logo"
                  className="w-full h-[600px] object-cover rounded-3xl elegant-shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 gradient-silver rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Featured Collections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <div
              className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition"
              onClick={() => navigate('/collections/men')}
            >
              <div className="w-20 h-20 gradient-charcoal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-beige-light font-bold text-2xl">♂</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Men's Collection</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Sophisticated and commanding fragrances that embody strength, confidence, and timeless elegance for the discerning gentleman.
              </p>
              <span className="text-charcoal font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>

            <div
              className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition"
              onClick={() => navigate('/collections/women')}
            >
              <div className="w-20 h-20 gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-beige-light font-bold text-2xl">♀</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Women's Collection</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Enchanting and graceful scents that celebrate femininity, from delicate florals to bold, captivating compositions.
              </p>
              <span className="text-charcoal font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>

            <div
              className="card-elegant p-8 group cursor-pointer hover:bg-nude-light elegant-transition"
              onClick={() => navigate('/collections/unisex')}
            >
              <div className="w-20 h-20 gradient-silver rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 elegant-transition elegant-shadow">
                <span className="text-charcoal font-bold text-2xl">⚤</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Unisex Collection</h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Versatile and captivating scents designed for everyone, transcending traditional boundaries with universal appeal.
              </p>
              <span className="text-charcoal font-semibold group-hover:underline elegant-transition">Discover Collection →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;