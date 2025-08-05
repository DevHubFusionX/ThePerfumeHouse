import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ComboPreviewModal = ({ combo, isOpen, onClose, onEdit }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!isOpen || !combo) return null;
  
  const images = combo.images && combo.images.length > 0 
    ? combo.images 
    : combo.image 
    ? (Array.isArray(combo.image) ? combo.image : [combo.image])
    : ['/api/placeholder/400/300'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white/95 backdrop-blur-lg rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Combo Preview</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Combo Images */}
            <div className="relative group">
              <img 
                src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : URL.createObjectURL(images[currentImageIndex])}
                alt={combo.name}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
              
              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <FaChevronRight size={16} />
                  </button>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    {images.length <= 8 ? (
                      <div className="flex space-x-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {combo.popular && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    Popular
                  </span>
                )}
                {images.length > 1 && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {images.length} images
                  </span>
                )}
              </div>
            </div>
            
            {/* Combo Details */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {combo.name}
              </h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {combo.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                  {combo.comboPrice}
                </span>
                <div className="text-left sm:text-right">
                  <span className="text-lg sm:text-xl text-gray-500 line-through block">
                    {combo.originalPrice}
                  </span>
                  <span className="text-sm sm:text-base text-red-600 font-medium">
                    Save {combo.savings}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Products in Combo */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                Products Included ({combo.products?.length || 0}):
              </h5>
              <div className="grid grid-cols-1 gap-3 max-h-60 overflow-y-auto">
                {combo.products?.map((product, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    {product.images && product.images[0] && (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/64/64';
                        }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                        {product.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {product.category}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-green-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Combo Statistics */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl border border-purple-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-purple-600">
                    {combo.products?.length || 0}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">Items</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-green-600">
                    {combo.comboPrice}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">Combo Price</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-lg sm:text-xl font-bold text-red-600">
                    {combo.savings}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">You Save</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4 border-t">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              {combo._id !== 'preview' && onEdit && (
                <button
                  onClick={() => {
                    onClose();
                    onEdit(combo);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  Edit Combo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPreviewModal;