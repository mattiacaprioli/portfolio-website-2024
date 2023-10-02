import React from 'react'
import { Link } from 'react-scroll'

// import image
import Image from '../assets/img/foto-pc.jpg'

function About() {
  return (
    <section id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
            <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt='#'/>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                  <span className='hidden lg:block before:content-about before:absolute before:opacity-40 before:-top-[2rem]'>
                    Me
                  </span>
                  <span className='lg:hidden'>About Me</span>
                </h2>
                    <p className='mb-4 text-accent'>Front End Development</p>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-8'>
                      My name is Mattia and I was born in Como (near Milan), Italy.
                      I am a passionate web developer, with a strong enthusiasm for creating extraordinary digital experiences.
                      I design and develop modern and engaging web interfaces.
                      Feel free to contact me today to start a new collaboration!
                    </p>
                </div>
                <Link to="contact" spy={true} smooth={true} duration={500} className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
                  Work with me
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
