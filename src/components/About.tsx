import SectionWrapper from './SectionWrapper';
import { Code2, Layout, Server, Database, Cpu } from 'lucide-react';

const SKILLS = [
  { category: "Programming Languages", icon: Code2, items: ["JavaScript", "HTML", "CSS"] },
  { category: "Frontend Technologies", icon: Layout, items: ["React.js", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend Technologies", icon: Server, items: ["Node.js", "Express.js"] },
  { category: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { category: "Development & AI Tools", icon: Cpu, items: ["Git", "GitHub", "VS Code", "ChatGPT", "GitHub Copilot", "Gemini", "Claude"] }
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: About Text */}
        <div>
          <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-4">ABOUT ME</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Passionate Web Developer
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began with a fascination for how websites work, and it has since evolved into a full-fledged career. I enjoy tackling challenges and continuously learning new technologies to enhance my skills.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I specialize in building user-friendly interfaces and ensuring seamless user experiences. My goal is to create web applications that are not only functional but also visually appealing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:opacity-90 transition-opacity text-center">
              Get in Touch
            </a>
            <a href="/public/Maheen Resume.pdf" download="Maheen Resume.pdf" className="px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div key={skillGroup.category} className={`glass-panel p-6 flex flex-col ${idx === SKILLS.length - 1 ? 'sm:col-span-2' : ''}`}>
              <div className="flex items-center gap-3 mb-4 text-white">
                <skillGroup.icon className="w-5 h-5 text-primary shrink-0" />
                <h4 className="font-bold text-sm uppercase tracking-wider">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:bg-primary/20 hover:text-white hover:border-primary/50 cursor-default transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </SectionWrapper>
  );
}
