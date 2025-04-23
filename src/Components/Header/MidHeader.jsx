import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MidHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Desktop View (unchanged) */}
      <div className="hidden md:flex items-center justify-between w-11/12 mx-auto py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-16 w-auto hover:opacity-90 transition-opacity"
            src="/logo.png"
            alt="Logo"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              className="w-full pl-4 pr-12 py-3 text-base text-gray-700 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              type="text"
              placeholder="Search Products Here..."
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-black flex items-center justify-center rounded-r-lg hover:bg-gray-800 transition-colors duration-200">
              <IoSearchSharp className="text-white text-lg" />
            </button>
          </div>
        </div>

    
      </div>

      {/* Mobile View - Only Search Bar */}
      <div className="md:hidden w-11/12 mx-auto py-3">
        <div className="relative">
          <input
            className="w-full pl-4 pr-12 py-2.5 text-sm text-gray-700 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            type="text"
            placeholder="Search Products Here..."
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-black flex items-center justify-center rounded-r-lg hover:bg-gray-800 transition-colors">
            <IoSearchSharp className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;