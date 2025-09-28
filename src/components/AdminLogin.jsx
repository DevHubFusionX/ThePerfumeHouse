import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { API_ENDPOINTS } from '../utils/api';
import '../styles/theme.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if already logged in
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.admin.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin-dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-light to-nude-light">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex flex-col justify-center items-center gradient-charcoal text-beige-light p-12">
          <div className="max-w-md text-center">
            <div className="w-24 h-24 gradient-gold rounded-3xl flex items-center justify-center mx-auto mb-8 elegant-shadow-xl">
              <span className="text-charcoal font-bold text-3xl">PH</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">theperfumehouse.ng</h1>
            <p className="text-xl text-beige mb-8 leading-relaxed">
              Nigeria's premier destination for authentic luxury fragrances
            </p>
            <div className="space-y-4 text-beige-light">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 gradient-gold rounded-full"></div>
                <span>100% Authentic Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 gradient-gold rounded-full"></div>
                <span>Fast Nationwide Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 gradient-gold rounded-full"></div>
                <span>Expert Customer Service</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Login Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="card-elegant p-10 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 elegant-shadow lg:hidden">
                <span className="text-charcoal font-bold text-xl">PH</span>
              </div>
              <h1 className="text-3xl font-bold text-charcoal mb-2">Admin Login</h1>
              <p className="text-charcoal-light">Access your dashboard</p>
            </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 elegant-border">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-3">Email</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-light" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-12 pr-4 py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal elegant-transition"
                placeholder="admin@theperfumehouse.ng"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-3">Password</label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-light" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-12 pr-12 py-4 border border-beige-dark rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal elegant-transition"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-charcoal-light hover:text-gold elegant-transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gold py-4 px-6 rounded-xl font-semibold elegant-transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 elegant-shadow hover:elegant-shadow-xl"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;