import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { whatsappLink } from '../data';

const SOCIALS = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@c2mtech.com', label: 'E-mail' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        
        {/* Nova logo idêntica à do Hero */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            C2M<span className="text-cyan-400">TECH</span>
          </span>
        </div>

        {/* Lista de Redes Sociais */}
        <nav className="flex gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/50 transition-colors hover:text-neon"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href={whatsappLink('Olá! Vim pelo site da C2MTECH.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 transition-colors hover:text-whats"
          >
            WhatsApp
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} C2MTECH. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}