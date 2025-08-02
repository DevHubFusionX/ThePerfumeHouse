import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaSignOutAlt, FaHome } from 'react-icons/fa';

const AdminPanel = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '', category: '', image: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MU</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2"
            >
              <FaPlus /> <span>Add Product</span>
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl flex items-center space-x-2"
            >
              <FaSignOutAlt /> <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">

        {showAddForm && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Price (e.g., ₦15,000)"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Category</option>
                <option value="Traditional">Traditional</option>
                <option value="Casual">Casual</option>
                <option value="Premium">Premium</option>
                <option value="Accessories">Accessories</option>
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="flex space-x-4 md:col-span-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl flex items-center space-x-2"
                >
                  <FaSave /> <span>{loading ? 'Saving...' : 'Save'}</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => {setShowAddForm(false); setEditingId(null); setFormData({ name: '', price: '', category: '', image: null });}}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2"
                >
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <p className="text-green-600 font-bold text-xl mb-4">{product.price}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(product)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-1 text-sm"
                  >
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button 
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-1 text-sm"
                  >
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
           
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found. Add your first product!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;