import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  mockupUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Clínica Odontológica Sorriso+",
    category: "Health & Medical",
    description: "Plataforma médica com ecossistema de agendamento em tempo real sincronizado e otimização de conversão via WhatsApp.",
    tags: ["React", "UI/UX", "API Integration"],
    mockupUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Jhon's Lanches",
    category: "E-Commerce / Delivery",
    description: "Cardápio digital progressivo integrado com gerenciador de pedidos automatizado e infraestrutura serverless de alta velocidade.",
    tags: ["Next.js", "Tailwind", "Live Cart"],
    mockupUrl: ":\Users\najuu\OneDrive\Desktop\C2MTECH\Template- list 2.0\restaurante\Img\logo principal.jpg"
  },
    {
  id: 3,
  title: "Advogado",
  category: "Legal Tech / Consultoria",
  description: "Plataforma de consultoria jurídica online com sistema de agendamento, gestão de documentos e área segura para clientes.",
  tags: ["TypeScript", "Node.js", "Animations"],
  mockupUrl: "https://images.unsplash.com/photo-1589829545856-3b0451996773?auto=format&fit=crop&q=80&w=600"
},
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="w-full bg-[#070a13] text-white py-32 px-6 sm:px-12 md:px-20 relative overflow-hidden">
      
      {/* 1. CABEÇALHO DO PORTFÓLIO */}
      <div className="w-full max-w-7xl mx-auto mb-24">
        <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase block mb-3">
          PRODUÇÕES EXCLUSIVAS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Projetos que definem o <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-[#38bdf8]">
            padrão do mercado.
          </span>
        </h2>
      </div>

      {/* 2. LISTA DE PROJETOS COM SCROLL ATIVO NO HOVER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-32 mb-40">
        {projectsData.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={project.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-12 group`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Janela de Navegador Interativa */}
              <div className="w-full md:w-6/12 aspect-[16/10] bg-[#0d1324] rounded-xl border border-white/[0.06] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-[#38bdf8]/0.3 group-hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] transition-all duration-500">
                <div className="w-full h-8 bg-[#0a0f1d] border-b border-white/[0.06] flex items-center px-4 gap-1.5 shrink-0 z-10 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="w-full h-[calc(100%-2rem)] overflow-hidden relative">
                  <div 
                    className="w-full absolute top-0 transition-all duration-[6000ms] ease-in-out"
                    style={{
                      transform: activeProject === project.id ? "translateY(calc(-100% + 100%))" : "translateY(0%)",
                    }}
                  >
                    <img 
                      src={project.mockupUrl} 
                      alt={project.title}
                      className="w-full object-cover origin-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
              </div>

              {/* Textos Informativos */}
              <div className="w-full md:w-5/12 flex flex-col text-left">
                <span className="text-xs font-mono text-gray-500 mb-2 tracking-wider">// {project.category}</span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-[#38bdf8] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-medium text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    
   {/* Bloco de Autoridade Aprimorado */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="p-8 md:p-12 my-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-2xl"
>
  

  {/* Ícone com brilho suave */}
    <div className="p-4 rounded-full bg-cyan-500/10 mb-6">
      <Lightbulb className="h-8 w-8 text-cyan-400" />
    </div>

  
   <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
      <span className="text-cyan-400">70%</span> dos clientes pesquisam uma <br className="hidden md:block" /> 
      empresa na internet antes de contratar.
    </h2>
  
  <p className="text-gray-400 max-w-lg leading-relaxed">
    Se o seu site não passa confiança, o seu cliente escolhe o concorrente. 
    Não deixe o seu faturamento na mesa.
  </p>
</motion.div>

      {/* 4. CONVERSÃO FINAL PREMIUM (Substitui a antiga Faixa Verde de "Site Grátis") */}
      {/* Container Principal da Seção */}
<div className="w-full max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-[#121b3a] via-[#0b0f19] to-[#070a13] p-10 relative overflow-hidden">
  
  {/* Elemento de Efeito Visual */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent)]" />
  
  <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 relative z-10 tracking-tight leading-tight">
    Vamos construir sua nova <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-cyan-400 to-indigo-400">
      experiência digital
    </span>
  </h2>

  

  {/* Container do Botão Centralizado */}
  <div className="flex justify-center w-full relative z-10 mt-8">

    
    <button className="group relative px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 ease-out 
      bg-gradient-to-r from-blue-600 to-cyan-500 
      hover:from-blue-500 hover:to-cyan-400 
      hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] 
      active:scale-95 flex items-center gap-2">
      
      <span>Quero Iniciar Minha Análise</span>
      
      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  </div> 

</div> {/* AQUI É O FECHAMENTO DO DIV PRINCIPAL QUE ESTAVA FALTANDO */}

    </section>
  );
}