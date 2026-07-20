import * as Icons from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SOLUTIONS, whatsappLink } from '../data';

function SolutionCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-2xl glass p-7 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon/0 via-neon/0 to-gold/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 group-hover:from-neon/40 group-hover:to-gold/40" />
      <Icon className="h-7 w-7 text-neon" />
      <h3 className="mt-4 font-display font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
      <a
        href={whatsappLink(`Olá! Quero saber mais sobre "${title}".`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block text-sm font-semibold text-neon transition-colors hover:text-gold"
      >
        Saiba mais →
      </a>
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="solucoes" className="mx-auto max-w-6xl px-6 py-24">
      <span className="section-eyebrow">O que fazemos</span>
      <h2 className="section-heading mt-3 max-w-xl">
        Soluções completas para o seu negócio vender mais.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s) => (
          <SolutionCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
