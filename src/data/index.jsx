//  icons
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiZap,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from '../assets/img/projects/miriamPortfolio.webp';
import Project2 from '../assets/img/projects/meditation.webp';
import Project5 from '../assets/img/projects/AiSaasLandingPage.webp';
import Project6 from '../assets/img/projects/climate-dashboard.webp';
import Project7 from '../assets/img/projects/explore-footer.webp';
import Project9 from '../assets/img/projects/next-level-food.webp';
import Project10 from '../assets/img/projects/micioSocial.webp';

// experiences images
import CertificatoS2I from '../assets/img/experiences/certificatoS2I.webp';
import Wideread from '../assets/img/experiences/wide.webp';
import Uidu from '../assets/img/experiences/uidu.webp';

export { caseStudies } from './caseStudies';
export { skillGroups } from './skills';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'experiences',
    href: 'experiences',
  },
  {
    name: 'work',
    href: 'work',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    name: 'GitHub',
    icon: <FiGithub />,
    href: 'https://github.com/mattiacaprioli',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mattia-caprioli/',
  },
  {
    name: 'Instagram',
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mattiacaprioli/?igshid=YmMyMTA2M2Y%3D',
  },
  {
    name: 'Facebook',
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/mattia.caprioli',
  },
];

/* ---------------------------------------------------------------------------
   Progetti piccoli (#portfolio). I lavori di peso stanno in `caseStudies`:
   questi sono esercizi front-end, e la sezione li presenta come tali.

   `category` e una sola etichetta da mostrare, non piu una chiave di filtro:
   il filtro a tab e stato rimosso perche elencava solo framework front-end,
   contraddicendo il posizionamento del resto del sito.
   --------------------------------------------------------------------------- */
export const projectsData = [
  {
    id: '0',
    image: Project10,
    name: 'MicioSocial App',
    category: 'React Native',
    href: 'https://github.com/mattiacaprioli/micio-social',
  },
  {
    id: '1',
    image: Project5,
    name: 'Ai Saas Landing Page',
    category: 'Next.js',
    href: 'https://aisaaslandingpage.netlify.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Meditation',
    category: 'React',
    href: 'https://project-react-meditation.netlify.app/',
  },
  {
    id: '5',
    image: Project1,
    name: 'Miriam Portfolio',
    category: 'Next.js',
    href: 'https://miriamportfolio.netlify.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'Climate Dashboard',
    category: 'React',
    href: 'https://climatedashboard.netlify.app/',
  },
  {
    id: '7',
    image: Project7,
    name: 'Explore Food',
    category: 'React',
    href: 'https://explorefood.netlify.app/',
  },
  {
    id: '9',
    image: Project9,
    name: 'Next Level Food',
    category: 'Next.js',
    href: 'https://next-level-food.netlify.app/',
  },
];

/* Qui vive l'impiego. Uidu non ha un case study in #work di proposito: e
   l'azienda per cui lavoro, non un mio progetto, e affiancarla ai progetti
   personali suggerirebbe una paternita che non c'e. Le chip di `stack` — campo
   opzionale — sono il modo di tenere visibili le tecnologie backend senza
   rivendicare il prodotto. */
export const experiences = [
  {
    year: '2025 — now',
    title: 'Full-Stack Developer at Uidu',
    description:
      'A Rails and GraphQL backend plus the React Native app for an HR and workspace platform: shift planning, timesheets, a time clock, realtime chat, calendar sync.',
    stack: ['Rails 8.1', 'graphql-ruby', 'Sidekiq', 'MySQL', 'React Native', 'Relay'],
    image: Uidu,
    href: 'https://uidu.org',
  },
  {
    year: '2023 — 2024',
    title: 'Front-End Developer at Wideread',
    description:
      'Started working at Wideread, contributing to the development of a new social network for the publishing industry.',
    stack: ['React', 'React Native', 'MongoDB', 'NestJS', 'AWS'],
    image: Wideread,
    href: 'https://info.wideread.it/it/information',
  },
  {
    year: '2023',
    title: 'Front-End Certification',
    description:
      'Completed a comprehensive front-end development course, gaining a solid foundation in web technologies.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: CertificatoS2I,
    href: 'https://www.start2impact.it/',
  },
];

// services
export const services = [
  {
    icon: <FiCode />,
    name: 'Web & mobile front end',
    description:
      'Building responsive, accessible, and modern web applications using React, React Native, and Next.js.',
  },
  {
    icon: <FiSmartphone />,
    name: 'Mobile App Development',
    description:
      'Creating high-quality mobile applications for iOS and Android with React Native, ensuring excellent performance and user experience.',
  },
  {
    icon: <FiDatabase />,
    name: 'APIs & data models',
    description:
      'GraphQL schemas, relational models on Postgres and MySQL, background jobs, and the migrations that get from one shape to the next.',
  },
  {
    icon: <FiZap />,
    name: 'Realtime features',
    description:
      'Chat, presence and live updates over WebSockets and GraphQL subscriptions — including the offline, retry and duplicate cases.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Email',
    subtitle: 'Drop me a line anytime.',
    description: 'capriolimattia1994@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Location',
    subtitle: 'Italy',
    description: 'Open to remote collaboration',
  },
];
