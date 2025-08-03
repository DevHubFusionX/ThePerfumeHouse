import React, { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our collection of premium textiles and quality fabrics</p>
        </div>
        
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {products.slice(0, 4).map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            
            {products.length > 4 && (
              <div className="text-center mt-12">
                <a href="/products" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <span>View All Products</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            )}
          </>
        )}
        
        {!loading && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;