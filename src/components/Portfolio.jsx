// import components
import CaseStudies from './CaseStudies';
import Projects from './Projects';

/* Una sola sezione per i progetti. Prima erano due, #work e #portfolio, che
   in nav si leggevano come due cose diverse mentre erano la stessa: roba che
   ho costruito. Ora la differenza di profondita la fa la gerarchia visiva —
   due card espandibili in alto, quattro miniature sotto — invece di due
   titoli e due voci di menu. */
const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:left-1/2 before:-translate-x-1/2 before:hidden before:lg:block'>
            Things I built
          </h2>
          <p className='subtitle'>
            Two recent projects, and the front-end work that came before.
          </p>
        </div>

        <CaseStudies />

        <div className='mt-16 lg:mt-24'>
          <h3 className='text-xs uppercase tracking-[0.2em] text-paragraph text-center mb-10'>
            Earlier work
          </h3>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
