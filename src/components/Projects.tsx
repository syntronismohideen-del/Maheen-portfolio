import SectionWrapper from './SectionWrapper';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: "Real-Time Code Collaboration Platform",
    context: "Academic Project - Nellai College of Engineering",
    tech: ["MERN Stack", "Socket.io", "Agora.io", "Monaco Editor"],
    desc: "Enables multiple users to write and edit code together in real-time. Socket.io ensures instant synchronization, while Agora.io integrates live video/voice chat for seamless communication."
  },
  {
    title: "E-Commerce Platform",
    context: "Personal Project",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    desc: "Interactive, responsive, and visually appealing e-commerce website allowing users to buy and sell products online."
  },
  {
    title: "CRUD Application",
    context: "Personal Project",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind", "MongoDB", "Node.js"],
    desc: "Responsive interface for persistent data storage allowing users to Create, Read, Update, and Delete data efficiently."
  },
  {
    title: "React Movie App",
    context: "Personal Project",
    tech: ["React", "Node.js", "Tailwind CSS"],
    desc: "A movie application built with React that allows users to search for movies and view details."
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
           <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-4">FEATURED WORK</h2>
           <h3 className="text-4xl md:text-5xl font-bold">Selected Projects</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="glass-panel p-8 flex flex-col h-full group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase block mb-6">{project.context}</span>
            
            <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
