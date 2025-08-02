import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Check cache first
    const cachedProducts = cache.get('products');
    if (cachedProducts) {
      setProducts(cachedProducts);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://moderate-ustaz-backend.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
      cache.set('products', data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8 animate-fade-in">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">All Products</h1>
            <p className="text-gray-600 mt-2">Browse our complete collection</p>
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(8)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={product._id} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/2347069257877?text=Hi, I'm interested in ${product.name} for ${product.price}`} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <FaWhatsapp size={18} />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;