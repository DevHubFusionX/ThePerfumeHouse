import React, { useState } from 'react';
import { FaSave, FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import Button from '../ui/Button';

const ProductForm = ({ product, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    category: product?.category || '',
    description: product?.description || '',
    fabricType: product?.fabricType || '',
    texture: product?.texture || '',
    quality: product?.quality || '',
    care: product?.care || '',
    images: []
  });
  
  React.useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        category: product.category || '',
        description: product.description || '',
        fabricType: product.fabricType || '',
        texture: product.texture || '',
        quality: product.quality || '',
        care: product.care || '',
        images: []
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('price', formData.price);
    submitData.append('category', formData.category);
    submitData.append('description', formData.description);
    submitData.append('fabricType', formData.fabricType);
    submitData.append('texture', formData.texture);
    submitData.append('quality', formData.quality);
    submitData.append('care', formData.care);
    
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach(image => {
        submitData.append('images', image);
      });
    }
    
    onSubmit(submitData);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mb-8 border border-gray-200/50 animate-scale-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <FaPlus className="text-white text-sm" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price</label>
          <input
            type="text"
            placeholder="e.g., ₦15,000"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
            required
          >
            <option value="">Select Category</option>
            <option value="Traditional">Traditional</option>
            <option value="Casual">Casual</option>
            <option value="Premium">Premium</option>
            <option value="Fabrics">Fabrics</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          <p className="text-xs text-gray-500">Select multiple images for this product</p>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-gray-700">Description</label>
          <textarea
            placeholder="Enter product description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Fabric Type</label>
          <input
            type="text"
            placeholder="e.g., Cotton, Silk, Polyester"
            value={formData.fabricType}
            onChange={(e) => setFormData({...formData, fabricType: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Texture</label>
          <input
            type="text"
            placeholder="e.g., Smooth, Rough, Soft"
            value={formData.texture}
            onChange={(e) => setFormData({...formData, texture: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Quality</label>
          <input
            type="text"
            placeholder="e.g., Premium, Standard, Luxury"
            value={formData.quality}
            onChange={(e) => setFormData({...formData, quality: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Care Instructions</label>
          <input
            type="text"
            placeholder="e.g., Hand wash, Dry clean only"
            value={formData.care}
            onChange={(e) => setFormData({...formData, care: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
          />
        </div>
        
        <div className="flex space-x-4 md:col-span-2 pt-4">
          <Button 
            type="submit" 
            loading={loading}
            icon={<FaSave />}
          >
            {loading ? 'Saving...' : 'Save Product'}
          </Button>
          <Button 
            type="button" 
            variant="secondary"
            onClick={onCancel}
            icon={<FaTimes />}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;