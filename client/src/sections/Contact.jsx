import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';
import { sendMessage } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendMessage(formData);
      setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-slate-50 to-slate-100 dark:from-dark-soft dark:to-black relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Let's discuss your next project</h3>
            <p className="text-lg text-slate-600 dark:text-accent-gray mb-10 leading-relaxed font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="p-4 rounded-2xl glass border-slate-200/50 dark:border-white/10 group-hover:bg-accent-blue/10 transition-colors shadow-sm">
                  <Mail className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">Email</h4>
                  <a href="mailto:bhanukajanappriya@gmail.com" className="text-slate-500 hover:text-accent-blue dark:text-accent-gray dark:hover:text-white transition-colors font-medium">
                    bhanukajanappriya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-4 rounded-2xl glass border-slate-200/50 dark:border-white/10 group-hover:bg-accent-blue/10 transition-colors shadow-sm">
                  <MapPin className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">Location</h4>
                  <p className="text-slate-500 dark:text-accent-gray font-medium">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 mt-12">
              <a href="https://github.com/BhanukaJanappriya" target="_blank" rel="noopener noreferrer" className="p-4 glass border-slate-200/50 dark:border-white/10 rounded-full text-slate-600 hover:text-accent-blue dark:text-accent-gray dark:hover:text-accent-blue transition-all duration-300 hover:scale-110 shadow-sm" title="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/" target="_blank" rel="noopener noreferrer" className="p-4 glass border-slate-200/50 dark:border-white/10 rounded-full text-slate-600 hover:text-accent-blue dark:text-accent-gray dark:hover:text-accent-blue transition-all duration-300 hover:scale-110 shadow-sm" title="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/bhanuka_1.618/" target="_blank" rel="noopener noreferrer" className="p-4 glass border-slate-200/50 dark:border-white/10 rounded-full text-slate-600 hover:text-accent-blue dark:text-accent-gray dark:hover:text-accent-blue transition-all duration-300 hover:scale-110 shadow-sm" title="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.pinterest.com/bhanukajanappriya2001/" target="_blank" rel="noopener noreferrer" className="p-4 glass border-slate-200/50 dark:border-white/10 rounded-full text-slate-600 hover:text-accent-blue dark:text-accent-gray dark:hover:text-accent-blue transition-all duration-300 hover:scale-110 shadow-sm" title="Pinterest">
                <FaPinterest size={24} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-accent-gray mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass bg-white/40 dark:bg-dark-card/30 border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-accent-gray mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass bg-white/40 dark:bg-dark-card/30 border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-accent-gray mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass bg-white/40 dark:bg-dark-card/30 border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="Inquiry about..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-accent-gray mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glass bg-white/40 dark:bg-dark-card/30 border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center text-sm font-medium ${
                    status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
