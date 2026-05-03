import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="glass-card p-2 aspect-square max-w-sm mx-auto relative group overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                alt="Code Environment" 
                className="w-full h-full object-cover rounded-xl opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-brand-cyan font-display font-medium text-lg mb-1">Passionate Developer</div>
                <div className="text-white text-sm opacity-80">Focused on solving complex problems with elegant code.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-brand-cyan font-semibold tracking-widest text-xs uppercase mb-4">About Me</h2>
            <h3 className="text-4xl font-display font-bold mb-8 text-white">Elevating Backend Infrastructure</h3>
            
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              I am a dedicated Computer Science student and Software Engineer with a strong foundation in backend development. I enjoy tackling challenges that involve architectural design, database optimization, and high-performance computing.
            </p>

            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-l-brand-cyan">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">B.Sc. in Computer Science</h4>
                    <p className="text-slate-400">Midnapore College</p>
                    <div className="flex gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 2023 – 2027</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> Midnapore, WB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Midnapore, India" },
                  { label: "Level", value: "Undergraduate" },
                  { label: "Interest", value: "Backend & Systems" },
                  { label: "Freelance", value: "Not Offering" }
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl border border-slate-800 bg-slate-900/20">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                    <div className="text-sm text-white font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
