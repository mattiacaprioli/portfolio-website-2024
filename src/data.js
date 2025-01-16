//  icons
import {
  // FiYoutube,
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
import Project1 from './assets/img/projects/miriamPortfolio.png';
import Project2 from './assets/img/projects/meditation.png';
// import Project3 from './assets/img/projects/tictactoe.png';
// import Project4 from './assets/img/projects/dashboard-hotel.png';
import Project5 from './assets/img/projects/AiSaasLandingPage.png';
import Project6 from './assets/img/projects/climate-dashboard.png';
import Project7 from './assets/img/projects/explore-footer.png';
// import Project8 from './assets/img/projects/TechTrend.png';
import Project9 from './assets/img/projects/next-level-food.png';
import Project10 from './assets/img/projects/micioSocial.png';

// skills images
import SkillImg1 from './assets/img/skills/js.png';
import SkillImg2 from './assets/img/skills/node.webp';
import SkillImg3 from './assets/img/skills/mongodb.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/redux.png';
import SkillImg6 from './assets/img/skills/nextjs.png';
import SkillImg7 from './assets/img/skills/vue.png';
import SkillImg8 from './assets/img/skills/git.png';

// experiences images
import CertificatoS2I from './assets/img/experiences/certificatoS2I.jpg';
import Wideread from './assets/img/experiences/wide.png';
import Freelancer from './assets/img/experiences/freelancer.jpeg';

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
    icon: <FiGithub />,
    href: 'https://github.com/mattiacaprioli',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mattia-caprioli/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mattiacaprioli/?igshid=YmMyMTA2M2Y%3D',
  },
  {
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
  // {
  //   id: '3',
  //   image: Project3,
  //   name: 'Tic Tac Toe',
  //   category: 'Vue',
  //   href: 'https://project-vue-tictactoe.netlify.app/',
  // },
  // {
  //   id: '4',
  //   image: Project4,
  //   name: 'Dashboard Hotel',
  //   category: 'Vue',
  //   href: 'https://dashboard-pomelia.netlify.app/',
  // },
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
  // {
  //   id: '8',
  //   image: Project8,
  //   name: 'TechTrend',
  //   category: 'Vue',
  //   href: 'https://techtrend.netlify.app/',
  // },
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
  // {
  //   name: 'Vue',
  // },
];

export const experiences = [
  {
    year: '2024',
    title: 'Freelancer Front-End Developer',
    description: 'Opened my own business to offer front-end development services to a variety of clients.',
    image: Freelancer,
  },
  {
    year: '2023',
    title: 'Front-End Developer at Wideread',
    description: 'Started working at Wideread, contributing to the development of a new social network for the publishing industry.',
    image: Wideread,
    href: 'https://info.wideread.it/it/information',
  },
  {
    year: '2023',
    title: 'Front-End Certification',
    description: 'Completed a comprehensive front-end development course, gaining a solid foundation in web technologies.',
    image: CertificatoS2I,
    href: 'https://www.start2impact.it/'
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
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
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: '',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Roma, Italia',
    description: 'Serving clients worldwide',
  },
];
