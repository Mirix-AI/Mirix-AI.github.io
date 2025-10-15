import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';

function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Integrating MIRIX into Claude Agent SDK",
      excerpt: "Learn how to give your Claude agents persistent memory across sessions with MIRIX. A complete step-by-step guide with code examples.",
      date: "2025-01-15",
      author: "MIRIX Team",
      image: "/blog/mirix_claude.png",
      slug: "claude-agent-integration"
    },
    // Add more blog posts here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <img 
              src="/logo.png" 
              alt="MIRIX Logo"
              className="h-8 rounded"
            />
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-400 mb-16">
              Latest updates, insights, and stories from the MIRIX team
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <motion.article
                  className="bg-slate-800/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300 h-full"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <span className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                      Read More →
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message (if no posts) */}
          {blogPosts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/30 rounded-2xl p-12 border border-gray-700 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                <p className="text-xl text-gray-400">
                  We're working on bringing you amazing content. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;

