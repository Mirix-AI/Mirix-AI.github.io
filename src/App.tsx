import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Lock, 
  Zap,
  Clock,
  MessageCircle,
  Settings,
  ArrowRight,
  Github,
  Star,
  Download,
  Camera
} from 'lucide-react';
import './App.css';
import img0 from './assets/img0.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavHovered, setIsNavHovered] = useState(false);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page or when hovered
      if (currentScrollY < 10 || isNavHovered) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsNavVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavHovered]);


  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Top Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50 transition-transform duration-300 ease-in-out ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center min-w-[180px]">
              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('hero')}
              >
                <img 
                  src="/logo.png" 
                  alt="MIRIX Logo"
                  className="h-8 rounded"
                />
              </motion.div>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('applications')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Applications
              </button>
              <button
                onClick={() => scrollToSection('desktop-agent')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Desktop Agent
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Use Cases
              </button>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Blog
              </Link>
              <a
                href="https://github.com/Mirix-AI/MIRIX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                GitHub
              </a>
            </div>

            {/* Download Button */}
            <div className="flex items-center justify-end min-w-[180px]">
              <motion.a
                href="https://github.com/Mirix-AI/MIRIX/releases/download/v0.1.3/MIRIX-0.1.3-arm64.dmg"
                download="MIRIX-0.1.0-arm64.dmg"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for Mac
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <video 
              src="/logo.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="h-32 mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The World's Most Advanced<br/>Memory System for AI Agents
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With our Python SDK, it can be easily wrapped on your agents
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="https://docs.mirix.io/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-teal-500/25">
              <Download className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/Mirix-AI/MIRIX" target="_blank" rel="noopener noreferrer" className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </motion.div>
          
          {/* Three Main Points */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Point 1 - Give Memory */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-teal-500 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white mb-6">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Give Memory to Your AI</h3>
                <p className="text-gray-400 leading-relaxed">Equip your assistants, employees, and companions with powerful memory capabilities</p>
              </div>
            </motion.div>
            
            {/* Point 2 - Personal & Private */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personal & Private</h3>
                <p className="text-gray-400 leading-relaxed">Your memory is stored locally, ensuring complete privacy and security</p>
              </div>
            </motion.div>
            
            {/* Point 3 - Best Performing */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-yellow-500 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Best Performing</h3>
                <p className="text-gray-400 leading-relaxed">The highest accuracy memory system of all, outperforming every competitor</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Integrate MIRIX into your favorite AI tools and platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Claude-Code Integration */}
            <Link to="/blog/claude-agent-integration" className="block relative group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Equip Claude Agent with MIRIX</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Give your Claude agent persistent memory to remember conversations, preferences, and context across sessions
                  </p>
                  <div className="flex items-center text-blue-400 font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
            
            {/* Langgraph Integration */}
            <motion.a
              href="#"
              className="block relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-teal-500 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-teal-500 to-green-500 text-white mb-6">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrate MIRIX into Langgraph</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Enhance your LangGraph agents with advanced memory capabilities for more sophisticated multi-step workflows
                </p>
                <div className="flex items-center text-teal-400 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Desktop Agent Section */}
      <section id="desktop-agent" className="py-24 px-4 bg-slate-800/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Experience MIRIX Even if You're Not a Developer</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Try our desktop agent application
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">How It Works</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mirix automatically takes screenshots and builds a personal memory that is visualizable and only belongs to you. 
              This memory is equipped with an intelligent agent that knows everything about you and your digital activities.
            </p>
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Background container for the overlapping images */}
            <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-3xl">
              {/* Image 1 - Bottom layer */}
              <motion.div
                className="absolute top-8 left-4 md:left-8 lg:left-12 w-[280px] md:w-[350px] lg:w-[400px] z-10"
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              >
                <img 
                  src={img1} 
                  alt="Mirix Chat Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600 hover:shadow-teal-500/20 transition-all duration-300"
                />
              </motion.div>
              
              {/* Image 2 - Second layer */}
              <motion.div
                className="absolute top-12 md:top-16 right-4 md:right-8 lg:right-12 w-[280px] md:w-[350px] lg:w-[400px] z-20"
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              >
                <img 
                  src={img2} 
                  alt="Mirix Code Integration" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600 hover:shadow-blue-500/20 transition-all duration-300"
                />
              </motion.div>
              
              {/* Image 3 - Third layer */}
              <motion.div
                className="absolute bottom-24 md:bottom-20 left-8 md:left-16 lg:left-20 w-[280px] md:w-[350px] lg:w-[400px] z-30"
                initial={{ opacity: 0, y: 100, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              >
                <img 
                  src={img3} 
                  alt="Mirix Browser Integration" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600 hover:shadow-purple-500/20 transition-all duration-300"
                />
              </motion.div>
              
              {/* Image 4 - Top layer */}
              <motion.div
                className="absolute bottom-16 md:bottom-12 right-8 md:right-16 lg:right-20 w-[280px] md:w-[350px] lg:w-[400px] z-40"
                initial={{ opacity: 0, y: 100, rotate: 4 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              >
                <img 
                  src={img4} 
                  alt="Mirix Terminal Integration" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600 hover:shadow-green-500/20 transition-all duration-300"
                />
              </motion.div>
              
              {/* Image 0 - Central focal point */}
              <motion.div
                className="absolute top-[25%] left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[380px] lg:w-[450px] z-50"
                initial={{ opacity: 0, scale: 0.8, rotate: 1 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 60 }}
              >
                <img 
                  src={img0} 
                  alt="Mirix Main Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600 hover:shadow-yellow-500/20 transition-all duration-300"
                />
              </motion.div>
            </div>
            
            {/* Feature highlights */}
            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-gray-700">
                <Camera className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Automatic Screenshots</h3>
                <p className="text-gray-400 text-sm">Continuously captures your screen activity to build comprehensive visual memory</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-gray-700">
                <Lock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Private Memory</h3>
                <p className="text-gray-400 text-sm">Your personal memory belongs only to you - visualizable and completely private</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-gray-700">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Intelligent Agent</h3>
                <p className="text-gray-400 text-sm">AI agent deeply integrated with your memory, understanding your complete digital life</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-gray-700">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Knows Everything</h3>
                <p className="text-gray-400 text-sm">Chat with an assistant that remembers all your activities and preferences</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how Mirix transforms everyday interactions with intelligent memory-powered assistance
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {/* Use Case 1 - Yesterday Activities */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:order-1">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-teal-400 font-semibold text-sm">DAILY RECALL</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">"Tell me what I did yesterday"</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Mirix automatically captures and organizes your daily activities, allowing you to easily recall 
                  what you worked on, websites you visited, and conversations you had - all with natural language queries.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                    ⏰ Time-based queries
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    📱 Activity tracking
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    🔍 Advanced search
                  </span>
                </div>
              </div>
              
              <div className="lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img5} 
                    alt="Daily Activity Recall Interface" 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Use Case 2 - Cover Letter */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-400 font-semibold text-sm">CAREER ASSISTANCE</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">"Help me write a cover letter for Meta Research Scientist Application"</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Leveraging your complete work history, skills, and experiences stored in memory, Mirix crafts 
                  personalized, compelling cover letters that highlight your most relevant qualifications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    📝 Personalized writing
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                    💼 Career context
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    🎯 Targeted content
                  </span>
                </div>
              </div>
              
              <div className="lg:order-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img6} 
                    alt="Cover Letter Writing Interface" 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Use Case 3 - Memory Tree Visualization */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="lg:order-1">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-400 font-semibold text-sm">MEMORY VISUALIZATION</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Visualize your memory in tree structure</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Explore and navigate your personal memory through an intuitive tree structure visualization. 
                  See how your experiences, knowledge, and activities are interconnected in a beautiful, interactive interface.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    🌳 Tree visualization
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                    🔗 Memory connections
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    📊 Interactive interface
                  </span>
                </div>
              </div>
              
              <div className="lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img3} 
                    alt="Memory Tree Structure Visualization" 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-600"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Use Case 4 - Future Devices */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 font-semibold text-sm">UPCOMING FUNCTIONALITY</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Intelligent Personal Assistants, Wearable Devices, & Robots</h3>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                The future of AI-powered devices with MIRIX memory system as the backend. Imagine intelligent assistants that remember 
                your conversations, wearable devices that understand your habits, and robots that learn from your daily routines.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div 
                  className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Intelligent Personal Assistant</h4>
                  <p className="text-gray-400 text-sm">Remembers your experiences and helps you throughout the day.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Wearable Devices</h4>
                  <p className="text-gray-400 text-sm">AI glasses, AI companions that can see what you see, becoming your real-world personal assistants.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Smart Robots</h4>
                  <p className="text-gray-400 text-sm">Household and service robots that can live in the society</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="https://github.com/Mirix-AI/Mirix" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:yuw164@ucsd.edu" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 Mirix AI. Released under the MIT License.
          </p>
          <p className="text-gray-600 mt-2">
            Built with ❤️ for the future of LLM agent memory systems
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
