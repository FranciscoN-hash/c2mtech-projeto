import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Scarcity() {
  const ref = useReveal<HTMLDivElement>();
  const [slots, setSlots] = useState(5);

  // Simulates limited monthly slots ticking down while the section is
  // visible — a simple, honest scarcity signal (not a countdown timer
  // that resets on refresh, which would be misleading).
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setSlots(1);
      return;
    }
    const timers = [1, 2, 3, 4].map((n) =>
      setTimeout(() => setSlots(5 - n), 900 * n)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-12 px-6">
  <div 
    ref={ref} 
    className="reveal mx-auto max-w-3xl p-8 md:p-10 rounded-3xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm flex flex-col items-center gap-3 text-center shadow-[0_0_50px_-12px_rgba(245,158,11,0.15)]"
  >
    {/* Tag de Destaque */}
    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
      Vagas Limitadas
    </span>
    
    {/* Título com ênfase no número */}
    <p className="font-display text-2xl md:text-4xl font-extrabold text-white">
      Restam apenas <span className="text-amber-400 tabular-nums">{slots}</span> vagas este mês
    </p>
    
    {/* Texto de suporte */}
    <p className="text-sm md:text-base text-gray-400 max-w-md">
      Trabalhamos com número limitado de projetos para garantir suporte exclusivo e entrega de alta performance.
    </p>
  </div>
</section>
  );
}
