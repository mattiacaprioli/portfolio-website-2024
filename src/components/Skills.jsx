// import skills data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <h2 className='sr-only'>Technologies I work with</h2>
        <ul className='grid grid-cols-4 md:grid-cols-8 gap-y-8'>
          {skills.map((skill) => {
            return (
              <li
                key={skill.name}
                className='flex flex-col items-center justify-start gap-3 transition-transform duration-300 hover:scale-110'
              >
                <span className='text-[44px] leading-none' style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className='text-xs text-paragraph text-center leading-tight'>
                  {skill.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
