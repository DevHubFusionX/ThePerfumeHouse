import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaSignOutAlt, FaKey, FaEnvelope, FaBars, FaCog, FaStar } from 'react-icons/fa';

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
    <header className="gradient-charcoal elegant-shadow-xl border-b elegant-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 gradient-gold rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 elegant-transition elegant-shadow">
                <span className="text-charcoal text-lg font-bold transform -rotate-12">PH</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 gradient-gold rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-beige-light">Admin Panel</h1>
              <p className="text-sm text-beige">theperfumehouse.ng</p>
            </div>

            {/* Stats Pill */}
            <div className="hidden sm:block ml-8">
              <div className="bg-beige-light/10 backdrop-blur-sm elegant-border rounded-full px-4 py-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span className="text-beige-light text-sm font-medium">{itemCount} {activeTab === 'products' ? 'Perfumes' : 'Gift Sets'}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Primary Add Button */}
            <div className="hidden lg:block">
              <button
                onClick={onAddNew}
                className="group relative overflow-hidden btn-gold px-6 py-3 rounded-2xl font-semibold transform hover:scale-105 elegant-transition elegant-shadow hover:elegant-shadow-xl"
              >
                <div className="absolute inset-0 bg-charcoal/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full elegant-transition"></div>
                <div className="relative flex items-center space-x-2">
                  <FaPlus className="text-sm" />
                  <span>Add {activeTab === 'products' ? 'Perfume' : 'Gift Set'}</span>
                </div>
              </button>
            </div>

            {/* Settings Cluster */}
            <div className="hidden lg:flex items-center">
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowActions(!showActions)}
                  className="group w-12 h-12 bg-beige-light/10 hover:bg-beige-light/20 backdrop-blur-sm elegant-border rounded-2xl flex items-center justify-center elegant-transition hover:scale-110"
                >
                  <FaCog className={`text-beige-light elegant-transition ${showActions ? 'rotate-180' : ''}`} />
                </button>

                {/* Floating Action Menu */}
                <div className={`absolute right-0 top-16 elegant-transition ${showActions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                  <div className="card-elegant backdrop-blur-lg p-2 elegant-shadow-xl min-w-[200px]">
                    <button
                      onClick={() => { onChangePassword(); setShowActions(false); }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-charcoal hover:bg-gold/10 rounded-xl elegant-transition group"
                    >
                      <div className="w-8 h-8 bg-gold/20 group-hover:bg-gold/30 rounded-lg flex items-center justify-center">
                        <FaKey className="text-gold text-sm" />
                      </div>
                      <span className="font-medium">Change Password</span>
                    </button>
                    <button
                      onClick={() => { onChangeEmail(); setShowActions(false); }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-charcoal hover:bg-gold/10 rounded-xl elegant-transition group"
                    >
                      <div className="w-8 h-8 bg-gold/20 group-hover:bg-gold/30 rounded-lg flex items-center justify-center">
                        <FaEnvelope className="text-gold text-sm" />
                      </div>
                      <span className="font-medium">Change Email</span>
                    </button>
                    <div className="border-t elegant-border my-2"></div>
                    <button
                      onClick={() => { onLogout(); setShowActions(false); }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl elegant-transition group"
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
              className="lg:hidden group w-12 h-12 bg-beige-light/10 hover:bg-beige-light/20 backdrop-blur-sm elegant-border rounded-2xl flex items-center justify-center elegant-transition hover:scale-110"
            >
              <FaBars className="text-beige-light group-hover:rotate-90 elegant-transition" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-beige-light/20 rounded-full blur-xl animate-pulse delay-1000"></div>
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