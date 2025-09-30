import { PortfolioConfig } from '@/type/config';
import { socials } from './social';
import { projects } from './projects';
import { skills } from './skills';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Tushar Rajput',
    description: 'Portfolio website by Tushar',
    author: 'Tushar Rajput',
  },

  navigation: {
    logo: {
      text: 'TR',
    },
    links: [
      { href: 'home', label: 'Home' },
      // { href: 'about', label: 'About' },
      { href: 'skills', label: 'Skills' },
      { href: 'experience', label: 'Experience' },
      { href: 'education', label: 'Education' },
      { href: 'projects', label: 'Projects' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Tushar Rajput',
      typingTexts: [
        'Building digital experiences',
        'Solving complex problems',
        'Creating user-focused web apps',
      ],
      description:
        "I'm enthusiastic about discovering new digital technologies and expanding my knowledge of innovative, creative design principles. My curiosity drives me to continuously learn about modern technologies and their potential to create meaningful experiences.",
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I'm a Software Engineering enthusiast living in Ghaziabad. I enjoy turning creative ideas into working solutions in my spare time.",
        "I've been exploring tech for about 3 years, with interests spanning across different development areas. I'm fascinated by intuitive digital experiences that just feel right.",
        "When I'm not working on code professionally, you'll find me reading about emerging technologies, contributing to open-source projects, and constantly picking up new skills and hobbies.",
      ],
      details: [
        { label: 'Location', value: 'Based in Ghaziabad' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Innovative Thinker',
          description:
            'I constantly explore new technologies and approaches to solve problems more efficiently.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'User-Focused',
          description:
            'I prioritize creating intuitive, accessible experiences that meet real user needs.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/rtushar2708',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Praveen Kumar. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;
