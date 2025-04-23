import React, { useState } from 'react';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiFilter,
  FiChevronDown,
  FiX
} from 'react-icons/fi';
import { 
  FaRegStar, 
  FaStar, 
  FaStarHalfAlt,
  FaCouch,
  FaBed,
  FaChair,
  FaTable,
  FaBoxes
} from 'react-icons/fa';

// Complete Product Data
const products = {
  all: [
    {
        id: 1,
        title: "Modern Velvet Sofa",
        images: ["/sofa1.jpg", "/sofa2.jpg"],
        price: 899.99,
        oldPrice: 1099.99,
        rating: 4.7,
        category: "sofa",
        description: "Luxurious velvet sofa with solid wood frame",
        material: "Velvet, Wood",
        dimensions: "84\"W x 38\"D x 32\"H",
        colors: ["#3B82F6", "#10B981", "#6366F1"]
      },
      {
        id: 2,
        title: "Luxury Leather Sofa",
        images: ["/sofa3.jpg", "/sofa4.jpg"],
        price: 1299.99,
        oldPrice: 1499.99,
        rating: 4.8,
        category: "sofa",
        description: "Top-grain leather with plush cushions",
        material: "Leather, Metal",
        dimensions: "90\"W x 40\"D x 34\"H",
        colors: ["#000000", "#4B5563"]
      },
      {
        id: 3,
        title: "Mid-Century Sofa",
        images: ["/sofa5.jpg", "/sofa6.jpg"],
        price: 749.99,
        oldPrice: 899.99,
        rating: 4.4,
        category: "sofa",
        description: "Classic mid-century design with wooden legs",
        material: "Fabric, Wood",
        dimensions: "80\"W x 35\"D x 31\"H",
        colors: ["#D1D5DB", "#9CA3AF"]
      },
      {
        id: 4,
        title: "Convertible Sleeper Sofa",
        images: ["/sofa7.jpg", "/sofa8.jpg"],
        price: 999.99,
        oldPrice: 1199.99,
        rating: 4.6,
        category: "sofa",
        description: "Multi-functional sofa that converts into a bed",
        material: "Linen, Wood",
        dimensions: "85\"W x 37\"D x 34\"H",
        colors: ["#E5E7EB", "#F3F4F6"]
      },
      {
        id: 5,
        title: "Compact Loveseat",
        images: ["/sofa9.jpg", "/sofa10.jpg"],
        price: 599.99,
        oldPrice: 749.99,
        rating: 4.2,
        category: "sofa",
        description: "Perfect for small spaces with cozy design",
        material: "Polyester, Wood",
        dimensions: "60\"W x 34\"D x 30\"H",
        colors: ["#F87171", "#FBBF24"]
      },
      {
        id: 6,
        title: "Tufted Chesterfield Sofa",
        images: ["/sofa11.jpg", "/sofa12.jpg"],
        price: 1099.99,
        oldPrice: 1399.99,
        rating: 4.9,
        category: "sofa",
        description: "Elegant tufted design with rolled arms",
        material: "Velvet, Wood",
        dimensions: "86\"W x 38\"D x 32\"H",
        colors: ["#6B7280", "#A5B4FC"]
      },
      {
        id: 7,
        title: "Recliner Sectional Sofa",
        images: ["/sofa13.jpg", "/sofa14.jpg"],
        price: 1499.99,
        oldPrice: 1799.99,
        rating: 4.6,
        category: "sofa",
        description: "Spacious sectional with reclining features",
        material: "Faux Leather, Metal",
        dimensions: "120\"W x 90\"D x 36\"H",
        colors: ["#1F2937", "#374151"]
      },
    
      // === Beds ===
      {
        id: 8,
        title: "Minimalist Platform Bed",
        images: ["/bed1.jpg", "/bed2.jpg"],
        price: 699.99,
        oldPrice: 899.99,
        rating: 4.5,
        category: "bed",
        description: "Clean line platform bed with sturdy construction",
        material: "Solid Oak",
        dimensions: "85\"W x 63\"D x 28\"H",
        colors: ["#F3F4F6", "#E5E7EB"]
      },
      {
        id: 9,
        title: "Upholstered Queen Bed",
        images: ["/bed3.jpg", "/bed4.jpg"],
        price: 799.99,
        oldPrice: 999.99,
        rating: 4.6,
        category: "bed",
        description: "Stylish upholstered bed with cushioned headboard",
        material: "Fabric, Wood",
        dimensions: "86\"W x 65\"D x 50\"H",
        colors: ["#D1D5DB", "#A78BFA"]
      },
      {
        id: 10,
        title: "Canopy King Bed",
        images: ["/bed5.jpg", "/bed6.jpg"],
        price: 1099.99,
        oldPrice: 1299.99,
        rating: 4.7,
        category: "bed",
        description: "Regal canopy bed with modern lines",
        material: "Metal, Wood",
        dimensions: "90\"W x 76\"D x 80\"H",
        colors: ["#1F2937", "#9CA3AF"]
      },
      {
        id: 11,
        title: "Storage Platform Bed",
        images: ["/bed7.jpg", "/bed8.jpg"],
        price: 899.99,
        oldPrice: 1099.99,
        rating: 4.5,
        category: "bed",
        description: "Built-in storage drawers and clean silhouette",
        material: "Engineered Wood",
        dimensions: "84\"W x 62\"D x 36\"H",
        colors: ["#6B7280", "#E5E7EB"]
      },
      {
        id: 12,
        title: "Rustic Pine Bed Frame",
        images: ["/bed9.jpg", "/bed10.jpg"],
        price: 649.99,
        oldPrice: 849.99,
        rating: 4.3,
        category: "bed",
        description: "Natural pine finish and solid design",
        material: "Pine Wood",
        dimensions: "82\"W x 64\"D x 45\"H",
        colors: ["#A16207", "#FCD34D"]
      },
      {
        id: 13,
        title: "Tufted Wingback Bed",
        images: ["/bed11.jpg", "/bed12.jpg"],
        price: 849.99,
        oldPrice: 1049.99,
        rating: 4.6,
        category: "bed",
        description: "Elegant headboard with wingback design",
        material: "Velvet, Wood",
        dimensions: "88\"W x 66\"D x 52\"H",
        colors: ["#C4B5FD", "#E0E7FF"]
      },
    
      // === Chairs ===
      {
        id: 14,
        title: "Scandinavian Dining Chair",
        images: ["/chair1.jpg", "/chair2.jpg"],
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.3,
        category: "chair",
        description: "Elegant dining chair with curved backrest",
        material: "Beech Wood, Fabric",
        dimensions: "20\"W x 22\"D x 32\"H",
        colors: ["#FEF3C7", "#ECFDF5"]
      },
      {
        id: 15,
        title: "Ergonomic Office Chair",
        images: ["/chair3.jpg", "/chair4.jpg"],
        price: 299.99,
        oldPrice: 399.99,
        rating: 4.7,
        category: "chair",
        description: "Adjustable chair with lumbar support",
        material: "Mesh, Plastic",
        dimensions: "24\"W x 26\"D x 44\"H",
        colors: ["#10B981", "#6EE7B7"]
      },
      {
        id: 16,
        title: "Modern Lounge Chair",
        images: ["/chair5.jpg", "/chair6.jpg"],
        price: 349.99,
        oldPrice: 449.99,
        rating: 4.5,
        category: "chair",
        description: "Relaxed style with plush seating",
        material: "Fabric, Wood",
        dimensions: "28\"W x 30\"D x 35\"H",
        colors: ["#F3F4F6", "#E0E7FF"]
      },
      {
        id: 17,
        title: "Wicker Accent Chair",
        images: ["/chair7.jpg", "/chair8.jpg"],
        price: 249.99,
        oldPrice: 299.99,
        rating: 4.4,
        category: "chair",
        description: "Natural wicker frame with cushion seat",
        material: "Wicker, Linen",
        dimensions: "25\"W x 28\"D x 33\"H",
        colors: ["#FDE68A", "#FCD34D"]
      },
      {
        id: 18,
        title: "Tufted Armchair",
        images: ["/chair9.jpg", "/chair10.jpg"],
        price: 399.99,
        oldPrice: 499.99,
        rating: 4.6,
        category: "chair",
        description: "Classic design with button tufting",
        material: "Velvet, Wood",
        dimensions: "30\"W x 32\"D x 36\"H",
        colors: ["#A855F7", "#9333EA"]
      },
    
      // === Tables ===
      {
        id: 19,
        title: "Marble Coffee Table",
        images: ["/table1.jpg", "/table2.jpg"],
        price: 499.99,
        oldPrice: 599.99,
        rating: 4.6,
        category: "table",
        description: "Elegant marble top coffee table",
        material: "Marble, Metal",
        dimensions: "48\"W x 24\"D x 18\"H",
        colors: ["#FFFFFF", "#F3F4F6"]
      },
      {
        id: 20,
        title: "Extendable Dining Table",
        images: ["/table3.jpg", "/table4.jpg"],
        price: 799.99,
        oldPrice: 999.99,
        rating: 4.7,
        category: "table",
        description: "Spacious dining table with hidden leaf",
        material: "Oak, Metal",
        dimensions: "60-80\"W x 36\"D x 30\"H",
        colors: ["#A78BFA", "#C084FC"]
      },
      {
        id: 21,
        title: "Glass Console Table",
        images: ["/table5.jpg", "/table6.jpg"],
        price: 349.99,
        oldPrice: 429.99,
        rating: 4.4,
        category: "table",
        description: "Sleek glass table for hallway or entryway",
        material: "Glass, Steel",
        dimensions: "48\"W x 14\"D x 30\"H",
        colors: ["#E5E7EB", "#9CA3AF"]
      },
      {
        id: 22,
        title: "Rustic Side Table",
        images: ["/table7.jpg", "/table8.jpg"],
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.3,
        category: "table",
        description: "Charming wood side table with shelf",
        material: "Pine Wood",
        dimensions: "24\"W x 18\"D x 24\"H",
        colors: ["#FCD34D", "#FBBF24"]
      },
    
      // === Storage ===
      {
        id: 25,
        title: "Industrial Bookshelf",
        images: ["/shelf1.jpg", "/shelf2.jpg"],
        price: 349.99,
        oldPrice: 429.99,
        rating: 4.4,
        category: "storage",
        description: "Sturdy industrial-style bookshelf",
        material: "Metal, Wood",
        dimensions: "72\"W x 14\"D x 84\"H",
        colors: ["#1F2937", "#4B5563"]
      },
      {
        id: 26,
        title: "Modern TV Stand",
        images: ["/shelf3.jpg", "/shelf4.jpg"],
        price: 399.99,
        oldPrice: 499.99,
        rating: 4.5,
        category: "storage",
        description: "Sleek TV stand with storage compartments",
        material: "Engineered Wood, Glass",
        dimensions: "72\"W x 16\"D x 20\"H",
        colors: ["#9CA3AF", "#E5E7EB"]
      },
      {
        id: 27,
        title: "Tall Storage Cabinet",
        images: ["/shelf5.jpg", "/shelf6.jpg"],
        price: 459.99,
        oldPrice: 549.99,
        rating: 4.6,
        category: "storage",
        description: "Multi-purpose tall cabinet with drawers",
        material: "Solid Wood",
        dimensions: "36\"W x 18\"D x 72\"H",
        colors: ["#FCD34D", "#A16207"]
      }
    ],
     sofa: [
        {
          id: 1,
          title: "Modern Velvet Sofa",
          images: ["/sofa1.jpg", "/sofa2.jpg"],
          price: 899.99,
          oldPrice: 1099.99,
          rating: 4.7,
          category: "sofa",
          description: "Luxurious velvet sofa with solid wood frame",
          material: "Velvet, Wood",
          dimensions: "84\"W x 38\"D x 32\"H",
          colors: ["#3B82F6", "#10B981", "#6366F1"]
        },
        {
          id: 2,
          title: "Luxury Leather Sofa",
          images: ["/sofa3.jpg", "/sofa4.jpg"],
          price: 1299.99,
          oldPrice: 1499.99,
          rating: 4.8,
          category: "sofa",
          description: "Top-grain leather with plush cushions",
          material: "Leather, Metal",
          dimensions: "90\"W x 40\"D x 34\"H",
          colors: ["#000000", "#4B5563"]
        },
        {
          id: 3,
          title: "Mid-Century Sofa",
          images: ["/sofa5.jpg", "/sofa6.jpg"],
          price: 749.99,
          oldPrice: 899.99,
          rating: 4.4,
          category: "sofa",
          description: "Classic mid-century design with wooden legs",
          material: "Fabric, Wood",
          dimensions: "80\"W x 35\"D x 31\"H",
          colors: ["#D1D5DB", "#9CA3AF"]
        },
        {
          id: 4,
          title: "Convertible Sleeper Sofa",
          images: ["/sofa7.jpg", "/sofa8.jpg"],
          price: 999.99,
          oldPrice: 1199.99,
          rating: 4.6,
          category: "sofa",
          description: "Multi-functional sofa that converts into a bed",
          material: "Linen, Wood",
          dimensions: "85\"W x 37\"D x 34\"H",
          colors: ["#E5E7EB", "#F3F4F6"]
        },
        {
          id: 5,
          title: "Compact Loveseat",
          images: ["/sofa9.jpg", "/sofa10.jpg"],
          price: 599.99,
          oldPrice: 749.99,
          rating: 4.2,
          category: "sofa",
          description: "Perfect for small spaces with cozy design",
          material: "Polyester, Wood",
          dimensions: "60\"W x 34\"D x 30\"H",
          colors: ["#F87171", "#FBBF24"]
        },
        {
          id: 6,
          title: "Tufted Chesterfield Sofa",
          images: ["/sofa11.jpg", "/sofa12.jpg"],
          price: 1099.99,
          oldPrice: 1399.99,
          rating: 4.9,
          category: "sofa",
          description: "Elegant tufted design with rolled arms",
          material: "Velvet, Wood",
          dimensions: "86\"W x 38\"D x 32\"H",
          colors: ["#6B7280", "#A5B4FC"]
        },
        {
          id: 7,
          title: "Recliner Sectional Sofa",
          images: ["/sofa13.jpg", "/sofa14.jpg"],
          price: 1499.99,
          oldPrice: 1799.99,
          rating: 4.6,
          category: "sofa",
          description: "Spacious sectional with reclining features",
          material: "Faux Leather, Metal",
          dimensions: "120\"W x 90\"D x 36\"H",
          colors: ["#1F2937", "#374151"]
        }
      ],
      
      bed : [
        {
          id: 8,
          title: "Minimalist Platform Bed",
          images: ["/bed1.jpg", "/bed2.jpg"],
          price: 699.99,
          oldPrice: 899.99,
          rating: 4.5,
          category: "bed",
          description: "Clean line platform bed with sturdy construction",
          material: "Solid Oak",
          dimensions: "85\"W x 63\"D x 28\"H",
          colors: ["#F3F4F6", "#E5E7EB"]
        },
        {
          id: 9,
          title: "Upholstered Queen Bed",
          images: ["/bed3.jpg", "/bed4.jpg"],
          price: 799.99,
          oldPrice: 999.99,
          rating: 4.6,
          category: "bed",
          description: "Stylish upholstered bed with cushioned headboard",
          material: "Fabric, Wood",
          dimensions: "86\"W x 65\"D x 50\"H",
          colors: ["#D1D5DB", "#A78BFA"]
        },
        {
          id: 10,
          title: "Canopy King Bed",
          images: ["/bed5.jpg", "/bed6.jpg"],
          price: 1099.99,
          oldPrice: 1299.99,
          rating: 4.7,
          category: "bed",
          description: "Regal canopy bed with modern lines",
          material: "Metal, Wood",
          dimensions: "90\"W x 76\"D x 80\"H",
          colors: ["#1F2937", "#9CA3AF"]
        },
        {
          id: 11,
          title: "Storage Platform Bed",
          images: ["/bed7.jpg", "/bed8.jpg"],
          price: 899.99,
          oldPrice: 1099.99,
          rating: 4.5,
          category: "bed",
          description: "Built-in storage drawers and clean silhouette",
          material: "Engineered Wood",
          dimensions: "84\"W x 62\"D x 36\"H",
          colors: ["#6B7280", "#E5E7EB"]
        },
        {
          id: 12,
          title: "Rustic Pine Bed Frame",
          images: ["/bed9.jpg", "/bed10.jpg"],
          price: 649.99,
          oldPrice: 849.99,
          rating: 4.3,
          category: "bed",
          description: "Natural pine finish and solid design",
          material: "Pine Wood",
          dimensions: "82\"W x 64\"D x 45\"H",
          colors: ["#A16207", "#FCD34D"]
        },
        {
          id: 13,
          title: "Tufted Wingback Bed",
          images: ["/bed11.jpg", "/bed12.jpg"],
          price: 849.99,
          oldPrice: 1049.99,
          rating: 4.6,
          category: "bed",
          description: "Elegant headboard with wingback design",
          material: "Velvet, Wood",
          dimensions: "88\"W x 66\"D x 52\"H",
          colors: ["#C4B5FD", "#E0E7FF"]
        }
      ],
      
    chair : [
        {
          id: 14,
          title: "Scandinavian Dining Chair",
          images: ["/chair1.jpg", "/chair2.jpg"],
          price: 199.99,
          oldPrice: 249.99,
          rating: 4.3,
          category: "chair",
          description: "Elegant dining chair with curved backrest",
          material: "Beech Wood, Fabric",
          dimensions: "20\"W x 22\"D x 32\"H",
          colors: ["#FEF3C7", "#ECFDF5"]
        },
        {
          id: 15,
          title: "Ergonomic Office Chair",
          images: ["/chair3.jpg", "/chair4.jpg"],
          price: 299.99,
          oldPrice: 399.99,
          rating: 4.7,
          category: "chair",
          description: "Adjustable chair with lumbar support",
          material: "Mesh, Plastic",
          dimensions: "24\"W x 26\"D x 44\"H",
          colors: ["#10B981", "#6EE7B7"]
        },
        {
          id: 16,
          title: "Modern Lounge Chair",
          images: ["/chair5.jpg", "/chair6.jpg"],
          price: 349.99,
          oldPrice: 449.99,
          rating: 4.5,
          category: "chair",
          description: "Relaxed style with plush seating",
          material: "Fabric, Wood",
          dimensions: "28\"W x 30\"D x 35\"H",
          colors: ["#F3F4F6", "#E0E7FF"]
        },
        {
          id: 17,
          title: "Wicker Accent Chair",
          images: ["/chair7.jpg", "/chair8.jpg"],
          price: 249.99,
          oldPrice: 299.99,
          rating: 4.4,
          category: "chair",
          description: "Natural wicker frame with cushion seat",
          material: "Wicker, Linen",
          dimensions: "25\"W x 28\"D x 33\"H",
          colors: ["#FDE68A", "#FCD34D"]
        },
        {
          id: 18,
          title: "Tufted Armchair",
          images: ["/chair9.jpg", "/chair10.jpg"],
          price: 399.99,
          oldPrice: 499.99,
          rating: 4.6,
          category: "chair",
          description: "Classic design with button tufting",
          material: "Velvet, Wood",
          dimensions: "30\"W x 32\"D x 36\"H",
          colors: ["#A855F7", "#9333EA"]
        }
      ],
      
       table : [
        {
          id: 19,
          title: "Marble Coffee Table",
          images: ["/table1.jpg", "/table2.jpg"],
          price: 499.99,
          oldPrice: 599.99,
          rating: 4.6,
          category: "table",
          description: "Elegant marble top coffee table",
          material: "Marble, Metal",
          dimensions: "48\"W x 24\"D x 18\"H",
          colors: ["#FFFFFF", "#F3F4F6"]
        },
        {
          id: 20,
          title: "Extendable Dining Table",
          images: ["/table3.jpg", "/table4.jpg"],
          price: 799.99,
          oldPrice: 999.99,
          rating: 4.7,
          category: "table",
          description: "Spacious dining table with hidden leaf",
          material: "Oak, Metal",
          dimensions: "60-80\"W x 36\"D x 30\"H",
          colors: ["#A78BFA", "#C084FC"]
        },
        {
          id: 21,
          title: "Glass Console Table",
          images: ["/table5.jpg", "/table6.jpg"],
          price: 349.99,
          oldPrice: 429.99,
          rating: 4.4,
          category: "table",
          description: "Sleek glass table for hallway or entryway",
          material: "Glass, Steel",
          dimensions: "48\"W x 14\"D x 30\"H",
          colors: ["#E5E7EB", "#9CA3AF"]
        },
        {
          id: 22,
          title: "Rustic Side Table",
          images: ["/table7.jpg", "/table8.jpg"],
          price: 199.99,
          oldPrice: 249.99,
          rating: 4.3,
          category: "table",
          description: "Charming wood side table with shelf",
          material: "Pine Wood",
          dimensions: "24\"W x 18\"D x 24\"H",
          colors: ["#FCD34D", "#FBBF24"]
        }
      ],
      
     storage : [
        {
          id: 25,
          title: "Industrial Bookshelf",
          images: ["/shelf1.jpg", "/shelf2.jpg"],
          price: 349.99,
          oldPrice: 429.99,
          rating: 4.4,
          category: "storage",
          description: "Sturdy industrial-style bookshelf",
          material: "Metal, Wood",
          dimensions: "72\"W x 14\"D x 84\"H",
          colors: ["#1F2937", "#4B5563"]
        },
        {
          id: 26,
          title: "Modern TV Stand",
          images: ["/shelf3.jpg", "/shelf4.jpg"],
          price: 399.99,
          oldPrice: 499.99,
          rating: 4.5,
          category: "storage",
          description: "Sleek TV stand with storage compartments",
          material: "Engineered Wood, Glass",
          dimensions: "72\"W x 16\"D x 20\"H",
          colors: ["#9CA3AF", "#E5E7EB"]
        },
        {
          id: 27,
          title: "Tall Storage Cabinet",
          images: ["/shelf5.jpg", "/shelf6.jpg"],
          price: 459.99,
          oldPrice: 549.99,
          rating: 4.6,
          category: "storage",
          description: "Multi-purpose tall cabinet with drawers",
          material: "Solid Wood",
          dimensions: "36\"W x 18\"D x 72\"H",
          colors: ["#FCD34D", "#A16207"]
        }
      ],
      
};

const categories = [
  { name: "All", slug: "all", icon: <FaCouch size={20} /> },
  { name: "Sofa", slug: "sofa", icon: <FaCouch size={20} /> },
  { name: "Bed", slug: "bed", icon: <FaBed size={20} /> },
  { name: "Chair", slug: "chair", icon: <FaChair size={20} /> },
  { name: "Table", slug: "table", icon: <FaTable size={20} /> },
  { name: "Storage", slug: "storage", icon: <FaBoxes size={20} /> }
];

const CategoryProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Get current products
  const currentProducts = products[selectedCategory] || [];
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  
  // Paginate products
  const paginatedProducts = currentProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover our premium collection of furniture that combines style, comfort and functionality
        </p>
        
        {/* Category Navigation */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => {
                setSelectedCategory(category.slug);
                setCurrentPage(1);
              }}
              className={`flex flex-col items-center px-6 py-3 rounded-lg transition-all ${selectedCategory === category.slug ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map(product => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative h-64">
                <img 
                  src={product.images[0]} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.oldPrice && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <div className="flex items-center mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-3 text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {selectedCategory === 'all' && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full ${currentPage === page ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  {page}
                </button>
              ))}
              {currentPage < totalPages && (
                <button 
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 text-black hover:underline"
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Enlarged Product Details Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Product Details</h2>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Images - Larger Section */}
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-xl overflow-hidden h-96">
                  <img 
                    src={selectedProduct.images[0]} 
                    alt={selectedProduct.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProduct.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="h-32 border-2 rounded-lg overflow-hidden cursor-pointer hover:border-black transition"
                    >
                      <img 
                        src={img} 
                        alt={`Preview ${i}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Info - Larger Section */}
              <div>
                <h1 className="text-3xl font-bold mb-4">{selectedProduct.title}</h1>
                
                <div className="flex items-center mb-6">
                  {renderStars(selectedProduct.rating)}
                  <span className="text-gray-600 ml-3 text-lg">({selectedProduct.rating} rating)</span>
                </div>
                
                <div className="mb-8">
                  <span className="text-3xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                  {selectedProduct.oldPrice && (
                    <span className="ml-4 text-xl text-gray-500 line-through">${selectedProduct.oldPrice.toFixed(2)}</span>
                  )}
                  {selectedProduct.oldPrice && (
                    <span className="ml-4 text-lg font-medium text-red-600">
                      Save ${(selectedProduct.oldPrice - selectedProduct.price).toFixed(2)} ({(100 * (selectedProduct.oldPrice - selectedProduct.price)/selectedProduct.oldPrice).toFixed(0)}%)
                    </span>
                  )}
                </div>
                
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-3">Description</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
                
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-600">Category</h4>
                    <p className="capitalize">{selectedProduct.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Material</h4>
                    <p>{selectedProduct.material}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Dimensions</h4>
                    <p>{selectedProduct.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Weight</h4>
                    <p>{selectedProduct.weight}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Available Colors</h4>
                    <p>{selectedProduct.colors.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">SKU</h4>
                    <p>{selectedProduct.sku}</p>
                  </div>
                </div>
                
                <div className="flex space-x-6">
                  <button className="flex-1 bg-black text-white py-4 px-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition text-lg">
                    <FiShoppingCart className="mr-3" size={20} />
                    Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-black py-4 px-8 rounded-lg flex items-center justify-center hover:bg-gray-50 transition text-lg">
                    <FiHeart className="mr-3" size={20} />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProductsPage;