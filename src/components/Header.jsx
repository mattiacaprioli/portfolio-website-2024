import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/img/Logo-Mattia.webp';
import Navbar from './Navbar';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setBg(window.scrollY > 50);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <Link to='home' href='#home' spy={true} smooth={true} duration={500} className='cursor-pointer' aria-label='Back to top'>
          <img className='h-14 w-auto' src={Logo} alt='Mattia Caprioli' width='500' height='107' />
        </Link>
        {/* nav */}
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        {/* socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
