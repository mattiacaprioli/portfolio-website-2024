/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/outline-text/about.svg")',
        portfolio: 'url("/outline-text/portfolio.svg")',
        services: 'url("/outline-text/services.svg")',
        contact: 'url("/outline-text/contact.svg")',
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        // L'accent fa due lavori con requisiti di contrasto opposti:
        // come testo su fondo scuro deve schiarirsi, come sfondo di un
        // bottone con testo bianco deve scurirsi. Un solo valore non puo
        // soddisfare entrambi, quindi sono due token.
        accent: {
          // primo piano: testo, icone, bordi, focus ring sui fondi scuri.
          // Contrasto minimo 4.61 (su secondary #1C1D24, il fondo peggiore).
          DEFAULT: '#bd7539',
          // sfondo pieno dei bottoni, sempre con testo bianco sopra: 4.62.
          solid: '#a56632',
          'solid-hover': '#8e582b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
