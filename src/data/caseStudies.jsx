// case study images
import ClaudioBrain from '../assets/img/projects/claudio-brain.webp';
import TopWaitr from '../assets/img/projects/topwaitr.webp';

/* ---------------------------------------------------------------------------
   Case study: i due progetti che ho costruito io e che una card con immagine e
   titolo non puo raccontare. Ognuno diventa un <details> in #portfolio, con
   l'`id` usato sia come id del DOM sia come target dell'hash
   (/#claudio-brain, /#topwaitr).

   Qui dentro va SOLO roba mia. Il lavoro in Uidu sta in `experiences`: e un
   impiego, non un mio progetto, e affiancarlo a questi due suggerirebbe una
   paternita che non c'e.

   Deliberatamente corti: chiuso si legge la sola tagline, aperto si aggiungono
   tre o quattro righe su cosa ho fatto, lo stack e i link. Niente saggio.

   Schema. Obbligatori: id, name, kind ('lab' | 'product'), period, role,
   tagline, links, contributions, stack. Opzionali: image + imageAlt
   (null -> cover tipografica) e linksNote.
   --------------------------------------------------------------------------- */
export const caseStudies = [
  {
    id: 'claudio-brain',
    name: 'Claudio',
    kind: 'lab',
    period: 'Sep 2026',
    role: 'Solo project',
    tagline:
      'A personal AI assistant with conversational memory and hybrid retrieval over my own code — and a servo motor it can move. Built without LangChain and without an ORM, on purpose.',
    image: ClaudioBrain,
    imageAlt:
      'Claudio’s interface: on the left the code chunks hybrid search retrieved and the tools it ran with their durations, on the right the streamed answer.',
    links: [
      { label: 'Try the demo', href: 'https://claudio-brain.vercel.app', kind: 'live' },
      { label: 'Source', href: 'https://github.com/mattiacaprioli/claudio-brain', kind: 'repo' },
    ],
    linksNote:
      'The demo replays events recorded from real conversations — the backend runs on the robot.',
    contributions: [
      'Hybrid retrieval: pgvector HNSW similarity and Postgres full-text search fused with Reciprocal Rank Fusion in a single SQL query.',
      'An agent loop written by hand on native tool use, with three tools — git diff, Docker status, and the robot’s servo and LED.',
      'SSE streaming with typed events, so the interface shows which chunks it retrieved and which command it ran, in milliseconds.',
      'Memory as a rolling window plus a summary computed in the background, with prompt caching and cost per conversation.',
    ],
    stack: [
      'NestJS 12',
      'TypeScript',
      'Postgres + pgvector',
      'Anthropic API',
      'Voyage embeddings',
      'React 19',
      'Docker',
      'Vitest',
    ],
  },
  {
    id: 'topwaitr',
    name: 'topWaitr',
    kind: 'product',
    period: 'Jun — Sep 2026',
    role: 'Solo project',
    tagline:
      'Staff management for anyone who works in shifts: roster, schedule, hours and messages in one app, plus a browser dashboard for whoever plans the week. It was born in a dining room, but nothing in the model is restaurant-specific.',
    image: TopWaitr,
    imageAlt:
      'topWaitr’s product page: the headline “I turni del tuo locale, in un posto solo” beside a phone showing the week strip and the day’s two shifts — lunch fully staffed, dinner still one person short.',
    links: [
      { label: 'Product site', href: 'https://mattiacaprioli.github.io/topWaitr', kind: 'live' },
      { label: 'Source', href: 'https://github.com/mattiacaprioli/topWaitr', kind: 'repo' },
    ],
    linksNote:
      'Not on the stores yet. The site is the product page: the dashboard behind it is account-only, so it opens on the sign-in screen.',
    contributions: [
      'Two role-specific apps behind one Expo Router tree — the person who works the shift, the venue that assigns it — with row-level security per role on every table.',
      'One dataset, two surfaces: the phone for everyone, the browser for whoever plans, with a drag-and-drop week, duplication of the previous one, and print and CSV export.',
      'Hours count themselves: a confirmed shift becomes worked time, and someone on the roster of two venues stays one person with a single monthly total.',
      'Push notifications with no backend of my own: a database trigger calls a Deno Edge Function through pg_net, which batches to the Expo Push API.',
    ],
    stack: [
      'Expo SDK 56',
      'React Native',
      'expo-router',
      'React 19',
      'Vite',
      'Supabase',
      'RLS',
      'Deno Edge Functions',
      'TanStack Query',
      'zod',
      'NativeWind',
    ],
  },
];
