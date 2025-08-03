import React from 'react';
import { FaPlus, FaKey, FaEnvelope, FaSignOutAlt, FaTimes } from 'react-icons/fa';

const AdminSidebar = ({ 
  isOpen, 
  activeTab, 
  onClose, 
  onAddNew, 
  onChangePassword, 
  onChangeEmail, 
  onLogout 
}) => {
  if (!isOpen) return null;

  const handleAction = (action) => {
    action();
    onClose();
  };

  const menuItems = [
    {
      label: `Add ${activeTab === 'products' ? 'Product' : 'Combo'}`,
      icon: FaPlus,
      action: onAddNew,
      className: 'text-green-600 hover:bg-green-50'
    },
    {
      label: 'Change Password',
      icon: FaKey,
      action: onChangePassword,
      className: 'text-gray-600 hover:bg-gray-50'
    },
    {
      label: 'Change Email',
      icon: FaEnvelope,
      action: onChangeEmail,
      className: 'text-gray-600 hover:bg-gray-50'
    },
    {
      label: 'Logout',
      icon: FaSignOutAlt,
      action: onLogout,
      className: 'text-red-600 hover:bg-red-50'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">MT</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Admin Menu</h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
          
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleAction(item.action)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${item.className}`}
                >
                  <Icon className="text-sm" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;