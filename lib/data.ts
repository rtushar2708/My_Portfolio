import { FaCertificate, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "Dehix",
    location: "Ghaziabad, India",
    description: [
      "Developed and managed a freelancing platform, handling skill management, bid functionality, and market module integration.",
      "Worked extensively with Nextjs Fastify, MongoDB, and Firebase to build and optimize applications.",
    ],
    date: "july 2024 - march-2025",
  },
  {
    title: "Networking Intern",
    company: "Cisco Networking Academy",
    location: "Remote",
    description: [
      "Collaborated on the design, automation, and simulation of complex hierarchical network topologies by analyzing router configuration files.",
      "Developed solutions for validating and optimizing network configurations, identifying flaws such as duplicate IPs, incorrect VLAN labels, and network loops.",
    ],
    date: "june 2025 - August 2025",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rtushar2708",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-rajput-873114157/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:rtushar2708@gmail.com",
    icon: MdMail,
  },
  // {
  //   label: "Twitter",
  //   href: "https://twitter.com/rtushar2708",
  //   icon: FaTwitter,
  // },
] as const;

export const certificates = [
  {
    id: 1,
    title: "GitHub Foundations",
    institution: "GitHub",
    duration: "Issued: March 2026",
    description: "Demonstrated proficiency in Git and GitHub by completing foundational training.",
    link: "",
    icon: FaGithub,
  },
  {
    id: 2,
    title: "Network Technician Career Path",
    institution: "Cisco",
    duration: "Issued: August 2025",
    description: "Completed comprehensive training on Node.js, covering core concepts and advanced topics.",
    link: "https://www.credly.com/badges/170886f2-dc6a-4020-aafc-6801e0f6648d/public_url",
    icon: FaCertificate,
  },
  // {
  //   id: 3,
  //   title: "Node.js: Microservices",
  //   institution: "LinkedIn Learning",
  //   duration: "Issued: October 2024",
  //   description: "Completed advanced training on building microservices with Node.js and Express.",
  //   link: "",
  //   icon: FaLinkedinIn,
  // },
  // {
  //   id: 4,
  //   title: "React.js Essential Training",
  //   institution: "LinkedIn Learning",
  //   duration: "Issued: October 2024",
  //   description: "Completed comprehensive training on React.js, covering core concepts and advanced topics.",
  //   link: "",
  //   icon: FaLinkedinIn,
  // },
  // {
  //   id: 5,
  //   title: "Node.js: Security",
  //   institution: "LinkedIn Learning",
  //   duration: "Issued: September 2024",
  //   description: "Completed advanced training on securing Node.js applications and APIs.",
  //   link: "",
  //   icon: FaLinkedinIn,
  // },
  {
    id: 6,
    title: "DSA WITH JAVA",
    institution: "Apna College",
    duration: "Issued: November 2023",
    description: "Completed comprehensive training on Data Structures and Algorithms using Java.",
    link: "https://drive.google.com/file/d/1bwVHO6h4EQicTQI2uKcGUMYkAAUfDXOF/view?usp=sharing",
    icon: FaCertificate,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science",
    institution: "ABES Institute of Technology, Ghaziabad",
    duration: "2022 - 2026 (Expected)",
    description:
      "Pursuing comprehensive studies in software development, algorithms, data structures, and modern programming paradigms with focus on practical application development.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "S.B.V Rouse Avenue, New Delhi",
    duration: "2019 - 2021",
    description: "Completed Science stream education with strong foundation in Physics, Chemistry, and Mathematics.",
  },
];
