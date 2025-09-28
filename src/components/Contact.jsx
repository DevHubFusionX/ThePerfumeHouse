import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaBuilding } from 'react-icons/fa';
import '../styles/theme.css';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-beige-light to-beige">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-gold font-medium tracking-wider text-xs sm:text-sm uppercase mb-4 block">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">Get In Touch</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-gold mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed px-4">
            Need help choosing a perfume or have questions? Our friendly team is here to help you find what you're looking for.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="card-elegant p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8 text-charcoal">Contact Us</h3>
              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-charcoal text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">WhatsApp</p>
                    <p className="text-charcoal-light text-base sm:text-lg">+234 703 186 2712</p>
                    <p className="text-charcoal-light text-sm sm:text-base">Quick chat & easy orders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-charcoal rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-gold text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">Phone</p>
                    <p className="text-charcoal-light text-base sm:text-lg">0703 186 2712</p>
                    <p className="text-charcoal-light text-sm sm:text-base">Call us for help & advice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-nude rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-charcoal text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">Email</p>
                    <p className="text-charcoal-light text-base sm:text-lg break-all">info@theperfumehouse.ng</p>
                    <p className="text-charcoal-light text-sm sm:text-base">Send us a message</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-charcoal text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">Location</p>
                    <p className="text-charcoal-light text-base sm:text-lg">Lagos, Nigeria</p>
                    <p className="text-charcoal-light text-sm sm:text-base">Online store</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-nude rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-charcoal text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">Delivery</p>
                    <p className="text-charcoal-light text-base sm:text-lg">Nigeria (All 36 States + FCT)</p>
                    <p className="text-charcoal-light text-sm sm:text-base">Fast & safe delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <a href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0" className="btn-gold p-6 sm:p-8 rounded-2xl text-center elegant-transition transform hover:scale-105 elegant-shadow hover:elegant-shadow-xl">
                <FaWhatsapp className="mx-auto mb-3 sm:mb-4" size={28} />
                <div className="font-bold text-base sm:text-lg">WhatsApp</div>
                <div className="text-xs sm:text-sm opacity-90">Chat Now</div>
              </a>
              <a href="tel:+2347031862712" className="bg-charcoal text-gold p-6 sm:p-8 rounded-2xl text-center elegant-transition transform hover:scale-105 elegant-shadow hover:elegant-shadow-xl">
                <FaPhone className="mx-auto mb-3 sm:mb-4" size={28} />
                <div className="font-bold text-base sm:text-lg">Call Us</div>
                <div className="text-xs sm:text-sm opacity-90">Talk to Us</div>
              </a>
            </div>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            <div className="card-elegant p-6 sm:p-8 lg:p-10">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <FaClock className="text-charcoal text-lg sm:text-xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">Opening Hours</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-beige-dark">
                  <span className="font-semibold text-charcoal text-sm sm:text-base lg:text-lg">Monday - Friday</span>
                  <span className="text-charcoal-light text-sm sm:text-base lg:text-lg">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-beige-dark">
                  <span className="font-semibold text-charcoal text-sm sm:text-base lg:text-lg">Saturday</span>
                  <span className="text-charcoal-light text-sm sm:text-base lg:text-lg">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3">
                  <span className="font-semibold text-charcoal text-sm sm:text-base lg:text-lg">Sunday</span>
                  <span className="text-charcoal-light text-sm sm:text-base lg:text-lg">9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="gradient-charcoal p-6 sm:p-8 lg:p-10 rounded-3xl text-beige-light">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <FaClock className="text-charcoal text-lg sm:text-xl" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">Quick Response</h4>
              </div>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">We reply to all messages within 30 minutes during business hours.</p>
              <div className="bg-beige-light/20 rounded-2xl p-4 sm:p-6">
                <p className="font-semibold text-gold text-sm sm:text-base">Need help urgently? WhatsApp us anytime!</p>
              </div>
            </div>
            
            <div className="bg-nude/30 p-6 sm:p-8 rounded-3xl">
              <h4 className="font-bold text-charcoal text-lg sm:text-xl mb-4 sm:mb-6">Why Choose Us</h4>
              <ul className="space-y-3 sm:space-y-4 text-charcoal-light">
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-gold rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-lg">100% authentic designer perfumes</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-gold rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-lg">Great prices & bulk discounts</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-gold rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-lg">Fast & safe delivery</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-gold rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-lg">Expert help choosing perfumes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;