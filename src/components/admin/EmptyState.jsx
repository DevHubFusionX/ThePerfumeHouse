import React from 'react';
import { FaHome, FaBoxes, FaStar } from 'react-icons/fa';

const EmptyState = ({ activeTab, onAddNew }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
      <div className="text-center py-16">
        <div className="relative mx-auto mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
            {activeTab === 'products' ? <FaStar className="text-purple-500 text-xl" /> : <FaBoxes className="text-purple-500 text-xl" />}
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          No {activeTab === 'products' ? 'perfumes' : 'combos'} yet
        </h3>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          Start building your {activeTab === 'products' ? 'fragrance' : 'combo'} collection by adding your first {activeTab === 'products' ? 'perfume' : 'combo'}.
        </p>
        <button
          onClick={onAddNew}
          className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative flex items-center space-x-2">
            <FaStar className="text-sm" />
            <span>Add {activeTab === 'products' ? 'Perfume' : 'Combo'}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EmptyState;