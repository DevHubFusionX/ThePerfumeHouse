import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPanel from './AdminPanel';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }

    try {
      const response = await fetch('https://moderate-textile.onrender.com/api/admin/verify', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <AdminPanel onLogout={handleLogout} />;
};

export default AdminDashboard;