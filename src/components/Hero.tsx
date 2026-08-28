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
            <a href="https://mohideenmaheen.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Portfolio</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center mt-12 md:mt-0">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: [-10, 10, -10] }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.3 },
               y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
             }}
             className="w-full max-w-[350px] md:max-w-[450px] aspect-square md:aspect-[4/5] relative flex justify-center items-center transform-gpu will-change-transform"
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
             
             {/* Rotating Orbital Circles & Glowing Spheres around Portrait */}
             {/* Inner Orbit Track */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[96%] aspect-square rounded-full border border-dashed border-primary/40 pointer-events-none transform-gpu will-change-transform -z-10"
             >
               {/* Ball 1 - Top (Primary Purple with core pulse) */}
               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_16px_#a855f7] flex items-center justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
               </div>
               {/* Ball 2 - Bottom (Secondary Fuchsia) */}
               <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_#d946ef]" />
               {/* Ball 3 - Left (Cyan/Violet light) */}
               <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-300 shadow-[0_0_10px_#c084fc]" />
               {/* Ball 4 - Right (Pink glowing spark) */}
               <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
             </motion.div>

             {/* Outer Orbit Track */}
             <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] md:w-[114%] aspect-square rounded-full border border-white/10 pointer-events-none transform-gpu will-change-transform -z-10"
             >
               {/* Ball 1 - Top-Right */}
               <div className="absolute top-[14%] right-[14%] w-3.5 h-3.5 rounded-full bg-gradient-to-r from-secondary to-primary shadow-[0_0_14px_#d946ef]" />
               {/* Ball 2 - Bottom-Left */}
               <div className="absolute bottom-[14%] left-[14%] w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#a855f7]" />
               {/* Ball 3 - Top-Left Particle */}
               <div className="absolute top-[14%] left-[14%] w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_8px_#e879f9]" />
               {/* Ball 4 - Bottom-Right Particle */}
               <div className="absolute bottom-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
             </motion.div>

             {/* Distant Orbit Track with Micro Glowing Satellites */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[122%] md:w-[128%] aspect-square rounded-full border border-primary/10 pointer-events-none transform-gpu will-change-transform -z-10"
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/80 shadow-[0_0_8px_#a855f7]" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary/80 shadow-[0_0_8px_#d946ef]" />
             </motion.div>

             {/* Glowing ambient background behind the floating portrait with radial gradient */}
             <div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full -z-10 pointer-events-none opacity-50 transform-gpu"
               style={{
                 background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(10, 2, 22, 0) 70%)',
               }}
             />
           </motion.div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
