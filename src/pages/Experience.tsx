import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent-purple">Experience</span>
            </h1>
            <p className="text-xl text-soft-blue/80">
              My professional journey and internship experience
            </p>
          </div>

          {/* NHPC Internship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent-purple/20 p-3 rounded-lg">
                <Building className="text-accent-purple" size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cyan-bright mb-2">
                  Software Development Intern
                </h2>
                <h3 className="text-xl text-soft-blue mb-2">
                  NHPC Limited (National Hydroelectric Power Corporation)
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-soft-blue/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>Summer 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Faridabad, Haryana</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-soft-blue mb-3">Project: BackupManager</h4>
                <p className="text-soft-blue/80 mb-4">
                  Developed a comprehensive backup management system to automate and streamline data backup processes for critical infrastructure systems.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-soft-blue mb-3">Key Responsibilities</h4>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Designed and implemented automated backup scheduling system</li>
                  <li>• Developed user-friendly interface for backup configuration and monitoring</li>
                  <li>• Integrated error handling and notification systems for backup failures</li>
                  <li>• Optimized backup processes to reduce system downtime</li>
                  <li>• Created comprehensive documentation and user guides</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-soft-blue mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'Linux'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-bright/20 text-cyan-bright px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-soft-blue mb-3">Results & Impact</h4>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Reduced manual backup time by 80% through automation</li>
                  <li>• Improved backup reliability with 99.9% success rate</li>
                  <li>• Enhanced system monitoring capabilities</li>
                  <li>• Received positive feedback from senior engineers and management</li>
                  <li>• System is currently being used in production environment</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-cyan-bright mb-6">Other Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-2">Freelance Web Developer</h3>
                <p className="text-soft-blue/60 mb-2">2023 - Present</p>
                <p className="text-soft-blue/80">
                  Developed custom web applications for small businesses and startups, focusing on responsive design and user experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-2">Open Source Contributor</h3>
                <p className="text-soft-blue/60 mb-2">2022 - Present</p>
                <p className="text-soft-blue/80">
                  Active contributor to various open-source projects, particularly in React and Python ecosystems.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;