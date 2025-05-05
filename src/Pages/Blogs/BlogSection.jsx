import { FiCalendar, FiClock, FiShare2, FiArrowRight } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Furniture Design",
      excerpt: "Exploring how eco-friendly materials and production methods are shaping the next generation of home furnishings.",
      category: "Design Trends",
      date: "May 15, 2023",
      readTime: "5 min read",
      comments: 12,
      image: "/blog1.jpg"
    },
    {
      id: 2,
      title: "Maximizing Small Spaces: Urban Living Solutions",
      excerpt: "Creative furniture arrangements and multi-functional pieces that transform compact apartments into spacious homes.",
      category: "Living Tips",
      date: "April 28, 2023",
      readTime: "4 min read",
      comments: 8,
      image: "/blog2.jpg"
    },
    {
      id: 3,
      title: "The Art of Mixing Modern and Vintage Styles",
      excerpt: "How to blend contemporary furniture with antique finds for a timeless, curated interior look.",
      category: "Styling Guides",
      date: "April 10, 2023",
      readTime: "6 min read",
      comments: 15,
      image: "/blog3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-gray-500 mb-3 tracking-wider">INSIGHTS & INSPIRATION</span>
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Design <span className="font-normal">Journal</span>
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center mr-4">
                    <FiCalendar className="mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-5">{post.excerpt}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="flex items-center text-sm text-gray-500">
                    <FaRegComment className="mr-2" /> {post.comments} comments
                  </span>
                  <button className="text-sm font-medium flex items-center text-gray-900 hover:text-blue-600 transition-colors">
                    Read more <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
{/* 
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Articles
            <FiArrowRight className="ml-2" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;