import { Link } from 'react-scroll'

// import image
import Image from '../assets/img/foto-pc.webp'

function About() {
  return (
    <section id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
            <img
              className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
              src={Image}
              alt='Mattia Caprioli at his desk'
              width='1080'
              height='803'
              loading='lazy'
              decoding='async'
            />
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                  <span className='hidden lg:block before:content-about before:absolute before:opacity-40 before:-top-[2rem]'>
                    Me
                  </span>
                  <span className='lg:hidden'>About Me</span>
                </h2>
                    {/* Un elenco e una specifica; "Full-stack development"
                        sarebbe un'autovalutazione. */}
                    <p className='mb-4 text-accent'>React · React Native · Rails · GraphQL</p>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-6'>
                      My name is Mattia and I am based in Italy.
                    </p>
                    <p className='mb-6'>
                      I started as a front-end developer and I still spend most of my time in
                      React and React Native. Over the past year, though, most of my work has
                      moved down the stack, and I would like to keep it that way: I would rather
                      own a feature from the database column to the button that changes it.
                    </p>
                    <p className='mb-8'>
                      Outside work I build things that teach me what the job does not — most
                      recently an AI assistant with its own retrieval layer, and a robot it can
                      move.
                    </p>
                </div>
                <Link to="contact" href="#contact" spy={true} smooth={true} duration={500} className='btn btn-md bg-accent-solid hover:bg-accent-solid-hover md:btn-lg transition-all cursor-pointer'>
                  Get in touch
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
