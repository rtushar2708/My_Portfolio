"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/lib/data";
import LoadingSpinner from "./loading-spinner";
import portfolioConfig from "@/lib";

export default function Hero() {
  const config = portfolioConfig.sections.home;

  const [imageLoading, setImageLoading] = useState(true);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (index < config.typingTexts[currentPhrase].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + config.typingTexts[currentPhrase][index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
        setText('');
        setCurrentPhrase(prev => (prev + 1) % config.typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, currentPhrase, config.typingTexts]);

  const staggerDelay = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.1, delay },
  });

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center relative pt-24 md:pt-24 lg:pt-16 pb-16 md:pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background with mesh pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, transparent 8%)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 items-center h-full relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Hi, I&#39;m{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent font-bold">
                    Tushar Rajput
                  </span>
                </h1>
              </motion.div>

              <motion.div className="h-12 mb-8 overflow-hidden">
                <div className="relative h-full flex lg:justify-start">
                  <span className="text-xl sm:text-2xl text-gray-300 flex flex-wrap">
                    <span className="mr-2">I&apos;m passionate about</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                      {text}
                    </span>
                    <span className="animate-blink ml-1 h-6 w-0.5 bg-emerald-400 self-center"></span>
                  </span>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8"
                {...staggerDelay(0.2)}
              >
                I&apos;m enthusiastic about discovering new digital technologies and
                expanding my knowledge of innovative, creative design
                principles. My curiosity drives me to continuously learn about
                modern technologies and their potential to create meaningful
                experiences.
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4" {...staggerDelay(0.4)}>
              <Button
                href="/resume.pdf"
                label="Download Resume"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                }
                variant="primary"
                iconType="default"
              />
              <Button
                href="#connect"
                label="Connect With Me"
                icon={<ArrowRight size={18} />}
                variant="outline"
                iconType="arrow"
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 text-muted-foreground"
              {...staggerDelay(0.6)}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors p-2 hover:bg-blue-400/10 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  {...staggerDelay(0.6 + index * 0.1)}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 blur-2xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative h-48 w-48 md:h-64 md:w-64 rounded-full border-2 border-border/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            >
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <LoadingSpinner size="md" />
                </div>
              )}
              <Image
                src="/images/profile-image.png"
                alt="Tushar Rajput"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                priority
                sizes="(max-width: 768px) 192px, 256px"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
