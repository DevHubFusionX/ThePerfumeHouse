import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Combos from './components/Combos';
import HowToOrder from './components/HowToOrder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';

const App = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'login', 'admin'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('adminToken');
    if (token) {
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch('https://moderate-ustaz-backend.onrender.com/api/admin/verify', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('adminToken');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
    }
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    setCurrentView('admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('main');
    localStorage.removeItem('adminToken');
  };

  const showAdminLogin = () => {
    if (isAuthenticated) {
      setCurrentView('admin');
    } else {
      setCurrentView('login');
    }
  };

  if (currentView === 'login') {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (currentView === 'admin') {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Shop />
      <Combos />
      <HowToOrder />
      <Contact />
      <Footer />
      
      {/* Admin Access Button */}
      <button 
        onClick={showAdminLogin}
        className="fixed bottom-20 left-6 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg text-sm"
      >
        Admin
      </button>
    </div>
  );
};

export default App;
