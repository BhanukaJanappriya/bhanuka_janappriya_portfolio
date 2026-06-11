import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6">
            Full Stack Developer & Researcher
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Bhanuka <span className="text-accent-blue">Janappriya</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-gray mb-10 leading-relaxed max-w-2xl mx-auto">
            Crafting premium digital experiences through clean code, intelligent systems, and elegant design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a href="#projects" className="btn-primary flex items-center group">
            View Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <button className="flex items-center text-sm font-medium hover:text-accent-blue transition-colors px-6 py-3">
            <Download className="mr-2" size={18} />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-gray/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-accent-gray/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
