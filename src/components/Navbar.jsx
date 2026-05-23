import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: '~/info', href: '#about' },
  { name: '~/bootcamp', href: '#bootcamp' },
  { name: '~/figures', href: '#leaders' },
  { name: '~/works', href: '#projects' },
  { name: '~/services', href: '#business' },
  { name: '~/contact', href: '#contact' },
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled || menuOpen ? 'rgba(13,17,23,0.97)' : 'transparent',
        backdropFilter: isScrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: isScrolled || menuOpen ? '1px solid #21262d' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0',
      }}
    >
      <div className="container flex items-center justify-between gap-4" style={{ height: '56px' }}>
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 flex items-center gap-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500, color: '#e6edf3', letterSpacing: '0.02em' }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3fb950', boxShadow: '0 0 6px #3fb950', display: 'inline-block', flexShrink: 0 }} />
          seydou.dev
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', transition: 'color 0.2s', letterSpacing: '0.02em' }}
              onMouseEnter={e => e.currentTarget.style.color = '#e6edf3'}
              onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#3fb950', border: '1px solid #238636', padding: '5px 12px', borderRadius: '6px', background: 'rgba(35,134,54,0.08)' }}>
          available=true
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center md:hidden"
          style={{ border: '1px solid #21262d', borderRadius: '6px', background: 'transparent', color: '#8b949e' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ borderTop: '1px solid #21262d', background: '#0d1117', overflow: 'hidden' }}
          >
            <div className="container flex flex-col py-4 pb-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#8b949e', padding: '12px 0', borderBottom: '1px solid #161b22', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3fb950'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
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
