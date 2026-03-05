import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code, Star, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Hackathons',
      icon: Trophy,
      color: 'text-terminal-green',
      items: [
        {
          title: 'Smart India Hackathon 2023',
          description: 'Finalist in the Software Edition',
          details: 'Developed an innovative solution for digital governance',
          year: '2023'
        },
        {
          title: 'HackNITR 3.0',
          description: '2nd Runner Up',
          details: 'Built a machine learning-powered healthcare application',
          year: '2023'
        },
        {
          title: 'CodeFest IIIT Nagpur',
          description: 'Winner - Web Development Track',
          details: 'Created a full-stack e-commerce platform in 24 hours',
          year: '2022'
        }
      ]
    },
    {
      category: 'Coding Platforms',
      icon: Code,
      color: 'text-cyan-bright',
      items: [
        {
          title: 'LeetCode',
          description: '500+ Problems Solved',
          details: 'Consistent problem-solving with focus on algorithms and data structures',
          rating: '1650+'
        },
        {
          title: 'CodeChef',
          description: '3-Star Coder',
          details: 'Regular participation in monthly contests',
          rating: '1680'
        },
        {
          title: 'Codeforces',
          description: 'Specialist Rating',
          details: 'Active participant in competitive programming contests',
          rating: '1420'
        }
      ]
    },
    {
      category: 'Leadership & Recognition',
      icon: Users,
      color: 'text-accent-purple',
      items: [
        {
          title: 'Technical Lead',
          description: 'IIIT Nagpur Coding Club',
          details: 'Led a team of 15+ members, organized workshops and coding events',
          year: '2023-2024'
        },
        {
          title: 'Best Intern Award',
          description: 'NHPC Limited',
          details: 'Recognized for exceptional performance during summer internship',
          year: '2024'
        },
        {
          title: 'Dean\'s List',
          description: 'Academic Excellence',
          details: 'Maintained CGPA above 8.5 for consecutive semesters',
          year: '2022-2024'
        }
      ]
    }
  ];

  const stats = [
    { label: 'Hackathons Participated', value: '12+', icon: Trophy },
    { label: 'Problems Solved', value: '800+', icon: Code },
    { label: 'GitHub Repositories', value: '25+', icon: Star },
    { label: 'Team Projects Led', value: '8+', icon: Users },
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
              <span className="text-accent-purple">Achievements</span> & Recognition
            </h1>
            <p className="text-xl text-soft-blue/80">
              Milestones in my journey as a developer and student
            </p>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 text-center"
              >
                <stat.icon className="text-cyan-bright mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-soft-blue mb-1">{stat.value}</div>
                <div className="text-sm text-soft-blue/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Achievements Sections */}
          <div className="space-y-12">
            {achievements.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + sectionIndex * 0.1 }}
                className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`bg-${section.color.split('-')[1]}/20 p-3 rounded-lg`}>
                    <section.icon className={section.color} size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-soft-blue">{section.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + sectionIndex * 0.1 + itemIndex * 0.05 }}
                      className="bg-black/20 border border-cyan-bright/10 rounded-lg p-6 hover:border-cyan-bright/30 transition-all duration-200"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-soft-blue">{item.title}</h3>
                          {(item.year || item.rating) && (
                            <span className="text-sm text-cyan-bright font-medium">
                              {item.year || item.rating}
                            </span>
                          )}
                        </div>
                        <p className="text-accent-purple font-medium">{item.description}</p>
                        <p className="text-soft-blue/70 text-sm leading-relaxed">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Goals Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-purple/20 p-3 rounded-lg">
                <Target className="text-accent-purple" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-soft-blue">Current Goals</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Short-term Goals</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Achieve Expert rating on Codeforces</li>
                  <li>• Complete AWS Cloud Practitioner certification</li>
                  <li>• Contribute to 5+ open source projects</li>
                  <li>• Win a major hackathon</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Long-term Goals</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Secure a full-time role at a top tech company</li>
                  <li>• Build and launch a successful SaaS product</li>
                  <li>• Mentor junior developers and students</li>
                  <li>• Speak at tech conferences and events</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;