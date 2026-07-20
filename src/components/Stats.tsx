import { useCountUp } from '../hooks/useCountUp';
import { STATS } from '../data';

function Stat({ value, suffix, label }: (typeof STATS)[number]) {
  const { ref, value: current } = useCountUp<HTMLDivElement>(value);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl font-bold text-gold" style={{ textShadow: '0 0 22px rgba(255,201,60,0.35)' }}>
        {current}
        {suffix}
      </span>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/50">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-graphite/40 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
