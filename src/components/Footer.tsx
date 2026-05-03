import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-white">
              JP<span className="text-brand-cyan">.</span>
            </a>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Building robust systems and exploring the depths of computer science.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/J-PatrA", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/jayendrapatra", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jayendrapatra041@gmail.com", label: "Mail" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-brand-cyan transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="text-slate-500 text-xs font-medium uppercase tracking-widest flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <span>© {currentYear} Jayendra Patra</span>
              <div className="flex gap-6">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
