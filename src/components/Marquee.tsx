import { MARQUEE_ITEMS } from '../data';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-y border-white/5 bg-graphite/60 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap text-sm tracking-wide ${
              item === '★★★★★' ? 'text-gold' : 'text-white/50'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
