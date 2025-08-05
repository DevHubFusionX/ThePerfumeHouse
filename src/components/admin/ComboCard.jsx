import React, { useState } from 'react';
import { FaEdit, FaTimes, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ComboCard = ({ 
  combo, 
  onEdit, 
  onDelete, 
  onPreview, 
  isEditing, 
  isDeleting 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const images = combo.images && combo.images.length > 0 
    ? combo.images 
    : combo.image 
    ? (Array.isArray(combo.image) ? combo.image : [combo.image])
    : ['/api/placeholder/300/200'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 h-[450px] sm:h-[420px] md:h-[450px] flex flex-col">
      <div className="relative overflow-hidden h-48 sm:h-52 flex-shrink-0">
        <img 
          src={imageError ? '/api/placeholder/300/200' : images[currentImageIndex]} 
          alt={combo.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            >
              <FaChevronLeft size={10} className="sm:w-3 sm:h-3" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            >
              <FaChevronRight size={10} className="sm:w-3 sm:h-3" />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 max-w-[80%]">
              {images.length <= 8 ? (
                <div className="flex space-x-1 justify-center">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
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
        
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1">
          {combo.popular && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Popular
            </div>
          )}
          <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {combo.products?.length || 0} items
          </div>
        </div>
        
        {images.length > 1 && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            +{images.length - 1}
          </div>
        )}
        
        {/* Debug info - remove after testing */}
        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-1 py-0.5 rounded text-xs">
          {images.length} img(s)
        </div>
        
        {(isEditing || isDeleting) && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 leading-tight">
          {combo.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {combo.description}
        </p>
        
        <div className="mb-3 space-y-1">
          <div className="flex items-center text-xs text-gray-500">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            <span>Bundle includes {combo.products?.length || 0} products</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span>Save {combo.savings}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-lg sm:text-xl font-bold text-green-600">{combo.comboPrice}</span>
            <span className="text-sm text-gray-500 line-through">{combo.originalPrice}</span>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => onPreview(combo)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              title="Preview"
            >
              <FaEye className="mr-1 text-xs" />
              View
            </button>
            <button 
              onClick={() => onEdit(combo)}
              disabled={isEditing || isDeleting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              title="Edit"
            >
              <FaEdit className="mr-1 text-xs" />
              Edit
            </button>
            <button 
              onClick={() => onDelete(combo._id)}
              disabled={isEditing || isDeleting}
              className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              title="Delete"
            >
              <FaTimes className="mr-1 text-xs" />
              {isDeleting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Del'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;