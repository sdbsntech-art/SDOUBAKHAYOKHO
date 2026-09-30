import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getAcademicInfo } from '../lib/academicLevel';

const links = [
  { name: '~/info', href: '#about' },
  { name: '~/bootcamp', href: '#bootcamp' },
  { name: '~/figures', href: '#leaders' },
  { name: '~/works', href: '#projects' },
  { name: '~/business', href: '#business' },
  { name: '~/notes', href: '#notes' },
  { name: '~/contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { levelName } = getAcademicInfo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const toggleMenu = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    setMenuOpen((prev) => !prev);
  }, []);

  // Lock body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: isScrolled || menuOpen ? 'rgba(13,17,23,0.95)' : 'rgba(13,17,23,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled || menuOpen ? '1px solid #21262d' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container flex items-center justify-between gap-4" style={{ height: '60px' }}>
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 flex items-center gap-2.5"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: 600,
              color: '#e6edf3',
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: '#3fb950',
                boxShadow: '0 0 8px #3fb950',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            seydou.dev
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12.5px',
                  color: '#8b949e',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3fb950')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8b949e')}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#8b949e',
                border: '1px solid #21262d',
                padding: '4px 8px',
                borderRadius: '6px',
                background: '#161b22',
              }}
            >
              {levelName}
            </span>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: '#3fb950',
                border: '1px solid #238636',
                padding: '5px 12px',
                borderRadius: '6px',
                background: 'rgba(35,134,54,0.12)',
              }}
            >
              available=true
            </div>
          </div>

          {/* Responsive Mobile Burger Button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            onClick={toggleMenu}
            className="flex items-center justify-center md:hidden"
            style={{
              width: '44px',
              height: '44px',
              minWidth: '44px',
              minHeight: '44px',
              borderRadius: '8px',
              border: menuOpen ? '1px solid #3fb950' : '1px solid #21262d',
              background: menuOpen ? 'rgba(63,185,80,0.1)' : '#161b22',
              color: menuOpen ? '#3fb950' : '#e6edf3',
              cursor: 'pointer',
              touchAction: 'manipulation',
              zIndex: 110,
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{
                borderTop: '1px solid #21262d',
                background: '#0d1117',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 105,
              }}
            >
              <div className="container flex flex-col py-5 pb-6">
                <div
                  className="flex items-center justify-between pb-3 mb-2"
                  style={{ borderBottom: '1px solid #161b22' }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      color: '#3fb950',
                    }}
                  >
                    // Navigation ({levelName})
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      color: '#3fb950',
                      background: 'rgba(35,134,54,0.15)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(35,134,54,0.3)',
                    }}
                  >
                    available=true
                  </span>
                </div>

                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2 }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '14px',
                      color: '#c9d1d9',
                      padding: '13px 0',
                      borderBottom: i < links.length - 1 ? '1px solid #161b22' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#3fb950')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c9d1d9')}
                  >
                    <span>{link.name}</span>
                    <span style={{ color: '#484f57', fontSize: '12px' }}>→</span>
                  </motion.a>
                ))}

                <div className="pt-4 mt-2">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="btn-minimal w-full justify-center"
                    style={{ textAlign: 'center' }}
                  >
                    Me contacter
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop overlay on mobile when menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 90,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
