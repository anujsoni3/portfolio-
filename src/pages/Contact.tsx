import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Github, Linkedin,
  Send, Download, CheckCircle, AlertCircle, Loader
} from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => { setSubmitStatus('idle'); setStatusMessage(''); }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'soni3anuj@gmail.com', href: 'mailto:soni3anuj@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6307351024', href: 'tel:+916307351024' },
    { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra, India', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/anujsoni3', glowColor: '60, 61, 55', color: 'text-text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anuj-soni-2387b5291/', glowColor: '124, 138, 255', color: 'text-accent-sub' },
    { icon: Mail, label: 'Email', href: 'mailto:soni3anuj@gmail.com', glowColor: '194, 91, 42', color: 'text-accent-secondary' },
  ];

  const inputClass =
    'w-full bg-bg-main border border-border-theme rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50 text-sm sm:text-base font-sans';

  return (
    <div className="min-h-screen py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              <span className="text-accent-sub">Get In</span> Touch
            </h1>
            <p className="text-xl text-text-secondary">
              Let's discuss opportunities, collaborations, or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <GlowCard
                glowColor="60, 61, 55"
                className="bg-bg-card border border-border-theme rounded-xl p-6 sm:p-8"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-accent-primary mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="bg-accent-primary/10 p-3 rounded-lg flex-shrink-0">
                        <info.icon className="text-accent-primary" size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-text-muted text-xs font-medium uppercase tracking-wider mb-0.5">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-text-primary hover:text-accent-primary transition-colors text-sm sm:text-base break-all">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text-primary text-sm sm:text-base">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Social Links */}
              <GlowCard
                glowColor="140, 122, 230"
                className="bg-bg-card border border-border-theme rounded-xl p-6 sm:p-8"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-accent-primary mb-6">Connect With Me</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <GlowCard
                      key={social.label}
                      glowColor={social.glowColor}
                      className="flex-1 bg-bg-section border border-border-theme rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-md transition-all duration-200"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-2 w-full ${social.color}`}
                      >
                        <social.icon size={22} />
                        <span className="text-xs font-medium text-text-muted">{social.label}</span>
                      </a>
                    </GlowCard>
                  ))}
                </div>
              </GlowCard>

              {/* Resume Download */}
              <GlowCard
                glowColor="194, 91, 42"
                className="bg-bg-card border border-border-theme rounded-xl p-6 sm:p-8"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-accent-primary mb-2">Resume</h2>
                <p className="text-text-secondary mb-6 text-sm sm:text-base">
                  Download my latest resume to learn more about my experience and skills.
                </p>
                <a
                  href="/Anuj-Soni_Resume.pdf"
                  download="Anuj-Soni_Resume.pdf"
                  className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                  style={{ backgroundColor: 'var(--btn-primary-bg)' }}
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </GlowCard>
            </motion.div>

            {/* ── Right column: Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlowCard
                glowColor="105, 117, 101"
                className="bg-bg-card border border-border-theme rounded-xl p-6 sm:p-8 h-full"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-accent-primary mb-6">Send a Message</h2>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                      ? 'bg-terminal-success/10 border border-terminal-success/30 text-terminal-success'
                      : 'bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary'
                      }`}
                  >
                    {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span className="text-sm">{statusMessage}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-1.5">Name *</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        required disabled={isSubmitting}
                        className={inputClass} placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-1.5">Email *</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        required disabled={isSubmitting}
                        className={inputClass} placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-1.5">Subject *</label>
                    <input
                      type="text" id="subject" name="subject"
                      value={formData.subject} onChange={handleChange}
                      required disabled={isSubmitting}
                      className={inputClass} placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      required disabled={isSubmitting} rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    style={{ backgroundColor: 'var(--btn-primary-bg)', boxShadow: isSubmitting ? 'none' : '0 4px 14px var(--accent-primary-glow)' }}
                  >
                    {isSubmitting ? (
                      <><Loader size={18} className="animate-spin" />Sending...</>
                    ) : (
                      <><Send size={18} />Send Message</>
                    )}
                  </motion.button>
                </form>
              </GlowCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;