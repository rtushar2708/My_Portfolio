import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Mock Interview Platform',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['React', 'Nextjs', 'Firebase', 'TailwindCSS', 'GeminiApi', 'VapiAI'],
    githubLink: 'https://github.com/rtushar2708/ai_mock_interview',
    liveLink: 'https://ai-mock-interview-two-teal.vercel.app/sign-in',
    type: 'Frontend',
    thumbnail:
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/Dashboard.png',
    carouselImages: [
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/login.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/generate%20interview.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/feedback.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/take%20interview.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/Dashboard.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  // {
  //   id: 2,
  //   title: 'Catalyst',
  //   description:
  //     'Elegant TUI tool for triggering GitHub Actions workflows with matrix configurations for mobile app deployments.',
  //   tags: ['Go', 'Charm.sh'],
  //   githubLink: 'https://github.com/rtushar2708',
  //   liveLink: '',
  //   type: 'CLI',
  //   thumbnail:
  //     'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_codingRoom.png',
  //   gifUrl:
  //     'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
  // },
  {
    id: 3,
    title: 'Coding Collab',
    description:
      'A platform to create/join coding rooms, collaborate in real-time, create notes, and socialize with peers.',
    tags: ['Nextjs', 'React', 'Fastify', 'MongoDB', 'Firebase', 'GeminiApi'],
    githubLink: 'https://github.com/rtushar2708',
    type: 'Full Stack',
    thumbnail:
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_codingRoom.png',
    carouselImages: [
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_notes.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_soloStudy.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_feed.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/CC_createRoom.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 4,
    title: 'AI Mock Interview Platform',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['React', 'Nextjs', 'Firebase', 'TailwindCSS', 'GeminiApi', 'VapiAI'],
    githubLink: 'https://github.com/rtushar2708/ai_mock_interview',
    liveLink: 'https://ai-mock-interview-two-teal.vercel.app/sign-in',
    type: 'Frontend',
    thumbnail:
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/login.png',
    carouselImages: [
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/login.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/generate%20interview.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/feedback.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/take%20interview.png',
      'https://raw.githubusercontent.com/rtushar2708/ai_mock_interview/main/docs/images/Dashboard.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
