import React from 'react';
import { FaWhatsapp, FaTwitter, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">Ready to order quality clothing or discuss life? We're here to connect.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-stone-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="text-green-400 text-xl" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-stone-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-stone-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-red-400 text-xl" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-stone-300">Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-yellow-400 text-xl" />
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-stone-300">Usually within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <a href="https://wa.me/your-number" className="flex items-center justify-center bg-green-600 hover:bg-green-700 py-4 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <FaWhatsapp className="mr-3" size={24} />
                Chat on WhatsApp
              </a>
              <a href="https://twitter.com/moderate_ustaz" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 py-4 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <FaTwitter className="mr-3" size={24} />
                Follow on Twitter
              </a>
            </div>
          </div>
          
          {/* Quick Message Form */}
          <div className="bg-stone-700/50 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Send a Quick Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-stone-600 rounded-xl border border-stone-500 focus:border-amber-500 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-stone-600 rounded-xl border border-stone-500 focus:border-amber-500 focus:outline-none resize-none" placeholder="Your message or order details..."></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;