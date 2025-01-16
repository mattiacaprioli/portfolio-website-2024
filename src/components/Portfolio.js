import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                My latest work
            </h2>
            <p className='subtitle'>
              The projects section is still in the making.
              Come back later to learn more about my work!
            </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
