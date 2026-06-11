import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Beaker, Target, Cpu, BookOpen } from 'lucide-react';

const Research = () => {
  const { research, loading } = useData();

  if (loading || research.length === 0) return null;

  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Research Work</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {research.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <span className="text-accent-blue font-bold text-sm uppercase tracking-widest mb-2 block">
                      {item.status || 'Ongoing Research'}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold">{item.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map(tech => (
                      <span key={tech} className="glass px-4 py-2 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-accent-gray leading-relaxed mb-10 max-w-4xl">
                  {item.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                        <Target size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Objectives</h4>
                        <ul className="space-y-2">
                          {item.objectives.map((obj, i) => (
                            <li key={i} className="text-sm text-accent-gray flex items-center">
                              <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.focusAreas.map((area, i) => (
                            <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-accent-gray">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {item.supervisor && (
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                          <Beaker size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Supervisor</h4>
                          <p className="text-sm text-accent-gray">{item.supervisor}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
