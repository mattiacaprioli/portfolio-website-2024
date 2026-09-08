// case study images
import ClaudioBrain from '../assets/img/projects/claudio-brain.webp';

/* ---------------------------------------------------------------------------
   Case study: i due progetti che ho costruito io e che una card con immagine e
   titolo non puo raccontare. Ognuno diventa un <details> in #work, con l'`id`
   usato sia come id del DOM sia come target dell'hash (/#claudio-brain,
   /#topwaitr).

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
    period: 'Jun — Jul 2026',
    role: 'Solo project',
    tagline:
      'A shift marketplace for restaurants, with two sides: waiters finding work, owners staffing a service. Built entirely on Supabase.',
    // TODO: screenshot in arrivo. Finche `image` e null la card rende la cover
    // tipografica, che e una scelta visibile invece di un buco.
    image: null,
    imageAlt: null,
    links: [
      { label: 'Source', href: 'https://github.com/mattiacaprioli/topWaitr', kind: 'repo' },
      { label: 'Review page', href: 'https://mattiacaprioli.github.io/topWaitr', kind: 'page' },
    ],
    linksNote:
      'Not on the stores yet. The review page expects a token from a waiter’s QR code, so opening it directly shows the expired-link state.',
    contributions: [
      'Two role-specific apps behind one Expo Router tree, with row-level security per role on every table.',
      'Portable reviews: the customer scans the waiter’s QR code and rates them from a static web page, so the reputation follows the person.',
      'Push notifications with no backend of my own: a database trigger calls a Deno Edge Function through pg_net, which batches to the Expo Push API.',
      'The owner side: roster and invites, coverage requirements per role, no-show marking, and hours worked with PDF and CSV export.',
    ],
    stack: [
      'Expo SDK 56',
      'React Native',
      'expo-router',
      'Supabase',
      'RLS',
      'Deno Edge Functions',
      'TanStack Query',
      'zod',
      'NativeWind',
    ],
  },
];
