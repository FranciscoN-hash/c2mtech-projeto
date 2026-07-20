import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'neon' | 'whats';
  className?: string;
}

/**
 * A button that gently follows the cursor within its own bounds, then
 * springs back on mouse-leave. Used for the two primary hero CTAs and
 * reused anywhere else a high-emphasis action appears.
 */
export default function MagneticButton({
  href,
  children,
  variant = 'neon',
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const styles =
    variant === 'whats'
      ? 'bg-whats text-white shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:shadow-[0_0_45px_rgba(37,211,102,0.55)]'
      : 'bg-neon text-ink shadow-neon hover:shadow-[0_0_45px_rgba(0,183,255,0.55)]';

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold text-sm tracking-wide transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
