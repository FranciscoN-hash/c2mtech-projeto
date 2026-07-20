import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[#070a13] text-white overflow-hidden font-sans select-none">
      
      {/* Instância do Elemento 3D de Fundo */}
      <Hero3D />

      {/* Conteúdo de Texto e Conversão */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <main className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 py-24">
          
          {/* Alinhamento de UI Premium (Esquerda) */}
          <div className="w-full md:w-7/12 flex flex-col text-left pr-0 md:pr-12">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/[0.06] border border-[#38bdf8]/[0.15] w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-[#38bdf8] text-xs font-semibold tracking-wider uppercase">
                Estúdio de Engenharia Digital
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Construímos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-[#38bdf8]">
                ecossistemas de
              </span> <br />
              alta performance.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed mb-8 max-w-xl">
              De plataformas corporativas a experiências imersivas sob medida. Desenvolvemos interfaces sofisticadas que convertem visitantes em clientes fiéis.
            </p>

            {/* Tags de Expertise */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["React & Next.js", "Three.js / WebGL", "UI/UX Avançado", "SEO Otimizado", "Performance Máxima"].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.05] text-xs font-medium text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Chamadas para Ação */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-7 py-3.5 rounded-lg bg-[#38bdf8] text-black font-bold shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:bg-[#0ea5e9] hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 text-sm pointer-events-auto">
                Iniciar um Projeto
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="px-7 py-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white font-semibold text-sm hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-center gap-2 pointer-events-auto">
                Conhecer Portfólio
              </button>
            </div>

          </div>

          {/* Spacer Inteligente para Preservar o Visual do Orbe 3D na Direita */}
          <div className="w-full md:w-5/12 h-48 md:h-auto pointer-events-none" />
          
        </main>
      </div>

    </div>
  );
}