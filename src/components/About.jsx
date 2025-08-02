import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">About Moderate Ustaz</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-stone-600 leading-relaxed">
                A Nigerian, student of knowledge, sharing life reflections and providing quality clothing materials 
                to the community. Through motivational thoughts and affordable fashion, we aim to inspire and serve.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our mission is to combine spiritual growth with practical needs, offering both wisdom and 
                quality products that reflect our values and heritage.
              </p>
              <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-600">
                <blockquote className="text-xl italic text-amber-800 font-light">
                  "Move at your pace, don't let social media pressure you."
                </blockquote>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-stone-100 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Authentic Islamic teachings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Quality clothing materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Community service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Affordable pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;