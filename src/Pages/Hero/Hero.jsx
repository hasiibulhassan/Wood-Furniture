import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side - Image (75% width, no empty space) */}
        <div className="lg:w-4/6 w-full h-[400px] lg:h-auto overflow-hidden">
          <img 
            src="/hero.jpg" 
            alt="Luxury Furniture Collection"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side - Content (25% width) */}
        <div className="lg:w-2/6 w-full p-8 md:p-12 flex flex-col justify-center bg-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-4xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            New Furniture for Your Home
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Experience the epitome of style and luxury with our exquisite new furniture collection. From sleek designs to impeccable craftsmanship, elevate your space with sophistication and timeless elegance.
          </p>

          {/* Shop Now Button with elegant hover effect */}
          <Link 
            to="/shop" 
            className="relative inline-block w-fit px-8 py-4 bg-black text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-2">
              <span className="text-lg">Shop Now</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform group-hover:translate-x-1 duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;