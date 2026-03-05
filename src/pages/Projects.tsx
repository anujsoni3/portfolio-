import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Microscope, Mic, AlertTriangle, UtensilsCrossed } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MediScopeDiffusion',
      subtitle: '3D Diffusion-Based Medical Image Classifier',
      description: 'A guided 3D latent-diffusion architecture that integrates global and ROI-specific priors through Dense Guidance Maps and Feature Priors, enabling full-volume feature learning beyond traditional patch-based SOTA approaches.',
      tech: ['Python', 'PyTorch', 'Diffusion Models', '3D CT Scans', 'Dense Guidance Maps'],
      category: 'Research Project',
      icon: Microscope,
      status: 'Research',
      highlights: [
        '75% accuracy, 95% sensitivity, 77.55 F1-score, and 0.79 ROC-AUC on real 3D CT scans',
        'Performance comparable to larger ViT-based models with significantly lighter CNN backbone',
        'Explores guided diffusion networks for full-scan 3D CT classification'
      ]
    },
    {
      title: 'SmartAuction',
      subtitle: 'Voice-Based Real-Time Auction System',
      description: 'A voice-first real-time auction platform improving accessibility and bid processing. Designed a voice-controlled bidding workflow enabling users to place bids and track auctions.',
      tech: ['Flask', 'MongoDB', 'REST APIs', 'OmniDimension', 'Deepgram STT', 'Google Gemini 2.5 Flash', 'React', 'TypeScript'],
      category: 'Full Stack + AI',
      icon: Mic,
      status: 'Completed',
      github: '#',
      demo: '#',
      highlights: [
        'Reduced bidding interaction time by 40% with voice-controlled workflow',
        'Processed voice commands with <500ms latency using contextual conversational flows',
        'Integrated OmniDimension Voice Agent and Deepgram Speech-to-Text'
      ]
    },
    {
      title: 'FixMyRoad',
      subtitle: 'Pothole Detection & Reporting System',
      description: 'An AI-powered system for detecting, mapping, and reporting road defects. Refined an AI service detecting potholes from user images with severity-based prioritization.',
      tech: ['Flask', 'Python', 'MongoDB Atlas', 'Roboflow API', 'OpenCV', 'scikit-learn', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Bcrypt'],
      category: 'AI / Web Application',
      icon: AlertTriangle,
      status: 'Completed',
      github: '#',
      demo: '#',
      highlights: [
        'Attained 85–90% detection accuracy for pothole classification',
        'Lowered false reports by 30% through secure role-based access and admin verification',
        'Severity-based prioritization for faster road repairs'
      ]
    },
    {
      title: 'Restoran',
      subtitle: 'Restaurant Website',
      description: 'A responsive food ordering platform with optimized navigation and ordering flow. Implemented mobile-first UI to streamline menu browsing and checkout.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'EmailJS API'],
      category: 'Web Application',
      icon: UtensilsCrossed,
      status: 'Completed',
      github: '#',
      demo: '#',
      highlights: [
        'Improved page responsiveness by 80–90% with API-driven order handling',
        'Mobile-first UI for streamlined menu browsing and checkout',
        'Optimized client-side rendering for speed'
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Research': return 'text-accent-sub';
      case 'Completed': return 'text-terminal-success';
      case 'In Progress': return 'text-accent-secondary';
      default: return 'text-text-muted';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              <span className="text-accent-sub">Projects</span> & Work
            </h1>
            <p className="text-xl text-text-secondary">
              A showcase of my development projects and technical implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg-card border border-border-theme rounded-lg p-6 hover:shadow-card-hover transition-all duration-300"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-accent-primary/10 p-2 rounded-lg mt-0.5">
                        <project.icon className="text-accent-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-0.5">{project.title}</h3>
                        <p className="text-sm text-text-muted italic mb-1">{project.subtitle}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-text-muted">{project.category}</span>
                          <span className={`${getStatusColor(project.status)} font-medium`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent-primary transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent-primary transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-start gap-1.5">
                          <span className="text-accent-secondary mt-1 text-xs">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-bg-card border border-border-theme rounded-lg p-8"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <Code className="text-accent-primary mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-text-primary mb-4">Want to see more?</h2>
            <p className="text-text-secondary mb-6">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/anujsoni3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: 'var(--btn-primary-bg)' }}
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;