import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-white cursor-default">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex flex-col gap-24 md:gap-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
