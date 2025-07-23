import React, { useState, useEffect } from 'react';
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

  const benchmarks = [
    // GPT-4o-mini models
    { model: "A-Mem", singleHop: "39.79", multiHop: "18.85", openDomain: "54.05", temporal: "49.91", overall: "48.38", category: "gpt-4o-mini" },
    { model: "LangMem", singleHop: "62.23", multiHop: "47.92", openDomain: "71.12", temporal: "23.43", overall: "58.10", category: "gpt-4o-mini" },
    { model: "OpenAI", singleHop: "63.79", multiHop: "42.92", openDomain: "62.29", temporal: "21.71", overall: "52.90", category: "gpt-4o-mini" },
    { model: "Mem0", singleHop: "67.13", multiHop: "51.15", openDomain: "72.93", temporal: "55.51", overall: "66.88", category: "gpt-4o-mini" },
    { model: "Mem0ᵍ", singleHop: "65.71", multiHop: "47.19", openDomain: "75.71", temporal: "58.13", overall: "68.44", category: "gpt-4o-mini" },
    { model: "Memobase", singleHop: "63.83", multiHop: "52.08", openDomain: "71.82", temporal: "80.37", overall: "70.91", category: "gpt-4o-mini" },
    { model: "Zep", singleHop: "74.11", multiHop: "66.04", openDomain: "67.71", temporal: "79.76", overall: "75.14", category: "gpt-4o-mini" },
    
    // GPT-4.1-mini models
    { model: "LangMem", singleHop: "74.47", multiHop: "61.06", openDomain: "67.71", temporal: "86.92", overall: "78.05", category: "gpt-4.1-mini" },
    { model: "RAG-500", singleHop: "37.94", multiHop: "37.69", openDomain: "48.96", temporal: "61.83", overall: "51.62", category: "gpt-4.1-mini" },
    { model: "Zep", singleHop: "79.43", multiHop: "69.16", openDomain: "73.96", temporal: "83.33", overall: "79.09", category: "gpt-4.1-mini" },
    { model: "Mem0", singleHop: "62.41", multiHop: "57.32", openDomain: "44.79", temporal: "66.47", overall: "62.47", category: "gpt-4.1-mini" },
    
    // Mirix models
    { model: "MIRIX", singleHop: "85.11", multiHop: "83.70", openDomain: "65.62", temporal: "88.39", overall: "85.38", highlight: true, category: "mirix" },
    { model: "Full-Context", singleHop: "88.53", multiHop: "77.70", openDomain: "71.88", temporal: "92.70", overall: "87.52", category: "upperbound" }
  ];

  const screenshotVQABenchmarks = [
    { 
      model: "Gemini", 
      student1Acc: "0.0000", student1Storage: "142.10MB",
      student2Acc: "0.0952", student2Storage: "438.86MB", 
      student3Acc: "0.2545", student3Storage: "129.14MB",
      overallAcc: "0.1166", overallStorage: "236.70MB"
    },
    { 
      model: "SigLIP@50", 
      student1Acc: "0.3636", student1Storage: "22.55GB",
      student2Acc: "0.4138", student2Storage: "19.88GB", 
      student3Acc: "0.5455", student3Storage: "2.82GB",
      overallAcc: "0.4410", overallStorage: "15.07GB"
    },
    { 
      model: "MIRIX", 
      student1Acc: "0.5455", student1Storage: "20.57MB",
      student2Acc: "0.5667", student2Storage: "19.83MB", 
      student3Acc: "0.6727", student3Storage: "7.28MB",
      overallAcc: "0.5950", overallStorage: "15.89MB",
      highlight: true
    }
  ];

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
                onClick={() => scrollToSection('summary')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Summary
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection('benchmarks')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Benchmarks
              </button>
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
                href="https://github.com/Mirix-AI/MIRIX/releases/download/v0.1.1/MIRIX-0.1.1-arm64.dmg"
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
          
          <motion.p 
            className="text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-bold"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building Your Personal Assistant with the Most Advanced Memory System
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>85.38% LOCOMO & 59.5% ScreenshotVQA</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span>99.9% Storage Reduction</span>
            </div>
          </motion.div>
          
          {/* Feature Highlight Blocks */}
          <motion.div 
            className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Block 1 - Advanced Memory System */}
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
                <h3 className="text-2xl font-bold text-white mb-4">The World's Most Advanced Memory System for LLM Agents</h3>
                <p className="text-gray-400 leading-relaxed">Built specifically for LLM agents with cutting-edge memory architecture that outperforms all existing solutions</p>
              </div>
            </motion.div>
            
            {/* Block 2 - Personal Private Memory */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <a 
                href="https://docs.mirix.io/advanced/security-privacy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500 transition-all duration-300 cursor-pointer"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Own Personal Private Memory</h3>
                <p className="text-gray-400 leading-relaxed">Builds visualizable and structured memory that belongs entirely to you - completely private and secure</p>
              </a>
            </motion.div>
            
            {/* Block 3 - Token Trading */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-yellow-500 transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DePIN Memory Collection and Marketplace</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build community by sharing your experience, and monetize through memory exchange
                  <span className="block mt-2 text-yellow-400 font-semibold text-sm">🚀 Upcoming Functionality</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section id="summary" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-12">Executive Summary</h2>
            
            <div className="space-y-8 text-left">
              {/* First paragraph - What MIRIX can do */}
              <motion.div 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  MIRIX is redefining the future of AI memory, solving the field's most critical challenge: enabling language models to remember. <span className="text-green-400 font-semibold">For the first time, AI agents can have memory that is truly useful in real-world scenarios, transcending text to embrace rich visual and multimodal experiences.</span>
                </p>
              </motion.div>

              {/* Second paragraph - Multimodal performance */}
              <motion.div 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  With <span className="text-green-400 font-semibold">multimodal input</span>, MIRIX, as the <span className="text-green-400 font-semibold">ONLY</span> memory system capable of processing massive images, delivers <span className="text-green-400 font-bold text-2xl">35%</span> higher performance than the RAG baseline while reducing storage requirements by <span className="text-green-400 font-bold text-2xl">99.9%</span>.
                </p>
              </motion.div>

              {/* Third paragraph - Text-only performance */}
              <motion.div 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  Even with only text input, MIRIX shows significantly better performances than competitors, achieving <span className="text-green-400 font-bold text-2xl">85.4%</span> accuracy on memory benchmarks—far surpassing <span className="text-red-400 font-semibold">MemOS (73.3%)</span> and <span className="text-red-400 font-semibold">Mem0 (68.4%)</span>.
                </p>
              </motion.div>
            </div>
            
            {/* Key highlights */}
            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-green-500/30">
                <div className="text-4xl font-bold text-green-400 mb-2">First</div>
                <div className="text-lg text-white font-semibold mb-2">Truly Useful AI Memory</div>
                <div className="text-gray-400">Real-world scenarios with visual and multimodal experiences</div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">World's Only</div>
                <div className="text-lg text-white font-semibold mb-2">Massive Image Processing</div>
                <div className="text-gray-400">35% better performance, 99.9% storage reduction</div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">85.4%</div>
                <div className="text-lg text-white font-semibold mb-2">Memory Benchmark Accuracy</div>
                <div className="text-gray-400">Far surpassing all competitors</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-slate-800/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
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
              <h3 className="text-3xl font-bold text-white mb-6">AI Pins, Wearable Devices, & Robots</h3>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                The future of AI-powered devices with MIRIX memory system as the backend. Imagine AI pins that remember 
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
                  <h4 className="text-xl font-bold text-white mb-4">AI Pins</h4>
                  <p className="text-gray-400 text-sm">Smart wearable pins that remember your experiences and help you memorize.</p>
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


      {/* Performance Benchmarks */}
      <section id="benchmarks" className="py-24 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Performance Benchmarks</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive evaluation results demonstrating Mirix's superior performance across key metrics
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700 overflow-x-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">LOCOMO Dataset - LLM-as-a-Judge Scores</h3>
            <p className="text-gray-400 text-center mb-8">Percentage scores (higher is better) across different question types</p>
            
            <div className="min-w-[800px]">
              <div className="grid grid-cols-6 gap-3 mb-4 font-bold text-gray-300 text-sm">
                <div>Method</div>
                <div className="text-center">Single Hop</div>
                <div className="text-center">Multi-Hop</div>
                <div className="text-center">Open Domain</div>
                <div className="text-center">Temporal</div>
                <div className="text-center">Overall</div>
              </div>
              
              {/* GPT-4o-mini section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3 border-b border-blue-400/30 pb-2">gpt-4o-mini</h4>
                {benchmarks.filter(b => b.category === 'gpt-4o-mini').map((benchmark, index) => (
                  <motion.div
                    key={`${benchmark.model}-${benchmark.category}`}
                    className="grid grid-cols-6 gap-3 p-3 rounded-lg mb-2 bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="font-semibold text-white">{benchmark.model}</div>
                    <div className="text-center text-gray-300">{benchmark.singleHop}</div>
                    <div className="text-center text-gray-300">{benchmark.multiHop}</div>
                    <div className="text-center text-gray-300">{benchmark.openDomain}</div>
                    <div className="text-center text-gray-300">{benchmark.temporal}</div>
                    <div className="text-center font-semibold text-gray-300">{benchmark.overall}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* GPT-4.1-mini section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3 border-b border-purple-400/30 pb-2">gpt-4.1-mini</h4>
                {benchmarks.filter(b => b.category === 'gpt-4.1-mini').map((benchmark, index) => (
                  <motion.div
                    key={`${benchmark.model}-${benchmark.category}`}
                    className="grid grid-cols-6 gap-3 p-3 rounded-lg mb-2 bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="font-semibold text-white">{benchmark.model}</div>
                    <div className="text-center text-gray-300">{benchmark.singleHop}</div>
                    <div className="text-center text-gray-300">{benchmark.multiHop}</div>
                    <div className="text-center text-gray-300">{benchmark.openDomain}</div>
                    <div className="text-center text-gray-300">{benchmark.temporal}</div>
                    <div className="text-center font-semibold text-gray-300">{benchmark.overall}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mirix section */}
              <div className="mb-4">
                {benchmarks.filter(b => b.category === 'mirix').map((benchmark, index) => (
                  <motion.div
                    key={`${benchmark.model}-${benchmark.category}`}
                    className="grid grid-cols-6 gap-3 p-4 rounded-xl mb-2 bg-teal-500/20 border border-teal-500/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="font-bold text-teal-300 flex items-center">
                      {benchmark.model}
                      <span className="ml-2 bg-teal-500 text-white px-2 py-1 rounded-full text-xs">BEST</span>
                    </div>
                    <div className="text-center font-bold text-green-400">{benchmark.singleHop}</div>
                    <div className="text-center font-bold text-green-400">{benchmark.multiHop}</div>
                    <div className="text-center font-bold text-green-400">{benchmark.openDomain}</div>
                    <div className="text-center font-bold text-green-400">{benchmark.temporal}</div>
                    <div className="text-center font-bold text-green-400 text-lg">{benchmark.overall}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Upper bound section */}
              <div className="border-t border-gray-600 pt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Upper Bound</h4>
                {benchmarks.filter(b => b.category === 'upperbound').map((benchmark, index) => (
                  <motion.div
                    key={`${benchmark.model}-${benchmark.category}`}
                    className="grid grid-cols-6 gap-3 p-3 rounded-lg bg-gray-700/30 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="font-semibold text-gray-400">{benchmark.model}</div>
                    <div className="text-center text-gray-400">{benchmark.singleHop}</div>
                    <div className="text-center text-gray-400">{benchmark.multiHop}</div>
                    <div className="text-center text-gray-400">{benchmark.openDomain}</div>
                    <div className="text-center text-gray-400">{benchmark.temporal}</div>
                    <div className="text-center font-semibold text-gray-400">{benchmark.overall}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ScreenshotVQA Benchmark */}
          <motion.div 
            className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700 overflow-x-auto mt-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">ScreenshotVQA Dataset Results</h3>
            <p className="text-gray-400 text-center mb-8">Accuracy and storage efficiency across different students</p>
            
            <div className="min-w-[900px]">
              <div className="grid grid-cols-9 gap-2 mb-4 font-bold text-gray-300 text-sm">
                <div className="text-center"></div>
                <div className="col-span-2 text-center border-b border-blue-400/30 pb-2">
                  <div className="text-blue-400 font-semibold">Student 1</div>
                </div>
                <div className="col-span-2 text-center border-b border-purple-400/30 pb-2">
                  <div className="text-purple-400 font-semibold">Student 2</div>
                </div>
                <div className="col-span-2 text-center border-b border-green-400/30 pb-2">
                  <div className="text-green-400 font-semibold">Student 3</div>
                </div>
                <div className="col-span-2 text-center border-b border-teal-400/30 pb-2">
                  <div className="text-teal-400 font-semibold">Overall</div>
                </div>
              </div>
              
              <div className="grid grid-cols-9 gap-2 mb-4 font-semibold text-gray-400 text-xs">
                <div>Method</div>
                <div className="text-center">Acc ↑</div>
                <div className="text-center">Storage ↓</div>
                <div className="text-center">Acc ↑</div>
                <div className="text-center">Storage ↓</div>
                <div className="text-center">Acc ↑</div>
                <div className="text-center">Storage ↓</div>
                <div className="text-center">Acc ↑</div>
                <div className="text-center">Storage ↓</div>
              </div>
              
              {screenshotVQABenchmarks.map((benchmark, index) => (
                <motion.div
                  key={benchmark.model}
                  className={`grid grid-cols-9 gap-2 p-3 rounded-lg mb-2 text-sm ${
                    benchmark.highlight 
                      ? 'bg-teal-500/20 border border-teal-500/50' 
                      : 'bg-slate-700/30 hover:bg-slate-700/50'
                  } transition-colors`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: benchmark.highlight ? 1.02 : 1.01 }}
                >
                  <div className={`font-semibold flex items-center ${
                    benchmark.highlight ? 'text-teal-300' : 'text-white'
                  }`}>
                    {benchmark.model}
                    {benchmark.highlight && (
                      <span className="ml-2 bg-teal-500 text-white px-1.5 py-0.5 rounded-full text-xs">BEST</span>
                    )}
                  </div>
                  
                  {/* Student 1 */}
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student1Acc}
                  </div>
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student1Storage}
                  </div>
                  
                  {/* Student 2 */}
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student2Acc}
                  </div>
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student2Storage}
                  </div>
                  
                  {/* Student 3 */}
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student3Acc}
                  </div>
                  <div className={`text-center ${
                    benchmark.highlight ? 'text-green-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {benchmark.student3Storage}
                  </div>
                  
                  {/* Overall */}
                  <div className={`text-center font-semibold ${
                    benchmark.highlight ? 'text-green-400 text-base' : 'text-gray-300'
                  }`}>
                    {benchmark.overallAcc}
                  </div>
                  <div className={`text-center font-semibold ${
                    benchmark.highlight ? 'text-green-400 text-base' : 'text-gray-300'
                  }`}>
                    {benchmark.overallStorage}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-slate-900/30 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Key Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-green-400 font-semibold">Best Accuracy:</span>
                    <span className="text-gray-300 ml-1">MIRIX achieves 59.50% overall accuracy</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-blue-400 font-semibold">Storage Efficiency:</span>
                    <span className="text-gray-300 ml-1">99.9% reduction vs SigLIP@50 (15.89MB vs 15.07GB)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
