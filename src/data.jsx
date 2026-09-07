//  icons
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiCode,
  FiSmartphone,
  FiLayers,
  FiTrendingUp,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/miriamPortfolio.webp';
import Project2 from './assets/img/projects/meditation.webp';
import Project5 from './assets/img/projects/AiSaasLandingPage.webp';
import Project6 from './assets/img/projects/climate-dashboard.webp';
import Project7 from './assets/img/projects/explore-footer.webp';
import Project9 from './assets/img/projects/next-level-food.webp';
import Project10 from './assets/img/projects/micioSocial.webp';

// skills images
import SkillImg1 from './assets/img/skills/js.webp';
import SkillImg2 from './assets/img/skills/node.webp';
import SkillImg3 from './assets/img/skills/mongodb.webp';
import SkillImg4 from './assets/img/skills/reactjs.webp';
import SkillImg5 from './assets/img/skills/redux.webp';
import SkillImg6 from './assets/img/skills/nextjs.webp';
import SkillImg7 from './assets/img/skills/vue.webp';
import SkillImg8 from './assets/img/skills/git.webp';

// experiences images
import CertificatoS2I from './assets/img/experiences/certificatoS2I.webp';
import Wideread from './assets/img/experiences/wide.webp';
import Uidu from './assets/img/experiences/uidu.webp';

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

// projects
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
    category: 'Next',
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
    category: 'Next',
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
    category: 'Next',
    href: 'https://next-level-food.netlify.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React',
  },
  {
    name: 'Next',
  },
  {
    name: 'React Native',
  },
];

export const experiences = [
  {
    year: '2025',
    title: 'Front-End Developer at Uidu',
    description:
      'Working as a front-end developer at Uidu, I am focused on creating innovative web and mobile applications.',
    image: Uidu,
    href: 'https://uidu.org/it',
  },
  {
    year: '2023',
    title: 'Front-End Developer at Wideread',
    description:
      'Started working at Wideread, contributing to the development of a new social network for the publishing industry.',
    image: Wideread,
    href: 'https://info.wideread.it/it/information',
  },
  {
    year: '2023',
    title: 'Front-End Certification',
    description:
      'Completed a comprehensive front-end development course, gaining a solid foundation in web technologies.',
    image: CertificatoS2I,
    href: 'https://www.start2impact.it/',
  },
];

// skill
export const skills = [
  {
    name: 'JavaScript',
    image: SkillImg1,
  },
  {
    name: 'Node.js',
    image: SkillImg2,
  },
  {
    name: 'MongoDB',
    image: SkillImg3,
  },
  {
    name: 'React',
    image: SkillImg4,
  },
  {
    name: 'Redux',
    image: SkillImg5,
  },
  {
    name: 'Next.js',
    image: SkillImg6,
  },
  {
    name: 'Vue.js',
    image: SkillImg7,
  },
  {
    name: 'Git',
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiCode />,
    name: 'Front-End Development',
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
    icon: <FiLayers />,
    name: 'Component Design',
    description:
      'Designing reusable and scalable UI components to accelerate development and maintain consistency across projects.',
  },
  {
    icon: <FiTrendingUp />,
    name: 'Performance Optimization',
    description:
      'Optimizing websites and apps for speed, SEO, and scalability to improve user engagement and search visibility.',
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
    subtitle: 'Roma, Italia',
    description: 'Open to remote collaboration',
  },
];
