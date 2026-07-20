/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#1A1A1A',
        ink: '#0B0B0B',
        neon: '#00B7FF',
        gold: '#FFC93C',
        whats: '#25D366',
      },
      fontFamily: {
        display: ['"Sora"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(0,183,255,0.35)',
        gold: '0 0 30px rgba(255,201,60,0.3)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at center, rgba(0,183,255,0.08) 0%, rgba(11,11,11,0) 70%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        pulseSoft: 'pulseSoft 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
