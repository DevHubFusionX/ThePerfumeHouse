import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import ProductSkeleton from './ProductSkeleton';
import { cache } from '../utils/cache';

const Combos = () => {
  const [products, setProducts] = useState([]);
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Check cache first
    const cachedCombos = cache.get('combos');
    if (cachedCombos) {
      setCombos(cachedCombos);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://moderate-ustaz-backend.onrender.com/api/combos');
      const data = await response.json();
      setCombos(data);
      cache.set('combos', data);
    } catch (error) {
      console.error('Error fetching combos:', error);
      // Fallback to auto-generated combos
      const productsResponse = await fetch('https://moderate-ustaz-backend.onrender.com/api/products');
      const productsData = await productsResponse.json();
      setProducts(productsData);
      generateCombos(productsData);
    } finally {
      setLoading(false);
    }
  };

  const generateCombos = (productList) => {
    if (productList.length >= 3) {
      const generatedCombos = [
        {
          id: 1,
          name: "Complete Traditional Package",
          items: `${productList[0]?.name} + ${productList[2]?.name}`,
          originalPrice: calculateOriginalPrice([productList[0], productList[2]]),
          comboPrice: calculateComboPrice([productList[0], productList[2]]),
          savings: calculateSavings([productList[0], productList[2]]),
          image: productList[0]?.image,
          popular: true
        },
        {
          id: 2,
          name: "Premium Combo",
          items: `${productList[1]?.name} + ${productList[3]?.name}`,
          originalPrice: calculateOriginalPrice([productList[1], productList[3]]),
          comboPrice: calculateComboPrice([productList[1], productList[3]]),
          savings: calculateSavings([productList[1], productList[3]]),
          image: productList[1]?.image
        },
        {
          id: 3,
          name: "Casual Special",
          items: `${productList[4]?.name} + ${productList[2]?.name}`,
          originalPrice: calculateOriginalPrice([productList[4], productList[2]]),
          comboPrice: calculateComboPrice([productList[4], productList[2]]),
          savings: calculateSavings([productList[4], productList[2]]),
          image: productList[4]?.image
        }
      ].filter(combo => combo.image); // Only show combos with valid products
      setCombos(generatedCombos);
    }
  };

  const calculateOriginalPrice = (items) => {
    const total = items.reduce((sum, item) => {
      if (item?.price) {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return sum + price;
      }
      return sum;
    }, 0);
    return `₦${total.toLocaleString()}`;
  };

  const calculateComboPrice = (items) => {
    const total = items.reduce((sum, item) => {
      if (item?.price) {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return sum + price;
      }
      return sum;
    }, 0);
    const discounted = Math.floor(total * 0.85); // 15% discount
    return `₦${discounted.toLocaleString()}`;
  };

  const calculateSavings = (items) => {
    const original = items.reduce((sum, item) => {
      if (item?.price) {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return sum + price;
      }
      return sum;
    }, 0);
    const savings = Math.floor(original * 0.15); // 15% savings
    return `₦${savings.toLocaleString()}`;
  };

  return (
    <section id="combos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Value Combos</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Save more with our carefully curated combo packages</p>
        </div>
        
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {combos.map(combo => (
            <div key={combo._id || combo.id} className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border hover:-translate-y-1">
              {combo.popular && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 z-10">
                  <FaStar size={12} />
                  <span>Popular</span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img src={combo.image} alt={combo.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save {combo.savings}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{combo.name}</h3>
                <p className="text-gray-600 mb-4">{combo.description || combo.items}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg text-gray-500 line-through">{combo.originalPrice}</span>
                    <span className="text-2xl font-bold text-green-600">{combo.comboPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">You save {combo.savings}!</p>
                </div>
                
                <a href={`https://wa.me/2347069257877?text=Hi, I'm interested in the ${combo.name} combo for ${combo.comboPrice}`} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all">
                  <FaWhatsapp size={18} />
                  <span>Order Combo</span>
                </a>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Combos;