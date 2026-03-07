import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Brain, Wrench, Cloud, BookOpen,
  FileCode, Server, Monitor
} from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FileCode,
      color: 'accent-primary',
      glowColor: '124, 138, 255',
      skills: ['JavaScript', 'Python', 'C++', 'C', 'Java', 'TypeScript']
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'accent-sub',
      glowColor: '140, 122, 230',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Framer Motion']
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      color: 'accent-soft',
      glowColor: '47, 111, 109',
      skills: ['Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs', 'JWT Authentication', 'GraphQL']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'accent-secondary',
      glowColor: '194, 91, 42',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MongoDB Atlas', 'SQLAlchemy', 'Redis', 'SQLite']
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      color: 'accent-primary',
      glowColor: '124, 138, 255',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Matplotlib']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'accent-soft',
      glowColor: '47, 111, 109',
      skills: ['AWS (EC2, S3, IAM, Lambda)', 'API Gateway', 'Docker', 'Linux', 'CI/CD']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'accent-sub',
      glowColor: '140, 122, 230',
      skills: ['Git', 'GitHub', 'Postman', 'ThunderClient', 'VS Code', 'Power BI', 'Tableau']
    },
    {
      title: 'Core CS Concepts',
      icon: BookOpen,
      color: 'accent-secondary',
      glowColor: '194, 91, 42',
      skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'Software Engineering', 'SDLC']
    },
  ];

  const iconColorMap: Record<string, string> = {
    'accent-primary': 'text-accent-primary',
    'accent-sub': 'text-accent-sub',
    'accent-soft': 'text-accent-soft',
    'accent-secondary': 'text-accent-secondary',
  };

  const bgMap: Record<string, string> = {
    'accent-primary': 'bg-accent-primary/10',
    'accent-sub': 'bg-accent-sub/10',
    'accent-soft': 'bg-accent-soft/10',
    'accent-secondary': 'bg-accent-secondary/10',
  };

  const colorMap: Record<string, string> = {
    'accent-primary': 'text-accent-primary bg-accent-primary/10 border-accent-primary/20',
    'accent-sub': 'text-accent-sub bg-accent-sub/10 border-accent-sub/20',
    'accent-soft': 'text-accent-soft bg-accent-soft/10 border-accent-soft/20',
    'accent-secondary': 'text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20',
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
              <span className="text-accent-sub">Skills</span> & Technologies
            </h1>
            <p className="text-xl text-text-secondary">
              My technical expertise across different domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.08 }}
              >
                <GlowCard
                  glowColor={category.glowColor}
                  className="bg-bg-card border border-border-theme rounded-xl p-6 transition-all duration-300"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`${bgMap[category.color]} p-2.5 rounded-lg`}>
                      <category.icon className={iconColorMap[category.color]} size={22} />
                    </div>
                    <h2 className="text-lg font-bold text-text-primary">{category.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.03 }}
                        className={`${colorMap[category.color]} border px-3 py-1.5 rounded-lg text-sm font-medium cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlowCard
              glowColor="124, 138, 255"
              className="bg-bg-card border border-border-theme rounded-xl p-8"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-primary/10 p-2.5 rounded-lg">
                  <BookOpen className="text-accent-primary" size={22} />
                </div>
                <h2 className="text-xl font-bold text-text-primary">Relevant Coursework</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms', 'Database Management Systems',
                  'Object-Oriented Programming', 'Operating Systems',
                  'Computer Networks', 'Software Engineering',
                  'Data Analytics', 'Software Development Life Cycle'
                ].map((course) => (
                  <span key={course} className="bg-bg-section border border-border-theme text-text-secondary px-3 py-1.5 rounded-lg text-sm font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlowCard
              glowColor="47, 111, 109"
              className="bg-bg-card border border-border-theme rounded-xl p-8"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-soft/10 p-2.5 rounded-lg">
                  <Cloud className="text-accent-soft" size={22} />
                </div>
                <h2 className="text-xl font-bold text-text-primary">Currently Learning</h2>
                <span className="text-xs text-accent-soft font-semibold ml-auto bg-accent-soft/10 px-3 py-1 rounded-full">In Progress</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Microservices', 'DevOps Pipelines', 'System Design', 'Cloud Architecture', 'AWS Advanced Services'].map((skill) => (
                  <span key={skill} className="bg-accent-soft/10 border border-accent-soft/20 text-accent-soft px-3 py-1.5 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;