import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper id="home" className="pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-widest uppercase mb-6 text-primary"
          >
            Full Stack Developer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-white uppercase">
            <span className="text-3xl md:text-5xl block mb-2 normal-case text-gray-300">Hi, I'm</span>
            MOHIDEEN<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MAHEEN P.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-primary transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-12 text-gray-400">
            <a href="https://www.linkedin.com/in/mohideen-maheen-a00214280" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Maheen0312" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center mt-12 md:mt-0">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: [-15, 15, -15] }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.3 },
               y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
             }}
             className="w-full max-w-[350px] md:max-w-[450px] aspect-square md:aspect-[4/5] relative flex justify-center items-center"
           >
             <div 
               className="w-full h-full relative"
               style={{
                 maskImage: 'radial-gradient(ellipse at 50% 40%, black 50%, transparent 80%)',
                 WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 50%, transparent 80%)'
               }}
             >
               <img 
                 src="https://plain-apac-prod-public.komododecks.com/202608/04/EBxMxJQ8A5jTrjqkOShy/image.png" 
                 alt="Mohideen Maheen P" 
                 className="w-full h-full object-cover object-center scale-[1.1] md:scale-[1.2] translate-y-2 md:translate-y-4"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
             </div>
             
             {/* Glowing ambient background behind the floating portrait */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
           </motion.div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
