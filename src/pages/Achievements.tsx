import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code, Star, Target, Calendar } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Achievements: React.FC = () => {
  const codingProfiles = [
    {
      platform: 'LeetCode',
      handle: 'soni3anuj',
      stat: 'Contest Rating: 1833, Top 6.46%',
      detail: '400+ problems across DSA topics, with 700+ submissions.',
      link: 'https://leetcode.com/u/soni3anuj/',
      color: 'text-accent-secondary',
      glowColor: '194, 91, 42'
    },
    {
      platform: 'GeeksforGeeks',
      handle: 'soni3268k',
      stat: 'Institution Rank: 26, Score: 787',
      detail: 'Practiced 210+ structured DSA problems.',
      link: 'https://www.geeksforgeeks.org/user/soni3268k/',
      color: 'text-terminal-success',
      glowColor: '47, 111, 109'
    },
    {
      platform: 'CodeChef',
      handle: 'muster_door_50',
      stat: '3 Star, Max Rating: 1648',
      detail: 'Global Rank 12,525 and India Rank 11,070 in rated contests.',
      link: 'https://www.codechef.com/users/muster_door_50',
      color: 'text-accent-sub',
      glowColor: '140, 122, 230'
    },
  ];

  const stats = [
    { label: 'DSA Problems Solved', value: '400+', icon: Code },
    { label: 'LeetCode Rating', value: '1833', icon: Star },
    { label: 'CodeChef Stars', value: '3★', icon: Star },
    { label: 'GFG Institution Rank', value: '#26', icon: Trophy },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              <span className="text-accent-sub">Achievements</span> & Recognition
            </h1>
            <p className="text-xl text-text-secondary">Milestones in my journey as a developer and student</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <GlowCard
                key={stat.label}
                glowColor="124, 138, 255"
                className="bg-bg-card border border-border-theme rounded-lg p-5 text-center"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <stat.icon className="text-accent-primary mx-auto mb-3" size={28} />
                <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </GlowCard>
            ))}
          </div>

          {/* Coding Profiles */}
          <GlowCard
            glowColor="124, 138, 255"
            className="bg-bg-card border border-border-theme rounded-lg p-8"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-primary/10 p-3 rounded-lg">
                <Code className="text-accent-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Coding Profiles</h2>
              <span className="text-xs text-accent-secondary font-semibold ml-auto bg-accent-secondary/10 px-3 py-1 rounded-full">Ongoing</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {codingProfiles.map((profile) => (
                <GlowCard
                  key={profile.platform}
                  glowColor={profile.glowColor}
                  className="block bg-bg-section border border-border-theme rounded-lg p-5 hover:border-accent-primary/30 transition-all duration-200"
                >
                  <a href={profile.link} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className={`text-lg font-bold ${profile.color} mb-1`}>{profile.platform}</h3>
                    <p className="text-xs text-text-muted font-mono mb-2">@{profile.handle}</p>
                    <p className="text-sm font-semibold text-text-primary mb-1">{profile.stat}</p>
                    <p className="text-xs text-text-secondary">{profile.detail}</p>
                  </a>
                </GlowCard>
              ))}
            </div>
          </GlowCard>

          {/* Hackathons */}
          <GlowCard
            glowColor="194, 91, 42"
            className="bg-bg-card border border-border-theme rounded-lg p-8"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-secondary/10 p-3 rounded-lg">
                <Trophy className="text-accent-secondary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Hackathons</h2>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-secondary">2nd Runner-Up, Genathon 2.0</h3>
              <p className="text-sm text-text-muted">IIIT Nagpur National Hackathon</p>
              <p className="text-text-secondary text-sm leading-relaxed">Built <a href="https://github.com/anujsoni3/Call-Data-Analysis" target="_blank" rel="noopener noreferrer" className="text-accent-secondary hover:underline">Infographix</a>, a call data analytics platform using PostgreSQL and the MERN stack to derive actionable insights on employee performance and customer feedback.</p>
            </div>
          </GlowCard>

          {/* Challenges */}
          <GlowCard
            glowColor="47, 111, 109"
            className="bg-bg-card border border-border-theme rounded-lg p-8"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-soft/10 p-3 rounded-lg">
                <Target className="text-accent-soft" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Challenges & Certifications</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-accent-soft">
                  <a href="https://media.geeksforgeeks.org/courses/certificates/57f2d3ab2946bca3a3dd920a80f5f4cc.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">GFG 160 Days Challenge</a>
                </h3>
                <span className="text-xs text-text-muted flex items-center gap-1"><Calendar size={12} /> Mar 2025 – Sep 2025</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">Finished the official GFG 160-Day Challenge, earning certification and official merchandise while systematically covering 160+ curated DSA problems.</p>
            </div>
          </GlowCard>

          {/* Positions of Responsibility */}
          <GlowCard
            glowColor="140, 122, 230"
            className="bg-bg-card border border-border-theme rounded-lg p-8"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-sub/10 p-3 rounded-lg">
                <Award className="text-accent-sub" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Positions of Responsibility</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-accent-sub">Corporate Lead, E-Summit 25</h3>
                <span className="text-xs text-text-muted">Dec 2024 – Jan 2025</span>
              </div>
              <p className="text-text-secondary text-sm">Secured sponsorships and organized sessions with industry leaders. <a href="https://i.postimg.cc/2yM30fw3/certificate-Anuj-Soni-Corporate.png" target="_blank" rel="noopener noreferrer" className="text-accent-sub hover:underline">Certificate of Responsibility – E-Summit 25</a>.</p>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;