

const BrandSection = () => {
    const brands = [
      { id: 1, name: "WoodCraft", logo: "/woodcraft-logo.svg" },
      { id: 2, name: "LuxLiving", logo: "/luxliving-logo.svg" },
      { id: 3, name: "UrbanLoft", logo: "/urbanloft-logo.svg" },
      { id: 4, name: "EcoStyle", logo: "/ecostyle-logo.svg" },
      { id: 5, name: "Minimalist", logo: "/minimalist-logo.svg" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Brands We Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partnering with the finest furniture brands to bring you exceptional quality
            </p>
          </div>
  
          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.id} 
                className="flex items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                {/* Replace with actual logo images */}
                <div className="text-center">
                  <div className="bg-gray-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg 
                      className="w-12 h-12 text-gray-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition font-medium">
              View All Brands
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default BrandSection;