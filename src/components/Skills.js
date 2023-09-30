import React from 'react'

//import skills data   DEVI VEDERE QUALI SONO LE IMMAGINI DA CAMBIARE!!!
import {skills} from '../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
            {skills.map((skill, index) => {
                return <div key={index} className='flex items-center justify-center'>
                    <img src={skill.image} alt=''/>
                </div>
            })}
        </div>
      </div>
    </section>
  )
}

export default Skills
