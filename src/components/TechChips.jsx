/* Chip di tecnologia. Contrasto verificato: text-paragraph #878e99 su
   bg-secondary #1c1d24 = 5.09:1, quindi AA anche a 12px, dove non vale
   l'esenzione per il testo grande. */
const TechChips = ({ items, className = '' }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((item) => (
      <li
        key={item}
        className='text-xs text-paragraph bg-secondary border border-white/5 rounded-full px-3 py-1'
      >
        {item}
      </li>
    ))}
  </ul>
);

export default TechChips;
