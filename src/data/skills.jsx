import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiRelay,
  SiReactquery,
  SiTailwindcss,
  SiRuby,
  SiRubyonrails,
  SiGraphql,
  SiNodedotjs,
  SiNestjs,
  SiSidekiq,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiDocker,
  SiGit,
  SiAnthropic,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiSearch, FiZap } from 'react-icons/fi';

/* ---------------------------------------------------------------------------
   Skill raggruppate. Il raggruppamento non e cosmetico: e cio che comunica il
   posizionamento full-stack prima che il visitatore legga una parola, perche
   la riga "Back end" appare dove prima c'era solo front-end.

   `color` e il colore ufficiale del brand, TRANNE quando il brand e nero o
   quasi (Next.js #000000, Expo #000020): su questo fondo sarebbe invisibile,
   quindi si usa il bianco. Le due voci AI che non sono un prodotto usano
   l'accent del sito: dice "queste sono pratiche, non prodotti".

   Il layout e a righe (un <dl>), non a colonne fisse: la vecchia griglia
   `md:grid-cols-8` funzionava solo perche le skill erano esattamente 8, e si
   sarebbe rotta a ogni aggiunta.
   --------------------------------------------------------------------------- */
export const skillGroups = [
  {
    group: 'Front end',
    items: [
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
      { name: 'Expo', icon: <SiExpo />, color: '#FFFFFF' },
      { name: 'Relay', icon: <SiRelay />, color: '#F26B00' },
      { name: 'TanStack Query', icon: <SiReactquery />, color: '#FF4154' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    group: 'Back end',
    items: [
      { name: 'Ruby on Rails', icon: <SiRubyonrails />, color: '#D30001' },
      { name: 'Ruby', icon: <SiRuby />, color: '#CC342D' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#5FA04E' },
      { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
      { name: 'Sidekiq', icon: <SiSidekiq />, color: '#B1003E' },
    ],
  },
  {
    group: 'Data & infrastructure',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis />, color: '#FF4438' },
      { name: 'Supabase', icon: <SiSupabase />, color: '#3FCF8E' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
    ],
  },
  {
    group: 'AI',
    items: [
      { name: 'Anthropic API', icon: <SiAnthropic />, color: '#D97757' },
      { name: 'RAG & pgvector', icon: <FiSearch />, color: '#BD7539' },
      { name: 'Agents & tool use', icon: <FiZap />, color: '#BD7539' },
    ],
  },
];
