import { PenTool } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { FOUNDER } from '../data';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className="reveal flex flex-col items-center gap-10 md:flex-row">
        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full glass">
          <span className="font-display text-3xl font-extrabold">
            <span className="text-neon">C2M</span>
            <span className="text-gold">T</span>
          </span>
          <span className="absolute -bottom-2 -right-2 rounded-full bg-neon px-3 py-1 text-[10px] font-semibold text-ink">
            Desde 2026
          </span>
        </div>

        <div>
          <span className="section-eyebrow">Sobre a C2MTECH</span>
          <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            Tecnologia com propósito, feita para negócios reais.
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">{FOUNDER.bio}</p>
          <p className="mt-6 flex items-center gap-2 font-display italic text-white/40">
            <PenTool className="h-4 w-4" /> Equipe C2MTECH
          </p>
        </div>
      </div>
    </section>
  );
}
