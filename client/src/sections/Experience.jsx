import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

const Experience = () => {
  const { experience, loading } = useData();

  if (loading || experience.length === 0) return null;

  return (
    <section id="experience" className="section-padding bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Milestones</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:left-1/2">
          {experience.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-16 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-[9px] md:-translate-x-1/2 w-4 h-4 bg-dark-soft border-2 border-accent-blue rounded-full z-10 shadow-[0_0_15px_rgba(0,113,227,0.4)]" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass p-10 rounded-[2rem] hover:border-accent-blue/30 transition-all group">
                  <div className="flex flex-col mb-6">
                    <div className="flex items-center space-x-2 text-accent-blue text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                      <Calendar size={12} />
                      <span>{item.startDate} — {item.endDate}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black mb-1 group-hover:text-accent-blue transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center text-accent-gray text-xs font-bold gap-4 mt-2">
                      <div className="flex items-center">
                        <Briefcase size={12} className="mr-1.5 text-white/40" />
                        <span className="uppercase tracking-wider">{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1.5 text-white/40" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {item.description.map((desc, i) => (
                      <div key={i} className="flex items-start text-sm text-accent-gray leading-relaxed">
                        <Zap size={14} className="text-accent-blue mr-3 mt-1 flex-shrink-0 opacity-50" />
                        <p>{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
