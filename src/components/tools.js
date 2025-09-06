import React from 'react';
import { motion } from 'framer-motion';

const Tools = () => {

  const tools = [
    {
      name: "Nmap",
      description: "Network Mapper - The most popular network discovery and security auditing tool",
      usage: "nmap -sS -O target.com",
      details: "Nmap is used for network discovery and security auditing. It can discover hosts and services on a computer network by sending packets and analyzing responses.",
      icon: "🔍"
    },
    {
      name: "Metasploit",
      description: "Penetration testing framework with exploit development and vulnerability assessment",
      usage: "msfconsole -> use exploit/windows/smb/ms17_010_eternalblue",
      details: "Metasploit is a penetration testing framework that makes hacking simple. It's used by security professionals to test vulnerabilities in systems.",
      icon: "⚡"
    },
    {
      name: "Burp Suite",
      description: "Web application security testing platform for finding vulnerabilities",
      usage: "Configure proxy → Intercept requests → Analyze responses",
      details: "Burp Suite is an integrated platform for performing security testing of web applications. It's widely used for web application penetration testing.",
      icon: "🕷️"
    },
    {
      name: "Hydra",
      description: "Fast network logon cracker supporting many protocols",
      usage: "hydra -l admin -P passwords.txt ssh://192.168.1.1",
      details: "Hydra is a parallelized login cracker which supports numerous protocols to attack. It's very fast and flexible.",
      icon: "💧"
    },
    {
      name: "Nikto",
      description: "Web server scanner that performs comprehensive tests against web servers",
      usage: "nikto -h target.com",
      details: "Nikto is an Open Source web server scanner which performs comprehensive tests against web servers for multiple items.",
      icon: "🎯"
    },
    {
      name: "Wireshark",
      description: "Network protocol analyzer for troubleshooting and analysis",
      usage: "Capture packets → Apply filters → Analyze traffic",
      details: "Wireshark is a network protocol analyzer that lets you see what's happening on your network at a microscopic level.",
      icon: "📡"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Kali Linux </span>
            <span className="text-green-500">Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the powerful tools I use for ethical hacking, penetration testing, and security analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-dark-card border border-dark-border rounded-lg p-6 card-hover group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{tool.icon}</span>
                <h3 className="text-xl font-bold text-green-500 group-hover:text-white transition-colors">
                  {tool.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{tool.details}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Example Usage</h4>
                  <div className="bg-black/50 border border-green-500/30 rounded-lg p-3">
                    <code className="text-green-500 font-mono text-xs">
                      {tool.usage}
                    </code>
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

export default Tools;
