

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import portfolioConfig from '@/lib';

interface MobileNavBarProps {
  menuOpen: boolean;
  activeSection: string;
  setMenuOpen: (menuOpen: boolean) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ menuOpen, activeSection, setMenuOpen }) => {
  const { links } = portfolioConfig.navigation;

  const menuVariants = {
    closed: { opacity: 0, x: 300 },
    open: { opacity: 1, x: 0 },
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop with blur effect */}
          <motion.div
            className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Menu content */}
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Dynamic glow effect */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

            {/* Nav links */}
            <div className="flex flex-col items-center space-y-8 relative z-10">
              {links.map((link, i) => (
                <motion.div key={link.href} custom={i}>
                  <a
                    href={`#${link.href}`}
                    onClick={handleLinkClick}
                    className={`text-3xl font-medium transition-all duration-300 hover:text-emerald-400 relative
                      ${
                        activeSection === link.href
                          ? 'text-emerald-400 font-semibold'
                          : 'text-gray-200'
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileNavBar };
