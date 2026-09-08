import { useState } from 'react';

// import navigation data
import { navigation } from '../data';

// import icons
import { FiMenu, FiX } from 'react-icons/fi';

// import framer motion
import { motion } from 'framer-motion';

// import Link
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      {/* menu icon */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label='Open menu'
        aria-expanded={isOpen}
        className='cursor-pointer text-white'
      >
        <FiMenu size={32} />
      </button>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent-solid fixed top-0 right-0'
      ></motion.div>

      {/* menu */}
      <motion.div
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label='Close menu'
          className='cursor-pointer absolute top-8 right-8'
        >
          <FiX size={32} />
        </button>
        <ul className='flex flex-col items-center'>
          {navigation.map((item, index) => {
            return (
              <li key={index} className='mb-8'>
                <Link
                  to={item.href}
                  href={`#${item.href}`}
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='text-lg cursor-pointer capitalize'
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavMobile;
