import { FiChevronDown, FiExternalLink, FiGithub } from 'react-icons/fi';

import TechChips from './TechChips';

const KIND_LABEL = {
  product: 'Product',
  lab: 'Lab',
};

const linkClass = (kind) =>
  kind === 'live'
    ? 'bg-accent-solid hover:bg-accent-solid-hover text-white border border-transparent'
    : 'text-accent border border-accent/40 hover:border-accent hover:bg-accent/10';

const CaseStudy = ({ item, isOpen, onToggle }) => {
  return (
    /* `open` controllato + onToggle: si tiene la semantica nativa di <details>
       (tastiera, stato annunciato dagli screen reader, apertura automatica
       durante il find-in-page) e in piu il controllo programmatico che serve
       al deep link. Nessun aria-expanded aggiunto a mano: <details> lo
       annuncia gia da solo, e aggiungerlo produce un doppio annuncio. */
    <details
      id={item.id}
      open={isOpen}
      onToggle={(e) => onToggle(item.id, e.currentTarget.open)}
      className='group bg-tertiary rounded-2xl shadow-lg scroll-mt-28'
    >
      <summary className='list-none cursor-pointer p-6 lg:p-8 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'>
        <div className='flex flex-wrap items-center gap-3 mb-4'>
          <span className='text-xs uppercase tracking-[0.15em] text-white bg-white/5 border border-white/15 rounded-full px-3 py-1'>
            {KIND_LABEL[item.kind]}
          </span>
          <span className='text-sm text-paragraph'>{item.period}</span>
        </div>

        <h3 className='text-2xl lg:text-3xl font-semibold mb-3'>{item.name}</h3>
        <p className='text-paragraph max-w-[68ch] mb-6'>{item.tagline}</p>

        <span className='inline-flex items-center gap-2 text-sm text-accent'>
          <span className='group-open:hidden'>Read more</span>
          <span className='hidden group-open:inline'>Show less</span>
          <FiChevronDown
            aria-hidden='true'
            className='transition-transform duration-300 group-open:rotate-180'
          />
        </span>
      </summary>

      <div className='px-6 pb-6 lg:px-8 lg:pb-8 flex flex-col gap-6'>
        {/* Media e testo affiancati da xl, impilati sotto. Lo screenshot ha una
            larghezza nativa di 1200px: a tutta larghezza della card veniva
            ingrandito oltre quella misura e dominava lo schermo. Il tetto di
            max-w-2xl sotto xl e la colonna 3fr sopra lo tengono sempre sotto
            gli ~800px, cioe una preview e non un hero. */}
        <div className='flex flex-col gap-6 xl:grid xl:grid-cols-[3fr_2fr] xl:gap-8 xl:items-start'>
          {item.image ? (
            <div className='w-full max-w-2xl xl:max-w-none bg-secondary border border-white/5 rounded-lg p-3 lg:p-4'>
              <img
                src={item.image}
                alt={item.imageAlt}
                width='1200'
                height='553'
                loading='lazy'
                decoding='async'
                className='w-full h-auto rounded'
              />
            </div>
          ) : (
            /* Cover tipografica finche non c'e uno screenshot: si legge come
               una scelta, non come un'immagine mancante. */
            <div className='w-full max-w-2xl xl:max-w-none bg-secondary border border-white/5 rounded-lg p-8 lg:p-10 flex flex-col items-start gap-3'>
              <span className='font-primary text-4xl lg:text-5xl text-white'>{item.name}</span>
              <span className='text-sm text-paragraph'>
                {item.role} · {item.period}
              </span>
            </div>
          )}

          <ul className='flex flex-col gap-3 max-w-[72ch]'>
            {item.contributions.map((line) => (
              <li key={line} className='pl-4 border-l border-white/10'>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <TechChips items={item.stack} />

        <div className='flex flex-col gap-3'>
          {item.links.length > 0 && (
            <div className='flex flex-wrap gap-3'>
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  /* py-3 e non py-2.5: a 2.5 il bottone misura 42px e resta
                     sotto il tap target minimo di 44 */
                  className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${linkClass(
                    link.kind,
                  )}`}
                >
                  {link.kind === 'repo' ? (
                    <FiGithub aria-hidden='true' />
                  ) : (
                    <FiExternalLink aria-hidden='true' />
                  )}
                  {link.label}
                  {/* Nome accessibile unico: senza questo, due "Source" sono
                      indistinguibili nella lista dei link di uno screen reader.
                      Un aria-label lo risolverebbe nascondendo il testo
                      visibile al controllo vocale, questo no. */}
                  <span className='sr-only'> — {item.name}</span>
                </a>
              ))}
            </div>
          )}
          {item.linksNote && <p className='text-sm text-paragraph max-w-[68ch]'>{item.linksNote}</p>}
        </div>
      </div>
    </details>
  );
};

export default CaseStudy;
