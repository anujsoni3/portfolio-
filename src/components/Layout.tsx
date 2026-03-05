import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  userName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, userName }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen flex flex-col"
    >
      <Navigation userName={userName} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;