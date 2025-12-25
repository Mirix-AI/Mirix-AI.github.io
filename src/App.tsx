import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Clock,
  ArrowRight,
  Github,
  Code,
  Layers,
  Cpu,
  Shield,
  Terminal,
  Command
} from 'lucide-react';
import './App.css';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import intuitLogo from './assets/Intuit_Logo.svg.png';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* Top Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer" 
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.png" 
                alt="MIRIX Logo"
                className="h-8 rounded"
              />
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('developers')} className="text-sm text-zinc-400 hover:text-white transition-colors">Developers</button>
              <button onClick={() => scrollToSection('app')} className="text-sm text-zinc-400 hover:text-white transition-colors">App</button>
              <button onClick={() => scrollToSection('use-cases')} className="text-sm text-zinc-400 hover:text-white transition-colors">Use Cases</button>
              <Link to="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">Blog</Link>
              <a href="https://github.com/Mirix-AI/MIRIX" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">GitHub</a>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-end">
              <a
                href="https://app.mirix.io"
                className="bg-white text-black px-4 py-1.5 rounded text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Get Started with Cloud Version
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            MIRIX API is now available
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Wrap any AI agent in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              production-grade memory in seconds
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Infrastructure for persistent, private, and intelligent agent memory.
            Open-source SDK for developers. Dashboard at app.mirix.io for setup.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://app.mirix.io" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded bg-white text-black font-medium flex items-center gap-2 hover:bg-zinc-200 transition-colors">
              <Terminal className="w-4 h-4" />
              Get Started with Cloud Version
            </a>
            <a href="https://github.com/Mirix-AI/MIRIX" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded bg-zinc-900 border border-zinc-800 text-white font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors">
              <Github className="w-4 h-4" />
              Deploy Local Version
            </a>
          </motion.div>
          <p className="text-xs text-zinc-500">
            v0.1.4 deprecates the desktop agent and focuses on memory systems for all kinds of agents.
          </p>

          {/* Enterprise Contributors - Hero Integration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center mb-16"
          >
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] mb-4 font-semibold">
              Enterprise Contributors
            </p>
            <div className="flex items-center gap-3">
              <img 
                src={intuitLogo} 
                alt="Intuit" 
                className="h-6 md:h-7 opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
              />
              <div className="h-4 w-[1px] bg-white/10 mx-2" />
              <p className="text-xs md:text-sm text-zinc-400">
                Open Source Contributions from Intuit Engineers
              </p>
            </div>
          </motion.div>

          {/* Code Preview / Visual */}
          <motion.div 
            className="relative max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <div className="ml-4 text-xs text-zinc-500 font-mono">agent_memory.py</div>
            </div>
            <div className="p-6 text-left overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed text-zinc-300">
                <code>
<span className="text-purple-400">from</span> mirix <span className="text-purple-400">import</span> MirixClient<br/><br/>
client = MirixClient(api_key=<span className="text-green-400">"your_api_key_here"</span>)<br/>
<span className="text-gray-500"># or set MIRIX_API_KEY in your environment, then use: client = MirixClient()</span><br/><br/>
client.initialize_meta_agent(<br/>
&nbsp;&nbsp;provider=<span className="text-green-400">"openai"</span><br/>
)&nbsp;&nbsp;<span className="text-gray-500"># See configs in mirix/configs/examples/mirix_openai.yaml</span><br/><br/>
<span className="text-gray-500"># Simple add example</span><br/>
client.add(<br/>
&nbsp;&nbsp;user_id=<span className="text-green-400">"demo-user"</span>,<br/>
&nbsp;&nbsp;messages=[<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="text-green-400">"role"</span>: <span className="text-green-400">"user"</span>, <span className="text-green-400">"content"</span>: [{'{'}<span className="text-green-400">"type"</span>: <span className="text-green-400">"text"</span>, <span className="text-green-400">"text"</span>: <span className="text-green-400">"The moon now has a president."</span>{'}'}]{'}'},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="text-green-400">"role"</span>: <span className="text-green-400">"assistant"</span>, <span className="text-green-400">"content"</span>: [{'{'}<span className="text-green-400">"type"</span>: <span className="text-green-400">"text"</span>, <span className="text-green-400">"text"</span>: <span className="text-green-400">"Noted."</span>{'}'}]{'}'},<br/>
&nbsp;&nbsp;],<br/>
)
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Universal SDK</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Framework-agnostic design. Works seamlessly with LangChain, AutoGen, or your custom agent architecture.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Local & Private</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your data never leaves your infrastructure. Full support for local vector stores and embedding models.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Optimized retrieval algorithms ensure your agents get the exact context they need with minimal latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="app" className="py-32 px-4 bg-zinc-900/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-medium mb-6">
                FOR EVERYONE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Dashboard Experience
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Set up projects, manage users, and monitor memory operations from the web dashboard at app.mirix.io.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white text-xs">1</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Project Setup</h4>
                    <p className="text-sm text-zinc-500">Create environments and get your API keys in minutes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white text-xs">2</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Memory Operations</h4>
                    <p className="text-sm text-zinc-500">Track write, retrieve, and update activity in one place.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white text-xs">3</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Local or Hosted</h4>
                    <p className="text-sm text-zinc-500">Deploy locally via GitHub or use the hosted dashboard.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.mirix.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded font-medium text-sm hover:bg-zinc-200 transition-colors text-center"
                >
                  Get Started with Cloud Version
                </a>
                <a
                  href="https://github.com/Mirix-AI/MIRIX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded font-medium text-sm hover:bg-zinc-800 transition-colors text-center"
                >
                  Deploy Local Version
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-1000"></div>
              <div className="relative rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
                <img 
                  src={img7}
                  alt="Mirix Dashboard Homepage"
                  className="w-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Memory Traces Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-32">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-1000"></div>
              <div className="relative rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
                <img 
                  src={img8}
                  alt="Mirix Memory Traces"
                  className="w-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-medium mb-6">
                OBSERVABILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Deep Memory Observability
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Inspect every memory operation in real-time. Track queue requests, memory updates, and parallel execution traces for complete transparency.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white text-xs">
                    <Database className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Execution Traces</h4>
                    <p className="text-sm text-zinc-500">See exactly how memories are processed across different modules.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white text-xs">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Status Tracking</h4>
                    <p className="text-sm text-zinc-500">Monitor success rates and processing times for every request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="py-32 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Developers</h2>
              <p className="text-zinc-400 max-w-xl">
                Integrate advanced memory capabilities into your AI applications with just a few lines of code.
              </p>
            </div>
            <Link to="/blog" className="text-white flex items-center gap-2 hover:text-zinc-300 transition-colors text-sm font-medium">
              View Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-xl border border-white/10 bg-zinc-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Code className="w-24 h-24" />
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">Claude Agent Integration</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed max-w-md">
                  Give your Claude agents persistent long-term memory. Enable them to remember user preferences and past interactions across sessions.
                </p>
                <Link to="/blog/claude-agent-integration" className="inline-flex items-center text-sm text-white border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition-colors">
                  Read Guide
                </Link>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative rounded-xl border border-white/10 bg-zinc-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Command className="w-24 h-24" />
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">LangGraph Support</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed max-w-md">
                  Enhance your LangGraph workflows with stateful memory. Build complex, multi-step agents that maintain context.
                </p>
                <a href="https://docs.mirix.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition-colors">
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powering the Next Generation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard 
              icon={<Brain className="w-5 h-5" />}
              title="True Personalization"
              description="Agents that learn from every interaction. Create companions that remember specific user details without hallucination."
            />
            <UseCaseCard 
              icon={<Clock className="w-5 h-5" />}
              title="Long-horizon Planning"
              description="Enable agents to execute complex tasks over days or weeks. Mirix stores the state needed to resume work seamlessly."
            />
            <UseCaseCard 
              icon={<Database className="w-5 h-5" />}
              title="Semantic Knowledge"
              description="Beyond simple logs. Mirix constructs a knowledge graph, allowing agents to reason over past information effectively."
            />
          </div>

          {/* Vision badges */}
          <div className="mt-24 flex flex-wrap justify-center gap-3">
            {['Wearable Devices', 'Home Robotics', 'Virtual Companions', 'Enterprise Assistants'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MIRIX Logo"
              className="h-8 rounded"
            />
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="https://github.com/Mirix-AI/Mirix" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:yuw164@ucsd.edu" className="hover:text-white transition-colors">Contact</a>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>

          <div className="text-zinc-600 text-sm">
            © 2025 MIRIX AI
          </div>
        </div>
      </footer>
    </div>
  );
}

function UseCaseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
      <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-zinc-200">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default App;
