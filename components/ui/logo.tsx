'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioConfig from '@/lib';

const Logo: React.FC = () => {
  const { logo } = portfolioConfig.navigation;

  return (
    <motion.div
      className="flex items-center cursor-pointer space-x-1"
      whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 0.4 } }}
    >
      {/* Left code bracket */}
      <motion.span
        className="font-mono text-emerald-400 text-xl"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {'{'}
      </motion.span>

      {/* Initials */}
      <motion.span
        className="text-l font-bold"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {logo.text}
      </motion.span>

      {/* Right code bracket */}
      <motion.span
        className="font-mono text-emerald-400 text-xl"
        initial={{ x: 8, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {'}'}
      </motion.span>
    </motion.div>
  );
};

export { Logo };