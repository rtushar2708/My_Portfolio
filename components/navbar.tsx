
import React from 'react';
import { motion } from 'framer-motion';
import portfolioConfig from '@/lib';
import { Logo } from './ui/logo';

interface NavBarProps {
  activeSection: string;
  onSectionNav: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionNav }) => {
  const { links } = portfolioConfig.navigation;

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gray-800/30 backdrop-blur-md border-b border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              onClick={e => onSectionNav(e, 'home')}
              className="font-medium text-xl tracking-wider text-gray-100"
            >
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={e => onSectionNav(e, link.href)}
                  initial={linkVariants.initial}
                  animate={linkVariants.animate}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                  className={`
                    transition-all 
                    duration-300 
                    hover:text-emerald-400 
                    ${activeSection === link.href ? 'text-emerald-400' : 'text-gray-300'}
                  `}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
