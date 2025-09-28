import React from 'react';
import { FaStar, FaBoxes, FaEye, FaHeart } from 'react-icons/fa';

const DashboardStats = ({ products, combos }) => {
  const totalProducts = products.length;
  const totalCombos = combos.length;
  const popularCombos = combos.filter(combo => combo.popular).length;
  const categories = [...new Set(products.map(p => p.category))].length;

  const stats = [
    {
      title: 'Total Perfumes',
      value: totalProducts,
      icon: FaStar,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Combo Sets',
      value: totalCombos,
      icon: FaBoxes,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Categories',
      value: categories,
      icon: FaEye,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      title: 'Popular Items',
      value: popularCombos,
      icon: FaHeart,
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <Icon className={`text-xl ${stat.iconColor}`} />
              </div>
            </div>
            <div className={`mt-4 h-1 bg-gradient-to-r ${stat.color} rounded-full`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;