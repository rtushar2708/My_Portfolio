import { FaCertificate, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Software Developer",
    company: "BigCircle",
    location: "Gandhinagar, India",
    description: [
      "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    ],
    date: "Oct 2024 - Present",
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      "Designed and Developed web applications using modern technologies like Next.js, TypeScript, and Tailwind CSS.",
      "Configured AWS services, such as EC2, S3, and Amplify, to streamline development and deployment processes.",
    ],
    date: "Aug 2023 - Oct 2024",
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

export const projects = [
  {
    title: "Payment Gateway Integration",
    description: "Integration of multiple payment gateways using Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PayPal", "Razorpay"],
    github: "https://github.com/rtushar2708",
    demo: "",
    icon: "💸",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern animations, dark theme, and optimized performance built with Next.js.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "",
    demo: "",
    icon: "🌟",
  },
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
    title: "Node.js Essential Training",
    institution: "LinkedIn Learning",
    duration: "Issued: October 2024",
    description: "Completed comprehensive training on Node.js, covering core concepts and advanced topics.",
    link: "",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    title: "Node.js: Microservices",
    institution: "LinkedIn Learning",
    duration: "Issued: October 2024",
    description: "Completed advanced training on building microservices with Node.js and Express.",
    link: "",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    title: "React.js Essential Training",
    institution: "LinkedIn Learning",
    duration: "Issued: October 2024",
    description: "Completed comprehensive training on React.js, covering core concepts and advanced topics.",
    link: "",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    title: "Node.js: Security",
    institution: "LinkedIn Learning",
    duration: "Issued: September 2024",
    description: "Completed advanced training on securing Node.js applications and APIs.",
    link: "",
    icon: FaLinkedinIn,
  },
  {
    id: 6,
    title: "DSA WITH JAVA",
    institution: "Apna College",
    duration: "Issued: November 2023",
    description: "Completed comprehensive training on Data Structures and Algorithms using Java.",
    link: "",
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
