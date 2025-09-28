import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaTag, FaClock, FaWind } from 'react-icons/fa';

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  const images = product.images && product.images.length > 0
    ? product.images
    : product.image
      ? [product.image]
      : ['https://via.placeholder.com/400x400?text=No+Image'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-charcoal/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <div className="inline-block w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 my-8 text-left align-middle transition-all transform bg-white elegant-shadow-xl rounded-2xl animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-charcoal">Product Details</h3>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-light hover:text-charcoal hover:bg-beige-dark rounded-lg elegant-transition"
            >
              <FaTimes size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl elegant-shadow-lg">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-beige-light/95 backdrop-blur-sm text-charcoal p-3 rounded-full elegant-transition hover:scale-110 elegant-shadow"
                    >
                      <FaChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-beige-light/95 backdrop-blur-sm text-charcoal p-3 rounded-full elegant-transition hover:scale-110 elegant-shadow"
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden elegant-border elegant-transition ${
                        index === currentImageIndex ? 'ring-2 ring-gold' : 'hover:ring-2 hover:ring-gold/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                    {product.brand}
                  </span>
                  <span className="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gold">{product.price}</p>
              </div>

              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Description</h3>
                  <p className="text-charcoal-light leading-relaxed">{product.description}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.size && (
                  <div className="flex items-center gap-3">
                    <FaTag className="text-gold" />
                    <div>
                      <p className="text-sm text-charcoal-light">Size</p>
                      <p className="font-semibold text-charcoal">{product.size}</p>
                    </div>
                  </div>
                )}

                {product.fragranceType && (
                  <div className="flex items-center gap-3">
                    <FaWind className="text-gold" />
                    <div>
                      <p className="text-sm text-charcoal-light">Type</p>
                      <p className="font-semibold text-charcoal">{product.fragranceType}</p>
                    </div>
                  </div>
                )}

                {product.longevity && (
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gold" />
                    <div>
                      <p className="text-sm text-charcoal-light">Longevity</p>
                      <p className="font-semibold text-charcoal">{product.longevity}</p>
                    </div>
                  </div>
                )}

                {product.sillage && (
                  <div className="flex items-center gap-3">
                    <FaWind className="text-gold" />
                    <div>
                      <p className="text-sm text-charcoal-light">Sillage</p>
                      <p className="font-semibold text-charcoal">{product.sillage}</p>
                    </div>
                  </div>
                )}
              </div>

              {product.notes && (product.notes.top?.length > 0 || product.notes.middle?.length > 0 || product.notes.base?.length > 0) && (
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Fragrance Notes</h3>
                  <div className="space-y-3">
                    {product.notes.top?.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-charcoal-light mb-1">Top Notes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.top.map((note, index) => (
                            <span key={index} className="bg-gold/10 text-gold px-2 py-1 rounded-full text-xs">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.notes.middle?.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-charcoal-light mb-1">Middle Notes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.middle.map((note, index) => (
                            <span key={index} className="bg-nude/20 text-charcoal px-2 py-1 rounded-full text-xs">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.notes.base?.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-charcoal-light mb-1">Base Notes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.base.map((note, index) => (
                            <span key={index} className="bg-charcoal/10 text-charcoal px-2 py-1 rounded-full text-xs">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;