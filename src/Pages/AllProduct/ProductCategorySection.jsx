import React, { useState } from 'react';
import { FiChevronRight, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronLeft } from 'react-icons/fa';
import { FaCouch, FaBed, FaChair, FaTable, FaBoxes } from 'react-icons/fa';

const ProductCategorySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of products to show

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Products', icon: <FaBoxes className="mr-2" /> },
    { id: 'sofa', name: 'Sofas', icon: <FaCouch className="mr-2" /> },
    { id: 'bed', name: 'Beds', icon: <FaBed className="mr-2" /> },
    { id: 'chair', name: 'Chairs', icon: <FaChair className="mr-2" /> },
    { id: 'table', name: 'Tables', icon: <FaTable className="mr-2" /> },
    { id: 'storage', name: 'Storage', icon: <FaBoxes className="mr-2" /> }
  ];

  // All products data (same as before)
  const allProducts = [
    {
      "id": 1,
      "name": "Modern Velvet Sofa",
      "images": ["/sofa1.jpg", "/sofa2.jpg"],
      "price": 899.99,
      "oldPrice": 1099.99,
      "rating": 4.7,
      "category": "sofa",
      "description": "Luxurious velvet sofa with solid wood frame",
      "material": "Velvet, Wood",
      "dimensions": "84\"W x 38\"D x 32\"H",
      "colors": ["#3B82F6", "#10B981", "#6366F1"],
      "related": [2, 3, 4]
    },
    {
      "id": 2,
      "name": "Luxury Leather Sofa",
      "images": ["/sofa3.jpg", "/sofa4.jpg"],
      "price": 1299.99,
      "oldPrice": 1499.99,
      "rating": 4.8,
      "category": "sofa",
      "description": "Top-grain leather with plush cushions",
      "material": "Leather, Metal",
      "dimensions": "90\"W x 40\"D x 34\"H",
      "colors": ["#000000", "#4B5563"],
      "related": [1, 3, 6]
    },
    {
      "id": 3,
      "name": "Mid-Century Sofa",
      "images": ["/sofa5.jpg", "/sofa6.jpg"],
      "price": 749.99,
      "oldPrice": 899.99,
      "rating": 4.4,
      "category": "sofa",
      "description": "Classic mid-century design with wooden legs",
      "material": "Fabric, Wood",
      "dimensions": "80\"W x 35\"D x 31\"H",
      "colors": ["#D1D5DB", "#9CA3AF"],
      "related": [1, 2, 4]
    },
    {
      "id": 4,
      "name": "Convertible Sleeper Sofa",
      "images": ["/sofa7.jpg", "/sofa8.jpg"],
      "price": 999.99,
      "oldPrice": 1199.99,
      "rating": 4.6,
      "category": "sofa",
      "description": "Multi-functional sofa that converts into a bed",
      "material": "Linen, Wood",
      "dimensions": "85\"W x 37\"D x 34\"H",
      "colors": ["#E5E7EB", "#F3F4F6"],
      "related": [1, 3, 5]
    },
    {
      "id": 5,
      "name": "Compact Loveseat",
      "images": ["/sofa9.jpg", "/sofa10.jpg"],
      "price": 599.99,
      "oldPrice": 749.99,
      "rating": 4.2,
      "category": "sofa",
      "description": "Perfect for small spaces with cozy design",
      "material": "Polyester, Wood",
      "dimensions": "60\"W x 34\"D x 30\"H",
      "colors": ["#F87171", "#FBBF24"],
      "related": [1, 4, 6]
    },
    {
      "id": 6,
      "name": "Tufted Chesterfield Sofa",
      "images": ["/sofa11.jpg", "/sofa12.jpg"],
      "price": 1099.99,
      "oldPrice": 1399.99,
      "rating": 4.9,
      "category": "sofa",
      "description": "Elegant tufted design with rolled arms",
      "material": "Velvet, Wood",
      "dimensions": "86\"W x 38\"D x 32\"H",
      "colors": ["#6B7280", "#A5B4FC"],
      "related": [2, 3, 7]
    },
    {
      "id": 7,
      "name": "Recliner Sectional Sofa",
      "images": ["/sofa13.jpg", "/sofa14.jpg"],
      "price": 1499.99,
      "oldPrice": 1799.99,
      "rating": 4.6,
      "category": "sofa",
      "description": "Spacious sectional with reclining features",
      "material": "Faux Leather, Metal",
      "dimensions": "120\"W x 90\"D x 36\"H",
      "colors": ["#1F2937", "#374151"],
      "related": [6, 1, 4]
    },
    {
      "id": 8,
      "name": "Minimalist Platform Bed",
      "images": ["/bed1.jpg", "/bed2.jpg"],
      "price": 699.99,
      "oldPrice": 899.99,
      "rating": 4.5,
      "category": "bed",
      "description": "Clean line platform bed with sturdy construction",
      "material": "Solid Oak",
      "dimensions": "85\"W x 63\"D x 28\"H",
      "colors": ["#F3F4F6", "#E5E7EB"],
      "related": [9, 10, 11]
    },
    {
      "id": 9,
      "name": "Upholstered Queen Bed",
      "images": ["/bed3.jpg", "/bed4.jpg"],
      "price": 799.99,
      "oldPrice": 999.99,
      "rating": 4.6,
      "category": "bed",
      "description": "Stylish upholstered bed with cushioned headboard",
      "material": "Fabric, Wood",
      "dimensions": "86\"W x 65\"D x 50\"H",
      "colors": ["#D1D5DB", "#A78BFA"],
      "related": [8, 10, 13]
    },
    {
      "id": 10,
      "name": "Canopy King Bed",
      "images": ["/bed5.jpg", "/bed6.jpg"],
      "price": 1099.99,
      "oldPrice": 1299.99,
      "rating": 4.7,
      "category": "bed",
      "description": "Regal canopy bed with modern lines",
      "material": "Metal, Wood",
      "dimensions": "90\"W x 76\"D x 80\"H",
      "colors": ["#1F2937", "#9CA3AF"],
      "related": [8, 9, 11]
    },
    {
      "id": 11,
      "name": "Storage Platform Bed",
      "images": ["/bed7.jpg", "/bed8.jpg"],
      "price": 899.99,
      "oldPrice": 1099.99,
      "rating": 4.5,
      "category": "bed",
      "description": "Built-in storage drawers and clean silhouette",
      "material": "Engineered Wood",
      "dimensions": "84\"W x 62\"D x 36\"H",
      "colors": ["#6B7280", "#E5E7EB"],
      "related": [8, 10, 12]
    },
    {
      "id": 12,
      "name": "Rustic Pine Bed Frame",
      "images": ["/bed9.jpg", "/bed10.jpg"],
      "price": 649.99,
      "oldPrice": 849.99,
      "rating": 4.3,
      "category": "bed",
      "description": "Natural pine finish and solid design",
      "material": "Pine Wood",
      "dimensions": "82\"W x 64\"D x 45\"H",
      "colors": ["#A16207", "#FCD34D"],
      "related": [8, 9, 11]
    },
    {
      "id": 13,
      "name": "Tufted Wingback Bed",
      "images": ["/bed11.jpg", "/bed12.jpg"],
      "price": 849.99,
      "oldPrice": 1049.99,
      "rating": 4.6,
      "category": "bed",
      "description": "Elegant headboard with wingback design",
      "material": "Velvet, Wood",
      "dimensions": "88\"W x 66\"D x 52\"H",
      "colors": ["#C4B5FD", "#E0E7FF"],
      "related": [9, 10, 12]
    },
    {
      "id": 14,
      "name": "Scandinavian Dining Chair",
      "images": ["/chair1.jpg", "/chair2.jpg"],
      "price": 199.99,
      "oldPrice": 249.99,
      "rating": 4.3,
      "category": "chair",
      "description": "Elegant dining chair with curved backrest",
      "material": "Beech Wood, Fabric",
      "dimensions": "20\"W x 22\"D x 32\"H",
      "colors": ["#FEF3C7", "#ECFDF5"],
      "related": [15, 16, 17]
    },
    {
      "id": 15,
      "name": "Classic Leather Dining Chair",
      "images": ["/chair3.jpg", "/chair4.jpg"],
      "price": 249.99,
      "oldPrice": 299.99,
      "rating": 4.5,
      "category": "chair",
      "description": "Luxurious leather seating with padded backrest",
      "material": "Leather, Wood",
      "dimensions": "18\"W x 22\"D x 34\"H",
      "colors": ["#000000", "#F9FAFB"],
      "related": [14, 16, 18]
    },
    {
      "id": 16,
      "name": "Mid-Century Dining Chair",
      "images": ["/chair5.jpg", "/chair6.jpg"],
      "price": 179.99,
      "oldPrice": 219.99,
      "rating": 4.4,
      "category": "chair",
      "description": "Mid-century modern design with minimalist structure",
      "material": "Wood, Fabric",
      "dimensions": "17\"W x 21\"D x 33\"H",
      "colors": ["#6B7280", "#FBBF24"],
      "related": [14, 15, 17]
    },
    {
      "id": 17,
      "name": "Wicker Accent Chair",
      "images": ["/chair7.jpg", "/chair8.jpg"],
      "price": 249.99,
      "oldPrice": 299.99,
      "rating": 4.4,
      "category": "chair",
      "description": "Natural wicker frame with cushion seat",
      "material": "Wicker, Linen",
      "dimensions": "25\"W x 28\"D x 33\"H",
      "colors": ["#FDE68A", "#FCD34D"],
      "related": [14, 15, 16]
    },
    {
      "id": 18,
      "name": "Tufted Armchair",
      "images": ["/chair9.jpg", "/chair10.jpg"],
      "price": 399.99,
      "oldPrice": 499.99,
      "rating": 4.6,
      "category": "chair",
      "description": "Classic design with button tufting",
      "material": "Velvet, Wood",
      "dimensions": "30\"W x 32\"D x 36\"H",
      "colors": ["#A855F7", "#9333EA"],
      "related": [15, 16, 17]
    },
    {
      "id": 19,
      "name": "Marble Coffee Table",
      "images": ["/table1.jpg", "/table2.jpg"],
      "price": 499.99,
      "oldPrice": 599.99,
      "rating": 4.6,
      "category": "table",
      "description": "Elegant marble top coffee table",
      "material": "Marble, Metal",
      "dimensions": "48\"W x 24\"D x 18\"H",
      "colors": ["#FFFFFF", "#F3F4F6"],
      "related": [20, 21, 22]
    },
    {
      "id": 20,
      "name": "Extendable Dining Table",
      "images": ["/table3.jpg", "/table4.jpg"],
      "price": 799.99,
      "oldPrice": 999.99,
      "rating": 4.7,
      "category": "table",
      "description": "Spacious dining table with hidden leaf",
      "material": "Oak, Metal",
      "dimensions": "60-80\"W x 36\"D x 30\"H",
      "colors": ["#A78BFA", "#C084FC"],
      "related": [19, 21, 22]
    },
    {
      "id": 21,
      "name": "Glass Console Table",
      "images": ["/table5.jpg", "/table6.jpg"],
      "price": 349.99,
      "oldPrice": 429.99,
      "rating": 4.4,
      "category": "table",
      "description": "Sleek glass table for hallway or entryway",
      "material": "Glass, Steel",
      "dimensions": "48\"W x 14\"D x 30\"H",
      "colors": ["#E5E7EB", "#9CA3AF"],
      "related": [19, 20, 22]
    },
    {
      "id": 22,
      "name": "Rustic Side Table",
      "images": ["/table7.jpg", "/table8.jpg"],
      "price": 199.99,
      "oldPrice": 249.99,
      "rating": 4.3,
      "category": "table",
      "description": "Charming wood side table with shelf",
      "material": "Pine Wood",
      "dimensions": "24\"W x 18\"D x 24\"H",
      "colors": ["#FCD34D", "#FBBF24"],
      "related": [19, 20, 21]
    },
    {
      "id": 25,
      "name": "Industrial Bookshelf",
      "images": ["/shelf1.jpg", "/shelf2.jpg"],
      "price": 349.99,
      "oldPrice": 429.99,
      "rating": 4.4,
      "category": "storage",
      "description": "Sturdy industrial-style bookshelf",
      "material": "Metal, Wood",
      "dimensions": "72\"W x 14\"D x 84\"H",
      "colors": ["#1F2937", "#4B5563"],
      "related": [26, 27]
    },
    {
      "id": 26,
      "name": "Modern TV Stand",
      "images": ["/shelf3.jpg", "/shelf4.jpg"],
      "price": 399.99,
      "oldPrice": 499.99,
      "rating": 4.5,
      "category": "storage",
      "description": "Sleek TV stand with storage compartments",
      "material": "Engineered Wood, Glass",
      "dimensions": "72\"W x 16\"D x 20\"H",
      "colors": ["#9CA3AF", "#E5E7EB"],
      "related": [25, 27]
    },
    {
      "id": 27,
      "name": "Tall Storage Cabinet",
      "images": ["/shelf5.jpg", "/shelf6.jpg"],
      "price": 459.99,
      "oldPrice": 549.99,
      "rating": 4.6,
      "category": "storage",
      "description": "Multi-purpose tall cabinet with drawers",
      "material": "Solid Wood",
      "dimensions": "36\"W x 18\"D x 72\"H",
      "colors": ["#FCD34D", "#A16207"],
      "related": [25, 26]
    }
  ];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  // Products to display (first 'visibleCount' products)
  const productsToShow = filteredProducts.slice(0, visibleCount);

  // Find related products
  const getRelatedProducts = (product) => {
    if (!product.related) return [];
    return allProducts.filter(p => product.related.includes(p.id));
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  // Load more products
  const loadMoreProducts = () => {
    setVisibleCount(prev => prev + 6); // Load 6 more products
  };

  // Reset visible count when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedProduct(null);
    setVisibleCount(6);
  };

  return (
    <section id='shop' className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {category.icon}
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {category.id === 'all' 
                        ? allProducts.length 
                        : allProducts.filter(p => p.category === category.id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            {/* Category Title */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold">
                {selectedProduct 
                  ? selectedProduct.name 
                  : categories.find(c => c.id === activeCategory)?.name}
              </h3>
            </div>

            {/* Show either product details or product grid */}
            {selectedProduct ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Back Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex items-center px-4 py-3 text-blue-600 hover:bg-blue-50 w-full border-b"
                >
                  <FaChevronLeft className="mr-2" />
                  Back to {categories.find(c => c.id === activeCategory)?.name}
                </button>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                  {/* Product Images */}
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                      <img
                        src={selectedProduct.images[0]}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex space-x-2 overflow-x-auto py-2">
                      {selectedProduct.images.map((img, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden border-gray-200"
                        >
                          <img 
                            src={img} 
                            alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {renderStars(selectedProduct.rating)}
                      </div>
                      <span className="text-gray-600">({selectedProduct.rating})</span>
                    </div>

                    <div className="mb-6">
                      <span className="text-2xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                      <span className="ml-3 text-lg text-gray-500 line-through">
                        ${selectedProduct.oldPrice.toFixed(2)}
                      </span>
                      <span className="ml-3 text-lg text-red-600">
                        Save ${(selectedProduct.oldPrice - selectedProduct.price).toFixed(2)}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-2">Description</h3>
                      <p className="text-gray-700">{selectedProduct.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-2">Details</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li><strong>Material:</strong> {selectedProduct.material}</li>
                        <li><strong>Dimensions:</strong> {selectedProduct.dimensions}</li>
                        <li><strong>Available Colors:</strong> 
                          <div className="flex mt-2 space-x-2">
                            {selectedProduct.colors.map((color, idx) => (
                              <div 
                                key={idx}
                                className="w-6 h-6 rounded-full border border-gray-200"
                                style={{ backgroundColor: color }}
                                title={`Color option ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 mb-6">
                      <button
                        onClick={() => console.log('Added to cart:', selectedProduct.id)}
                        className="flex-1 bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-800 transition"
                      >
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => console.log('Added to wishlist:', selectedProduct.id)}
                        className="flex-1 border border-black py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
                      >
                        <FiHeart className="mr-2" />
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                {getRelatedProducts(selectedProduct).length > 0 && (
                  <div className="border-t p-6 bg-gray-50">
                    <h3 className="text-xl font-bold mb-4">You May Also Like</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {getRelatedProducts(selectedProduct).map(product => (
                        <div
                          key={product.id}
                          className="bg-white p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-32 object-contain mb-2"
                          />
                          <h4 className="font-medium">{product.name}</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-sm font-bold">${product.price.toFixed(2)}</span>
                            <span className="ml-2 text-xs text-gray-500 line-through">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productsToShow.map(product => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center mb-3">
                          <div className="flex mr-2">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-sm text-gray-500">({product.rating})</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More Button */}
                {filteredProducts.length > visibleCount && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={loadMoreProducts}
                      className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Show More Products
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;