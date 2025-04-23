import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiShoppingCart, FiHeart, FiX } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// Sample product data
const products = [
  {
    id: 1,
    title: "Scandinavian Armchair",
    images: ["/chair1.jpg", "/chair2.jpg"],
    rating: 4.5,
    price: 299.99,
    oldPrice: 399.99,
    description: "Elegant armchair with minimalist design and premium upholstery.",
    material: "Oak wood, linen fabric",
    dimensions: "60cm × 65cm × 80cm",
    weight: "12kg",
    sku: "CHAIR-001"
  },
  {
    id: 2,
    title: "Modern Bookshelf",
    images: ["/shelf1.jpg", "/shelf2.jpg"],
    rating: 4.0,
    price: 199.99,
    oldPrice: 259.99,
    description: "Sleek bookshelf with adjustable shelves and durable construction.",
    material: "Engineered wood, metal frame",
    dimensions: "180cm × 30cm × 80cm",
    weight: "25kg",
    sku: "SHELF-002"
  },
  {
    id: 3,
    title: "Velvet Sofa",
    images: ["/sofa3.jpg", "/sofa4.jpg"],
    rating: 4.8,
    price: 649.99,
    oldPrice: 799.99,
    description: "Luxurious velvet sofa with deep seating and solid wood legs.",
    material: "Velvet fabric, hardwood frame",
    dimensions: "200cm × 90cm × 75cm",
    weight: "50kg",
    sku: "SOFA-003"
  },
  {
    id: 4,
    title: "Rustic Coffee Table",
    images: ["/table1.jpg", "/table2.jpg"],
    rating: 4.2,
    price: 179.99,
    oldPrice: 229.99,
    description: "Handcrafted coffee table with natural wood texture.",
    material: "Reclaimed pine wood",
    dimensions: "120cm × 60cm × 45cm",
    weight: "18kg",
    sku: "TABLE-004"
  },
  {
    id: 5,
    title: "Minimalist Bed Frame",
    images: ["/bed1.jpg", "/bed2.jpg"],
    rating: 4.6,
    price: 499.99,
    oldPrice: 599.99,
    description: "Platform bed frame with clean lines and sturdy construction.",
    material: "Solid oak wood",
    dimensions: "200cm × 160cm × 30cm",
    weight: "40kg",
    sku: "BED-005"
  },
  {
    id: 6,
    title: "Classic Dresser",
    images: ["/dresser1.jpg", "/dresser2.jpg"],
    rating: 4.4,
    price: 349.99,
    oldPrice: 449.99,
    description: "Timeless dresser with ample storage and smooth drawers.",
    material: "MDF with wood veneer",
    dimensions: "120cm × 45cm × 80cm",
    weight: "35kg",
    sku: "DRESS-006"
  },
];

const ProductDetailsPopup = ({ product, onClose, onAddToCart }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    return stars;
  };

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
        {/* Header with close button */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-xl font-bold">Product Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96">
              <img
                src={product.images[mainImageIndex]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>

            {/* Thumbnails */}
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

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">({product.rating} rating)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="ml-3 text-xl text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Quantity Selector */}
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

            {/* Action Buttons */}
            <div className="flex space-x-4">
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

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="font-bold text-lg mb-3">Product Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Material:</strong> {product.material}</li>
                <li><strong>Dimensions:</strong> {product.dimensions}</li>
                <li><strong>Weight:</strong> {product.weight}</li>
                <li><strong>SKU:</strong> {product.sku}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingCollection = () => {
  const scrollRef = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    return stars;
  };

  const handleAddToCart = (product, quantity) => {
    console.log('Added to cart:', product.title, 'Quantity:', quantity);
    // Add your cart logic here
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Trending Collection Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trending Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular furniture pieces
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition hidden md:block"
            >
              <FiChevronLeft className="text-xl" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition hidden md:block"
            >
              <FiChevronRight className="text-xl" />
            </button>

            {/* Product Cards - Hide scrollbar */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto px-2 space-x-6 py-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[280px] bg-white rounded-lg shadow-md hover:shadow-lg transition flex-shrink-0 flex flex-col cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="h-64 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-500">({product.rating})</span>
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        <span className="ml-3 text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                      className="mt-auto bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product, 1);
                      }}
                    >
                      <FiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Popup */}
      {selectedProduct && (
        <ProductDetailsPopup 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default TrendingCollection;