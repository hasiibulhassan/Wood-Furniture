const BlogSection = () => {
    const blogs = [
      {
        id: 1,
        title: "5 Ways to Style Your Living Room with Minimalist Furniture",
        excerpt: "Discover how to create a sleek and functional living space with minimalist designs.",
        date: "May 15, 2024",
        category: "Interior Design"
      },
      {
        id: 2,
        title: "The Rise of Sustainable Wood in Modern Furniture",
        excerpt: "Learn why eco-friendly materials are shaping the future of furniture.",
        date: "April 28, 2024",
        category: "Sustainability"
      },
      {
        id: 3,
        title: "How to Choose the Perfect Sofa for Your Space",
        excerpt: "A guide to selecting the right size, material, and style for your home.",
        date: "March 10, 2024",
        category: "Buying Guide"
      }
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Latest Blog Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-600 font-semibold">{blog.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <button className="text-gray-700 font-semibold hover:text-black">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black transition">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default BlogSection;