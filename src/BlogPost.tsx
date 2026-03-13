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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      {/* Grid Background — matches home page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link to="/blog" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
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
      <div className="relative z-10 pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white/20"></div>
              <p className="text-zinc-400 mt-4 text-sm">Loading...</p>
            </div>
          ) : (
            <motion.article
              className="max-w-none rounded-xl border border-white/10 bg-zinc-900/20 p-6 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({node, children, ...props}) => <h1 className="text-3xl font-semibold text-white mb-3 tracking-tight leading-tight" {...props}>{children}</h1>,
                  h2: ({node, children, ...props}) => <h2 className="text-xl font-semibold text-white mt-10 mb-3 tracking-tight" {...props}>{children}</h2>,
                  h3: ({node, children, ...props}) => <h3 className="text-lg font-semibold text-white mt-7 mb-2 tracking-tight" {...props}>{children}</h3>,
                  h4: ({node, children, ...props}) => <h4 className="text-base font-semibold text-white mt-5 mb-2" {...props}>{children}</h4>,
                  p: ({node, ...props}) => <p className="text-zinc-400 leading-7 mb-4 text-sm" {...props} />,
                  a: ({node, children, ...props}) => <a className="text-white underline underline-offset-4 decoration-white/30 hover:text-zinc-300 transition-colors" {...props}>{children}</a>,
                  ul: ({node, ...props}) => <ul className="text-zinc-400 space-y-1.5 mb-5 ml-5 list-disc text-sm" {...props} />,
                  ol: ({node, ...props}) => <ol className="text-zinc-400 space-y-1.5 mb-5 ml-5 list-decimal text-sm" {...props} />,
                  li: ({node, ...props}) => <li className="text-zinc-400 pl-1" {...props} />,
                  code: ({node, className, children, ...props}: any) => {
                    const codeText = String(children ?? '');
                    const isCodeBlock = Boolean(className && className.includes('language-')) || codeText.includes('\n');

                    return isCodeBlock ? (
                      <code
                        className={`block bg-transparent text-zinc-300 px-5 py-0 overflow-x-auto text-sm leading-7 font-mono ${className || ''}`}
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code
                        className="bg-white/10 text-white px-1.5 py-0.5 rounded text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({node, ...props}) => <pre className="bg-[#0A0A0A] rounded-lg overflow-hidden mb-6 border border-white/10" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-white/20 pl-4 italic text-zinc-400 my-5 text-sm" {...props} />,
                  hr: ({node, ...props}) => <hr className="border-white/10 my-7" {...props} />,
                  strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
                  em: ({node, ...props}) => <em className="text-zinc-300 italic" {...props} />,
                  img: ({node, alt, ...props}) => <img alt={alt || ''} className="rounded-lg border border-white/10 my-6" {...props} />,
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
