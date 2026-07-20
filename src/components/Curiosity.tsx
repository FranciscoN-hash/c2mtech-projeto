import { Lightbulb } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Curiosity() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div 
        ref={ref} 
        className="reveal p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl flex flex-col items-center text-center"
      >
        <div className="p-4 rounded-full bg-cyan-500/10 mb-6">
          <Lightbulb className="h-8 w-8 text-cyan-400" />
        </div>

       <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
  Sua vitrine digital está <br className="hidden md:block" /> 
  <span className="text-cyan-400">afastando clientes?</span>
</h2>

<p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
  Um site amador é a porta aberta para o seu concorrente. Transforme sua presença online em uma máquina de fechar novos negócios.
</p>
      </div>
    </section>
  );
}