import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-lg">
            <span className="inline-block px-3 py-1 text-xs font-medium text-black bg-gray-500 rounded-full mb-4">
              Limited Time Offer
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Summer <span className="font-bold">Collection</span> Launch
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get <span className="font-medium text-gray-900">20% off</span> on all new arrivals.
            </p>
            
            <Link 
              to="/all" 
              className="relative inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              <span className="relative flex items-center gap-2">
                <span>Shop Now</span>
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
          
          <div className="relative">
          <img src="/ad1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;