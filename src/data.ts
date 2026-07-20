export const WHATSAPP_NUMBER = '+55 (31)97351-5365';

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const MARQUEE_ITEMS = [
  '★★★★★',
  'Sites Institucionais',
  'Landing Pages',
  'E-commerce',
  'React',
  'Three.js',
  'Automação com IA',
  'SEO Técnico',
  'Performance 95+',
];

export const PROBLEMS = [
  {
    title: 'Site lento',
    description: 'Clientes desistem antes mesmo da página carregar por completo.',
  },
  {
    title: 'Design amador',
    description: 'A primeira impressão afasta quem já estava pronto para comprar.',
  },
  {
    title: 'Não aparece no Google',
    description: 'Sua empresa existe, mas é invisível para quem está pesquisando.',
  },
  {
    title: 'Não converte',
    description: 'Muitas visitas, poucos contatos — o site não conduz ninguém à ação.',
  },
  {
    title: 'Sem manutenção',
    description: 'Depois de pronto, o site fica desatualizado e ninguém cuida dele.',
  },
];

export const SOLUTIONS = [
  {
    title: 'Sites Institucionais',
    description: 'Presença profissional que transmite autoridade desde o primeiro clique.',
    icon: 'Globe',
  },
  {
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas focadas em transformar visitantes em clientes reais.',
    icon: 'Target',
  },
  {
    title: 'Sistemas Sob Medida',
    description: 'Ferramentas internas que automatizam processos do seu negócio.',
    icon: 'Cpu',
  },
  {
    title: 'E-commerce',
    description: 'Lojas virtuais rápidas, seguras e prontas para escalar vendas.',
    icon: 'ShoppingBag',
  },
  {
    title: 'SEO Técnico',
    description: 'Estrutura pensada para o Google encontrar e recomendar seu site.',
    icon: 'Search',
  },
  {
    title: 'Manutenção Contínua',
    description: 'Atualizações, segurança e suporte real depois da entrega.',
    icon: 'ShieldCheck',
  },
];

export const PORTFOLIO = [
  {
    title: 'Clínica Odontológica Sorriso+',
    description: 'Site institucional com agendamento integrado ao WhatsApp.',
    device: 'notebook' as const,
  },
  {
    title: "JHON'S LANCHES",
    description: 'Landing page de delivery com cardápio digital e CTAs diretos.',
    device: 'tablet' as const,
  },
  {
    title: 'Studio Barber Club',
    description: 'Site responsivo com galeria de cortes e reservas online.',
    device: 'smartphone' as const,
  },
];

export const STATS = [
  { value: 100, suffix: '+', label: 'Projetos entregues' },
  { value: 98, suffix: '%', label: 'Satisfação dos clientes' },
  { value: 24, suffix: 'h', label: 'Suporte prioritário' },
  { value: 5, suffix: '★', label: 'Avaliação média' },
];

export const TESTIMONIALS = [
  {
    name: 'Marcelo Andrade',
    role: 'JHON\'S LANCHES — Sorocaba/SP',
    quote:
      'Depois do site novo, os pedidos pelo WhatsApp praticamente dobraram. Ficou com a cara do negócio.',
    rating: 5,
  },
  {
    name: 'Dra. Fernanda Lima',
    role: 'Clínica Sorriso+',
    quote:
      'Finalmente um site que passa confiança antes mesmo do paciente entrar em contato.',
    rating: 5,
  },
  {
    name: 'Rodrigo Souza',
    role: 'Studio Barber Club',
    quote: 'Rápido, bonito e fácil de atualizar. Exatamente o que eu precisava.',
    rating: 5,
  },
];

export const FOUNDER = {
  name: 'C2MTECH',
  bio:
    'Nascemos para resolver um problema simples: pequenas e médias empresas não deveriam ter que escolher entre um site bonito e um site que vende. Unimos engenharia de software, design e estratégia de conversão em um único processo — pensado para negócios que querem crescer de verdade na internet.',
};
