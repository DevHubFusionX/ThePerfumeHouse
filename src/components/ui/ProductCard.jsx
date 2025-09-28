import React, { useState } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ProductCard = React.memo(({ product, showActions = false, onEdit, onDelete, isDeleting = false }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

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

  const handleCardClick = () => {
    if (!showActions) {
      navigate(`/product/${product._id}`);
    }
  };

  return (
    <div
      className={`group bg-white rounded shadow-sm hover:shadow-md elegant-transition overflow-hidden border border-gray-100 ${!showActions ? 'cursor-pointer' : ''
        }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={imageError ? 'https://via.placeholder.com/400x400?text=No+Image' : images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
          loading="lazy"
          onError={() => setImageError(true)}
        />


        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-beige-light/95 backdrop-blur-sm text-charcoal p-3 rounded-full opacity-0 group-hover:opacity-100 elegant-transition hover:scale-110 elegant-shadow z-10 elegant-border"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-beige-light/95 backdrop-blur-sm text-charcoal p-3 rounded-full opacity-0 group-hover:opacity-100 elegant-transition hover:scale-110 elegant-shadow z-10 elegant-border"
            >
              <FaChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 max-w-[80%]">
              {images.length <= 8 ? (
                <div className="flex space-x-1 justify-center">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs text-center">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 gradient-gold text-charcoal px-4 py-2 rounded-full text-xs font-bold elegant-shadow">
          {product.category}
        </div>
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-charcoal/90 backdrop-blur-sm text-beige-light px-3 py-1 rounded-full text-xs font-semibold elegant-shadow">
            +{images.length - 1}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 elegant-transition"></div>
      </div>

      <div className="p-4">
        <div className="mb-3">
          {product.brand && (
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              {product.brand}
            </span>
          )}
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight mt-1">{product.name}</h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>

          {!showActions && (
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`https://wa.me/2347069257877?text=Hi, I'm interested in ${product.name} for ${product.price}`, '_blank');
              }}
            >
              <FaWhatsapp size={12} />
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;