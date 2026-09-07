import React from 'react';
import { createRoot } from 'react-dom/client';
import { IconContext } from 'react-icons';
import './index.css';
import App from './App';

// react-icons emette <svg role="img">, che senza nome accessibile viene
// segnalato da axe (svg-img-alt). Tutte le icone del sito sono decorative:
// il nome lo fornisce sempre un'etichetta visibile accanto (Skills, Services,
// Contact) o l'aria-label del link/bottone che le contiene (Socials, Footer,
// NavMobile, BackToTopBtn). Le marchiamo come tali da un unico punto.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{ attr: { 'aria-hidden': 'true' } }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
