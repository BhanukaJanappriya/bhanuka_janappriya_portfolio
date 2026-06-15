import { motion } from 'framer-motion';
import { GraduationCap, Award, Lightbulb, UserCheck } from 'lucide-react';
import chessImg from '../assets/chess.jpeg';

const About = () => {
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
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Full-Stack Developer & Researcher</h3>
            <p className="text-lg text-slate-600 dark:text-accent-gray leading-relaxed mb-6">
              I am a results-driven Computer Science undergraduate at the <span className="text-slate-900 dark:text-white font-medium">University of Peradeniya</span>, with a proven track record in architecting scalable web applications and AI-driven systems. My work is defined by a unique intersection of <span className="text-slate-900 dark:text-white font-medium">Full-Stack Engineering</span>, <span className="text-slate-900 dark:text-white font-medium">Computer Vision</span>, and <span className="text-slate-900 dark:text-white font-medium">Explainable AI</span>.
            </p>
            <p className="text-lg text-slate-600 dark:text-accent-gray leading-relaxed mb-8">
              Currently, I am spearheading research on **PROSE (Probabilistic Symbolic Explainer)**, aiming to enhance the transparency of complex AI models. My experience as a professional Graphic Designer and Adobe Stock contributor ensures that I bring a high level of <span className="text-slate-900 dark:text-white font-medium">UI/UX polish</span> and visual storytelling to every technical project I deliver.
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
