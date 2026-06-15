import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Target, Cpu, BookOpen, Layers } from 'lucide-react';

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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Academic Research</h2>
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
              className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group border-slate-200/50 dark:border-white/5 hover:border-accent-blue/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent-blue/10 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-accent-blue/10 text-accent-blue px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-accent-blue/20">
                        {item.status || 'Active Research'}
                      </span>
                      <div className="flex items-center text-slate-500 dark:text-accent-gray text-xs">
                        <BookOpen size={14} className="mr-1.5" />
                        Final Year Thesis
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight text-slate-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-accent-gray leading-relaxed font-medium">
                      {item.summary}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-[300px]">
                    {(item.technologies || []).map(tech => (
                      <span key={tech} className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-600 dark:text-white/70 whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-white/5">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-800 dark:text-white font-bold mb-2">
                       <Target size={18} className="text-accent-blue" />
                       <span className="text-sm tracking-wide uppercase">Core Objectives</span>
                    </div>
                    <ul className="space-y-3">
                      {(item.objectives || []).map((obj, i) => (
                        <li key={i} className="text-sm text-slate-500 dark:text-accent-gray flex items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-accent-blue/40 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-800 dark:text-white font-bold mb-2">
                       <Layers size={18} className="text-accent-blue" />
                       <span className="text-sm tracking-wide uppercase">Domain Focus</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(item.focusAreas || []).map((area, i) => (
                        <div key={i} className="text-xs font-semibold px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-slate-600 dark:text-accent-gray border border-slate-200 dark:border-white/5">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 lg:pl-6">
                    <div className="flex items-center space-x-3 text-slate-800 dark:text-white font-bold mb-2">
                       <Cpu size={18} className="text-accent-blue" />
                       <span className="text-sm tracking-wide uppercase">Methodology</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-accent-gray leading-relaxed">
                      Leveraging a hybrid approach of symbolic reasoning and probabilistic graphical models to deconstruct black-box AI outputs into actionable, human-readable insights.
                    </p>
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
