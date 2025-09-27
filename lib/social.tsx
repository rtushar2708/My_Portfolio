

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/rtushar2708',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/tushar-rajput-873114157/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:rtushar2708@gmail.com',
    color: '#D44638',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: '',
    color: '#1DA1F2',
  },
];
