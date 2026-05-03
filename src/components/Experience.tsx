import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Internship Company", // User didn't specify company name, using placeholder
      duration: "3 Months (Approx)",
      description: [
        "Built websites using modern web technologies including React and Node.js.",
        "Worked on developing and optimizing backend APIs for seamless data flow.",
        "Identified and fixed critical bugs, improving overall application stability.",
        "Collaborated with senior developers to improve application performance metrics by 20%."
      ],
      tags: ["React", "Node.js", "Express", "API Development"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-widest text-xs uppercase mb-4">Journey</h2>
          <h3 className="text-4xl font-display font-bold text-white">Professional Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-slate-800 last:border-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-cyan border-4 border-slate-950" />
              
              <div className="glass-card p-8 group hover:border-brand-cyan/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Briefcase size={20} className="text-brand-cyan" />
                      <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                    </div>
                    <p className="text-brand-blue font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                      <p className="text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
