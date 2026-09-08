// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center mb-10'>
            {/* left-1/2 + -translate-x-1/2 invece di un offset fisso: la
                scritta-contorno resta centrata sul titolo qualunque sia la
                larghezza del testo e del breakpoint. Con `-left-28` era
                fuori di ~77px, perche l'offset giusto dipende da
                (larghezza titolo - larghezza svg) / 2. */}
            <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:left-1/2 before:-translate-x-1/2 before:hidden before:lg:block'>
                What I do
            </h2>
        </div>
        {/* item grid */}
        <div className='grid lg:grid-cols-4 gap-8'>
            {services.map((service, index) => {
                const {icon, name, description} = service;
                return <div className='bg-secondary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300' key={index}>
                    {/* icon */}
                    <div className='text-accent rounded-xs w-12 h-12 flex justify-center items-center mb-16 text-[28px]'>{icon}</div>
                    <h3 className='text-xl font-medium mb-2'>{name}</h3>
                    <p>{description}</p>
                </div>
            })}
        </div>
      </div>
    </section>
  )
}

export default Services
