import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark border-t border-white/10 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tight">
              Bhanuka<span className="text-accent-blue">.</span>
            </a>
            <p className="text-accent-gray mt-2 max-w-xs">
              Building modern web experiences with a focus on design and performance.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/BhanukaJanappriya" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" title="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" title="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/bhanuka_1.618/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" title="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.pinterest.com/bhanukajanappriya2001/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" title="Pinterest">
              <FaPinterest size={24} />
            </a>
            <a href="mailto:bhanukajanappriya2001@gmail.com" className="hover:text-accent-blue transition-colors" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-sm text-accent-gray mb-4 md:mb-0">
            © {new Date().getFullYear()} Bhanuka Janappriya. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm font-medium hover:text-accent-blue transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
