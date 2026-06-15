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
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
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
            <h3 className="text-2xl font-bold mb-6">Let's discuss your next project</h3>
            <p className="text-lg text-accent-gray mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="p-4 rounded-2xl glass group-hover:bg-accent-blue/10 transition-colors">
                  <Mail className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:bhanukajanappriya@gmail.com" className="text-accent-gray hover:text-white transition-colors">
                    bhanukajanappriya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-4 rounded-2xl glass group-hover:bg-accent-blue/10 transition-colors">
                  <MapPin className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-accent-gray">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 mt-12">
              <a href="https://github.com/BhanukaJanappriya" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:text-accent-blue transition-colors" title="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:text-accent-blue transition-colors" title="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/bhanuka_1.618/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:text-accent-blue transition-colors" title="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.pinterest.com/bhanukajanappriya2001/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:text-accent-blue transition-colors" title="Pinterest">
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
                  <label className="block text-sm font-medium text-accent-gray mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent-gray mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-accent-gray mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="Inquiry about..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-gray mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center space-x-2"
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
