import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-cyber-green/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors duration-300"
          >
            Labinot Kuka
          </motion.button>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Tools', 'Projects'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-green-500 transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
            
            {/* Social Links */}
            <div className="flex space-x-4 ml-6">
              <motion.a
                href="https://github.com/labikuka"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-green-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://instagram.com/labinot.kuka"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-green-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/labinotkuka"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-green-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-cyber-green text-2xl"
            >
              ☰
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
