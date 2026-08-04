import SectionWrapper from './SectionWrapper';
import { motion } from 'motion/react';

const EDUCATION = [
  {
    degree: "BE in Computer Science",
    inst: "Nellai College of Engineering, Tirunelveli",
    year: "2021 - 2025",
    grade: "CGPA: 7.6"
  },
  {
    degree: "HSC",
    inst: "St. John's Matric. Hr. Sec. School, Veeravanallur",
    year: "2021",
    grade: "90.71%"
  },
  {
    degree: "SSLC",
    inst: "St. John's Matric. Hr. Sec. School, Veeravanallur",
    year: "2019",
    grade: "87.8%"
  }
];

const CERTS = [
  "National Conference 2024 - Dr. G U POP College, Tuticorin",
  "Paper Presentation 2024 - Anna University, Tirunelveli",
  "Infosys Springboard - Big Data Analysis"
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-white tracking-widest uppercase mb-16 text-center"
        >
          EDUCATION & CERTIFICATIONS
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-white uppercase">
              EDUCATION
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-2.5 top-0 bottom-0 w-px bg-white/10"></div>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative w-full mb-10 last:mb-0 pl-10">
                  {/* Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="absolute left-[3px] w-4 h-4 rounded-full bg-background border-2 border-primary z-10 top-6 shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                  ></motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + (0.1 * idx) }}
                  >
                    <div className="glass-panel p-6 hover:border-primary/30 transition-colors group">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                        <span className="text-xs font-bold text-primary whitespace-nowrap">{edu.year}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{edu.inst}</p>
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                        {edu.grade}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sequence */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-white uppercase">
              CERTIFICATIONS
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-2.5 top-0 bottom-0 w-px bg-white/10"></div>

              {CERTS.map((cert, idx) => (
                <div key={idx} className="relative w-full mb-8 last:mb-0 pl-10">
                  {/* Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + (0.1 * idx) }}
                    className="absolute left-[3px] w-4 h-4 rounded-full bg-background border-2 border-secondary z-10 top-4 shadow-[0_0_10px_rgba(79,172,254,0.5)]"
                  ></motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 + (0.1 * idx) }}
                    className="h-full"
                  >
                    <div className="glass-panel p-5 hover:border-secondary/30 transition-colors flex items-center h-full">
                      <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
