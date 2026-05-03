import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const Projects = () => {
  const placeholders = [1, 2, 3];

  return (
    <section id="projects" className="py-24 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-brand-cyan font-semibold tracking-widest text-xs uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-display font-bold text-white">Featured Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A showcase of my recent work in backend systems, web development, and algorithm implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[16/10] bg-slate-950 p-6 flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-slate-800 font-display font-black text-8xl select-none opacity-20">
                  {idx < 10 ? `0${idx}` : idx}
                </div>
                <div className="relative z-10 mt-[-40px] px-6 py-2 rounded-full glass-nav border border-slate-700/50 text-slate-300 font-medium text-sm">
                  Projects coming soon
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">In Development</span>
                </div>
                
                <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  Future Project #{idx}
                </h4>
                
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Placeholder for upcoming projects involving scalable backend services, cloud architecture, or efficient algorithms. Stay tuned for updates!
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors">
                    <Github size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 glass-card p-12 text-center border-dashed"
        >
          <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-brand-cyan mx-auto mb-6">
            <Monitor size={32} />
          </div>
          <h4 className="text-2xl font-display font-bold text-white mb-4">Interested in collaboration?</h4>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            I'm always looking for opportunities to work on exciting backend projects or contribute to open-source systems.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Let's Discuss
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
