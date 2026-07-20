import { Lightbulb } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { whatsappLink } from "../data";

export default function Offer() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="oferta" className="py-20 px-6">
      <div 
        ref={ref} 
        className="reveal max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-md flex flex-col items-center text-center shadow-2xl"
      >
        <div className="p-4 rounded-full bg-cyan-500/10 mb-6">
          <Lightbulb className="w-8 h-8 text-cyan-400" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Pronto para elevar o nível da sua empresa?
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Unimos engenharia e design para criar sites que convertem visitantes em clientes reais. Fale com a gente e receba uma análise sem compromisso.
        </p>

        <a
          href={whatsappLink('Olá! Gostaria de uma análise para o meu projeto.')}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl font-bold text-black bg-white hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Solicitar Análise Gratuita
        </a>
      </div>
    </section>
  );
}