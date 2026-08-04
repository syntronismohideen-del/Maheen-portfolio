import SectionWrapper from './SectionWrapper';
import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    role: "Associate Software Engineer",
    company: "Syntronics Systems, Eruvadi",
    date: "JAN 2026 - Present",
    desc: "Create user-focused digital solutions across design, development, and animation. Skilled in UI/UX design with Adobe tools, responsive web development with React, WordPress customization, interactive animations, and quality assurance through testing and debugging."
  },
  {
    role: "Web Development Intern",
    company: "Corizo.in, Bangalore",
    date: "FEB 2025 - APR 2025",
    desc: "Developed interactive and responsive E-Commerce interfaces and CRUD applications using React, Node.js, Tailwind CSS, and MongoDB."
  },
  {
    role: "AI & ML and Web App Intern",
    company: "Neural Transformers.AI, Chennai",
    date: "AUG 2024 - SEP 2024",
    desc: "Automated Computer Numerical Control (CNC) machines using Python, generating, simulating, and visualizing toolpaths in Google Colab."
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-white tracking-widest uppercase mb-16 text-center"
        >
          WORK EXPERIENCE
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <div key={idx} className="relative w-full mb-12 md:mb-20 last:mb-0 clear-both">
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 md:-translate-x-1/2 -translate-x-[7px] top-8 shadow-[0_0_15px_rgba(0,242,254,0.5)]"
                ></motion.div>

                {/* Content Box */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:pr-12 md:mr-auto md:justify-end' : 'md:pl-12 md:ml-auto md:justify-start'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className={`glass-panel p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                       <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">{exp.date}</span>
                       <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                       <h4 className="text-gray-300 text-sm font-bold mb-4">{exp.company}</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
