import React from 'react';
import { FaPlus, FaSignOutAlt, FaHome, FaEdit, FaBars } from 'react-icons/fa';
import Button from '../ui/Button';

const AdminHeader = ({ 
  activeTab, 
  itemCount, 
  onAddNew, 
  onChangePassword, 
  onChangeEmail, 
  onLogout, 
  onToggleSidebar 
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-4 animate-fade-in">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg sm:text-xl">MT</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Moderate's Textile Management</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-green-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-green-200">
              <span className="text-xs sm:text-sm text-green-700 font-medium">{itemCount}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button onClick={onAddNew} icon={<FaPlus />}>
                Add {activeTab === 'products' ? 'Product' : 'Combo'}
              </Button>
              <Button variant="secondary" onClick={onChangePassword} icon={<FaHome />}>
                Password
              </Button>
              <Button variant="secondary" onClick={onChangeEmail} icon={<FaEdit />}>
                Email
              </Button>
              <Button variant="danger" onClick={onLogout} icon={<FaSignOutAlt />}>
                Logout
              </Button>
            </div>
            
            <button 
              onClick={onToggleSidebar}
              className="md:hidden bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-xl shadow-lg transition-all"
            >
              <FaBars className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;