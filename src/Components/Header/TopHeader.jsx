import React, { useState } from "react";

const TopHeader = () => {
  // States to manage selected currency and language
  const [currency, setCurrency] = useState("usd");
  const [language, setLanguage] = useState("en");

  // Function to determine the flag based on selected currency
  const getCurrencyFlag = (currency) => {
    switch (currency) {
      case "usd":
        return "https://as2.ftcdn.net/jpg/00/62/19/87/220_F_62198723_HEmgYcJ10rOWpzkph92K6MnlQyycSDPZ.jpg"; // US flag for USD
      case "eur":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png"; // EU flag for EUR
      case "tk":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png"; // UK flag for GBP
      default:
        return "";
    }
  };

  // Function to determine the flag based on selected language

  return (
    <div className=" bg-gray-100 border-t-6 border-black-600 hidden lg:block">
      <div className="w-9/12 mx-auto">
        <div className="flex justify-between items-center p-3 bg-gray-100 " >
          {/* Left side: Limited-time offers */}
          <div className="text-sm">
            <span>
              Limited-Time Offers: Mid-Summer Season Sale On Selected Items -{" "}
            </span>
            <a href="#" className="text-red-500 underline cursor-pointer">
              Shop Now
            </a>
          </div>

          {/* Right side: Help Center, Order Tracking, Currency & Language */}
          <div className="flex items-center space-x-6 text-sm">
            {/* Help Center and Order Tracking with separator */}
            <a href="#" className="text-gray-700">
              Help Center
            </a>
            <span className="text-gray-500">•</span>
            <a href="#" className="text-gray-700">
              Order Tracking
            </a>
            <span className="text-gray-500">•</span>

            {/* Currency selector with flag */}
            <div className="flex items-center space-x-2">
              <img
                src={getCurrencyFlag(currency)}
                alt={`${currency} flag`}
                className="w-5 h-5"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-white text-gray-700 px-2 py-1"
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="tk">BDT</option>
              </select>
            </div>

            <span className="text-gray-500">•</span>

            {/* Language selector with flag */}
            <div className="flex items-center space-x-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white text-gray-700 px-2 py-1"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
