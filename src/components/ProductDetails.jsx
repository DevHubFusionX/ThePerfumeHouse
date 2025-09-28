import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './ui/Button';
import { API_ENDPOINTS, apiRequest } from '../utils/api';
import '../styles/theme.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await apiRequest(`${API_ENDPOINTS.products}/${id}`);
      setProduct(data);
      if (data.colors?.length > 0) {
        setSelectedColor(data.colors[0]);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    const images = selectedColor?.images || product?.images || [product?.image];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = selectedColor?.images || product?.images || [product?.image];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0);
  };

  const handleWhatsAppOrder = () => {
    const colorText = selectedColor ? ` in ${selectedColor.name}` : '';
    const message = `Hi, I'm interested in ${product.name}${colorText} for ${product.price}`;
    window.open(`https://wa.me/2347069257877?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-beige-light flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-beige-light flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Fragrance Not Found</h2>
          <Button onClick={() => navigate('/')} className="btn-primary">Return to Collection</Button>
        </div>
      </div>
    );
  }

  const currentImages = selectedColor?.images || 
    (product.images && product.images.length > 0 ? product.images : 
    (product.image ? [product.image] : ['https://via.placeholder.com/400x400?text=No+Image']));

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-light via-nude-light to-beige pt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center space-x-3 text-sm text-charcoal-light mb-8">
          <button onClick={() => navigate('/')} className="hover:text-gold elegant-transition">Home</button>
          <span className="text-gold">•</span>
          <button onClick={() => navigate('/products')} className="hover:text-gold elegant-transition">Fragrances</button>
          <span className="text-gold">•</span>
          <span className="text-charcoal font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="card-elegant p-6">
              <div className="relative aspect-square bg-nude-light rounded-2xl overflow-hidden">
                <img 
                  src={imageError ? 'https://via.placeholder.com/600x600?text=No+Image' : currentImages[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
                
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-beige-light/95 text-charcoal p-3 rounded-full elegant-shadow hover:scale-110 elegant-transition"
                    >
                      <FaChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-beige-light/95 text-charcoal p-3 rounded-full elegant-shadow hover:scale-110 elegant-transition"
                    >
                      <FaChevronRight size={16} />
                    </button>
                    
                    <div className="absolute top-4 right-4 bg-charcoal/80 text-beige-light px-3 py-1 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {currentImages.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            {currentImages.length > 1 && (
              <div className="card-elegant p-4">
                <div className="grid grid-cols-6 lg:grid-cols-8 gap-2">
                  {currentImages.slice(0, 12).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden elegant-border elegant-transition hover:scale-105 ${
                        index === currentImageIndex ? 'ring-2 ring-gold' : 'hover:ring-1 hover:ring-gold/50'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  {currentImages.length > 12 && (
                    <div className="aspect-square bg-nude-light rounded-lg flex items-center justify-center text-xs text-charcoal-light font-medium">
                      +{currentImages.length - 12}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="card-elegant p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="gradient-gold text-charcoal px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <span className="text-gold">•</span>
                <span className="text-sm text-charcoal-light font-medium">Available Now</span>
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6 leading-tight">{product.name}</h1>
              <p className="text-charcoal-light mb-6 text-lg leading-relaxed">
                Experience the artistry of fine fragrance with this exquisite composition, crafted for those who appreciate olfactory excellence.
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-bold text-gold">{product.price}</p>
                <span className="text-lg text-charcoal-light">per bottle</span>
              </div>
            </div>

            {/* Color Variants */}
            {product.colors && product.colors.length > 0 && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Available Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(color)}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all text-center ${
                        selectedColor?.name === color.name
                          ? 'border-green-500 bg-green-50 text-green-800 ring-1 sm:ring-2 ring-green-200'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium text-sm sm:text-base">{color.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {product.description && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
              </div>
            )}

            {/* Fragrance Details */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Fragrance Details</h3>
              <div className="space-y-3 sm:space-y-4">
                {product.brand && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Brand</span>
                    <span className="text-gray-900 text-sm sm:text-base">{product.brand}</span>
                  </div>
                )}
                {product.size && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Size</span>
                    <span className="text-gray-900 text-sm sm:text-base">{product.size}</span>
                  </div>
                )}
                {product.fragranceType && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Type</span>
                    <span className="text-gray-900 text-sm sm:text-base">{product.fragranceType}</span>
                  </div>
                )}
                {product.longevity && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Longevity</span>
                    <span className="text-gray-900 text-sm sm:text-base">{product.longevity}</span>
                  </div>
                )}
                {product.sillage && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-1 sm:gap-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Sillage</span>
                    <span className="text-gray-900 text-sm sm:text-base">{product.sillage}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Fragrance Notes */}
            {product.notes && (product.notes.top?.length > 0 || product.notes.middle?.length > 0 || product.notes.base?.length > 0) && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Fragrance Notes</h3>
                <div className="space-y-4">
                  {product.notes.top?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 text-sm mb-2">Top Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.top.map((note, index) => (
                          <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.notes.middle?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 text-sm mb-2">Middle Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.middle.map((note, index) => (
                          <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.notes.base?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 text-sm mb-2">Base Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.base.map((note, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Order Section */}
            <div className="card-elegant p-8 elegant-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Claim Your Signature Scent</h3>
                <p className="text-charcoal-light text-lg">Reserve this exquisite fragrance and let our olfactory specialists curate your perfect collection</p>
              </div>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl elegant-shadow hover:elegant-shadow-xl elegant-transition flex items-center justify-center gap-3"
                onClick={handleWhatsAppOrder}
              >
                <FaWhatsapp size={24} />
                Reserve & Consult
              </button>
              <div className="mt-6 text-center">
                <p className="text-sm text-charcoal-light">Immediate Consultation • Authenticity Certified • White-Glove Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;