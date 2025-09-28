import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import MainWebsite from './components/MainWebsite';
import AllProducts from './components/AllProducts';
import AllCombos from './components/AllCombos';
import MensCollection from './components/MensCollection';
import WomensCollection from './components/WomensCollection';
import UnisexCollection from './components/UnisexCollection';
import ProductDetails from './components/ProductDetails';
import ComboDetails from './components/ComboDetails';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './utils/keepServerAlive';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  
  return (
    <>
      <ScrollToTop />
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/collections/men" element={<MensCollection />} />
        <Route path="/collections/women" element={<WomensCollection />} />
        <Route path="/collections/unisex" element={<UnisexCollection />} />
        <Route path="/combos" element={<AllCombos />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/combo/:id" element={<ComboDetails />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
