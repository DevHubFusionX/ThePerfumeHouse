import React from 'react';
import { FaStar } from 'react-icons/fa';
import ProductCard from '../ui/ProductCard';

const ProductList = ({ 
  products, 
  onEdit, 
  onDelete, 
  deletingId, 
  onAddNew,
  onViewDetails 
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
      <div className="p-6 border-b border-purple-100">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Perfume Collection</h2>
            <p className="text-sm text-gray-600 mt-1">Manage your fragrance inventory</p>
          </div>
          <button
            onClick={onAddNew}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative flex items-center space-x-2">
              <FaStar className="text-sm" />
              <span>Add Perfume</span>
            </div>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={{...product, onViewDetails}}
              showActions={true}
              onEdit={onEdit}
              onDelete={onDelete}
              isDeleting={deletingId === product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;