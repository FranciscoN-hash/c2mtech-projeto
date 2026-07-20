import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col items-start leading-none group">
  <h1 className="text-3xl font-extrabold tracking-tighter uppercase">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
      C2M
    </span>
    <span className="text-white">TECH</span>
  </h1>
  
</a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-neon">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#oferta"
          className="rounded-full border border-neon/40 px-5 py-2 text-xs font-semibold tracking-wide text-neon transition-colors hover:bg-neon hover:text-ink"
        >
          Fale Conosco
        </a>
      </nav>
    </header>
  );
}
