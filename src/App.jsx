import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';
import Thoughts from './components/Thoughts';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Shop />
      <Thoughts />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
