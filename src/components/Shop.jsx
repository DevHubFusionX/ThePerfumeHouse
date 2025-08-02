import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import product1 from '../assets/GqmePOfW8AAJgl5.jpg';
import product2 from '../assets/GqmePOgWUAAHmW3.jpg';
import product3 from '../assets/GqmePTIWIAAmfvR.jpg';
import product4 from '../assets/GqmePTNXUAAeP_W.jpg';
import product5 from '../assets/GxSZ1mBWkAAE7-n.jpg';
import product6 from '../assets/GxSZ1mCXsAAReu-.jpg';

const Shop = () => {
  const products = [
    { id: 1, name: "Senator Wear", price: "₦15,000", image: product1, description: "Premium quality senator wear" },
    { id: 2, name: "Kaftan", price: "₦12,000", image: product2, description: "Traditional kaftan design" },
    { id: 3, name: "Traditional Cap", price: "₦5,000", image: product3, description: "Authentic Nigerian cap" },
    { id: 4, name: "Agbada", price: "₦25,000", image: product4, description: "Elegant flowing agbada" },
    { id: 5, name: "Jalabiya", price: "₦18,000", image: product5, description: "Comfortable daily wear" },
    { id: 6, name: "Embroidered Kaftan", price: "₦20,000", image: product6, description: "Hand-embroidered details" }
  ];

  return (
    <section id="shop" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">Quality Clothing Materials</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Discover our collection of authentic Nigerian clothing, crafted with care and attention to detail.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-amber-700">{product.price}</span>
                  <span className="text-sm text-stone-500">Free delivery</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all">
                  <FaWhatsapp size={20} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;