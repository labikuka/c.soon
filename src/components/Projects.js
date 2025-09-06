import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "CEH Lab Environment Setup",
      description: "Created a comprehensive lab environment using VMware and VirtualBox to practice ethical hacking techniques. Set up vulnerable machines including Metasploitable, DVWA, and custom targets for hands-on learning.",
      technologies: ["VMware", "VirtualBox", "Kali Linux", "Metasploitable"],
      status: "Completed",
      category: "Lab Setup",
      image: "🖥️"
    },
    {
      title: "Network Reconnaissance with Nmap",
      description: "Conducted extensive network scanning and enumeration exercises using Nmap. Learned various scanning techniques including SYN scans, OS detection, service enumeration, and vulnerability detection.",
      technologies: ["Nmap", "Bash Scripting", "Network Analysis"],
      status: "Completed",
      category: "Network Security",
      image: "🔍"
    },
    {
      title: "Web Application Penetration Testing",
      description: "Practiced web application security testing using Burp Suite and OWASP ZAP. Identified and exploited common vulnerabilities including SQL injection, XSS, and CSRF attacks in controlled environments.",
      technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "Manual Testing"],
      status: "In Progress",
      category: "Web Security",
      image: "🌐"
    },
    {
      title: "Password Cracking with Hydra",
      description: "Learned various password cracking techniques using Hydra and John the Ripper. Practiced dictionary attacks, brute force attacks, and rainbow table attacks on different protocols.",
      technologies: ["Hydra", "John the Ripper", "Hashcat", "Wordlists"],
      status: "Completed",
      category: "Password Security",
      image: "🔐"
    },
    {
      title: "Metasploit Framework Practice",
      description: "Hands-on experience with Metasploit Framework for exploit development and post-exploitation. Practiced using various modules, payloads, and maintaining persistent access to compromised systems.",
      technologies: ["Metasploit", "Payload Generation", "Post-Exploitation"],
      status: "In Progress",
      category: "Exploitation",
      image: "⚡"
    },
    {
      title: "CEH Study Documentation",
      description: "Comprehensive documentation of CEH study materials, including detailed notes on ethical hacking methodologies, attack vectors, and defense mechanisms. Created personal knowledge base for certification preparation.",
      technologies: ["Documentation", "Research", "Knowledge Management"],
      status: "Ongoing",
      category: "Study Materials",
      image: "📚"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/20';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Ongoing':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CEH-related projects, labs, and study materials showcasing my journey in cybersecurity and ethical hacking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-dark-bg border border-dark-border rounded-lg p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{project.image}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-3 font-semibold">
                {project.category}
              </p>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
