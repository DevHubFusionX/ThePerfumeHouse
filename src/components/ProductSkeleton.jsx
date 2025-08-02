import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded mb-3"></div>
        <div className="h-8 bg-gray-300 rounded w-24 mb-4"></div>
        <div className="h-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;