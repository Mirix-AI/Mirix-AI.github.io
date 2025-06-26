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
    { model: "Gemini", accuracy: "8.33%", storage: "23,091 MB" },
    { model: "Letta", accuracy: "N/A", storage: "N/A" },
    { model: "Mirix-2025", accuracy: "50.00%", storage: "20.57 MB", highlight: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            transforming raw inputs into a rich, searchable knowledge base that adapts to your digital experiences.
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
            <button className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>50% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span>1000x Faster Search</span>
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
            <h2 className="text-5xl font-bold text-white mb-6">PostgreSQL-Native BM25 Search</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lightning-fast, enterprise-grade search with advanced ranking and field-specific targeting
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Search Methods</h3>
              <div className="space-y-4">
                {[
                  { name: "BM25", description: "PostgreSQL native full-text search (Recommended)", highlight: true },
                  { name: "Embedding", description: "Vector similarity search using embeddings" },
                  { name: "String Match", description: "Simple string containment search" },
                  { name: "Fuzzy Match", description: "Fuzzy string matching (legacy support)" }
                ].map((method, index) => (
                  <motion.div 
                    key={method.name}
                    className={`p-6 rounded-xl border ${method.highlight ? 'border-teal-500 bg-teal-500/10' : 'border-gray-700 bg-slate-800/30'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className={`w-5 h-5 ${method.highlight ? 'text-teal-400' : 'text-green-400'}`} />
                      <h4 className="text-xl font-bold text-white">{method.name}</h4>
                      {method.highlight && <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold">RECOMMENDED</span>}
                    </div>
                    <p className="text-gray-400">{method.description}</p>
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
              <h3 className="text-3xl font-bold text-white mb-8">Performance Benefits</h3>
              <div className="space-y-6">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Speed Improvements</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Query Speed</span>
                      <span className="text-green-400 font-bold">50-100x Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-green-400 font-bold">Sub-millisecond</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Memory Usage</span>
                      <span className="text-green-400 font-bold">Zero In-Memory</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Advanced Features</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      GIN Index Utilization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Smart AND → OR Fallback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Field Weighting System
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Document Length Normalization
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
            <h3 className="text-2xl font-bold text-white mb-8 text-center">24-Hour Dataset (5,886 Images)</h3>
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 gap-4 mb-4 font-bold text-gray-300">
                <div>Model</div>
                <div>Accuracy ↑</div>
                <div>Storage Size (MB) ↓</div>
              </div>
              {benchmarks.map((benchmark, index) => (
                <motion.div
                  key={benchmark.model}
                  className={`grid grid-cols-3 gap-4 p-4 rounded-xl mb-2 ${benchmark.highlight ? 'bg-teal-500/20 border border-teal-500/50' : 'bg-slate-700/30'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`font-semibold ${benchmark.highlight ? 'text-teal-300' : 'text-white'}`}>
                    {benchmark.model}
                    {benchmark.highlight && <span className="ml-2 bg-teal-500 text-white px-2 py-1 rounded-full text-xs">BEST</span>}
                  </div>
                  <div className={benchmark.highlight ? 'text-green-400 font-bold' : 'text-gray-400'}>
                    {benchmark.accuracy}
                  </div>
                  <div className={benchmark.highlight ? 'text-green-400 font-bold' : 'text-gray-400'}>
                    {benchmark.storage}
                  </div>
                </motion.div>
              ))}
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
