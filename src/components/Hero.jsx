import React from 'react';
import heroImage from '../assets/moderate_ustaz.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
              A Nigerian,<br />
              <span className="text-amber-700">Student of Knowledge</span>
            </h1>
            <blockquote className="text-xl lg:text-2xl text-stone-600 mb-8 italic font-light leading-relaxed">
              "Wallahi, this life will humble you, one moment you're full of hope..."
            </blockquote>
            <p className="text-lg text-stone-600 mb-10 max-w-lg">
              Sharing wisdom, reflections, and quality clothing materials with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Shop Now
              </button>
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all">
                Read Thoughts
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-amber-200">
              <img src={heroImage} alt="Moderate Ustaz" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;