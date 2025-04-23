const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">FurniCraft</h3>
              <p className="mb-4">
                Crafting premium furniture since 2010. We blend tradition with modern design.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
  
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Shop', 'About Us', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 3: Customer Service */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {['My Account', 'Track Order', 'Returns Policy', 'Shipping Info', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe for exclusive offers and design tips
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
                />
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-r-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 FurniCraft. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  
export default Footer
