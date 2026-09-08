// import projects data
import { projectsData } from '../data';

// import components
import Project from './Project';

const Projects = () => {
  return (
    <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
      {projectsData.map((item) => {
        return <Project item={item} key={item.id} />;
      })}
    </section>
  );
};

export default Projects;
