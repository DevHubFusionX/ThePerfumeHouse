import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './ui/Button';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://moderate-ustaz-backend.onrender.com/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      if (data.colors?.length > 0) {
        setSelectedColor(data.colors[0]);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    const images = selectedColor?.images || product?.images || [product?.image];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = selectedColor?.images || product?.images || [product?.image];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0);
  };

  const handleWhatsAppOrder = () => {
    const colorText = selectedColor ? ` in ${selectedColor.name}` : '';
    const message = `Hi, I'm interested in ${product.name}${colorText} for ${product.price}`;
    window.open(`https://wa.me/2347069257877?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const currentImages = selectedColor?.images || 
    (product.images && product.images.length > 0 ? product.images : 
    (product.image ? [product.image] : ['https://via.placeholder.com/400x400?text=No+Image']));

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-green-600 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={imageError ? 'https://via.placeholder.com/400x400?text=No+Image' : currentImages[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
                
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <FaChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Image Thumbnails */}
              {currentImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {currentImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-green-600' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-3xl font-bold text-green-600">{product.price}</p>
              </div>

              {/* Color Variants */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(color)}
                        className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                          selectedColor?.name === color.name
                            ? 'border-green-600 bg-green-50 text-green-800'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              )}

              {/* Fabric Details */}
              {product.fabricType && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Fabric Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {product.fabricType && (
                      <div>
                        <span className="font-medium text-gray-700">Type:</span>
                        <span className="ml-2 text-gray-600">{product.fabricType}</span>
                      </div>
                    )}
                    {product.texture && (
                      <div>
                        <span className="font-medium text-gray-700">Texture:</span>
                        <span className="ml-2 text-gray-600">{product.texture}</span>
                      </div>
                    )}
                    {product.quality && (
                      <div>
                        <span className="font-medium text-gray-700">Quality:</span>
                        <span className="ml-2 text-gray-600">{product.quality}</span>
                      </div>
                    )}
                    {product.care && (
                      <div>
                        <span className="font-medium text-gray-700">Care:</span>
                        <span className="ml-2 text-gray-600">{product.care}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Get Item Button */}
              <div className="pt-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  icon={<FaWhatsapp size={20} />}
                  onClick={handleWhatsAppOrder}
                >
                  Get Item via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;