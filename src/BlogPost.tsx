import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch markdown content
    fetch(`/blog/${slug}.md`)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setContent('# Post not found\n\nThe blog post you are looking for does not exist.');
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/blog" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="MIRIX Logo"
                className="h-8 rounded"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
              <p className="text-gray-400 mt-4">Loading...</p>
            </div>
          ) : (
            <motion.article
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                components={{
                  // Customize markdown rendering
                  h1: ({node, children, ...props}) => <h1 className="text-5xl font-bold text-white mb-4" {...props}>{children}</h1>,
                  h2: ({node, children, ...props}) => <h2 className="text-4xl font-bold text-white mt-12 mb-6" {...props}>{children}</h2>,
                  h3: ({node, children, ...props}) => <h3 className="text-3xl font-bold text-white mt-8 mb-4" {...props}>{children}</h3>,
                  h4: ({node, children, ...props}) => <h4 className="text-2xl font-bold text-white mt-6 mb-3" {...props}>{children}</h4>,
                  p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed mb-6" {...props} />,
                  a: ({node, children, ...props}) => <a className="text-teal-400 hover:text-teal-300 underline" {...props}>{children}</a>,
                  ul: ({node, ...props}) => <ul className="text-gray-300 space-y-2 mb-6 ml-6" {...props} />,
                  ol: ({node, ...props}) => <ol className="text-gray-300 space-y-2 mb-6 ml-6" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-300" {...props} />,
                  code: ({node, inline, ...props}: any) => 
                    inline ? (
                      <code className="bg-slate-800 text-teal-400 px-2 py-1 rounded text-sm" {...props} />
                    ) : (
                      <code className="block bg-slate-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm" {...props} />
                    ),
                  pre: ({node, ...props}) => <pre className="bg-slate-900 rounded-lg overflow-hidden mb-6 border border-gray-700" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-400 my-6" {...props} />,
                  hr: ({node, ...props}) => <hr className="border-gray-700 my-8" {...props} />,
                  strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
                  em: ({node, ...props}) => <em className="text-gray-300 italic" {...props} />,
                }}
              >
                {content}
              </ReactMarkdown>
            </motion.article>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

