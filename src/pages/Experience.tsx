import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award } from 'lucide-react';
import GlowCard from '../components/GlowCard';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              <span className="text-accent-sub">Experience</span>
            </h1>
            <p className="text-xl text-text-secondary">
              My professional journey and internship experience
            </p>
          </div>

          {/* NHPC Internship */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <GlowCard
              glowColor="124, 138, 255"
              className="bg-bg-card border border-border-theme rounded-lg p-8 transition-colors duration-300"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-primary/10 p-3 rounded-lg">
                  <Building className="text-accent-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-accent-primary mb-1">Software Development Intern</h2>
                  <h3 className="text-xl text-text-primary mb-2">
                    NHPC Limited <span className="text-text-muted text-sm mx-2">|</span> <a href="https://drive.google.com/file/d/12T7DwSBWfFtD0IXNPfM5KQ78vl6NRR_l/view" target="_blank" rel="noopener noreferrer" className="text-accent-secondary text-sm hover:underline">Certificate</a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-2">
                    <div className="flex items-center gap-1"><Calendar size={16} /><span>May 2025 – Jun 2025</span></div>
                    <div className="flex items-center gap-1"><MapPin size={16} /><span>Faridabad, India</span></div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={16} className="text-accent-secondary" />
                    <span className="text-accent-secondary font-semibold">Best Intern Award</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Key Contributions</h4>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1.5 text-xs">▸</span>
                      <span>Deployed <strong><a href="https://github.com/anujsoni3/BackupManager" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline hover:text-accent-primary transition-colors">BackupManager</a></strong>, reducing backup processing time by <strong className="text-accent-secondary">50%</strong> by building a Python-based GUI system for automated full and incremental backups.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1.5 text-xs">▸</span>
                      <span>Maintained <strong className="text-text-primary">10–15 department-level configurations</strong> with structured logging to enable faster debugging and traceability.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1.5 text-xs">▸</span>
                      <span>Productized <strong><a href="https://github.com/anujsoni3/Python-script-scheduler" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline hover:text-accent-primary transition-colors">Script Scheduler</a></strong>, a GUI-driven Python scheduler using APScheduler and SQLAlchemy to manage up to <strong className="text-accent-secondary">200 tasks</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1.5 text-xs">▸</span>
                      <span>Enabled real-time execution monitoring with an interactive UI, reducing manual supervision effort by approximately <strong className="text-accent-secondary">25%</strong>.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Tkinter GUI', 'APScheduler', 'SQLAlchemy', 'Structured Logging'].map((tech) => (
                      <span key={tech} className="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Corporate Lead */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlowCard
              glowColor="47, 111, 109"
              className="bg-bg-card border border-border-theme rounded-lg p-8 transition-colors duration-300"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent-soft/10 p-3 rounded-lg">
                  <Award className="text-accent-soft" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-accent-soft mb-1">Corporate Lead</h2>
                  <h3 className="text-xl text-text-primary mb-2">E-Summit 25</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1"><Calendar size={16} /><span>Dec 2024 – Jan 2025</span></div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-soft mt-1.5 text-xs">▸</span>
                  <span>Secured sponsorships and organized sessions with industry leaders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-soft mt-1.5 text-xs">▸</span>
                  <span>Received <strong className="text-text-primary">Certificate of Responsibility</strong> – E-Summit 25.</span>
                </li>
              </ul>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;