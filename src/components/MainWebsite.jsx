import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Shop from './Shop';
import Combos from './Combos';
import Testimonies from './Testimonies';
import HowToOrder from './HowToOrder';
import Contact from './Contact';
import Footer from './Footer';

const MainWebsite = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Shop />
      <Combos />
      <Testimonies />
      <HowToOrder />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainWebsite;