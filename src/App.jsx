import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainWebsite from './components/MainWebsite';
import AllProducts from './components/AllProducts';
import AllCombos from './components/AllCombos';
import ProductDetails from './components/ProductDetails';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/combos" element={<AllCombos />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
