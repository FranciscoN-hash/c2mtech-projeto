import { Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { TESTIMONIALS } from '../data';

function TestimonialCard({ name, role, quote, rating }: (typeof TESTIMONIALS)[number]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex gap-1 text-gold">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold" />
        ))}
      </div>
      <p className="mt-4 text-sm text-white/70">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/20 text-xs font-semibold text-neon">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-white/40">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
      <span className="section-eyebrow">Depoimentos</span>
      <h2 className="section-heading mt-3 max-w-xl">Quem confiou, aprovou.</h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
