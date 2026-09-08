// import projects data
import { projectsData } from '../data';

// import components
import Project from './Project';

const Projects = () => {
  return (
    /* 2 colonne da sm e 4 da xl: con quattro card, tre colonne lascerebbero un
       orfano da solo sulla seconda riga. */
    <section className='grid sm:grid-cols-2 xl:grid-cols-4 gap-y-12 sm:gap-x-8 lg:gap-y-10'>
      {projectsData.map((item) => {
        return <Project item={item} key={item.id} />;
      })}
    </section>
  );
};

export default Projects;
