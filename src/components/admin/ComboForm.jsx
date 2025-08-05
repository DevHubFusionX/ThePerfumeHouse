import React from 'react';
import { FaBoxes, FaSave, FaTimes } from 'react-icons/fa';

const ComboForm = ({ 
  formData, 
  setFormData, 
  products, 
  onSubmit, 
  onCancel, 
  loading, 
  isEditing,
  onPreview,
  calculatePrice 
}) => {
  const getSelectedProducts = () => {
    return products.filter(product => formData.products.includes(product._id));
  };

  return (
    <div className="p-4 sm:p-6 mobile-scroll">
      {/* Mobile Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <FaBoxes className="text-white text-sm" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            {isEditing ? 'Edit Combo' : 'Add New Combo'}
          </h2>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="sm:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors admin-touch-target"
        >
          <FaTimes size={20} />
        </button>
      </div>
      
      <form onSubmit={onSubmit} className="admin-form space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Combo Name</label>
          <input
            type="text"
            placeholder="Enter combo name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Description</label>
          <input
            type="text"
            placeholder="Brief description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Select Products</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 sm:max-h-60 overflow-y-auto border border-gray-300 rounded-xl p-3 bg-gray-50">
            {products.map(product => (
              <div key={product._id} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                <input
                  type="checkbox"
                  id={product._id}
                  checked={formData.products.includes(product._id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({...formData, products: [...formData.products, product._id]});
                    } else {
                      setFormData({...formData, products: formData.products.filter(id => id !== product._id)});
                    }
                  }}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <label htmlFor={product._id} className="text-sm text-gray-700 cursor-pointer flex-1">
                  {product.name}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-3">
            <p className="text-xs text-gray-500">
              Selected: {formData.products.length} product{formData.products.length !== 1 ? 's' : ''}
            </p>
            {formData.products.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  const selectedProducts = getSelectedProducts();
                  const previewData = {
                    ...formData,
                    products: selectedProducts,
                    _id: 'preview'
                  };
                  onPreview(previewData);
                }}
                className="text-xs bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors w-full sm:w-auto text-center"
              >
                Preview Combo
              </button>
            )}
          </div>
        </div>
        
        {/* Price Section */}
        <div className="bg-gray-50 p-4 rounded-xl space-y-4">
          <h3 className="text-sm font-semibold text-gray-800">Pricing Details</h3>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Original Price</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g., ₦30,000"
                value={formData.originalPrice}
                onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                required
              />
              {formData.products.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    const calculatedPrice = calculatePrice();
                    setFormData({...formData, originalPrice: `₦${calculatedPrice.toLocaleString()}`});
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-lg hover:bg-green-200 transition-colors"
                >
                  Auto
                </button>
              )}
            </div>
            {formData.products.length > 0 && (
              <p className="text-xs text-gray-500">
                Suggested: ₦{calculatePrice().toLocaleString()}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Combo Price</label>
              <input
                type="text"
                placeholder="e.g., ₦25,000"
                value={formData.comboPrice}
                onChange={(e) => setFormData({...formData, comboPrice: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Savings</label>
              <input
                type="text"
                placeholder="e.g., ₦5,000"
                value={formData.savings}
                onChange={(e) => setFormData({...formData, savings: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Combo Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFormData({...formData, images: Array.from(e.target.files)})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
          />
          <p className="text-xs text-gray-500">Select multiple images for the combo</p>
          
          {/* Image Preview */}
          {formData.images && formData.images.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview ({formData.images.length} images):</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-32 sm:max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-2 bg-gray-50">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg border border-gray-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl sticky-form-actions">
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="popular"
              checked={formData.popular}
              onChange={(e) => setFormData({...formData, popular: e.target.checked})}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <label htmlFor="popular" className="text-sm font-medium text-gray-700">Mark as Popular Combo</label>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <button 
              type="submit" 
              disabled={loading || formData.products.length === 0}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200 text-base font-medium admin-touch-target"
            >
              <FaSave className={loading ? 'animate-spin' : ''} /> 
              <span>{loading ? 'Saving...' : (isEditing ? 'Update Combo' : 'Save Combo')}</span>
            </button>
            <button 
              type="button" 
              onClick={onCancel}
              className="flex-1 sm:flex-none bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200 text-base font-medium admin-touch-target"
            >
              <FaTimes /> <span>Cancel</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComboForm;