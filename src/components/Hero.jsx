import { Link } from 'react-scroll'

// import hero image
import MenImg from '../assets/img/header-foto-personale.webp';

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full lg:mt-10'>
        <div className='flex items-center h-full pt-8'>
          {/* left side */}
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent mb-[22px]'>Hi, I’m Mattia</p>
            {/* lg:text-6xl e non 7xl: a 72px con tracking -2px la colonna
                regge ~16 caratteri per riga, e "I build interfaces" ne ha 18. */}
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I build interfaces <br /> and the systems <br /> behind them.</h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[520px] text-lg text-center lg:text-left'>
            I started on the front end and moved into the back end without leaving it:
            React and React Native on one side, Rails and GraphQL on the other.
            Currently building an HR platform at Uidu.
            </p>
            <Link to="contact" href="#contact" spy={true} smooth={true} duration={500} className='btn btn-md bg-accent-solid hover:bg-accent-solid-hover md:btn-lg transition-all cursor-pointer'>
              Get in touch
            </Link>
          </div>
          {/* right side */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img
              src={MenImg}
              className='opacity-75'
              alt='Mattia Caprioli'
              width='609'
              height='410'
              fetchPriority='high'
              decoding='async'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
