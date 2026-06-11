import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';

const Skills = () => {
  const { skills, loading } = useData();

  const categories = [
    'Programming Languages',
    'Frontend',
    'Backend',
    'AI/ML',
    'Databases',
    'Tools',
    'UI/UX'
  ];

  const getIcon = (iconName) => {
    const IconComponent = SiIcons[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  if (loading) return null;

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-xl font-bold mb-6 text-accent-blue/80 uppercase tracking-widest text-sm">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill._id || index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 group transition-all duration-300"
                    >
                      <div className="text-accent-gray group-hover:text-accent-blue transition-colors duration-300">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
