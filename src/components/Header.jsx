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
        {/* Nav desktop da xl, non da lg: fino a xl il container di Tailwind e
            limitato a 1024px, quindi lo spazio utile e 928px contro i ~984
            richiesti da logo + nav + social, e le tre parti si sovrappongono.
            Sotto xl vale il menu a tutto schermo, che non ha questo limite. */}
        {/* nav */}
        <div className='hidden xl:block'>
          <Navbar />
        </div>
        {/* socials */}
        <div className='hidden xl:block'>
          <Socials />
        </div>
        {/* nav mobile */}
        <div className='xl:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
