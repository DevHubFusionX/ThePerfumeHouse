import React from 'react';
import { FaQuoteLeft, FaHeart, FaShare } from 'react-icons/fa';

const Thoughts = () => {
  const thoughts = [
    {
      id: 1,
      text: "Don't let social media pressure you… Move at your pace…",
      date: "3 days ago",
      category: "Life Wisdom"
    },
    {
      id: 2,
      text: "Send 5k to my babe. I too much love that woman... If ₦1m hit your account right now, what would you do?",
      date: "4 days ago",
      category: "Relationships"
    },
    {
      id: 3,
      text: "Wallahi, this life will humble you, one moment you're full of hope...",
      date: "Aug 1, 2025",
      category: "Reflection"
    },
    {
      id: 4,
      text: "Knowledge without action is like a tree without fruit. Seek knowledge, but more importantly, apply it.",
      date: "1 week ago",
      category: "Islamic Wisdom"
    }
  ];

  return (
    <section id="thoughts" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">Daily Reflections</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Thoughts, wisdom, and reflections shared from the heart.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {thoughts.map(thought => (
            <article key={thought.id} className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaQuoteLeft className="text-amber-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="inline-block bg-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {thought.category}
                    </span>
                  </div>
                  <blockquote className="text-lg lg:text-xl text-stone-700 font-light leading-relaxed mb-6 italic">
                    "{thought.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <time className="text-stone-500 text-sm font-medium">{thought.date}</time>
                    <div className="flex space-x-4">
                      <button className="text-stone-400 hover:text-red-500 transition-colors">
                        <FaHeart size={16} />
                      </button>
                      <button className="text-stone-400 hover:text-blue-500 transition-colors">
                        <FaShare size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
            View All Thoughts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;