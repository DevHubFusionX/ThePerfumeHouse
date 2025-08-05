import React from 'react';
import { FaHome } from 'react-icons/fa';
import ProductCard from '../ui/ProductCard';

const ProductList = ({ 
  products, 
  onEdit, 
  onDelete, 
  deletingId, 
  onAddNew 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Products</h2>
          <button
            onClick={onAddNew}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
          >
            <FaHome className="text-xs" />
            <span>Add Product</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
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