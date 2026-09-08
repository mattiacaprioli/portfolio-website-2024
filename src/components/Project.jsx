const Project = ({ item }) => {
  return (
    /* Il link avvolge tutta la card, non solo l'immagine: prima il titolo non
       era cliccabile e il tap target era la sola miniatura.
       Niente aria-label: il nome accessibile viene dal titolo dentro il link,
       che e cio che l'utente vede e cio che pronuncia il controllo vocale.
       Per lo stesso motivo alt='' — con un alt descrittivo lo screen reader
       annuncerebbe il progetto due volte. */
    <a
      href={item.href}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex flex-col items-center text-center rounded-2xl p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
    >
      {/* il wrapper ha altezza fissa, quindi lo spazio e gia riservato prima
          che l'immagine carichi: nessun layout shift */}
      <div className='mb-8 h-[135px] flex items-center justify-center'>
        <img
          className='rounded-2xl max-h-[135px] w-auto transition-transform duration-300 group-hover:scale-[1.03]'
          src={item.image}
          alt=''
          loading='lazy'
          decoding='async'
        />
      </div>
      {/* niente `capitalize`: le etichette sono gia scritte come vanno, e la
          regola CSS rovinerebbe "Next.js" rendendolo "Next.Js" */}
      <p className='text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 group-hover:text-accent transition-colors'>
        {item.name}
      </h3>
    </a>
  );
};

export default Project;
