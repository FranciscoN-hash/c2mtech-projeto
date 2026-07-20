import { AlertTriangle, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { PROBLEMS } from '../data';

function ProblemCard({ title, description }: { title: string; description: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal glass rounded-2xl p-6">
      <AlertTriangle className="h-6 w-6 text-red-400" />
      <h3 className="mt-4 font-display font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
    </div>
  );
}

export default function Problems() {
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <section id="problemas" className="mx-auto max-w-6xl px-6 py-24">
      <span className="section-eyebrow">O que está travando suas vendas</span>
      <h2 className="section-heading mt-3 max-w-xl">
        Se o seu site tem algum destes problemas, você está perdendo clientes agora.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <ProblemCard key={p.title} {...p} />
        ))}

        <div
          ref={ctaRef}
          className="reveal flex flex-col justify-between rounded-2xl bg-neon p-6 text-ink"
        >
          <div>
            <h3 className="font-display text-lg font-bold">Reconheceu algum desses?</h3>
            <p className="mt-2 text-sm text-ink/80">
              A gente resolve. Veja como logo abaixo.
            </p>
          </div>
          <a href="#solucoes" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
            Ver soluções <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
