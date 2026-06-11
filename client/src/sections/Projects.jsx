import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const { projects, loading } = useData();
  const [filter, setFilter] = useState('All');

  // Extract unique categories/technologies for filtering
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies))];
  // To keep it clean, maybe just use top 5-6 techs + All
  const topTechs = allTechs.slice(0, 8);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  if (loading) return null;

  return (
    <section id="projects" className="section-padding bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {topTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tech 
                    ? 'bg-accent-blue text-white' 
                    : 'glass text-accent-gray hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-blue/10 to-black p-8 flex items-center justify-center">
                  <Code size={48} className="text-accent-blue/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent-gray text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <a href={project.githubLink} className="text-sm font-semibold flex items-center text-white hover:text-accent-blue transition-colors">
                      Learn More <ArrowRight className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Helper for the arrow icon which was missing from imports
const ArrowRight = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default Projects;
