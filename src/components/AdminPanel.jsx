import React, { useState, useEffect } from 'react';
import { FaHome, FaBoxes } from 'react-icons/fa';
import AdminHeader from './admin/AdminHeader';
import AdminSidebar from './admin/AdminSidebar';
import ProductForm from './admin/ProductForm';
import ProductCard from './ui/ProductCard';
import { cache } from '../utils/cache';

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [combos, setCombos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '', category: '', description: '', fabricType: '', texture: '', quality: '', care: '', images: [] });
  const [comboFormData, setComboFormData] = useState({ name: '', description: '', products: [], originalPrice: '', comboPrice: '', savings: '', image: null, popular: false });
  const [loading, setLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({ currentPassword: '', newEmail: '' });
  const [emailLoading, setEmailLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCombos();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      'Authorization': `Bearer ${token}`
    };
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://moderates-textile-backend.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCombos = async () => {
    try {
      const response = await fetch('https://moderates-textile-backend.onrender.com/api/combos');
      const data = await response.json();
      setCombos(data);
    } catch (error) {
      console.error('Error fetching combos:', error);
    }
  };

  const handleSubmit = async (formDataToSend) => {
    setLoading(true);

    try {
      const url = editingId 
        ? `https://moderates-textile-backend.onrender.com/api/admin/products/${editingId}`
        : 'https://moderates-textile-backend.onrender.com/api/admin/products';
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, { 
        method, 
        headers: getAuthHeaders(),
        body: formDataToSend 
      });
      
      if (response.status === 401) {
        onLogout();
        return;
      }
      
      // Clear cache to ensure frontend updates immediately
      cache.clear('products');
      fetchProducts();
      setFormData({ name: '', price: '', category: '', description: '', fabricType: '', texture: '', quality: '', care: '', images: [] });
      setEditingId(null);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setFormData({ 
      name: product.name, 
      price: product.price, 
      category: product.category, 
      description: product.description || '',
      fabricType: product.fabricType || '',
      texture: product.texture || '',
      quality: product.quality || '',
      care: product.care || '',
      images: [] 
    });
    setEditingId(product._id);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this product?')) {
      setDeletingId(id);
      try {
        const response = await fetch(`https://moderates-textile-backend.onrender.com/api/admin/products/${id}`, { 
          method: 'DELETE',
          headers: getAuthHeaders()
        });
        
        if (response.status === 401) {
          onLogout();
          return;
        }
        
        // Clear cache to ensure frontend updates immediately
        cache.clear('products');
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader
        activeTab={activeTab}
        itemCount={activeTab === 'products' ? products.length : combos.length}
        onAddNew={() => setShowAddForm(true)}
        onChangePassword={() => setShowPasswordForm(true)}
        onChangeEmail={() => setShowEmailForm(true)}
        onLogout={handleLogout}
        onToggleSidebar={() => setSidebarOpen(true)}
      />

      <AdminSidebar
        isOpen={sidebarOpen}
        activeTab={activeTab}
        onClose={() => setSidebarOpen(false)}
        onAddNew={() => setShowAddForm(true)}
        onChangePassword={() => setShowPasswordForm(true)}
        onChangeEmail={() => setShowEmailForm(true)}
        onLogout={handleLogout}
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'products'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaHome className="inline mr-2" />Products
              </button>
              <button
                onClick={() => setActiveTab('combos')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'combos'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaBoxes className="inline mr-2" />Combos
              </button>
            </nav>
          </div>
        </div>

        {showEmailForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <FaEdit className="text-white text-sm" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Change Email</h2>
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              setEmailLoading(true);
              try {
                const response = await fetch('https://moderates-textile-backend.onrender.com/api/admin/change-email', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
                  body: JSON.stringify({ currentPassword: emailData.currentPassword, newEmail: emailData.newEmail })
                });
                if (response.ok) {
                  alert('Email changed successfully');
                  setShowEmailForm(false);
                  setEmailData({ currentPassword: '', newEmail: '' });
                } else {
                  const data = await response.json();
                  alert(data.error);
                }
              } catch (error) {
                alert('Failed to change email');
              } finally {
                setEmailLoading(false);
              }
            }} className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  value={emailData.currentPassword}
                  onChange={(e) => setEmailData({...emailData, currentPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">New Email</label>
                <input
                  type="email"
                  value={emailData.newEmail}
                  onChange={(e) => setEmailData({...emailData, newEmail: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button type="submit" disabled={emailLoading} className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors">
                  <FaSave className={emailLoading ? 'animate-spin' : ''} /> 
                  <span>{emailLoading ? 'Changing...' : 'Change Email'}</span>
                </button>
                <button type="button" onClick={() => {setShowEmailForm(false); setEmailData({ currentPassword: '', newEmail: '' });}} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors">
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {showPasswordForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaHome className="text-white text-sm" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Change Password</h2>
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              if (passwordData.newPassword !== passwordData.confirmPassword) {
                alert('New passwords do not match');
                return;
              }
              setPasswordLoading(true);
              try {
                const response = await fetch('https://moderates-textile-backend.onrender.com/api/admin/change-password', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
                  body: JSON.stringify({ currentPassword: passwordData.currentPassword, newPassword: passwordData.newPassword })
                });
                if (response.ok) {
                  alert('Password changed successfully');
                  setShowPasswordForm(false);
                  setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                } else {
                  const data = await response.json();
                  alert(data.error);
                }
              } catch (error) {
                alert('Failed to change password');
              } finally {
                setPasswordLoading(false);
              }
            }} className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button type="submit" disabled={passwordLoading} className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors">
                  <FaSave className={passwordLoading ? 'animate-spin' : ''} /> 
                  <span>{passwordLoading ? 'Changing...' : 'Change Password'}</span>
                </button>
                <button type="button" onClick={() => {setShowPasswordForm(false); setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });}} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors">
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {showAddForm && activeTab === 'combos' && (
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mb-8 border border-gray-200/50 animate-scale-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBoxes className="text-white text-sm" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Add New Combo</h2>
            </div>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Combo Name</label>
                <input
                  type="text"
                  placeholder="Enter combo name"
                  value={comboFormData.name}
                  onChange={(e) => setComboFormData({...comboFormData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Description</label>
                <input
                  type="text"
                  placeholder="Brief description"
                  value={comboFormData.description}
                  onChange={(e) => setComboFormData({...comboFormData, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">Select Products</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-60 overflow-y-auto border border-gray-300 rounded-xl p-4">
                  {products.map(product => (
                    <div key={product._id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={product._id}
                        checked={comboFormData.products.includes(product._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setComboFormData({...comboFormData, products: [...comboFormData.products, product._id]});
                          } else {
                            setComboFormData({...comboFormData, products: comboFormData.products.filter(id => id !== product._id)});
                          }
                        }}
                        className="rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={product._id} className="text-sm text-gray-700 cursor-pointer">
                        {product.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Original Price</label>
                <input
                  type="text"
                  placeholder="e.g., ₦30,000"
                  value={comboFormData.originalPrice}
                  onChange={(e) => setComboFormData({...comboFormData, originalPrice: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Combo Price</label>
                <input
                  type="text"
                  placeholder="e.g., ₦25,000"
                  value={comboFormData.comboPrice}
                  onChange={(e) => setComboFormData({...comboFormData, comboPrice: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Savings</label>
                <input
                  type="text"
                  placeholder="e.g., ₦5,000"
                  value={comboFormData.savings}
                  onChange={(e) => setComboFormData({...comboFormData, savings: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Combo Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setComboFormData({...comboFormData, image: e.target.files[0]})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>
              <div className="flex items-center space-x-2 md:col-span-2">
                <input
                  type="checkbox"
                  id="popular"
                  checked={comboFormData.popular}
                  onChange={(e) => setComboFormData({...comboFormData, popular: e.target.checked})}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <label htmlFor="popular" className="text-sm font-semibold text-gray-700">Mark as Popular</label>
              </div>
              <div className="flex space-x-4 md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaSave /> 
                  <span>Save Combo</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => {setShowAddForm(false); setComboFormData({ name: '', description: '', products: [], originalPrice: '', comboPrice: '', savings: '', image: null, popular: false });}}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {showAddForm && activeTab === 'products' && (
          <ProductForm
            product={editingId ? products.find(p => p._id === editingId) : null}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowAddForm(false);
              setEditingId(null);
              setFormData({ name: '', price: '', category: '', description: '', fabricType: '', texture: '', quality: '', care: '', images: [] });
            }}
            loading={loading}
          />
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Products</h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
                >
                  <FaHome className="text-xs" />
                  <span>Add Product</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    showActions={true}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    isDeleting={deletingId === product._id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'combos' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Combos</h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
                >
                  <FaBoxes className="text-xs" />
                  <span>Add Combo</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {combos.map((combo) => (
                  <div 
                    key={combo._id} 
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <img 
                        src={combo.image} 
                        alt={combo.name} 
                        className="w-full h-48 object-cover" 
                      />
                      {combo.popular && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{combo.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{combo.description}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-green-600">{combo.comboPrice}</span>
                        <span className="text-sm text-gray-500 line-through">{combo.originalPrice}</span>
                      </div>
                      <p className="text-xs text-red-600 font-medium mb-4">Save {combo.savings}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
           
        {((activeTab === 'products' && products.length === 0) || (activeTab === 'combos' && combos.length === 0)) && (
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
                onClick={() => setShowAddForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Add {activeTab === 'products' ? 'Product' : 'Combo'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;