const AdBanner = () => {
    return (
      <section className="py-12 bg-gray-100 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Summer Collection Launch</h3>
              <p className="text-gray-600 mb-4">
                Get 20% off on all new arrivals. Limited time offer!
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-black transition">
                Shop Now
              </button>
            </div>
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-48 h-48 bg-gray-200 rounded">
                <svg 
                  className="w-20 h-20 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default AdBanner;