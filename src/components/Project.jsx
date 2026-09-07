const Project = ({ item }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-8 h-[135px] flex items-center justify-center'>
        <a
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Open the ${item.name} project`}
        >
          <img
            className='rounded-2xl max-h-[135px] w-auto'
            src={item.image}
            alt={`${item.name} screenshot`}
            loading='lazy'
            decoding='async'
          />
        </a>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  );
};

export default Project;
