import React from 'react';
import { motion } from 'framer-motion';
import BubbleMenu from './BubbleMenu';
import Footer from './Footer';
import { GridScan } from './GridScan';
import ScrollProgress from './ScrollProgress';
import { useTheme } from '../hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        style={{ opacity: isDark ? 1 : 0.45 }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={isDark ? 1.2 : 0.6}
          linesColor={isDark ? '#2D2C72' : '#C8BCA4'}
          gridScale={0.1}
          scanColor={isDark ? '#9290C3' : '#3C3D37'}
          scanOpacity={isDark ? 0.60 : 0.32}
          enablePost
          bloomIntensity={isDark ? 0.7 : 0.06}
          chromaticAberration={isDark ? 0.002 : 0.001}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollProgress />
        <BubbleMenu />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Layout;