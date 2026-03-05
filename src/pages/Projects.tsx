import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'BackupManager System',
      description: 'Comprehensive backup management system developed during NHPC internship. Automates backup processes with scheduling, monitoring, and error handling capabilities.',
      tech: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Linux'],
      category: 'Enterprise Software',
      status: 'Production',
      highlights: ['80% reduction in manual backup time', '99.9% backup success rate', 'Currently used in production']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      category: 'Web Application',
      status: 'Completed',
      github: 'https://github.com/anujsoni/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      highlights: ['Responsive design', 'Secure payment processing', 'Admin dashboard']
    },
    {
      title: 'ML Stock Predictor',
      description: 'Machine learning model to predict stock prices using historical data and technical indicators with interactive visualization.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib', 'Streamlit'],
      category: 'Machine Learning',
      status: 'Completed',
      github: 'https://github.com/anujsoni/stock-predictor',
      demo: 'https://stock-predictor-ml.streamlit.app',
      highlights: ['LSTM neural networks', 'Real-time predictions', 'Interactive charts']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      category: 'Web Application',
      status: 'In Progress',
      github: 'https://github.com/anujsoni/task-manager',
      highlights: ['Real-time collaboration', 'Drag & drop interface', 'Team analytics']
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'Web Application',
      status: 'Completed',
      github: 'https://github.com/anujsoni/weather-dashboard',
      demo: 'https://weather-dashboard-anuj.netlify.app',
      highlights: ['7-day forecasts', 'Interactive maps', 'Weather alerts']
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and user presence indicators.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Express'],
      category: 'Web Application',
      status: 'Completed',
      github: 'https://github.com/anujsoni/chat-app',
      highlights: ['Real-time messaging', 'File sharing', 'Multiple chat rooms']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'text-terminal-green';
      case 'Completed': return 'text-cyan-bright';
      case 'In Progress': return 'text-accent-purple';
      default: return 'text-soft-blue/60';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent-purple">Projects</span> & Work
            </h1>
            <p className="text-xl text-soft-blue/80">
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
                className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 hover:border-cyan-bright/50 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-soft-blue mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-soft-blue/60">{project.category}</span>
                        <span className={`${getStatusColor(project.status)} font-medium`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-blue/60 hover:text-cyan-bright transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-blue/60 hover:text-cyan-bright transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-soft-blue/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-soft-blue mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-cyan-bright/20 text-cyan-bright px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-soft-blue mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-soft-blue/70">
                          • {highlight}
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
            className="text-center bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <Code className="text-cyan-bright mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-soft-blue mb-4">Want to see more?</h2>
            <p className="text-soft-blue/80 mb-6">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/anujsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-purple hover:bg-accent-purple/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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