"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/social";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants ={
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      };

  const getRgbValues = (hexColor: string) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  const renderSocialLinks = () => {
    return socials.map((link, index) => {
      const rgbColor = getRgbValues(link.color);

      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            y: -8,
            boxShadow: `0 15px 30px rgba(${rgbColor}, 0.15)`,
          }}
          className="w-full rounded-2xl"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-opacity-0 transition-all duration-300 overflow-hidden group relative"
            style={{
              boxShadow: `0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(${rgbColor}, 0.1)`,
            }}
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(45deg, ${link.color}80, rgba(${rgbColor}, 0.1), ${link.color}80)`,
                  backgroundSize: '200% 200%',
                  animation: 'gradientBorder 3s linear infinite',
                }}
              />
            </div>

            <div className="relative flex flex-col items-center text-center p-6 h-full z-10">
              {/* Icon with gradient background */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${link.color}20, ${link.color}40)`,
                  boxShadow: `0 4px 12px rgba(${rgbColor}, 0.15)`,
                }}
              >
                <div style={{ color: link.color }} className="text-2xl">
                  {link.icon}
                </div>
              </div>

              {/* Platform name */}
              <span className="text-l font-medium text-white mb-1">{link.name}</span>
            </div>
          </a>
        </motion.div>
      );
    });
  };

  return (
    <section id="connect" className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Connect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              With Me
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Feel free to connect with me on these platforms to discuss tech, share ideas, or just
            say hello!
          </p>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{renderSocialLinks()}</div>
        </motion.div>

        {/* Add a CSS animation for the gradient borders */}
        <style jsx global>{`
          @keyframes gradientBorder {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
