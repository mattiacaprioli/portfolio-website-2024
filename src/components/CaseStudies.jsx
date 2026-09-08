import { useEffect, useState } from 'react';

import { caseStudies } from '../data';
import CaseStudy from './CaseStudy';

const hashId = () => decodeURIComponent(window.location.hash.slice(1));
const isKnown = (id) => caseStudies.some((study) => study.id === id);

/* Deep link: /#claudio-brain e /#topwaitr aprono il case study corrispondente.
   Serve perche un case study e la cosa che si incolla in una candidatura, e con
   i <details> chiusi un'ancora nuda porterebbe a un titolo senza contenuto.
   Gli id stanno sui <details>, non sulla sezione, quindi restano validi anche
   ora che questo blocco vive dentro #portfolio. */
const initialOpen = () => {
  const id = hashId();
  return isKnown(id) ? { [id]: true } : {};
};

/* Non e una sezione a se: rende solo la lista dei case study, dentro
   #portfolio. "Work" e "Portfolio" erano due etichette per un solo concetto —
   progetti che ho costruito — e in nav non dicevano niente al visitatore. */
const CaseStudies = () => {
  // derivato dall'hash al primo render, non impostato dentro un effetto:
  // cosi il <details> nasce gia aperto e non c'e un render a vuoto
  const [open, setOpen] = useState(initialOpen);

  useEffect(() => {
    /* Al mount lo scroll va rifatto a mano: su un caricamento a freddo il
       browser salta all'ancora prima che React abbia reso la sezione, quindi
       non trova nulla. Su hashchange invece il browser ha gia scrollato e
       l'elemento c'e: basta aprirlo, e il contenuto cresce verso il basso
       senza spostare il summary su cui si e atterrati. */
    const id = hashId();
    let taken = false;

    /* Aspetta i font: con display=swap Playfair e Work Sans si sostituiscono
       dopo il primo paint, il testo sopra la sezione si ridispone e il
       bersaglio scivola di decine di pixel sotto l'header fisso. Scrollare
       prima significa atterrare sulla card tagliata a meta. */
    const scrollToStudy = () => {
      if (taken) return;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // se l'utente prende il controllo prima che i font arrivino, non
    // riportarlo indietro. wheel/touch/keydown non sono emessi da uno
    // scroll programmatico, a differenza di 'scroll'.
    const release = () => {
      taken = true;
    };

    if (isKnown(id)) {
      ['wheel', 'touchstart', 'keydown'].forEach((event) =>
        window.addEventListener(event, release, { once: true, passive: true }),
      );
      document.fonts.ready.then(scrollToStudy);
    }

    const onHashChange = () => {
      const next = hashId();
      if (isKnown(next)) setOpen((prev) => ({ ...prev, [next]: true }));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      taken = true;
      ['wheel', 'touchstart', 'keydown'].forEach((event) =>
        window.removeEventListener(event, release),
      );
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // il guard evita un render inutile quando il toggle nativo e lo stato React
  // dicono gia la stessa cosa (succede al primo paint dopo un deep link)
  const handleToggle = (id, isOpen) =>
    setOpen((prev) => (prev[id] === isOpen ? prev : { ...prev, [id]: isOpen }));

  return (
    <div className='flex flex-col gap-6 lg:gap-8'>
      {caseStudies.map((study) => (
        <CaseStudy
          key={study.id}
          item={study}
          isOpen={Boolean(open[study.id])}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default CaseStudies;
