import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaShieldAlt, FaCode } from 'react-icons/fa';

const Footer = () => {

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/labikuka', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://instagram.com/labinot.kuka', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/labinotkuka', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:labikuka99@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tools', href: '#tools' },
    { name: 'Projects', href: '#projects' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaShieldAlt className="text-cyber-green text-2xl" />
              <h3 className="text-2xl font-bold text-cyber-green glow-text">
                &lt;/&gt; CyberSec
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Certified Ethical Hacker dedicated to protecting digital assets and exploring cybersecurity through ethical hacking and penetration testing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-cyber-green hover:bg-cyber-green/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-cyber-green text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-300 hover:text-cyber-green transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaShieldAlt className="text-cyber-green" />
                <span className="text-gray-300 text-sm">CEH Certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCode className="text-cyber-green" />
                <span className="text-gray-300 text-sm">Ethical Hacker</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-cyber-green" />
                <span className="text-gray-300 text-sm">labikuka99@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-dark-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Labinot Kuka — CEH Portfolio
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <motion.span
                animate={{ color: ['#00ff41', '#00d4ff', '#8b5cf6', '#00ff41'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-semibold"
              >
                React & TailwindCSS
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-2 h-2 bg-cyber-green rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-20 w-1 h-1 bg-cyber-blue rounded-full opacity-60"
      />
    </footer>
  );
};

export default Footer;
