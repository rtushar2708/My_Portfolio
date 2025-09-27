"use client";

import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { MobileNavBar } from "@/components/mobile-navbar";
import { NavBar } from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const handleSectionNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
      e.preventDefault();
      scrollToSection(sectionId);
      setMenuOpen(false);
    },
    [scrollToSection]
  );

  if (!mounted) return null;
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200">

      <div className="fixed top-3.5 right-6 z-50 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-100 shadow-lg border border-gray-700/50"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <NavBar onSectionNav={handleSectionNav} activeSection={activeSection} />

      <MobileNavBar menuOpen={menuOpen} activeSection={activeSection} setMenuOpen={setMenuOpen} />

      <main>
        {/* Hero Section */}
        <Hero />
        {/* Tech Stack Section */}
        <TechStack />
        {/* Experience Section */}
        <Experience />
        {/* Education Section */}
        <Education />
        {/* Certificates Section */}
        <Certificates />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
