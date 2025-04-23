import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const DealOfTheWeek = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Modern Leather Sofa",
      images: ["/sofa1.jpg", "/sofa2.jpg"],
      rating: 4.5,
      originalPrice: 899.99,
      discountPrice: 649.99,
      discountPercentage: 28,
      discountEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      description: "Premium full-grain leather sofa with solid wood frame and high-density foam cushions.",
      features: [
        "Dimensions: 84\" W x 38\" D x 34\" H",
        "Weight capacity: 750 lbs",
        "Color options: Black, Brown, Gray",
        "Assembly required (tools included)"
      ],
      materials: "Top-grain leather, Solid hardwood frame, High-resiliency foam",
      warranty: "5-year limited warranty"
    },
    {
      id: 2,
      title: "Minimalist Coffee Table",
      images: ["/table1.jpg", "/table2.jpg"],
      rating: 4.0,
      originalPrice: 299.99,
      discountPrice: 199.99,
      discountPercentage: 33,
      discountEnd: new Date(Date.now() + 7 * 24 * 60 * 12 * 1000),
      description: "Sleek contemporary coffee table with tempered glass top and powder-coated steel frame.",
      features: [
        "Dimensions: 36\" L x 24\" W x 18\" H",
        "Weight capacity: 150 lbs",
        "Color options: Black, White, Chrome",
        "No assembly required"
      ],
      materials: "6mm tempered glass, Powder-coated steel",
      warranty: "2-year limited warranty"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTimeLeft = {};

      products.forEach((product) => {
        const diff = product.discountEnd - now;

        if (diff <= 0) {
          newTimeLeft[product.id] = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
          return;
        }

        newTimeLeft[product.id] = {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProduct]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400 text-lg" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400 text-lg" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400 text-lg" />);
      }
    }
    return stars;
  };

  const handleAddToCart = (product, quantity) => {
    console.log('Added to cart:', product.title, 'Quantity:', quantity);
    // Add your cart logic here
  };

  const ProductDetailsPopup = ({ product, onClose, onAddToCart }) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handlePrevImage = () => {
      setMainImageIndex(prev => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    };

    const handleNextImage = () => {
      setMainImageIndex(prev => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
            <h2 className="text-xl font-bold">Product Details</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
           
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            <div className="space-y-4">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96">
                <img
                  src={product.images[mainImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"
                >
                  
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"
                >
                
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto py-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden ${mainImageIndex === index ? 'border-black' : 'border-transparent'}`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.rating} rating)</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                <span className="ml-3 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="ml-3 text-lg font-medium text-red-600">
                  Save ${(product.originalPrice - product.discountPrice).toFixed(2)}
                </span>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg mb-6">
                <p className="text-md font-medium text-gray-700 mb-1">Deal ends in:</p>
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-xl font-bold">{timeLeft[product.id]?.days || 0}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{timeLeft[product.id]?.hours || 0}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{timeLeft[product.id]?.minutes || 0}</div>
                    <div className="text-xs">Mins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{timeLeft[product.id]?.seconds || 0}</div>
                    <div className="text-xs">Secs</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-1 border rounded-l-md hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-1 border rounded-r-md hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <button 
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 border border-black py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <FiHeart className="mr-2" />
                  Wishlist
                </button>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-bold text-lg mb-3">Product Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Materials:</strong> {product.materials}</li>
                  <li><strong>Warranty:</strong> {product.warranty}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id='today' className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-6 relative after:block after:w-24 after:h-1 after:bg-black after:mt-4 after:mx-auto">
          Deal of the Week
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="border-2 border-black rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-64 overflow-hidden relative">
                  <img
                    src={hoveredIndex === index ? product.images[1] : product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-bold text-lg px-3 py-1 rounded-full shadow-lg">
                    {product.discountPercentage}% OFF
                  </div>
                  {hoveredIndex === index && (
                    <button 
                      className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to wishlist logic
                      }}
                    >
                      <FiHeart className="text-gray-800 text-xl" />
                    </button>
                  )}
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.discountPrice.toFixed(2)}
                      </span>
                      <span className="ml-3 text-lg text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-3 text-lg font-medium text-red-600">
                        Save $
                        {(
                          product.originalPrice - product.discountPrice
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-100 p-3 rounded-lg mb-4">
                      <p className="text-md font-medium text-gray-700 mb-1">
                        Deal ends in:
                      </p>
                      <div className="flex justify-between">
                        <div className="text-center">
                          <div className="text-xl font-bold">{timeLeft[product.id]?.days || 0}</div>
                          <div className="text-xs">Days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">{timeLeft[product.id]?.hours || 0}</div>
                          <div className="text-xs">Hours</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">{timeLeft[product.id]?.minutes || 0}</div>
                          <div className="text-xs">Mins</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">{timeLeft[product.id]?.seconds || 0}</div>
                          <div className="text-xs">Secs</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button 
                        className="flex-1 bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors text-md font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product, 1);
                        }}
                      >
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                      </button>
                      <button 
                        className="flex-1 border border-black bg-white text-black py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-md font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                      >
                        <FiEye className="mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsPopup 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default DealOfTheWeek;