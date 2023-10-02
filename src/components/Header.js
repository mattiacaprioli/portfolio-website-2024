import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll'

import Logo from '../assets/img/Logo-Mattia.png';
import Navbar from './Navbar';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', ()=> {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })
    
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <Link to="home" spy={true} smooth={true} duration={500} >
            <img className='h-14' src={Logo} alt=''/>
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
  )
}

export default Header
