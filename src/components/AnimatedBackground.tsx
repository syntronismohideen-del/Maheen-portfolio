import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0216] pointer-events-none transform-gpu contain-strict">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>

      {/* GPU Optimized Ambient Glowing Orbs with Radial Gradients (No heavy CSS blur filters) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-30 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(10, 2, 22, 0) 70%)',
        }}
      />
      
      <div 
        className="absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] rounded-full opacity-25 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, rgba(10, 2, 22, 0) 70%)',
        }}
      />
      
      <div 
        className="absolute -bottom-[15%] left-[15%] w-[65vw] h-[65vw] rounded-full opacity-30 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(10, 2, 22, 0) 70%)',
        }}
      />

      {/* Subtle Data Flow Light Streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute top-[20%] left-0 w-[20vw] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent will-change-transform"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[50%] left-0 w-[25vw] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent will-change-transform"
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute top-[80%] left-0 w-[20vw] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent will-change-transform"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
          className="absolute left-[20%] top-0 h-[25vh] w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent will-change-transform"
          animate={{ y: ['-100vh', '100vh'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
          className="absolute left-[70%] top-0 h-[25vh] w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent will-change-transform"
          animate={{ y: ['100vh', '-100vh'] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 3 }}
        />
      </div>
    </div>
  );
}

