import React, { useState } from 'react';
import { FiShoppingCart, FiHeart, FiX, FiClock } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Using your exact JSON data
const newArrivals = [
  {
    "id": 1,
    "title": "Luxe Leather Sofa",
    "images": ["/sofa15.jpg", "sofa16.jpg"],
    "rating": 4.7,
    "price": 799.99,
    "oldPrice": 999.99,
    "description": "A sleek, luxurious leather sofa designed for modern living rooms.",
    "material": "Genuine leather, hardwood frame",
    "dimensions": "220cm × 90cm × 85cm",
    "weight": "55kg",
    "sku": "SOFA-101"
  },
  {
    "id": 2,
    "title": "Modern Dining Set",
    "images": ["/dining1.jpg", "/dining2.jpg"],
    "rating": 4.3,
    "price": 499.99,
    "oldPrice": 599.99,
    "description": "Stylish dining set with a minimalist design for small spaces.",
    "material": "Wood, glass top",
    "dimensions": "120cm × 80cm × 75cm (table), 45cm (chairs)",
    "weight": "30kg",
    "sku": "DINING-102"
  },
  {
    "id": 3,
    "title": "Contemporary TV Stand",
    "images": ["/tvstand1.jpg", "/tvstand2.jpg"],
    "rating": 4.6,
    "price": 299.99,
    "oldPrice": 349.99,
    "description": "A stylish TV stand with built-in storage, perfect for your living room.",
    "material": "Engineered wood, metal frame",
    "dimensions": "150cm × 40cm × 60cm",
    "weight": "35kg",
    "sku": "TVSTAND-103"
  },
  {
    "id": 4,
    "title": "Industrial Bar Stool",
    "images": ["/barstool1.jpg", "/barstool2.jpg"],
    "rating": 4.2,
    "price": 129.99,
    "oldPrice": 159.99,
    "description": "Durable bar stool with an industrial-style metal frame and comfortable seat.",
    "material": "Metal, wood seat",
    "dimensions": "40cm × 40cm × 75cm",
    "weight": "8kg",
    "sku": "BARSTOOL-104"
  },
  {
    "id": 5,
    "title": "Minimalist Study Desk",
    "images": ["/desk1.jpg", "/desk2.jpg"],
    "rating": 4.8,
    "price": 199.99,
    "oldPrice": 249.99,
    "description": "A clean, functional study desk designed for home offices and small spaces.",
    "material": "Wood, metal frame",
    "dimensions": "120cm × 60cm × 75cm",
    "weight": "15kg",
    "sku": "DESK-105"
  },
  {
    "id": 6,
    "title": "Boho Rattan Chair",
    "images": ["/chair11.jpg", "/chair12.jpg"],
    "rating": 4.5,
    "price": 149.99,
    "oldPrice": 179.99,
    "description": "A charming rattan chair with a boho design, perfect for any living room or patio.",
    "material": "Rattan, cotton fabric",
    "dimensions": "75cm × 70cm × 85cm",
    "weight": "12kg",
    "sku": "CHAIR-106"
  }
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-xl font-bold">Product Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery - Removed arrows as requested */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96">
              <img
                src={product.images[mainImageIndex]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
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

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">({product.rating} rating)</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="ml-3 text-xl text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
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

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <FaFire className="mr-2 text-yellow-400" /> New Arrivals
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Finds</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest furniture pieces just added to the collection
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            {newArrivals.length} New Products
          </h2>
          
          <div className="flex space-x-3">
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center bg-white border px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                <FaFire className="mr-2" /> Filter
              </button>
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 p-3 border">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Filters</h3>
                    <button onClick={() => setFilterOpen(false)}>
                      <FiX />
                    </button>
                  </div>
                  {/* Filter options would go here */}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center bg-white border px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Sort By
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 p-3 border">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Sort Options</h3>
                    <button onClick={() => setSortOpen(false)}>
                      <FiX />
                    </button>
                  </div>
                  {/* Sort options would go here */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Image with badges */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.images[0]} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    NEW
                  </span>
                  {product.oldPrice && (
                    <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 
                  className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-3 text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product, 1);
                    }}
                    className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                  <button className="p-2 border rounded-lg hover:bg-gray-100">
                    <FiHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Popup - Same as Trending Collection */}
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

export default NewArrivals;