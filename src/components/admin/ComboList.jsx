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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
      <div className="p-6 border-b border-purple-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Combo Collections</h2>
            <p className="text-sm text-gray-600 mt-1">{filteredCombos.length} combo sets available</p>
          </div>
          <button
            onClick={onAddNew}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative flex items-center space-x-2">
              <FaBoxes className="text-sm" />
              <span>Add New Combo</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Search and Filter Controls */}
        <div className="mb-6 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm" />
            <input
              type="text"
              placeholder="Search combo collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm bg-white/50 backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center justify-between sm:justify-start space-x-3 bg-purple-50/50 backdrop-blur-sm p-4 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-purple-500 text-sm" />
              <span className="text-sm text-purple-700 font-medium">Filters:</span>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterPopular}
                onChange={(e) => setFilterPopular(e.target.checked)}
                className="rounded text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-purple-700 font-medium">Popular only</span>
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
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