import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Database, 
  Search, 
  Lock, 
  Zap,
  Clock,
  MessageCircle,
  FileText,
  Settings,
  CheckCircle,
  ArrowRight,
  Github,
  Star,
  Download
} from 'lucide-react';
import './App.css';

function App() {
  const memoryComponents = [
    {
      name: "Core Memory",
      icon: <Brain className="w-8 h-8" />,
      description: "Persistent information always visible to the agent, including persona and user understanding",
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Episodic Memory", 
      icon: <Clock className="w-8 h-8" />,
      description: "Context-specific events and temporal activities, serving as a behavioral calendar",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Semantic Memory",
      icon: <Database className="w-8 h-8" />,
      description: "General knowledge and concepts independent of temporal context",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Procedural Memory",
      icon: <Settings className="w-8 h-8" />,
      description: "Process workflows and step-by-step instructions for accomplishing tasks",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Resource Memory",
      icon: <FileText className="w-8 h-8" />,
      description: "Active documents and project-related files the user interacts with",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Knowledge Vault",
      icon: <Lock className="w-8 h-8" />,
      description: "Securely stores structured personal data like addresses, contacts, and credentials",
      color: "from-teal-600 to-blue-600"
    }
  ];

  const agents = [
    {
      name: "Meta Agent",
      role: "Coordinator",
      description: "Coordinates and updates various memory agents"
    },
    {
      name: "Chat Agent", 
      role: "Interface",
      description: "Engages in natural language conversations with users"
    },
    {
      name: "Memory Managers",
      role: "Storage",
      description: "Six specialized agents managing memory components"
    }
  ];

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
      student2Acc: "0.5667", student2Storage: "89.83MB", 
      student3Acc: "0.6727", student3Storage: "47.28MB",
      overallAcc: "0.5950", overallStorage: "52.56MB",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
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
            className="mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/logo.png" 
              alt="Mirix Logo" 
              className="h-24 mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <motion.p 
            className="text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-bold"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The World's Most Advanced Memory System for LLM Agents
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Multi-agent personal assistant with six distinct memory components and eight specialized agents, 
            transforming raw inputs into a multi-component memory system that adapts to your digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-teal-500/25">
              <Download className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
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
              <span>99% Storage Reduction</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Memory Components Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Six Memory Components</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mirix leverages a sophisticated multi-layered memory architecture that processes and organizes information intelligently
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoryComponents.map((component, index) => (
              <motion.div
                key={component.name}
                className="relative group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${component.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${component.color} text-white mb-6`}>
                    {component.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{component.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{component.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Agent System */}
      <section className="py-24 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Multi-Agent Architecture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Eight specialized agents working collaboratively to process, store, and retrieve information efficiently
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                                  <p className="text-sm text-teal-400 mb-4 font-semibold">{agent.role}</p>
                <p className="text-gray-400">{agent.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Workflow Diagram */}
          <motion.div 
            className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Intelligent Workflow</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Input Processing</h4>
                <p className="text-gray-400">User Input → Meta Agent → Memory Managers</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-teal-400 rotate-90 lg:rotate-0" />
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Memory Consolidation</h4>
                <p className="text-gray-400">Intelligent routing and batch processing</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-teal-400 rotate-90 lg:rotate-0" />
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Retrieval System</h4>
                <p className="text-gray-400">Chat Agent → search_memory() → Response</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Search Capabilities */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Advanced Retrieval System</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dual-mode search architecture combining PostgreSQL-native BM25 with semantic embedding search for optimal retrieval performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Multi-Component Search Architecture</h3>
              <div className="space-y-4">
                {[
                  { 
                    name: "BM25 Search", 
                    description: "PostgreSQL native full-text search with GIN indexing for lightning-fast keyword matching and relevance ranking", 
                    highlight: true,
                    color: "teal",
                    badge: "PRIMARY",
                    features: ["Term frequency weighting", "Document length normalization", "Smart AND → OR fallback"]
                  },
                  { 
                    name: "Embedding Search", 
                    description: "Semantic vector similarity using OpenAI's Text-Embedding-3-Small for context-aware retrieval", 
                    highlight: false,
                    color: "blue",
                    badge: "SEMANTIC",
                    features: ["768-dimensional vectors", "Cosine similarity matching", "Semantic understanding"]
                  },
                  { 
                    name: "String Match", 
                    description: "Direct string containment search for exact phrase matching and literal text retrieval", 
                    highlight: false,
                    color: "purple",
                    badge: "EXACT",
                    features: ["Exact phrase matching", "Case-insensitive search", "Literal text retrieval"]
                  }
                ].map((method, index) => (
                  <motion.div 
                    key={method.name}
                    className={`p-6 rounded-xl border ${
                      method.color === 'teal' ? 'border-teal-500 bg-teal-500/10' : 
                      method.color === 'blue' ? 'border-blue-500 bg-blue-500/10' : 
                      'border-purple-500 bg-purple-500/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className={`w-5 h-5 ${
                        method.color === 'teal' ? 'text-teal-400' : 
                        method.color === 'blue' ? 'text-blue-400' : 
                        'text-purple-400'
                      }`} />
                      <h4 className="text-xl font-bold text-white">{method.name}</h4>
                      <span className={`${
                        method.color === 'teal' ? 'bg-teal-500' : 
                        method.color === 'blue' ? 'bg-blue-500' : 
                        'bg-purple-500'
                      } text-white px-2 py-1 rounded-full text-xs font-bold`}>
                        {method.badge}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {method.features.map((feature, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${
                          method.color === 'teal' ? 'bg-teal-500/20 text-teal-300' : 
                          method.color === 'blue' ? 'bg-blue-500/20 text-blue-300' : 
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Active Memory Search</h3>
              <div className="space-y-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Search-First Architecture</h4>
                  <p className="text-gray-400 mb-4">
                    Every user query triggers an immediate memory search before response generation, while the agent can only see the summaries of the memories.
                    ensuring the agent always has access to relevant context and information.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-400 font-semibold">Query Reception:</span>
                        <span className="text-gray-300 ml-1">User input triggers search_memory() function</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-blue-400 font-semibold">Memory Retrieval:</span>
                        <span className="text-gray-300 ml-1">BM25 search across all memory components</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-green-400 font-semibold">Context Integration:</span>
                        <span className="text-gray-300 ml-1">Retrieved memories inform following activities.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Deep Connection between the Memory and the Agent</h4>
                  <p className="text-gray-400 mb-4">
                    Unlike traditional chatbots that rely solely on conversation history, 
                    MIRIX actively searches its comprehensive memory before every response.
                  </p>
                                      <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        No explicit instructions needed - memory search happens automatically
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Delivers well-informed responses backed by comprehensive memory
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Agent seamlessly integrates past experiences into conversations
                      </li>
                    </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-24 px-4 bg-slate-800/20">
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
                    <span className="text-gray-300 ml-1">99% reduction vs Storing All Images (52.56MB vs 15.07GB)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Get Started</h2>
            <p className="text-xl text-gray-400">
              Easy setup with PostgreSQL for optimal performance, or SQLite for quick testing
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/30 rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Clone Repository</h3>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-green-400 border border-gray-700">
                  git clone https://github.com/Mirix-AI/Mirix.git<br />
                  cd Mirix
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Configure Environment</h3>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-green-400 border border-gray-700">
                  # Create .env file<br />
                  GEMINI_API_KEY=your_api_key_here<br />
                  MIRIX_PG_URI=postgresql+pg8000://username@localhost:5432/mirix
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Install Dependencies</h3>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-green-400 border border-gray-700">
                  pip install -r requirements.txt
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">4. Start Mirix</h3>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-green-400 border border-gray-700">
                  python main.py
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
