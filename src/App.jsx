import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BootcampGallery from './components/BootcampGallery';
import LeadersGallery from './components/LeadersGallery';
import Projects from './components/Projects';
import Business from './components/Business';
import Certifications from './components/Certifications';
import Notes from './components/Notes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 200 : 100,
    damping: prefersReducedMotion ? 40 : 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen" style={{ background: '#0d1117' }}>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{ scaleX, background: '#3fb950' }}
        aria-hidden
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BootcampGallery />
        <LeadersGallery />
        <Projects />
        <Business />
        <Certifications />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
