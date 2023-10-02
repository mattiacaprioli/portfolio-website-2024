//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/findYourCity.png';
import Project2 from './assets/img/projects/meditation.png';
import Project3 from './assets/img/projects/tictactoe.png';
import Project4 from './assets/img/projects/dashboard-hotel.png';
import Project5 from './assets/img/projects/counter-javascript.png';

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
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Find your city',
    category: 'Javascript',
  },
  {
    id: '2',
    image: Project2,
    name: 'Meditation',
    category: 'React',
  },
  {
    id: '3',
    image: Project3,
    name: 'Tic Tac Toe',
    category: 'Vue',
  },
  {
    id: '4',
    image: Project4,
    name: 'Dashboard Hotel',
    category: 'Vue',
  },
  {
    id: '5',
    image: Project5,
    name: 'Counter',
    category: 'Javascript',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'React',
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
      'Building robust and efficient web solutions that bring your ideas to life.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Creating unique and impactful brand identities to make your business stand out.',
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
