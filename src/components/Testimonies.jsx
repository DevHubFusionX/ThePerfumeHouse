import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/theme.css';

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };
  const testimonies = [
    {
      id: 1,
      name: "Adebayo Olumide",
      location: "Lagos",
      rating: 5,
      text: "theperfumehouse.ng helped me find the perfect perfume for my collection. Their knowledge about fragrances is amazing, and every bottle is high quality.",
      image: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Fatima Yusuf",
      location: "Abuja",
      rating: 5,
      text: "The personal advice changed how I think about perfumes. Their expert knowledge helped me find scents that really suit my personality.",
      image: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Musa Abdullahi",
      location: "Kano",
      rating: 5,
      text: "Great selection and excellent service. Every perfume arrives perfectly packaged and is 100% authentic.",
      image: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      location: "Kaduna",
      rating: 5,
      text: "Their way of choosing perfumes is amazing. Every recommendation has been perfect for my taste.",
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <section id="testimonies" className="py-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">Customer Reviews</span>
          <h2 className="text-5xl font-bold text-gray-700 mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our happy customers across Nigeria are saying about our perfumes and service.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid max-w-6xl mx-auto md:grid-cols-2 gap-10">
          {testimonies.map((testimony, index) => (
            <div
              key={testimony.id}
              className="bg-beige-light/10 backdrop-blur-sm p-8 rounded-3xl elegant-border hover:bg-beige-light/20 elegant-transition transform hover:-translate-y-2 animate-fade-in-up shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <FaQuoteLeft className="text-gold text-3xl opacity-60" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    {[...Array(testimony.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg italic font-light" style={{ opacity: 1, visibility: 'visible' }}>
                    "{testimony.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 gradient-gold rounded-full flex items-center justify-center">
                      <span className="text-charcoal font-bold text-xl">
                        {testimony.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 text-lg">{testimony.name}</h4>
                      <p className="text-gold text-sm font-medium">{testimony.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex elegant-transition"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonies.map((testimony) => (
                <div
                  key={testimony.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-beige-light/10 backdrop-blur-sm p-6 rounded-3xl elegant-border shadow-lg">
                    <div className="text-center">
                      <FaQuoteLeft className="text-gold text-2xl opacity-60 mx-auto mb-4" />
                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimony.rating)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                      </div>
                      <p className="text-charcoal mb-6 leading-relaxed italic font-light" style={{ opacity: 1, visibility: 'visible' }}>
                        "{testimony.text}"
                      </p>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                          <span className="text-charcoal font-bold">
                            {testimony.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-charcoal">{testimony.name}</h4>
                          <p className="text-gold text-sm font-medium">{testimony.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gold/20 backdrop-blur-sm text-gold p-3 rounded-full elegant-transition hover:bg-gold/30"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gold/20 backdrop-blur-sm text-gold p-3 rounded-full elegant-transition hover:bg-gold/30"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full elegant-transition ${index === currentSlide ? 'bg-gold' : 'bg-gold/30'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="card-elegant p-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-charcoal mb-4">Join Our Happy Customers</h3>
            <p className="text-charcoal-light mb-8 text-lg leading-relaxed">
              Become part of our community of satisfied customers who love quality perfumes and great service.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=%2B2347031862712&text&app_absent=0"
              className="btn-gold inline-flex items-center px-8 py-4 rounded-full font-semibold elegant-shadow hover:elegant-shadow-xl transform hover:scale-105 elegant-transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;