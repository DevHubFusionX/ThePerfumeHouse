import React, { useState, useEffect } from 'react';
import { FaSearch, FaTh, FaList, FaVenus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ui/ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';
import { API_ENDPOINTS, apiRequest } from '../utils/api';
import '../styles/theme.css';

const WomensCollection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  useEffect(() => {
    fetchWomensProducts();
  }, []);

  const fetchWomensProducts = async () => {
    const cachedProducts = cache.get('womens-products');
    if (cachedProducts) {
      setProducts(cachedProducts);
      setFilteredProducts(cachedProducts);
      setLoading(false);
      return;
    }

    try {
      const data = await apiRequest(API_ENDPOINTS.products);
      const womensProducts = Array.isArray(data) ? data.filter(product => 
        product.category?.toLowerCase() === 'women' || 
        product.gender?.toLowerCase() === 'women'
      ) : [];
      
      setProducts(womensProducts);
      setFilteredProducts(womensProducts);
      cache.set('womens-products', womensProducts);
    } catch (error) {
      console.error('Error fetching women\'s products:', error);
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
    <div className="min-h-screen bg-gradient-to-br from-beige-light to-nude-light">
      <div className="pt-20">
        <div className="gradient-nude text-charcoal shadow-sm border-b mb-8">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div>
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-gold rounded-2xl flex items-center justify-center">
                    <FaVenus className="text-charcoal text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <span className="text-gold font-medium tracking-wider text-xs sm:text-sm uppercase block">Women's Perfumes</span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal">Perfumes for Women</h1>
                  </div>
                </div>
                <p className="text-charcoal-light text-sm sm:text-base lg:text-lg max-w-2xl">Beautiful perfumes chosen for women who want to feel confident and smell wonderful every day.</p>
              </div>
              <div className="flex items-center space-x-2 self-start lg:self-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 sm:p-3 rounded-xl elegant-transition ${
                    viewMode === 'grid' ? 'bg-gold text-charcoal' : 'text-charcoal hover:text-gold'
                  }`}
                >
                  <FaTh className="text-sm sm:text-base" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 sm:p-3 rounded-xl elegant-transition ${
                    viewMode === 'list' ? 'bg-gold text-charcoal' : 'text-charcoal hover:text-gold'
                  }`}
                >
                  <FaList className="text-sm sm:text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 pb-8">
          <div className="card-elegant p-4 sm:p-6 lg:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-light" />
                <input
                  type="text"
                  placeholder="Search women's perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal text-sm sm:text-base"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 sm:py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal text-sm sm:text-base"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Accessible to Luxurious</option>
                <option value="price-high">Price: Luxurious to Accessible</option>
                <option value="name">Alphabetical</option>
              </select>
              
              <div className="flex items-center justify-center bg-gold/10 rounded-xl px-4 py-3 sm:py-4 sm:col-span-2 lg:col-span-1">
                <span className="text-charcoal font-semibold text-sm sm:text-base lg:text-lg">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Fragrance' : 'Fragrances'}
                </span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {[...Array(6)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
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
                  <FaVenus className="text-gold text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">No women's perfumes found</h3>
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

export default WomensCollection;