import { useState } from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { ExternalLink, Code, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { projects, loading } = useData();
  const [filter, setFilter] = useState('All');

  const allTechs = ['All', ...new Set((projects || []).flatMap(p => p.technologies || []))];
  const topTechs = allTechs.slice(0, 8);

  const filteredProjects = filter === 'All' 
    ? (projects || []) 
    : (projects || []).filter(p => p.technologies && p.technologies.includes(filter));

  if (loading) return null;

  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Portfolio Showcase</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {topTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === tech 
                    ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(0,113,227,0.3)]' 
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          <motion.div className="contents">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id || project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-[2.5rem] overflow-hidden flex flex-col group border-slate-200/50 dark:border-white/5 hover:border-accent-blue/20 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-blue/10 via-slate-100 to-slate-200 dark:from-accent-blue/20 dark:via-black dark:to-black p-12 flex items-center justify-center">
                  <Code size={80} className="text-accent-blue/10 group-hover:scale-110 group-hover:text-accent-blue/20 transition-all duration-700" />
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="absolute top-6 left-6 flex space-x-2">
                       {project.technologies.slice(0, 2).map(tech => (
                          <span key={tech} className="glass px-3 py-1 rounded-lg text-[9px] font-black text-white/50 uppercase tracking-tighter">
                             {tech}
                          </span>
                       ))}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-all transform hover:scale-110">
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-all transform hover:scale-110">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black mb-4 text-slate-800 dark:text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-accent-gray text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {project.features && project.features.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-600 dark:text-white/70">
                          <CheckCircle2 size={14} className="text-accent-blue mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-[9px] font-bold text-slate-500 dark:text-accent-gray bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



export default Projects;
