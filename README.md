# C2MTECH — Landing Page

Projeto Vite + React + TypeScript + Tailwind CSS, com cena 3D em React Three Fiber (lazy-loaded), GSAP/Framer Motion para microinterações e todos os arquivos separados por responsabilidade.

## Como rodar no VS Code

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
# o terminal vai mostrar algo como http://localhost:5173
```

Requisitos: Node.js 18 ou superior.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
c2mtech-site/
├── index.html                 # HTML raiz + meta tags SEO/Open Graph/Schema.org
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js         # paleta de marca (neon, gold, graphite, ink)
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                # entry point do React
    ├── App.tsx                 # monta todas as seções, em ordem
    ├── index.css                # Tailwind + utilitários (.glass, .reveal, etc.)
    ├── data.ts                  # TODO o conteúdo textual do site, separado da UI
    ├── hooks/
    │   ├── useReveal.ts         # scroll-reveal (IntersectionObserver)
    │   └── useCountUp.ts        # contadores animados (Stats)
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx             # layout dividido: texto + Hero3D (lazy)
        ├── Hero3D.tsx           # cena Three.js/R3F — ISOLADA, mexa só aqui
        ├── MagneticButton.tsx   # botão reutilizável com efeito magnético
        ├── Marquee.tsx
        ├── Problems.tsx
        ├── Solutions.tsx
        ├── Portfolio.tsx
        ├── Stats.tsx
        ├── About.tsx
        ├── Scarcity.tsx
        ├── Curiosity.tsx
        ├── Offer.tsx
        ├── Testimonials.tsx
        ├── Footer.tsx
        └── WhatsAppButton.tsx
```

## Sobre o Hero3D.tsx

Esse componente foi deixado propositalmente isolado (sem nenhuma outra seção
importando lógica dele) para que futuras alterações na animação do hero
fiquem restritas a um único arquivo. A cena atual contém:

- Um icosaedro com `MeshDistortMaterial` (metalness alto, roughness baixo).
- Um campo de partículas azul/dourado usando `<Points>` do drei.
- Um anel dourado girando lentamente.
- Reação ao mouse (tilt do núcleo + parallax leve de câmera).
- Carregamento via `React.lazy` a partir de `Hero.tsx`, então o Three.js
  nunca entra no bundle principal.

## Notas de performance

- Three.js/R3F carrega sob demanda (`React.lazy` + `Suspense`).
- Contadores e reveals usam `IntersectionObserver`, não scroll listeners.
- `prefers-reduced-motion` é respeitado nos hooks `useReveal` e `useCountUp`.
- Tailwind gera apenas o CSS realmente utilizado no build de produção.
