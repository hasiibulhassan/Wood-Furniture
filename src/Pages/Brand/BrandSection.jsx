import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';



const BrandSection = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    { id: 1, name: "WoodCraft", logo: "/woodcraft-logo.png", description: "Handcrafted wooden furniture with timeless designs" },
    { id: 2, name: "LuxLiving", logo: "/luxliving-logo.png", description: "Premium luxury furniture for sophisticated spaces" },
    { id: 3, name: "UrbanLoft", logo: "/urbanloft-logo.png", description: "Modern urban designs for contemporary living" },
    { id: 4, name: "EcoStyle", logo: "/ecostyle-logo.png", description: "Sustainable furniture with eco-friendly materials" },
    { id: 5, name: "Minimalist", logo: "/minimalist-logo.png", description: "Clean lines and functional simplicity" },
    { id: 6, name: "Heritage", logo: "/heritage-logo.png", description: "Classic designs with traditional craftsmanship" },
    { id: 7, name: "Moderna", logo: "/moderna-logo.png", description: "Cutting-edge designs with innovative materials" },
    { id: 8, name: "ComfortPlus", logo: "/comfortplus-logo.png", description: "Ergonomic designs focused on ultimate comfort" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const brandVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by the Finest Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to bring you exceptional craftsmanship and innovative designs
          </p>
        </motion.div>

        {/* Brands Grid - 4 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={brandVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              className="relative group h-full"
            >
              <div className={`bg-white p-8 rounded-xl shadow-sm h-full flex flex-col items-center transition-all duration-300
                ${hoveredBrand === brand.id ? 
                  'border-2 border-gray-300' : 
                  'border border-gray-200'}`}
              >
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-full h-full object-full overflow-hidden p-2" 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 text-center mb-3 text-xl">{brand.name}</h3>
                <div className={`transition-all duration-300 overflow-hidden ${hoveredBrand === brand.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 text-center text-lg">
                    {brand.description}
                  </p>
                </div>
              </div>
              {hoveredBrand === brand.id && (
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-gray-400 to-black rounded-full"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
         
        </motion.div>
      </div>

      {/* Stay With Us Component at the bottom */}
      <div className="bg-white text-black py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay With Us</h3>
          <p className="text-xl text-black-300 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter for the latest updates and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg text-gray-900 flex-grow border border-black"
            />
            <button className="bg-gray-500 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;