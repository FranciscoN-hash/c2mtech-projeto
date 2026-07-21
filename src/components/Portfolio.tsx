import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
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
    mockupUrl: "img/img1.jpg"
  },
  {
    id: 2,
    title: "Jhon's Lanches",
    category: "E-Commerce / Delivery",
    description: "Cardápio digital progressivo integrado com gerenciador de pedidos automatizado e infraestrutura serverless de alta velocidade.",
    tags: ["Next.js", "Tailwind", "Live Cart"],
    mockupUrl: "img/img2.jpg"
  },
  {
    id: 3,
    title: "Advogado",
    category: "Legal Tech / Consultoria",
    description: "Plataforma de consultoria jurídica online com sistema de agendamento, gestão de documentos e área segura para clientes.",
    tags: ["TypeScript", "Node.js", "Animations"],
    mockupUrl: "img/img3.jpg"
  }
];

export default function Portfolio() {
  const [, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 p-5 flex flex-col justify-between 
                         transition-all duration-300 ease-in-out 
                         hover:-translate-y-2 hover:border-cyan-500/50 
                         hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div>
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.mockupUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-lg 
                               transition-transform duration-500 ease-in-out 
                               group-hover:scale-110" 
                  />
                </div>
                <span className="text-xs text-cyan-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-3">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}