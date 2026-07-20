import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data';
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Olá! Vim pelo site da C2MTECH e gostaria de mais informações.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
    >
      {/* Efeito de onda de pulso suave */}
      <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/50"></span>
      
      <MessageCircle className="h-7 w-7 relative z-10" />
    </a>
  );
}