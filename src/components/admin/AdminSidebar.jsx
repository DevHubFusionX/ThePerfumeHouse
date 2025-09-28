import React from 'react';
import { FaPlus, FaKey, FaEnvelope, FaSignOutAlt, FaTimes, FaStar } from 'react-icons/fa';

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
      label: `Add New ${activeTab === 'products' ? 'Perfume' : 'Gift Set'}`,
      icon: FaPlus,
      action: onAddNew,
      className: 'text-gold hover:bg-gold/10 bg-gold/5'
    },
    {
      label: 'Update Password',
      icon: FaKey,
      action: onChangePassword,
      className: 'text-charcoal-light hover:bg-beige-dark'
    },
    {
      label: 'Update Email',
      icon: FaEnvelope,
      action: onChangeEmail,
      className: 'text-charcoal-light hover:bg-beige-dark'
    },
    {
      label: 'Sign Out',
      icon: FaSignOutAlt,
      action: onLogout,
      className: 'text-charcoal hover:bg-nude-dark'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-80 bg-white elegant-shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                <FaStar className="text-charcoal text-sm" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal">Menu</h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 text-charcoal-light hover:text-charcoal hover:bg-beige-dark rounded-lg elegant-transition"
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl elegant-transition ${item.className} hover:scale-105 elegant-shadow`}
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