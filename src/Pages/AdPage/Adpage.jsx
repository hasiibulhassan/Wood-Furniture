import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const AdPage = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center py-16">
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/ad-image.jpg" // Replace with your ad image
            alt="Advertisement"
            className="w-full h-64 object-cover"
          />

          {/* Ad Details Over Image */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-6 bg-opacity">
            <h2 className="text-3xl font-bold mb-4">Exclusive Offer Just for You!</h2>
            <p className="text-lg mb-6">Don’t miss out on our limited-time offer. Get an extra 20% off on selected items. Hurry, this deal won’t last long!</p>
            <button className="bg-black text-white py-3 px-8 rounded-full flex items-center justify-center text-xl hover:bg-gray-800 transition duration-300">
              <FiShoppingCart className="mr-2" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
