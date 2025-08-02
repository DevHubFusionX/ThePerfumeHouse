import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaSignOutAlt, FaHome, FaBoxes } from 'react-icons/fa';

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [combos, setCombos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '', category: '', image: null });
  const [comboFormData, setComboFormData] = useState({ name: '', description: '', products: [], originalPrice: '', comboPrice: '', savings: '', image: null, popular: false });
  const [loading, setLoading] = useState(false);

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
      const response = await fetch('https://moderate-ustaz-backend.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCombos = async () => {
    try {
      const response = await fetch('https://moderate-ustaz-backend.onrender.com/api/combos');
      const data = await response.json();
      setCombos(data);
    } catch (error) {
      console.error('Error fetching combos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('category', formData.category);
    if (formData.image) formDataToSend.append('image', formData.image);

    try {
      const url = editingId 
        ? `https://moderate-ustaz-backend.onrender.com/api/admin/products/${editingId}`
        : 'https://moderate-ustaz-backend.onrender.com/api/admin/products';
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
      
      fetchProducts();
      setFormData({ name: '', price: '', category: '', image: null });
      setEditingId(null);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setFormData({ name: product.name, price: product.price, category: product.category, image: null });
    setEditingId(product._id);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this product?')) {
      try {
        const response = await fetch(`https://moderate-ustaz-backend.onrender.com/api/admin/products/${id}`, { 
          method: 'DELETE',
          headers: getAuthHeaders()
        });
        
        if (response.status === 401) {
          onLogout();
          return;
        }
        
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-4 animate-fade-in">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg sm:text-xl">MU</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Moderate Ustaz Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-green-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-green-200">
                <span className="text-xs sm:text-sm text-green-700 font-medium">{products.length}</span>
              </div>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaPlus className="animate-pulse text-sm" /> 
                <span className="hidden sm:inline">Add Product</span>
                <span className="sm:hidden text-xs">Add</span>
              </button>
              <button 
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaSignOutAlt className="text-sm" /> 
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 animate-slide-up">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-white text-green-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <FaHome className="inline mr-2" />Products
          </button>
          <button
            onClick={() => setActiveTab('combos')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'combos'
                ? 'bg-white text-green-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <FaBoxes className="inline mr-2" />Combos
          </button>
        </div>

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
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mb-8 border border-gray-200/50 animate-scale-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FaPlus className="text-white text-sm" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Price</label>
                <input
                  type="text"
                  placeholder="e.g., ₦15,000"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Casual">Casual</option>
                  <option value="Premium">Premium</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
              <div className="flex space-x-4 md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none"
                >
                  <FaSave className={loading ? 'animate-spin' : ''} /> 
                  <span>{loading ? 'Saving...' : 'Save Product'}</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => {setShowAddForm(false); setEditingId(null); setFormData({ name: '', price: '', category: '', image: null });}}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
            <div 
              key={product._id} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-green-600">{product.price}</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(product)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2.5 rounded-xl flex items-center justify-center space-x-1 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button 
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2.5 rounded-xl flex items-center justify-center space-x-1 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}

        {activeTab === 'combos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <div 
                key={combo._id} 
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={combo.image} 
                    alt={combo.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {combo.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{combo.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{combo.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">{combo.comboPrice}</span>
                      <span className="text-sm text-gray-500 line-through">{combo.originalPrice}</span>
                    </div>
                    <span className="text-xs text-red-600 font-semibold">Save {combo.savings}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2.5 rounded-xl flex items-center justify-center space-x-1 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                      <FaEdit /> <span>Edit</span>
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2.5 rounded-xl flex items-center justify-center space-x-1 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                      <FaTrash /> <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
           
        {((activeTab === 'products' && products.length === 0) || (activeTab === 'combos' && combos.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No {activeTab} found. Add your first {activeTab.slice(0, -1)}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;