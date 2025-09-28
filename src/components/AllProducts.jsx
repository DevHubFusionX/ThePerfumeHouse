import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FaSearch, FaTh, FaList, FaFilter, FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import ProductCard from './ui/ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';
import { API_ENDPOINTS, apiRequest } from '../utils/api';
import '../styles/theme.css';

const AllProducts = React.memo(() => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  const categories = ['All', 'Men', 'Women', 'Unisex', 'Niche', 'Designer'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₦50,000', value: '0-50000' },
    { label: '₦50,000 - ₦100,000', value: '50000-100000' },
    { label: '₦100,000 - ₦200,000', value: '100000-200000' },
    { label: 'Above ₦200,000', value: '200000+' }
  ];
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const cachedProducts = cache.get('products');
    if (cachedProducts) {
      setProducts(cachedProducts);
      setLoading(false);
      return;
    }

    try {
      const data = await apiRequest(API_ENDPOINTS.products);
      if (Array.isArray(data)) {
        setProducts(data);
        cache.set('products', data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = parseInt(product.price.replace(/[^0-9]/g, ''));
        const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
        if (priceRange.includes('+')) {
          matchesPrice = price >= parseInt(min);
        } else {
          matchesPrice = price >= parseInt(min) && price <= parseInt(max);
        }
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => {
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
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  }, [products, searchTerm, selectedCategory, sortBy, priceRange]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((e) => {
    setSelectedCategory(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-light to-nude-light">
      <div className="pt-20">
        {/* Hero Header */}
        <div className="gradient-charcoal text-beige-light mb-8">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">Our Collection</span>
              <h1 className="text-5xl font-bold mb-6">Premium Perfumes</h1>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-beige leading-relaxed max-w-2xl mx-auto">
                Browse our collection of authentic designer perfumes from top brands around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Collection Links */}
        <div className="container mx-auto px-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/collections/men" className="card-elegant p-6 group hover:bg-gold/5 elegant-transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center group-hover:scale-110 elegant-transition">
                  <span className="text-gold font-bold">♂</span>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">Men's Perfumes</h3>
                  <p className="text-charcoal-light text-sm">For men</p>
                </div>
              </div>
            </Link>
            <Link to="/collections/women" className="card-elegant p-6 group hover:bg-gold/5 elegant-transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-nude rounded-xl flex items-center justify-center group-hover:scale-110 elegant-transition">
                  <span className="text-charcoal font-bold">♀</span>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">Women's Perfumes</h3>
                  <p className="text-charcoal-light text-sm">For women</p>
                </div>
              </div>
            </Link>
            <Link to="/collections/unisex" className="card-elegant p-6 group hover:bg-gold/5 elegant-transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-silver rounded-xl flex items-center justify-center group-hover:scale-110 elegant-transition">
                  <span className="text-charcoal font-bold">◊</span>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">Unisex Perfumes</h3>
                  <p className="text-charcoal-light text-sm">For everyone</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-8">


          {loading ? (
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid'
                ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
              {[...Array(8)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid'
                ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {viewMode === 'grid' ? (
                    <ProductCard product={product} />
                  ) : (
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 sm:p-6 cursor-pointer"
                      onClick={() => navigate(`/product/${product._id}`)}>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="w-full sm:w-32 h-48 sm:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={product.images?.[0] || product.image || 'https://via.placeholder.com/400x400?text=No+Image'}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{product.name}</h3>
                            <span className="text-xl sm:text-2xl font-bold text-green-600">{product.price}</span>
                          </div>
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                            {product.category}
                          </span>
                          {product.description && (
                            <p className="text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                          )}
                          <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-500">
                            {product.fabricType && <span>• {product.fabricType}</span>}
                            {product.quality && <span>• {product.quality}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="text-gold text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">No perfumes found</h3>
                <p className="text-charcoal-light mb-8 text-lg">Try changing your search or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setPriceRange('all');
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
});

AllProducts.displayName = 'AllProducts';
export default AllProducts;