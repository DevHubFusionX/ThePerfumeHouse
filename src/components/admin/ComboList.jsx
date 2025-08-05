import React from 'react';
import { FaBoxes, FaSearch, FaFilter } from 'react-icons/fa';
import ComboCard from './ComboCard';

const ComboList = ({ 
  combos, 
  searchTerm, 
  setSearchTerm, 
  filterPopular, 
  setFilterPopular,
  onEdit, 
  onDelete, 
  onPreview, 
  editingId, 
  deletingId,
  onAddNew 
}) => {
  const filteredCombos = combos.filter(combo => {
    const matchesSearch = combo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         combo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterPopular || combo.popular;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">Combos ({filteredCombos.length})</h2>
          <button
            onClick={onAddNew}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors w-full sm:w-auto"
          >
            <FaBoxes className="text-xs" />
            <span>Add New Combo</span>
          </button>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Search and Filter Controls */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-0 sm:flex sm:gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search combos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex items-center justify-between sm:justify-start space-x-3 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400 text-sm" />
              <span className="text-sm text-gray-600">Filters:</span>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterPopular}
                onChange={(e) => setFilterPopular(e.target.checked)}
                className="rounded text-green-600 focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">Popular only</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCombos.map((combo) => (
            <ComboCard
              key={combo._id}
              combo={combo}
              onEdit={onEdit}
              onDelete={onDelete}
              onPreview={onPreview}
              isEditing={editingId === combo._id}
              isDeleting={deletingId === combo._id}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredCombos.length === 0 && combos.length > 0 && (
          <div className="text-center py-12">
            <div className="w-12 h-12 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <FaSearch className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No combos found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterPopular(false);
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
        
        {/* Combo Statistics */}
        {combos.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-lg sm:text-xl font-bold text-purple-600">{combos.length}</p>
                <p className="text-xs sm:text-sm text-gray-600">Total Combos</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-red-600">{combos.filter(c => c.popular).length}</p>
                <p className="text-xs sm:text-sm text-gray-600">Popular</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-green-600">
                  {combos.reduce((acc, combo) => acc + (combo.products?.length || 0), 0)}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Total Items</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-blue-600">
                  {Math.round(combos.reduce((acc, combo) => acc + (combo.products?.length || 0), 0) / combos.length) || 0}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Avg Items/Combo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboList;