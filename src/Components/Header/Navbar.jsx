import React, { useState } from "react";
import { FiMenu, FiUser, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { FaChair, FaCouch, FaBed, FaTable, FaBoxes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - Shop by Category (text only) */}
            <div className="hidden md:block">
              <Link to={"/all"} 
                className="flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md transition duration-300"
                
              >
                <FiMenu className="mr-2" />
                <span>Shop by Category</span>
              </Link >
            </div>

            {/* Logo - Centered on mobile */}
            <div className="md:hidden flex items-center">
              <Link to="/">
                <img src="/logo.png" alt="FurniCraft" className="h-10" />
              </Link>
            </div>

            {/* Navigation Links with larger text size */}
            <div className={`${
              mobileMenuOpen ? 'block' : 'hidden'
            } md:flex absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent z-20 md:space-x-6 px-4 md:px-0 py-3 md:py-0 border-b md:border-0 border-gray-200`}>
              <Link to="/" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Home
              </Link>
              <Link to="/brand" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Brands
              </Link>
              <Link to="/all" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                Our Products
              </Link>
              <Link to="/new" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                New Arrivals
              </Link>
              <Link to="/faq" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
                FAQ
              </Link>
              <Link to="/contact" className="block md:inline-block text-gray-800 hover:text-black font-medium py-2 md:py-0 transition duration-300 text-lg">
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
                    <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-200">
                      Login
                    </Link>
                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/wishlist" className="p-2 text-gray-600 hover:text-black">
                <FiHeart className="text-xl" />
              </Link>
              <Link to="" className="p-2 text-gray-600 hover:text-black relative">
                <FiShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              
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