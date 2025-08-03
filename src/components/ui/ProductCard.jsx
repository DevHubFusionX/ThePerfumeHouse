import React, { useState } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ product, showActions = false, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
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
      className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 h-[400px] flex flex-col ${
        !showActions ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img 
          src={imageError ? 'https://via.placeholder.com/400x400?text=No+Image' : images[currentImageIndex]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronRight size={12} />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1 min-h-[2.5rem]">
          {product.description || 'Premium quality textile product'}
        </p>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-green-600">{product.price}</span>
          </div>
        
        {showActions ? (
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" onClick={() => onEdit(product)}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(product._id)}>
              Delete
            </Button>
          </div>
        ) : (
          <Button
            variant="whatsapp"
            className="w-full"
            icon={<FaWhatsapp size={18} />}
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://wa.me/2347069257877?text=Hi, I'm interested in ${product.name} for ${product.price}`, '_blank');
            }}
          >
            Order via WhatsApp
          </Button>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;