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
      {/* Box a rapporto fisso invece di un'altezza fissa con `w-auto`: cosi
          l'immagine si adatta alla larghezza della colonna e non sfonda a
          nessun breakpoint (a 4 colonne la colonna e piu stretta della
          larghezza che l'immagine assumeva a 135px di altezza). Il rapporto
          riserva lo spazio prima del caricamento, quindi niente layout shift,
          e le card restano tutte della stessa altezza. */}
      <div className='mb-6 w-full aspect-[800/380] overflow-hidden rounded-2xl'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
          src={item.image}
          alt=''
          loading='lazy'
          decoding='async'
        />
      </div>
      <p className='text-accent text-sm mb-3'>{item.category}</p>
      {/* h4 e non h3: il titolo "Earlier work" che introduce questa griglia e
          un h3, e index.css rende h1-h6 identici, quindi il livello corretto
          non costa nulla visivamente. */}
      <h4 className='text-2xl font-semibold capitalize mb-3 group-hover:text-accent transition-colors'>
        {item.name}
      </h4>
    </a>
  );
};

export default Project;
