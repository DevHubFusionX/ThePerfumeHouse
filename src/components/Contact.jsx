import React from 'react';
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Ready to order? Get in touch with us</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="text-green-400 text-xl" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-red-400 text-xl" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-yellow-400 text-xl" />
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-gray-300">Within 1 hour</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a href="https://wa.me/your-number" className="flex items-center justify-center bg-green-600 hover:bg-green-700 py-4 px-8 rounded-xl text-lg font-semibold transition-all">
                <FaWhatsapp className="mr-3" size={24} />
                Order on WhatsApp
              </a>
              <a href="https://instagram.com/moderate_ustaz" className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 py-4 px-8 rounded-xl text-lg font-semibold transition-all">
                <FaInstagram className="mr-3" size={24} />
                Follow on Instagram
              </a>
            </div>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Business Hours</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 5:00 PM</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-600 rounded-xl">
              <h4 className="font-bold mb-2">Fast Response Guarantee</h4>
              <p className="text-sm">We respond to all WhatsApp messages within 1 hour during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;