import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Lightbulb, UserCheck } from 'lucide-react';
import chessImg from '../assets/chess.jpeg';

const Typewriter = ({ segments, speed = 8, startTrigger = true, onComplete }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startTrigger) return;

    let totalLength = 0;
    const flatSegments = segments.map((seg) => {
      const start = totalLength;
      totalLength += seg.text.length;
      return { ...seg, start, end: totalLength };
    });

    let currentLength = 0;
    const interval = setInterval(() => {
      currentLength += 1.5; // Slightly faster type speed for high-volume text
      const index = Math.floor(currentLength);
      
      if (index >= totalLength) {
        setIsComplete(true);
        clearInterval(interval);
        if (onComplete) onComplete();
      }

      const activeSegments = [];
      for (const seg of flatSegments) {
        if (index >= seg.end) {
          activeSegments.push(seg);
        } else if (index > seg.start) {
          activeSegments.push({
            ...seg,
            text: seg.text.slice(0, index - seg.start)
          });
          break;
        } else {
          break;
        }
      }
      setDisplayedText(activeSegments);
    }, speed);

    return () => clearInterval(interval);
  }, [segments, speed, startTrigger, onComplete]);

  if (!startTrigger) return null;

  return (
    <span className="relative">
      {displayedText.map((seg, i) => (
        <span key={i} className={seg.className}>
          {seg.text}
        </span>
      ))}
      {!isComplete && (
        <span className="inline-block w-1.5 h-4 ml-0.5 bg-accent-blue animate-pulse align-middle">|</span>
      )}
    </span>
  );
};

const About = () => {
  const [headingDone, setHeadingDone] = useState(false);
  const [p1Done, setP1Done] = useState(false);

  const headingSegments = [
    { text: "Full-Stack Developer & Researcher" }
  ];

  const paragraph1Segments = [
    { text: "I am a results-driven Computer Science undergraduate at the " },
    { text: "University of Peradeniya", className: "text-slate-900 dark:text-white font-medium" },
    { text: ", with a proven track record in architecting scalable web applications and AI-driven systems. My work is defined by a unique intersection of " },
    { text: "Full-Stack Engineering", className: "text-slate-900 dark:text-white font-medium" },
    { text: ", " },
    { text: "Computer Vision", className: "text-slate-900 dark:text-white font-medium" },
    { text: ", and " },
    { text: "Explainable AI", className: "text-slate-900 dark:text-white font-medium" },
    { text: "." }
  ];

  const paragraph2Segments = [
    { text: "Currently, I am spearheading research on " },
    { text: "PROSE (Probabilistic Symbolic Explainer)", className: "text-slate-900 dark:text-white font-medium" },
    { text: ", aiming to enhance the transparency of complex AI models. My experience as a professional Graphic Designer and Adobe Stock contributor ensures that I bring a high level of " },
    { text: "UI/UX polish", className: "text-slate-900 dark:text-white font-medium" },
    { text: " and visual storytelling to every technical project I deliver." }
  ];

  const infoCards = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Academic Excellence',
      content: 'BSc. (Hons) in Computer Science, University of Peradeniya.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Technical Focus',
      content: 'Advanced Full-Stack Systems, Image Processing, & Probabilistic AI.'
    },
    {
      icon: <Award size={24} />,
      title: 'Notable Recognition',
      content: 'GitHub Pull Shark (x2), Adobe Stock Contributor, Competitive Strategist.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Core Philosophy',
      content: 'Bridging the gap between high-performance AI and human-readable logic.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Professional Profile</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              <Typewriter 
                segments={headingSegments} 
                startTrigger={true} 
                onComplete={() => setHeadingDone(true)} 
              />
            </h3>
            <p className="text-lg text-slate-600 dark:text-accent-gray leading-relaxed mb-6 min-h-[120px] sm:min-h-[80px]">
              <Typewriter 
                segments={paragraph1Segments} 
                startTrigger={headingDone} 
                onComplete={() => setP1Done(true)} 
              />
            </p>
            <p className="text-lg text-slate-600 dark:text-accent-gray leading-relaxed mb-8 min-h-[120px] sm:min-h-[80px]">
              <Typewriter 
                segments={paragraph2Segments} 
                startTrigger={p1Done} 
              />
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoCards.map((card, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">{card.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-accent-gray mt-1 leading-relaxed">{card.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img 
                  src={chessImg} 
                  alt="Chess Strategy" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-blue block mb-1">Passions</span>
                    <h4 className="font-bold text-white text-lg">Competitive Chess Player</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
