import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-black uppercase tracking-widest mb-6">
            BSc. (Hons) Computer Science Undergraduate
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Bhanuka <br />
            <span className="text-accent-blue font-black">Janappriya</span>
          </h1>
          <p className="text-lg md:text-xl text-accent-gray mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Full-Stack Developer & Researcher specializing in Image Processing and Probabilistic Symbolic Explainers (PROSE).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="btn-primary flex items-center group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#contact" className="btn-secondary font-bold">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Decorative background for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-transparent rounded-[3rem] rotate-6 scale-105 blur-sm" />
            <div className="absolute inset-0 border border-white/5 rounded-[3rem] -rotate-3" />
            
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass p-3 border-white/10 flex items-center justify-center">
              {!imgError ? (
                <img 
                  src="/myimg2.png" 
                  alt="Bhanuka Janappriya" 
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover rounded-[2.2rem] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full rounded-[2.2rem] bg-gradient-to-br from-accent-blue/20 via-dark-card to-black flex flex-col items-center justify-center text-center p-6 border border-white/5">
                  <div className="w-24 h-24 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mb-6 text-accent-blue shadow-[0_0_20px_rgba(0,113,227,0.2)]">
                    <span className="text-3xl font-black tracking-wider">BJ</span>
                  </div>
                  <h4 className="text-xl font-black text-white mb-1">Bhanuka Janappriya</h4>
                  <p className="text-sm text-accent-gray max-w-[240px]">Full-Stack Developer & Researcher</p>
                </div>
              )}
            </div>

            {/* Floating badges or elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/10 hidden md:block shadow-2xl"
            >
               <div className="text-[10px] font-black uppercase tracking-widest text-accent-blue mb-1">Status</div>
               <div className="text-xs font-bold">Open for Internships</div>
            </motion.div>
          </div>
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
