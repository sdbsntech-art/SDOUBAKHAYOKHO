import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Info', href: '#about' },
  { name: 'Bootcamp', href: '#bootcamp' },
  { name: 'Sagesse', href: '#sagesse' },
  { name: 'Figures', href: '#leaders' },
  { name: 'Works', href: '#projects' },
  { name: 'Services', href: '#business' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled || menuOpen
          ? 'bg-bg-base/90 py-3 backdrop-blur-md md:py-4'
          : 'bg-transparent py-5 md:py-8'
      } ${menuOpen ? 'ring-1 ring-white/5' : ''}`}
    >
      <div className="container flex min-w-0 items-center justify-between gap-3">
        <a
          href="#home"
          className="shrink-0 text-lg font-heading font-bold tracking-tight text-white sm:text-xl"
          onClick={closeMenu}
        >
          SEYDOU.
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-text-dim transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-white transition-colors hover:border-white/25 hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-panel"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="nav-mobile-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border-subtle bg-bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4 pb-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                  className="rounded-lg px-3 py-3.5 font-heading text-lg font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
