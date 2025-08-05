import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📞 Business Inquiries Welcome
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Our Business Team</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to place an order or need a custom quote? Our dedicated business team is here to assist you 
            with wholesale pricing, bulk orders, and partnership opportunities.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp Business</p>
                    <p className="text-gray-600">+234 706 925 7877</p>
                    <p className="text-sm text-gray-500">Preferred for quick quotes & orders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Business Line</p>
                    <p className="text-gray-600">0706 925 7877</p>
                    <p className="text-sm text-gray-500">For bulk orders & partnerships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@moderatestextile.com</p>
                    <p className="text-sm text-gray-500">For formal inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Shop Address</p>
                    <p className="text-gray-600">Shop No A50 Gidan Baba Beside Unity Bank, IBB Way Kantin Kwari Market</p>
                    <p className="text-sm text-gray-500">Kano, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Service Coverage</p>
                    <p className="text-gray-600">Nigeria (All 36 States + FCT) & Ghana</p>
                    <p className="text-sm text-gray-500">International delivery available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <a href="https://wa.me/2347069257877" className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl text-center transition-all transform hover:scale-105">
                <FaWhatsapp className="mx-auto mb-3" size={32} />
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-90">Instant Response</div>
              </a>
              <a href="tel:+2347069257877" className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl text-center transition-all transform hover:scale-105">
                <FaPhone className="mx-auto mb-3" size={32} />
                <div className="font-semibold">Call Now</div>
                <div className="text-sm opacity-90">Direct Line</div>
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center space-x-3 mb-6">
                <FaBuilding className="text-green-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <FaClock className="text-2xl" />
                <h4 className="text-xl font-bold">Quick Response Guarantee</h4>
              </div>
              <p className="mb-4">We respond to all business inquiries within 30 minutes during business hours.</p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm font-medium">Emergency Orders: Available 24/7 via WhatsApp</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-800 mb-3">Why Choose Our Business Service?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Wholesale pricing for bulk orders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Priority delivery service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Flexible payment terms</span>
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