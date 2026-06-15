import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Research from '../sections/Research';
import Experience from '../sections/Experience';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Certifications />
      <Contact />
    </motion.div>
  );
};

export default Home;
