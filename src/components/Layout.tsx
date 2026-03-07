import React from 'react';
import { motion } from 'framer-motion';
import CardNav from './CardNav';
import Footer from './Footer';
import { GridScan } from './GridScan';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  userName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, userName }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen flex flex-col relative"
    >
      {/* Global fixed GridScan background */}
      <div
        id="grid-bg"
        className="fixed inset-0 z-0"
        style={{ opacity: isDark ? 1 : 0.4 }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={isDark ? 1 : 0.6}
          linesColor={isDark ? '#392e4e' : '#D8D4E8'}
          gridScale={0.1}
          scanColor={isDark ? '#FF9FFC' : '#8C7AE6'}
          scanOpacity={isDark ? 0.4 : 0.2}
          enablePost
          bloomIntensity={isDark ? 0.6 : 0.15}
          chromaticAberration={isDark ? 0.002 : 0.001}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <CardNav userName={userName} />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Layout;