// import skills data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <h2 className='sr-only'>Technologies I work with</h2>
        <div className='grid grid-cols-4 md:grid-cols-8 gap-y-8'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='h-24 flex items-center justify-center'>
                <img
                  className='max-h-24 w-auto'
                  src={skill.image}
                  alt={skill.name}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
