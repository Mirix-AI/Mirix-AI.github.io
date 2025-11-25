import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';

function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      id: 2,
      title: "Evaluating MIRIX System on MemoryAgentBench",
      excerpt: "This article introduces an evaluation of the MIRIX memory system on the comprehensive MemoryAgentBench, demonstrating that MIRIX's multi-agent framework significantly outperforms other RAG agents.",
      date: "2025-10-20",
      author: "Yuanzhe Hu, Yu Wang",
      image: "/blog/figures/mirix_memory_types.png",
      slug: "memory-agent-bench"
    },
    {
      id: 1,
      title: "Integrating MIRIX into Claude Agent SDK",
      excerpt: "Learn how to give your Claude agents persistent memory across sessions with MIRIX. A complete step-by-step guide with code examples.",
      date: "2025-10-16",
      author: "MIRIX Team",
      image: "/blog/figures/mirix_claude.png",
      slug: "claude-agent-integration"
    },
    // Add more blog posts here
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
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
      <div className="relative z-10 pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Blog</h1>
            <p className="text-lg text-zinc-400 mb-16">
              Latest updates, insights, and stories from the MIRIX team
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <motion.article
                  className="bg-zinc-900/20 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 leading-tight">{post.title}</h2>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <span className="text-white text-sm font-medium hover:text-zinc-300 transition-colors inline-flex items-center gap-1">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-zinc-900/20 rounded-xl p-12 border border-white/10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                <p className="text-lg text-zinc-400">
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
