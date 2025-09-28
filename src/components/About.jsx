import React from 'react';
import { FaShieldAlt, FaTruck, FaHeart, FaAward, FaStar, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/theme.css';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '5000+', label: 'Happy Customers' },
    { icon: FaStar, number: '500+', label: 'Authentic Perfumes' },
    { icon: FaTruck, number: '36', label: 'States Covered' },
    { icon: FaAward, number: '3+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Authenticity Guaranteed',
      description: 'Every perfume we sell is 100% authentic, sourced directly from official suppliers and distributors.'
    },
    {
      icon: FaHeart,
      title: 'Customer First',
      description: 'We prioritize your satisfaction with personalized service and expert fragrance recommendations.'
    },
    {
      icon: FaTruck,
      title: 'Reliable Delivery',
      description: 'Fast, safe delivery across all 36 states in Nigeria with careful packaging to ensure perfect condition.'
    },
    {
      icon: FaAward,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in product quality and customer service excellence.'
    }
  ];

  return (
    <div className="min-h-screen bg-beige-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-light via-nude-light to-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.span>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Trusted Perfume Destination
            </motion.h1>
            <motion.p 
              className="text-xl text-charcoal-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              At theperfumehouse.ng, we're passionate about helping you discover the perfect fragrance that expresses your unique personality and style.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-charcoal text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-beige-light font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-beige-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8"></div>
              <p className="text-lg text-charcoal-light leading-relaxed mb-6">
                Founded with a passion for authentic luxury fragrances, theperfumehouse.ng began as a dream to make premium perfumes accessible to everyone across Nigeria.
              </p>
              <p className="text-lg text-charcoal-light leading-relaxed mb-6">
                We understand that choosing the right fragrance is personal and important. That's why we've built our reputation on trust, authenticity, and exceptional customer service.
              </p>
              <p className="text-lg text-charcoal-light leading-relaxed">
                Today, we're proud to serve thousands of satisfied customers nationwide, helping them discover their signature scents from the world's most prestigious fragrance houses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/logo.jpg" 
                  alt="The Perfume House" 
                  className="w-full h-96 object-cover rounded-3xl elegant-shadow-xl"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-br from-nude-light via-beige-light to-nude">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">Our Values</span>
            <h2 className="text-4xl font-bold text-charcoal mb-6">What We Stand For</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we do, from sourcing authentic products to delivering exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="card-elegant p-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">{value.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-beige-light mb-6">Ready to Find Your Perfect Scent?</h2>
            <p className="text-xl text-beige mb-10 leading-relaxed">
              Join thousands of satisfied customers who trust us for their fragrance needs. Experience the difference of authentic luxury perfumes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0"
                className="btn-gold flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-full elegant-shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us Today</span>
              </motion.a>
              <motion.a 
                href="/products"
                className="btn-primary text-lg px-8 py-4 rounded-full elegant-shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Collection
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;