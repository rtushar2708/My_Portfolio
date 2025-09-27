import { Project, Skill, Social } from './types';

/**
 * Main configuration interface for the entire portfolio
 */
export interface PortfolioConfig {
  siteMetadata: SiteMetadata;

  navigation: NavigationConfig;

  sections: {
    home: HomeSection;
    about: AboutSection;
    projects: ProjectsSection;
    skills: SkillsSection;
    connect: ConnectSection;
  };

  footer: FooterConfig;
}

/**
 * Site metadata configuration
 */
export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

/**
 * Navigation configuration
 */
export interface NavigationConfig {
  logo: {
    text: string;
  };
  links: Array<{
    href: string;
    label: string;
  }>;
}

/**
 * Home section configuration
 */
export interface HomeSection {
  greeting: string;
  name: string;
  typingTexts: string[];
  description: string;
  scrollIndicatorText: string;
}

/**
 * About section configuration
 */
export interface AboutSection {
  title: string;
  subtitle: string;
  bio: string[];
  details: Array<{
    label: string;
    value: string;
  }>;
  qualities: Array<{
    icon: string;
    title: string;
    description: string;
    gradient: string;
  }>;
}

/**
 * Projects section configuration
 */
export interface ProjectsSection {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
  viewMoreButton: {
    label: string;
    url: string;
  };
}

/**
 * Skills section configuration
 */
export interface SkillsSection {
  title: string;
  subtitle: string;
  description: string;
  categories: Skill[];
}

/**
 * Connect section configuration
 */
export interface ConnectSection {
  title: string;
  subtitle: string;
  description: string;
  socials: Social[];
}

/**
 * Footer configuration
 */
export interface FooterConfig {
  copyright: string;
  tagline: string;
}
