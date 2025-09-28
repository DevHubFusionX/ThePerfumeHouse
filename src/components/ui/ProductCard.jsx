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
      className={`group bg-beige-light/80 backdrop-blur-sm rounded-lg elegant-shadow hover:elegant-shadow-xl elegant-transition overflow-hidden hover:-translate-y-2 elegant-border h-[520px] flex flex-col ${!showActions ? 'cursor-pointer' : ''
        }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden h-56 flex-shrink-0">
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

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-charcoal mb-2 line-clamp-2 group-hover:text-gold elegant-transition leading-tight">{product.name}</h3>
        </div>

        {product.brand && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full elegant-border">
              {product.brand}
            </span>
          </div>
        )}

        <div className="mt-auto border-t elegant-border pt-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-gold">{product.price}</span>
          </div>

          {showActions ? (
            <div className="space-y-2">
              <button
                onClick={(e) => { e.stopPropagation(); onEdit(product); }}
                disabled={isDeleting}
                className="w-full btn-gold px-3 py-2 rounded-lg text-sm font-semibold elegant-transition disabled:opacity-50"
              >
                Edit
              </button>
              <div className="flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); product.onViewDetails && product.onViewDetails(product); }}
                  className="flex-1 bg-charcoal-light hover:bg-charcoal text-beige-light px-3 py-2 rounded-lg text-sm font-semibold elegant-transition"
                >
                  View
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(product._id); }}
                  disabled={isDeleting}
                  className="flex-1 bg-charcoal hover:bg-charcoal-light text-beige-light px-3 py-2 rounded-lg text-sm font-semibold elegant-transition disabled:opacity-50"
                >
                  {isDeleting ? (
                    <div className="w-4 h-4 border-2 border-beige-light border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </div>
          ) : (
            <button
              className="btn-primary w-full px-4 py-3 rounded-lg font-semibold elegant-transition flex items-center justify-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`https://wa.me/2347069257877?text=Hi, I'm interested in ${product.name} for ${product.price}`, '_blank');
              }}
            >
              <FaWhatsapp size={16} />
              Inquire
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;