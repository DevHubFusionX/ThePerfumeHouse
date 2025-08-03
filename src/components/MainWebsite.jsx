import React from 'react';
import Hero from './Hero';
import Shop from './Shop';
import Combos from './Combos';
import WhyChooseUs from './WhyChooseUs';
import Testimonies from './Testimonies';
import Contact from './Contact';
import Footer from './Footer';

const MainWebsite = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Shop />
      <Combos />
      <WhyChooseUs />
      <Testimonies />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainWebsite;