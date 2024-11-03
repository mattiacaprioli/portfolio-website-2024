//  icons
import {
  // FiYoutube,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/miriamPortfolio.png';
import Project2 from './assets/img/projects/meditation.png';
import Project3 from './assets/img/projects/tictactoe.png';
import Project4 from './assets/img/projects/dashboard-hotel.png';
// import Project5 from './assets/img/projects/counter-javascript.png';
import Project6 from './assets/img/projects/climate-dashboard.png';
import Project7 from './assets/img/projects/explore-footer.png';
import Project8 from './assets/img/projects/TechTrend.png';
import Project9 from './assets/img/projects/next-level-food.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/redux.png';
import SkillImg6 from './assets/img/skills/nextjs.png';
import SkillImg7 from './assets/img/skills/vue.png';
import SkillImg8 from './assets/img/skills/git.png';

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
    id: '1',
    image: Project1,
    name: 'Miriam Portfolio',
    category: 'Next',
    href: 'https://miriamportfolio.netlify.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Meditation',
    category: 'React',
    href: 'https://project-react-meditation.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Tic Tac Toe',
    category: 'Vue',
    href: 'https://project-vue-tictactoe.netlify.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Dashboard Hotel',
    category: 'Vue',
    href: 'https://dashboard-pomelia.netlify.app/',
  },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'Counter',
  //   category: 'Javascript',
  //   href: 'https://counter-javascript01.netlify.app/',
  // },
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
    id: '8',
    image: Project8,
    name: 'TechTrend',
    category: 'Vue',
    href: 'https://techtrend.netlify.app/',
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
    name: 'Vue',
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
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Crafting visually appealing and user-friendly web designs tailored to your needs.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Build a robust and efficient web solutions that bring your ideas to life.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Create an unique and impactful brand identities to make your business stand out.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Optimizing your online presence to enhance visibility and attract more visitors.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at capriolimattia1994@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Roma, Italia',
    description: 'Serving clients worldwide',
  },
];
