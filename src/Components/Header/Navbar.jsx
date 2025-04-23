import React, { useState } from "react";
import { FiMenu, FiUser, FiHeart, FiShoppingCart, FiX, FiChevronRight } from "react-icons/fi";
import { FaChair, FaCouch, FaBed, FaLightbulb, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);

  const categories = [
    { name: "Sofas", icon: <FaCouch className="text-2xl" />, count: 125 },
    { name: "Chairs", icon: <FaChair className="text-2xl" />, count: 89 },
    { name: "Beds", icon: <FaBed className="text-2xl" />, count: 64 },
    { name: "Tables", icon: <FaTable className="text-2xl" />, count: 42 },
    { name: "Lighting", icon: <FaLightbulb className="text-2xl" />, count: 37 },
    { name: "Storage", icon: <FiChevronRight className="text-2xl" />, count: 28 },
    { name: "Decor", icon: <FiChevronRight className="text-2xl" />, count: 53 },
    { name: "Outdoor", icon: <FiChevronRight className="text-2xl" />, count: 19 },
  ];

  return (
    <div className="relative">
      {/* Very light overlay (5% opacity) */}
      {categoryDrawerOpen && (
        <div 
          className="fixed inset-0 bg-opacity-5 backdrop-invert-25 z-20 transition-opacity duration-300"
          onClick={() => setCategoryDrawerOpen(false)}
        />
      )}

      {/* Category Side Drawer */}
      <div className={`fixed inset-y-0 left-0 z-30 w-80 bg-white shadow-xl transform ${
        categoryDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">All Categories</h2>
          <button 
            onClick={() => setCategoryDrawerOpen(false)} 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto h-[calc(100vh-60px)]">
          {categories.map((category, index) => (
            <a 
              key={index}
              href="#"
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200 flex flex-col items-center"
            >
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                {category.icon}
              </div>
              <h3 className="font-medium text-center">{category.name}</h3>
              <span className="text-sm text-gray-500 mt-1">{category.count} items</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar with subtle blur effect when drawer is open */}
      <nav className={`bg-white shadow-md border-b border-gray-200 relative z-10 ${
        categoryDrawerOpen ? 'backdrop-blur-sm' : ''
      } transition-all duration-200`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - Shop by Category */}
            <div className="hidden md:block">
              <button 
                className="flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md transition duration-300"
                onClick={() => setCategoryDrawerOpen(!categoryDrawerOpen)}
              >
                <FiMenu className="mr-2" />
                <span>Shop by Category</span>
              </button>
            </div>

            {/* Logo - Centered on mobile */}
            <div className="md:hidden flex items-center">
              <img src="/logo.png" alt="FurniCraft" className="h-10" />
            </div>

            {/* Navigation Links with larger text size */}
            <div className={`${
              mobileMenuOpen ? 'block' : 'hidden'
            } md:flex absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent z-20 md:space-x-6 px-4 md:px-0 py-3 md:py-0 border-b md:border-0 border-gray-200`}>
              <Link to={"/"} href="#" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Home
              </Link >
              <Link to={"brand"} href="#" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Brands
              </Link>
              <a href="#today" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Today's Deal
              </a>
              <a href="#" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                New Arrivals
              </a>
              <a href="#" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Sale
              </a>
              <Link to={"/contact"} href="#" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Contact
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  className="p-2 text-gray-600 hover:text-black"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                >
                  <FiUser className="text-xl" />
                </button>
                
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-200">
                      Login
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Sign Up
                    </a>
                  </div>
                )}
              </div>
              
              <button className="p-2 text-gray-600 hover:text-black">
                <FiHeart className="text-xl" />
              </button>
              <button className="p-2 text-gray-600 hover:text-black relative">
                <FiShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;