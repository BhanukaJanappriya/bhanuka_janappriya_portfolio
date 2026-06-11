import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const infoCards = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      content: 'BSc. (Honours) in Computer Science - University of Peradeniya (Undergraduate)'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Interests',
      content: 'Image Processing, AI/ML, Probabilistic Symbolic AI, Web Development'
    },
    {
      icon: <Award size={24} />,
      title: 'Achievements',
      content: 'Final Year Researcher, Adobe Stock Contributor, Competitive Chess Player'
    },
    {
      icon: <Users size={24} />,
      title: 'Leadership',
      content: 'Active participant in technical societies and clubs at University of Peradeniya'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-accent-gray leading-relaxed mb-6">
              I am a passionate Computer Science undergraduate at the <span className="text-white font-medium">University of Peradeniya</span>, driven by the challenge of solving complex problems through technology. My expertise spans across full-stack development, but I have a deep-seated interest in <span className="text-white font-medium">Image Processing</span> and <span className="text-white font-medium">AI Explainability</span>.
            </p>
            <p className="text-lg text-accent-gray leading-relaxed mb-8">
              Currently, I'm working on my final year research project, **PROSE**, which explores probabilistic symbolic explanations in AI. Beyond code, I'm a creative designer and an avid chess player, which helps me maintain a balance between logic and creativity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoCards.map((card, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{card.title}</h4>
                    <p className="text-sm text-accent-gray">{card.content}</p>
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
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent-blue/20 to-black flex items-center justify-center">
                <span className="text-6xl font-bold text-accent-blue/30 italic">BJ</span>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-blue/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
