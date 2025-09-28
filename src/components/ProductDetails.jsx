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
    <div className="min-h-screen bg-gradient-to-br from-beige-light via-nude-light to-beige pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <nav className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-charcoal-light mb-6 sm:mb-8 overflow-x-auto">
          <button onClick={() => navigate('/')} className="hover:text-gold elegant-transition whitespace-nowrap">Home</button>
          <span className="text-gold">•</span>
          <button onClick={() => navigate('/products')} className="hover:text-gold elegant-transition whitespace-nowrap">Fragrances</button>
          <span className="text-gold">•</span>
          <span className="text-charcoal font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 sm:space-y-6">
            <div className="card-elegant p-4 sm:p-6">
              <div className="relative aspect-square bg-nude-light rounded-xl sm:rounded-2xl overflow-hidden">
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
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-beige-light/95 text-charcoal p-2 sm:p-3 rounded-full elegant-shadow hover:scale-110 elegant-transition"
                    >
                      <FaChevronLeft size={14} className="sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-beige-light/95 text-charcoal p-2 sm:p-3 rounded-full elegant-shadow hover:scale-110 elegant-transition"
                    >
                      <FaChevronRight size={14} className="sm:w-4 sm:h-4" />
                    </button>
                    
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-charcoal/80 text-beige-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {currentImageIndex + 1} / {currentImages.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            {currentImages.length > 1 && (
              <div className="card-elegant p-3 sm:p-4">
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                  {currentImages.slice(0, 8).map((image, index) => (
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
                  {currentImages.length > 8 && (
                    <div className="aspect-square bg-nude-light rounded-lg flex items-center justify-center text-xs text-charcoal-light font-medium">
                      +{currentImages.length - 8}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="card-elegant p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                <span className="gradient-gold text-charcoal px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  {product.category}
                </span>
                <span className="text-gold hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm text-charcoal-light font-medium">Available Now</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">{product.name}</h1>
              <p className="text-charcoal-light mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                Experience the artistry of fine fragrance with this exquisite composition, crafted for those who appreciate olfactory excellence.
              </p>
              <div className="flex items-baseline gap-2 sm:gap-3">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">{product.price}</p>
                <span className="text-sm sm:text-base lg:text-lg text-charcoal-light">per bottle</span>
              </div>
            </div>

            {/* Color Variants */}
            {product.colors && product.colors.length > 0 && (
              <div className="card-elegant p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-3 sm:mb-4">Available Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(color)}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl elegant-border elegant-transition text-center ${
                        selectedColor?.name === color.name
                          ? 'bg-gold/10 text-gold ring-1 sm:ring-2 ring-gold/20'
                          : 'hover:bg-beige-light'
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
              <div className="card-elegant p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-3 sm:mb-4">Product Description</h3>
                <p className="text-charcoal-light leading-relaxed text-sm sm:text-base">{product.description}</p>
              </div>
            )}

            {/* Fragrance Details */}
            <div className="card-elegant p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-3 sm:mb-4">Fragrance Details</h3>
              <div className="space-y-3 sm:space-y-4">
                {product.brand && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-beige-dark gap-1 sm:gap-2">
                    <span className="font-medium text-charcoal-light text-sm sm:text-base">Brand</span>
                    <span className="text-charcoal text-sm sm:text-base">{product.brand}</span>
                  </div>
                )}
                {product.size && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-beige-dark gap-1 sm:gap-2">
                    <span className="font-medium text-charcoal-light text-sm sm:text-base">Size</span>
                    <span className="text-charcoal text-sm sm:text-base">{product.size}</span>
                  </div>
                )}
                {product.fragranceType && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-beige-dark gap-1 sm:gap-2">
                    <span className="font-medium text-charcoal-light text-sm sm:text-base">Type</span>
                    <span className="text-charcoal text-sm sm:text-base">{product.fragranceType}</span>
                  </div>
                )}
                {product.longevity && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-beige-dark gap-1 sm:gap-2">
                    <span className="font-medium text-charcoal-light text-sm sm:text-base">Longevity</span>
                    <span className="text-charcoal text-sm sm:text-base">{product.longevity}</span>
                  </div>
                )}
                {product.sillage && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-1 sm:gap-2">
                    <span className="font-medium text-charcoal-light text-sm sm:text-base">Sillage</span>
                    <span className="text-charcoal text-sm sm:text-base">{product.sillage}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Fragrance Notes */}
            {product.notes && (product.notes.top?.length > 0 || product.notes.middle?.length > 0 || product.notes.base?.length > 0) && (
              <div className="card-elegant p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-3 sm:mb-4">Fragrance Notes</h3>
                <div className="space-y-4">
                  {product.notes.top?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-charcoal-light text-sm mb-2">Top Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.top.map((note, index) => (
                          <span key={index} className="bg-gold/10 text-gold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.notes.middle?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-charcoal-light text-sm mb-2">Middle Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.middle.map((note, index) => (
                          <span key={index} className="bg-nude/20 text-charcoal px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.notes.base?.length > 0 && (
                    <div>
                      <h4 className="font-medium text-charcoal-light text-sm mb-2">Base Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.base.map((note, index) => (
                          <span key={index} className="bg-charcoal/10 text-charcoal px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
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
            <div className="card-elegant p-6 sm:p-8 elegant-border">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">Claim Your Signature Scent</h3>
                <p className="text-charcoal-light text-sm sm:text-base lg:text-lg">Reserve this exquisite fragrance and let our olfactory specialists curate your perfect collection</p>
              </div>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl elegant-shadow hover:elegant-shadow-xl elegant-transition flex items-center justify-center gap-2 sm:gap-3"
                onClick={handleWhatsAppOrder}
              >
                <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
                Reserve & Consult
              </button>
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-charcoal-light">Immediate Consultation • Authenticity Certified • White-Glove Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;