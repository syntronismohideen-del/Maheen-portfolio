import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { type FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleMailTo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Project Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:maheenmohideen@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper id="contact" className="pb-0">
      <div className="grid lg:grid-cols-2 gap-16 mb-24">
        
        <div>
          <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-4">CONTACT ME</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's create something together.</h3>
          <p className="text-gray-400 mb-12 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:maheenmohideen@gmail.com" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">maheenmohideen@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+918870573574" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <Phone className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">+91 8870573574</p>
              </div>
            </a>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <MapPin className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">Tirunelveli, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-10">
          <form onSubmit={handleMailTo} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
      
      {/* Footer embedded in contact section for layout flow */}
      <footer className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-gray-500 text-sm">
           &copy; {new Date().getFullYear()} Mohideen Maheen P. All rights reserved.
         </p>
         <button 
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
           aria-label="Scroll to top"
         >
           <ArrowUp className="w-5 h-5" />
         </button>
      </footer>
    </SectionWrapper>
  );
}
