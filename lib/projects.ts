import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Shortly',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['Go', 'PostgreSQL'],
    githubLink: 'https://github.com/PraveenGongada/Shortly',
    liveLink: 'https://shortly-go.vercel.app/',
    type: 'Backend',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/register.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/dashboard.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/create.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/delete.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'Catalyst',
    description:
      'Elegant TUI tool for triggering GitHub Actions workflows with matrix configurations for mobile app deployments.',
    tags: ['Go', 'Charm.sh'],
    githubLink: 'https://github.com/PraveenGongada/Catalyst',
    liveLink: '',
    type: 'CLI',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/deployment-summary.png',
    gifUrl:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
  },
  {
    id: 3,
    title: 'MovieDB',
    description:
      'A cinema app featuring intuitive browsing and comprehensive movie details with seamless user experience.',
    tags: ['Flutter', 'Dart'],
    githubLink: 'https://github.com/PraveenGongada/MovieDB',
    type: 'App',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/home.png',
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/movie.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
