import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/content';
import { Calendar, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const searchContent = `${post.title} ${post.excerpt}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-full">
      <SEOHead
        title="Blog"
        description="Expert tips and insights on home renovation, basement finishing, and construction projects in Utah. Stay updated with the latest trends and best practices."
        canonicalUrl="https://lmfinishingandconstruction.com/blog"
        type="blog"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Blog Overview"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#213555] bg-opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Home Renovation Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Expert tips, insights, and inspiration for your next renovation project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-4"
        >
          <div className="relative">
            <label htmlFor="search" className="sr-only">Search articles</label>
            <input
              id="search"
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#213555] focus:border-transparent"
              aria-label="Search articles"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      {/* Blog Posts */}
      <section className="py-20" aria-label="Blog Posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-700">No articles found matching your search.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                    <img
                      src={post.imageUrl}
                      alt={`Featured image for ${post.title}`}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-[#213555] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-700 mb-6">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#213555] font-medium hover:text-[#182943] transition-colors"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;