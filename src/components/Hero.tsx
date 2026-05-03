import { motion } from 'motion/react';
import { MousePointer2, ChevronRight, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor - Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Dynamic Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] uppercase tracking-widest font-bold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Open for Opportunities
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter"
            >
              Software <br />
              <span className="text-gradient">Architect.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-400 font-light max-w-xl mb-10 leading-relaxed"
            >
              Hi, I'm <span className="text-white font-medium">Jayendra Patra</span>. 
              Currently a Computer Science student crafting robust, high-performance systems with a focus on 
              <span className="text-brand-cyan"> algorithmic efficiency</span> and scalable architectures.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                Exploration
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/J-PatrA", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/jayendrapatra", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:jayendrapatra041@gmail.com", label: "Email" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <div className="h-px w-12 bg-slate-800 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600">
                <Terminal size={14} />
                <span>Scroll to explore</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-slate-800 rounded-[3rem] pointer-events-none" />
              <div className="absolute -inset-8 border border-slate-900 rounded-[4rem] pointer-events-none" />
              
              {/* Main Image Container */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 p-2 bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-700/50 shadow-2xl"
              >
                <div className="overflow-hidden rounded-[2.2rem] bg-slate-950">
                  <img 
                    src="https://i.postimg.cc/5ymvFGy2/20251230-113423.jpg" 
                    alt="Jayendra Patra"
                    className="w-[340px] aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>

              {/* Floating Widgets - Now both at the top */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-6 glass-card p-4 flex items-center gap-3 shadow-2xl border-brand-cyan/20 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Focus</div>
                  <div className="text-sm font-semibold">Backend Eng.</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-14 -right-6 glass-card p-4 flex items-center gap-3 shadow-2xl border-brand-blue/20 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MousePointer2 size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Status</div>
                  <div className="text-sm font-semibold">Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
