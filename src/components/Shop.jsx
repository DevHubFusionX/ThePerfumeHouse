import React, { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';
import { API_ENDPOINTS, apiRequest } from '../utils/api';
import '../styles/theme.css';

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
      const data = await apiRequest(API_ENDPOINTS.products);
      setProducts(data);
      cache.set('products', data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="shop" className="py-24 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gold/10 text-gold px-6 py-3 rounded-full text-sm font-semibold mb-6 elegant-border">
            ✨ Bestsellers
          </div>
          <h2 className="text-5xl font-bold text-charcoal mb-6">Signature Collection</h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-charcoal-light max-w-4xl mx-auto leading-relaxed">
            Discover the fragrances that have captivated hearts and defined elegance. Each scent in our signature collection represents the pinnacle of olfactory artistry.
          </p>
        </div>
        
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {products.slice(0, 4).map((product, index) => (
                <div 
                  key={product._id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-20">
              <div className="card-elegant p-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-charcoal mb-6">See All Our Perfumes</h3>
                <p className="text-charcoal-light mb-8 text-lg leading-relaxed">
                  Browse our full collection of over 50 authentic designer perfumes from top brands around the world.
                </p>
                <a href="/products" className="btn-primary inline-flex items-center px-10 py-4 rounded-full elegant-shadow-lg hover:elegant-shadow-xl transform hover:scale-105">
                  <span>View All Perfumes</span>
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
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