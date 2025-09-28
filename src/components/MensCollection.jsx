import React, { useState, useEffect } from 'react';
import { FaSearch, FaTh, FaList, FaMars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ui/ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';
import { API_ENDPOINTS, apiRequest } from '../utils/api';
import '../styles/theme.css';

const MensCollection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMensProducts();
  }, []);

  const fetchMensProducts = async () => {
    const cachedProducts = cache.get('mens-products');
    if (cachedProducts) {
      setProducts(cachedProducts);
      setFilteredProducts(cachedProducts);
      setLoading(false);
      return;
    }

    try {
      const data = await apiRequest(API_ENDPOINTS.products);
      const mensProducts = Array.isArray(data) ? data.filter(product => 
        product.category?.toLowerCase() === 'men' || 
        product.gender?.toLowerCase() === 'men'
      ) : [];
      
      setProducts(mensProducts);
      setFilteredProducts(mensProducts);
      cache.set('mens-products', mensProducts);
    } catch (error) {
      console.error('Error fetching men\'s products:', error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    
    setFilteredProducts(filtered);
  }, [products, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-light to-beige">
      <div className="pt-20">
        <div className="gradient-charcoal text-beige-light shadow-sm border-b mb-8">
          <div className="container mx-auto px-6 py-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center">
                    <FaMars className="text-charcoal text-2xl" />
                  </div>
                  <div>
                    <span className="text-gold font-medium tracking-wider text-sm uppercase block">Men's Perfumes</span>
                    <h1 className="text-4xl font-bold">Perfumes for Men</h1>
                  </div>
                </div>
                <p className="text-beige text-lg max-w-2xl">Great perfumes designed for men who want to smell amazing and make a lasting impression.</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl elegant-transition ${
                    viewMode === 'grid' ? 'bg-gold text-charcoal' : 'text-beige hover:text-gold'
                  }`}
                >
                  <FaTh />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl elegant-transition ${
                    viewMode === 'list' ? 'bg-gold text-charcoal' : 'text-beige hover:text-gold'
                  }`}
                >
                  <FaList />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pb-8">
          <div className="card-elegant p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-light" />
                <input
                  type="text"
                  placeholder="Search men's perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Accessible to Premium</option>
                <option value="price-high">Price: Premium to Accessible</option>
                <option value="name">Alphabetical</option>
              </select>
              
              <div className="flex items-center justify-center bg-gold/10 rounded-xl px-4 py-4">
                <span className="text-charcoal font-semibold text-lg">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Fragrance' : 'Fragrances'}
                </span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {[...Array(6)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product._id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaMars className="text-gold text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">No men's perfumes found</h3>
                <p className="text-charcoal-light mb-8 text-lg">Try changing your search or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSortBy('popular');
                  }}
                  className="btn-gold px-8 py-4 rounded-xl font-semibold elegant-transition"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensCollection;