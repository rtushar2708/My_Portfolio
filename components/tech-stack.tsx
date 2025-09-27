"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";
import Image from "next/image";

const CategoryIcons = {
  Frontend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        ry="2"
        stroke="#60a5fa"
      ></rect>
      <line x1="9" y1="3" x2="9" y2="21" stroke="#60a5fa"></line>
    </svg>
  ),
  Backend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="8"
        rx="2"
        ry="2"
        stroke="#4ade80"
      ></rect>
      <rect
        x="2"
        y="14"
        width="20"
        height="8"
        rx="2"
        ry="2"
        stroke="#4ade80"
      ></rect>
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="#4ade80"></line>
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="#4ade80"></line>
    </svg>
  ),
  Mobile: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        ry="2"
        stroke="#f472b6"
      ></rect>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#f472b6"></line>
    </svg>
  ),
  DevOps: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <line
        x1="16.5"
        y1="9.4"
        x2="7.5"
        y2="4.21"
        stroke="#326ce5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="#326ce5"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(9.6,9.6) scale(0.6)">
        <circle cx="4" cy="4" r="1.5" fill="#326ce5" />
        <path
          d="M4 0v1M4 7v1M7 4h1M0 4h1M6.12 1.88l.7.7M1.88 6.12l.7.7M6.12 6.12l-.7.7M1.88 1.88l-.7.7"
          stroke="#326ce5"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),
  Database: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#a78bfa"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#a78bfa"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#a78bfa"></path>
    </svg>
  ),
  Design: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M12 2l9 4v12l-9 4-9-4V6l9-4z" stroke="#f59e0b"></path>
      <path d="M3.5 7.5L12 12l8.5-4.5" stroke="#f59e0b"></path>
      <path d="M12 12v9" stroke="#f59e0b"></path>
      <circle cx="8" cy="9" r="1" stroke="#f59e0b" fill="#f59e0b"></circle>
      <circle cx="16" cy="9" r="1" stroke="#f59e0b" fill="#f59e0b"></circle>
    </svg>
  ),
  Default: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path
        d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
        stroke="#ff9580"
      ></path>
    </svg>
  ),
};

const generateShadowStyle = (color: string) => {
  const rgbColor =
    color
      .replace("#", "")
      .match(/.{2}/g)
      ?.map((hex: string) => parseInt(hex, 16))
      .join(", ") || "0, 0, 0";

  return {
    borderColor: `${color}20`,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(${rgbColor}, 0.05))`,
  };
};

const getCategoryIcon = (category: string) => {
  const Icon =
    CategoryIcons[category as keyof typeof CategoryIcons] ||
    CategoryIcons.Default;
  return <Icon />;
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Skills
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            I&apos;ve gained proficiency in various technologies throughout my
            career. Here are the key tools and frameworks I use to build
            exceptional products.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md flex items-center justify-center">
                  {getCategoryIcon(skillGroup.category)}
                </span>
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group relative duration-300">
                    <div
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800/70 rounded-full border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-emerald-500/10"
                      style={generateShadowStyle(tech.color)}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                        style={{ filter: "brightness(1.2)" }}
                      />
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                    <div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-2 rounded-full bg-black/20 blur-sm opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                      style={{
                        background: `radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
