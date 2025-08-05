import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaSignOutAlt, FaKey, FaEnvelope, FaBars, FaChartLine, FaCog, FaUser } from 'react-icons/fa';
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
  const [showActions, setShowActions] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 shadow-2xl border-b border-green-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-slate-900 font-bold text-lg transform -rotate-12">MT</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Admin Panel</h1>
              <p className="text-sm text-green-300">Moderate's Textile</p>
            </div>
            
            {/* Stats Pill */}
            <div className="hidden sm:block ml-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">{itemCount} {activeTab}</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Primary Add Button */}
            <div className="hidden lg:block">
              <button 
                onClick={onAddNew}
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center space-x-2">
                  <FaPlus className="text-sm" />
                  <span>Add {activeTab === 'products' ? 'Product' : 'Combo'}</span>
                </div>
              </button>
            </div>
            
            {/* Settings Cluster */}
            <div className="hidden lg:flex items-center">
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setShowActions(!showActions)}
                  className="group w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaCog className={`text-white transition-transform duration-500 ${showActions ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Floating Action Menu */}
                <div className={`absolute right-0 top-16 transition-all duration-300 ${showActions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                  <div className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-2xl min-w-[200px]">
                    <button 
                      onClick={() => {onChangePassword(); setShowActions(false);}}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors group"
                    >
                      <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center">
                        <FaKey className="text-blue-600 text-sm" />
                      </div>
                      <span className="font-medium">Change Password</span>
                    </button>
                    <button 
                      onClick={() => {onChangeEmail(); setShowActions(false);}}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-xl transition-colors group"
                    >
                      <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center">
                        <FaEnvelope className="text-purple-600 text-sm" />
                      </div>
                      <span className="font-medium">Change Email</span>
                    </button>
                    <div className="border-t border-gray-200 my-2"></div>
                    <button 
                      onClick={() => {onLogout(); setShowActions(false);}}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors group"
                    >
                      <div className="w-8 h-8 bg-red-100 group-hover:bg-red-200 rounded-lg flex items-center justify-center">
                        <FaSignOutAlt className="text-red-600 text-sm" />
                      </div>
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={onToggleSidebar}
              className="lg:hidden group w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaBars className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-teal-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </header>
  );
};

// Add custom CSS for backdrop blur support
const style = document.createElement('style');
style.textContent = `
  @supports (backdrop-filter: blur(10px)) {
    .backdrop-blur-sm {
      backdrop-filter: blur(4px);
    }
    .backdrop-blur-lg {
      backdrop-filter: blur(16px);
    }
  }
`;
document.head.appendChild(style);

export default AdminHeader;