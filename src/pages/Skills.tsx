import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-cyan-bright',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-accent-purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-terminal-green',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'SQLite', level: 90 },
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'text-cyan-bright',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 80 },
      ]
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'text-accent-purple',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 80 },
        { name: 'AWS', level: 70 },
        { name: 'Postman', level: 85 },
      ]
    }
  ];

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
              <span className="text-accent-purple">Skills</span> & Technologies
            </h1>
            <p className="text-xl text-soft-blue/80">
              My technical expertise across different domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-${category.color.split('-')[1]}/20 p-2 rounded-lg`}>
                    <category.icon className={category.color} size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-soft-blue">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-soft-blue font-medium">{skill.name}</span>
                        <span className="text-soft-blue/60 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                          className={`h-2 rounded-full bg-gradient-to-r from-cyan-bright to-accent-purple`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-cyan-bright mb-6">Additional Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Communication</li>
                  <li>• Leadership</li>
                  <li>• Time Management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Methodologies</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Agile Development</li>
                  <li>• Test-Driven Development</li>
                  <li>• CI/CD</li>
                  <li>• Code Review</li>
                  <li>• Documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Currently Learning</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Kubernetes</li>
                  <li>• Microservices</li>
                  <li>• DevOps</li>
                  <li>• System Design</li>
                  <li>• Cloud Architecture</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;