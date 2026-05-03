import { motion } from 'motion/react';
import { Code2, Globe, Wrench, Binary, Layers, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Binary,
      color: "from-blue-500 to-indigo-500",
      skills: ["C", "Java", "Python"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: ["Git", "VS Code"]
    },
    {
      title: "Core Strengths",
      icon: Terminal,
      color: "from-emerald-500 to-teal-500",
      skills: ["Data Structures", "Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-widest text-xs uppercase mb-4">Competencies</h2>
          <h3 className="text-4xl font-display font-bold text-white">Technical Skillset</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-[1px] mb-6`}>
                <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-white">
                  <category.icon size={28} />
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-6 font-display">{category.title}</h4>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-300">{skill}</span>
                    </div>
                    {/* Progress indicator as requested */}
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
