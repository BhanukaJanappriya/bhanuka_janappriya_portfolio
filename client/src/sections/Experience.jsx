import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {experience.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 w-3.5 h-3.5 bg-accent-blue rounded-full z-10 shadow-[0_0_10px_rgba(0,113,227,0.5)]" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass p-8 rounded-2xl hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-center space-x-2 text-accent-blue text-xs font-bold uppercase tracking-widest mb-3">
                    <Calendar size={14} />
                    <span>{item.startDate} — {item.endDate}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="flex items-center text-accent-gray text-sm mb-4">
                    <Briefcase size={14} className="mr-1" />
                    <span className="font-medium mr-2">{item.company}</span>
                    {item.location && (
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-accent-gray leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent-blue/50 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
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
