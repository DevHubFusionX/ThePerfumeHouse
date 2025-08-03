import React from 'react';
import { FaPlus, FaSignOutAlt, FaKey, FaEnvelope, FaBars, FaChartLine } from 'react-icons/fa';
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
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">MT</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-500">Moderate's Textile</p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-6 ml-8">
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-gray-400 text-sm" />
                <span className="text-sm text-gray-600">Total {activeTab}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                  {itemCount}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-2">
              <Button 
                onClick={onAddNew} 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
              >
                <FaPlus className="text-xs" />
                <span>Add {activeTab === 'products' ? 'Product' : 'Combo'}</span>
              </Button>
              
              <div className="flex items-center space-x-1">
                <button 
                  onClick={onChangePassword}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Change Password"
                >
                  <FaKey className="text-sm" />
                </button>
                <button 
                  onClick={onChangeEmail}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Change Email"
                >
                  <FaEnvelope className="text-sm" />
                </button>
                <button 
                  onClick={onLogout}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
            </div>
            
            <button 
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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