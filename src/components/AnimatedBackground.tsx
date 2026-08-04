import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0216] pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Circuit Data Flow Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-[15%] left-0 w-[20vw] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[30%] left-0 w-[25vw] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
          className="absolute top-[45%] left-0 w-[30vw] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent"
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[60%] left-0 w-[20vw] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 3 }}
        />
        <motion.div 
          className="absolute top-[75%] left-0 w-[15vw] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute top-[90%] left-0 w-[35vw] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent"
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 4 }}
        />

        {/* Vertical Lines */}
        <motion.div 
          className="absolute left-[10%] top-0 h-[25vh] w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent"
          animate={{ y: ['-100vh', '100vh'] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute left-[25%] top-0 h-[20vh] w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{ y: ['-100vh', '100vh'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
          className="absolute left-[40%] top-0 h-[30vh] w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"
          animate={{ y: ['100vh', '-100vh'] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        <motion.div 
          className="absolute left-[65%] top-0 h-[30vh] w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent"
          animate={{ y: ['100vh', '-100vh'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
        />
        <motion.div 
          className="absolute left-[85%] top-0 h-[15vh] w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{ y: ['-100vh', '100vh'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
        />
      </div>
      
      {/* Mildly Animated Glowing Orbs (No mix-blend-mode for performance) */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-600/20 blur-[120px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-[10%] -right-[20%] w-[60vw] h-[80vw] rounded-full bg-fuchsia-500/10 blur-[150px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[60vw] rounded-full bg-violet-600/20 blur-[140px]"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-pink-500/10 blur-[130px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
