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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled || menuOpen
          ? 'bg-black/95 py-4 border-b border-neutral-900 backdrop-blur-md'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 font-heading text-xl md:text-2xl tracking-wider text-white"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}
        >
          SEYDOU<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border border-neutral-800 text-white transition-colors hover:border-neutral-600 hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-900 bg-black md:hidden"
          >
            <div className="container flex flex-col py-4 pb-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.2 }}
                  className="border-b border-neutral-900 py-4 font-heading text-2xl text-white transition-colors hover:text-blue-600"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
