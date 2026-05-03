import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:jayendrapatra041@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  const contactInfos = [
    {
      icon: Mail,
      label: "Email",
      value: "jayendrapatra041@gmail.com",
      link: "mailto:jayendrapatra041@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7384808061",
      link: "tel:+917384808061"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Midnapore, West Bengal, India",
      link: "https://maps.google.com/?q=Midnapore"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-widest text-xs uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl font-display font-bold text-white">Let's Build Something Great</h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h4>
              <p className="text-slate-400 mb-8 max-w-md">
                I'm currently looking for new opportunities and collaborations. If you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfos.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  className="flex items-center gap-4 p-4 glass-card group hover:border-brand-cyan/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h5 className="text-white font-semibold mb-6">Follow Me</h5>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/J-PatrA" },
                  { icon: Linkedin, href: "https://linkedin.com/in/jayendrapatra" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-brand-cyan outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="your@email.com"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-brand-cyan outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Inquiry about..."
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-brand-cyan outline-none transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-brand-cyan outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
