import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from './ui/Logo';
import '../styles/theme.css';

const Footer = () => {
  return (
    <footer className="gradient-charcoal text-beige-light py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Logo size="md" showDetails={false} />
              <h3 className="text-2xl font-bold text-gold mt-3">theperfumehouse.ng</h3>
            </motion.div>
            <p className="text-beige leading-relaxed text-lg">
              Your trusted source for authentic designer perfumes with great service and fast delivery across Nigeria.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-gold">Quick Links</h4>
            <div className="space-y-4">
              <motion.a 
                href="/" 
                className="block text-beige hover:text-gold elegant-transition text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="/collections/men" 
                className="block text-beige hover:text-gold elegant-transition text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Men's Perfumes
              </motion.a>
              <motion.a 
                href="/collections/women" 
                className="block text-beige hover:text-gold elegant-transition text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Women's Perfumes
              </motion.a>
              <motion.a 
                href="/collections/unisex" 
                className="block text-beige hover:text-gold elegant-transition text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Unisex Perfumes
              </motion.a>
              <motion.a 
                href="/about" 
                className="block text-beige hover:text-gold elegant-transition text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                About Us
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-gold">Follow Us</h4>
            <div className="flex space-x-6 mb-6">
              <motion.a 
                href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" 
                className="gradient-gold p-4 rounded-2xl elegant-transition elegant-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp size={24} className="text-charcoal" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/theperfumehouse.ng?igsh=MW12a2hvYmlheThwbg%3D%3D&utm_source=qr" 
                className="bg-gold p-4 rounded-2xl elegant-transition elegant-shadow"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={24} className="text-charcoal" />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@theperfumehouse.ng?_t=ZS-905LqqCMg9l&_r=1" 
                className="bg-gold p-4 rounded-2xl elegant-transition elegant-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTiktok size={24} className="text-charcoal" />
              </motion.a>
            </div>
            <p className="text-beige text-lg font-medium">
              Call or WhatsApp: +234 703 186 2712
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-beige-dark/30 pt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-beige text-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            © 2025 theperfumehouse.ng. Your trusted perfume destination.
          </motion.p>
          <motion.p 
            className="text-gold text-sm mt-2 font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Authentic Fragrances • Fast Delivery • Expert Service
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;