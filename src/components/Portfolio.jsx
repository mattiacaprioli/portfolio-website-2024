// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:left-1/2 before:-translate-x-1/2 before:hidden before:lg:block'>
                Smaller projects
            </h2>
            <p className='subtitle'>
              Front-end practice work, each one built to learn a specific thing.
              Every card opens the live demo, or the source where there isn’t one.
            </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
