import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { certifications, loading } = useData();

  if (loading || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-padding bg-dark-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert._id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-accent-blue/10 text-accent-blue">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{cert.title}</h4>
                <p className="text-accent-gray text-sm">{cert.issuer} • {cert.date}</p>
              </div>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent-blue text-sm font-medium hover:underline"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
