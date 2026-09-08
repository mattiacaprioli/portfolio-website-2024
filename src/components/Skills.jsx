import { Fragment } from 'react';

// import skills data
import { skillGroups } from '../data';

const Skills = () => {
  return (
    <section id='skills' aria-labelledby='skills-title' className='bg-tertiary py-12 lg:py-16'>
      <div className='container mx-auto'>
        {/* Il titolo non e piu sr-only: con 24 voci raggruppate la strip non e
            decorazione, e il modo piu rapido di dimostrare l'h1. */}
        <h2 id='skills-title' className='text-2xl lg:text-3xl font-medium mb-8 lg:mb-10'>
          What I work with
        </h2>
        {/* dt e dd sono figli diretti della griglia, cosi la colonna delle
            etichette si allinea da sola senza subgrid. Il layout va a capo
            invece di avere colonne fisse: la vecchia `md:grid-cols-8`
            funzionava solo perche le skill erano esattamente 8. */}
        <dl className='grid gap-y-6 sm:grid-cols-[10rem_1fr] sm:gap-x-8'>
          {skillGroups.map((group) => (
            <Fragment key={group.group}>
              <dt className='text-xs uppercase tracking-[0.15em] text-accent mb-3 sm:mb-0 sm:text-right sm:pt-1'>
                {group.group}
              </dt>
              <dd className='flex flex-wrap gap-x-6 gap-y-3'>
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className='flex items-center gap-2 transition-transform duration-300 hover:scale-105'
                  >
                    <span className='text-[22px] leading-none' style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className='text-sm text-paragraph'>{skill.name}</span>
                  </span>
                ))}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
