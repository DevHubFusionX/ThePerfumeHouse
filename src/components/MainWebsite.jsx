import React from 'react';
import Hero from './Hero';
import BusinessStats from './BusinessStats';
import Shop from './Shop';
import Combos from './Combos';
import WhyChooseUs from './WhyChooseUs';
import Testimonies from './Testimonies';
import HowToOrder from './HowToOrder';
import Contact from './Contact';
import Footer from './Footer';

const MainWebsite = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <BusinessStats />
      <Shop />
      <Combos />
      <WhyChooseUs />
      <Testimonies />
      <HowToOrder />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainWebsite;