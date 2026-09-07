import { useState } from 'react';

// import projects data
import { projectsData } from '../data';
// import projects nav data
import { projectsNav } from '../data';

// import components
import Project from './Project';

const Projects = () => {
  const [active, setActive] = useState(0);

  // stato derivato: nessun useEffect da tenere sincronizzato
  const activeCategory = projectsNav[active].name;
  const projects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return (
              <li key={index} className='m-4'>
                <button
                  type='button'
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`${
                    active === index ? 'active' : ''
                  } cursor-pointer capitalize hover:text-accent transition-colors`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects grid */}
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
