import React from 'react';
import { FaHome, FaBoxes } from 'react-icons/fa';

const EmptyState = ({ activeTab, onAddNew }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-center py-12">
        <div className="w-12 h-12 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          {activeTab === 'products' ? <FaHome className="text-gray-400" /> : <FaBoxes className="text-gray-400" />}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} yet</h3>
        <p className="text-gray-500 mb-6">
          Get started by adding your first {activeTab.slice(0, -1)}.
        </p>
        <button
          onClick={onAddNew}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Add {activeTab === 'products' ? 'Product' : 'Combo'}
        </button>
      </div>
    </div>
  );
};

export default EmptyState;