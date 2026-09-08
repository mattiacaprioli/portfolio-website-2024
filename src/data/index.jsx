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
import MicioSocial from '../assets/img/projects/micioSocial.webp';
import MiriamPortfolio from '../assets/img/projects/miriamPortfolio.webp';
import ClimateDashboard from '../assets/img/projects/climate-dashboard.webp';
import AiSaasLandingPage from '../assets/img/projects/AiSaasLandingPage.webp';

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
   Progetti front-end precedenti (#portfolio). I due progetti recenti stanno in
   `caseStudies`, il lavoro in azienda in `experiences`.

   Restano solo i quattro che valgono. Gli esercizi da corso (Meditation,
   Explore Food, Next Level Food) sono stati rimossi: un'immagine e cio che
   data un progetto, e mostrarne sette abbassava la media di tutto il resto
   della pagina.

   `category` e una sola etichetta da mostrare, non una chiave di filtro: il
   filtro a tab e stato rimosso perche elencava solo framework front-end,
   contraddicendo il posizionamento del resto del sito.
   --------------------------------------------------------------------------- */
export const projectsData = [
  {
    id: 'micio-social',
    image: MicioSocial,
    name: 'MicioSocial App',
    category: 'React Native',
    href: 'https://github.com/mattiacaprioli/micio-social',
  },
  {
    id: 'miriam-portfolio',
    image: MiriamPortfolio,
    name: 'Miriam Portfolio',
    category: 'Next.js',
    href: 'https://miriamportfolio.netlify.app/',
  },
  {
    id: 'climate-dashboard',
    image: ClimateDashboard,
    name: 'Climate Dashboard',
    category: 'React',
    href: 'https://climatedashboard.netlify.app/',
  },
  {
    id: 'ai-saas-landing-page',
    image: AiSaasLandingPage,
    name: 'Ai Saas Landing Page',
    category: 'Next.js',
    href: 'https://aisaaslandingpage.netlify.app/',
  },
];

/* Qui vive l'impiego. Uidu non ha un case study fra i progetti di proposito: e
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
