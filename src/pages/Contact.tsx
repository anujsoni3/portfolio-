import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'soni3anuj@gmail.com',
      href: 'mailto:soni3anuj@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nagpur, Maharashtra, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/anujsoni',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anujsoni',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:soni3anuj@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent-purple">Get In</span> Touch
            </h1>
            <p className="text-lg sm:text-xl text-soft-blue/80">
              Let's discuss opportunities, collaborations, or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-bright mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-accent-purple/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <info.icon className="text-accent-purple" size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-soft-blue/60 text-sm">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-soft-blue hover:text-cyan-bright transition-colors text-sm sm:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-soft-blue text-sm sm:text-base">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-bright mb-6">Connect With Me</h2>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-black/50 p-3 sm:p-4 rounded-lg text-soft-blue ${social.color} transition-all duration-200 hover:scale-105`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-bright mb-4">Resume</h2>
                <p className="text-soft-blue/80 mb-6 text-sm sm:text-base">
                  Download my latest resume to learn more about my experience and skills.
                </p>
                <a
                  href="/Anuj_Soni_SDEIntern_Resume.pdf.pdf"
                  download="Anuj_Soni_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-accent-purple hover:bg-accent-purple/80 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-bright mb-6">Send a Message</h2>
              
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{statusMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-soft-blue mb-2 text-sm sm:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-black/50 border border-cyan-bright/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-soft-blue focus:border-cyan-bright focus:outline-none transition-colors disabled:opacity-50 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-soft-blue mb-2 text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-black/50 border border-cyan-bright/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-soft-blue focus:border-cyan-bright focus:outline-none transition-colors disabled:opacity-50 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-soft-blue mb-2 text-sm sm:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-black/50 border border-cyan-bright/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-soft-blue focus:border-cyan-bright focus:outline-none transition-colors disabled:opacity-50 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-soft-blue mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full bg-black/50 border border-cyan-bright/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-soft-blue focus:border-cyan-bright focus:outline-none transition-colors resize-none disabled:opacity-50 text-sm sm:text-base"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-purple hover:bg-accent-purple/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;