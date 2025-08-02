import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainWebsite from './components/MainWebsite';
import AllProducts from './components/AllProducts';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
