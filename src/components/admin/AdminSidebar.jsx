import React from 'react';
import { FaPlus, FaHome, FaEdit, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';

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

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-800">Admin Menu</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <FaTimes className="text-gray-600" />
            </button>
          </div>
          
          <div className="space-y-4">
            <Button 
              className="w-full"
              onClick={() => handleAction(onAddNew)}
              icon={<FaPlus />}
            >
              Add {activeTab === 'products' ? 'Product' : 'Combo'}
            </Button>
            
            <Button 
              className="w-full"
              variant="secondary"
              onClick={() => handleAction(onChangePassword)}
              icon={<FaHome />}
            >
              Change Password
            </Button>
            
            <Button 
              className="w-full"
              variant="secondary"
              onClick={() => handleAction(onChangeEmail)}
              icon={<FaEdit />}
            >
              Change Email
            </Button>
            
            <Button 
              className="w-full"
              variant="danger"
              onClick={() => handleAction(onLogout)}
              icon={<FaSignOutAlt />}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;