import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center max-w-7xl mx-auto w-full transform-gpu ${className}`}
    >
      {children}
    </motion.section>
  );
}

