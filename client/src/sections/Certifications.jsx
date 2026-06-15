import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown, ChevronUp, GraduationCap, ShieldAlert, Cpu, Terminal, Compass } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Certifications = () => {
  const { certifications, loading } = useData();
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Grouping/Category helper
  const getCategory = (cert) => {
    const title = cert.title.toLowerCase();
    if (title.includes('devops') || title.includes('docker') || title.includes('owasp') || title.includes('security')) {
      return 'security-devops';
    }
    if (title.includes('ai') || title.includes('prompt') || title.includes('generative')) {
      return 'ai-prompting';
    }
    return 'dev-skills';
  };

  // Helper to get certification icon
  const getCertIcon = (issuer, title) => {
    const titleLower = title.toLowerCase();
    const issuerLower = issuer.toLowerCase();

    if (issuerLower.includes('github')) {
      return <FaGithub className="text-white" size={24} />;
    }
    if (issuerLower.includes('linkedin')) {
      if (titleLower.includes('devops') || titleLower.includes('docker')) {
        return <Terminal className="text-blue-400" size={24} />;
      }
      if (titleLower.includes('security') || titleLower.includes('owasp')) {
        return <ShieldAlert className="text-red-400" size={24} />;
      }
      if (titleLower.includes('ai') || titleLower.includes('prompt') || titleLower.includes('generative')) {
        return <Cpu className="text-purple-400" size={24} />;
      }
      return <FaLinkedin className="text-[#0077b5]" size={24} />;
    }
    if (issuerLower.includes('information technology center') || issuerLower.includes('itc')) {
      return <GraduationCap className="text-emerald-400" size={24} />;
    }
    return <Award className="text-accent-blue" size={24} />;
  };

  // Filter and sort certifications
  const filteredCertifications = useMemo(() => {
    if (!certifications || certifications.length === 0) return [];
    
    // Sort by order or date
    const sorted = [...certifications].sort((a, b) => (a.order || 99) - (b.order || 99));
    
    if (filter === 'all') return sorted;
    return sorted.filter(cert => getCategory(cert) === filter);
  }, [certifications, filter]);

  // Paginated/Limited certifications
  const visibleCertifications = useMemo(() => {
    if (showAll) return filteredCertifications;
    return filteredCertifications.slice(0, 6);
  }, [filteredCertifications, showAll]);

  if (loading || !certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-padding bg-dark-soft relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mb-8" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {[
              { id: 'all', label: 'All Certificates' },
              { id: 'security-devops', label: 'DevOps & Security' },
              { id: 'ai-prompting', label: 'AI & Prompting' },
              { id: 'dev-skills', label: 'Development & Core' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id);
                  setShowAll(false); // Reset expansion on filter switch
                }}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-accent-blue border-accent-blue text-white shadow-lg shadow-accent-blue/25 scale-105'
                    : 'glass text-accent-gray border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={cert._id || cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="glass p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-accent-blue/30 group transition-all duration-300 relative overflow-hidden"
              >
                {/* Micro-gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header (Icon & Date) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-blue/30 group-hover:bg-white/10 transition-all duration-300">
                      {getCertIcon(cert.issuer, cert.title)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/5 text-accent-gray px-3 py-1.5 rounded-lg">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="font-bold text-lg md:text-xl text-white mb-2 leading-snug group-hover:text-accent-blue transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-accent-gray text-sm font-semibold mb-6 flex items-center">
                    <Compass size={14} className="mr-1.5 opacity-40" />
                    {cert.issuer}
                  </p>
                </div>

                <div>
                  {/* Skill Badges */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                      {cert.skills.map((skill, sIndex) => (
                        <span 
                          key={sIndex} 
                          className="text-[9px] font-bold tracking-tight px-2 py-1 bg-white/5 text-accent-gray group-hover:text-white rounded-md border border-white/5 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-accent-blue text-xs font-black uppercase tracking-wider hover:text-white transition-colors group/link"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 text-accent-gray font-semibold">
            No certifications match this filter.
          </div>
        )}

        {/* Expand / Collapse Button */}
        {filteredCertifications.length > 6 && (
          <motion.div 
            layout
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 hover:border-accent-blue hover:text-white font-bold text-sm transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span>{showAll ? 'Show Less' : `View All ${filteredCertifications.length} Certifications`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
