import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { assetUrl } from '../lib/assetUrl';

const Hero = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const academicYear = currentMonth < 8 ? currentYear - 1 : currentYear;
  const yearsOfStudy = academicYear - startYear + 1;
  let niveau = 'Licence 3';
  if (yearsOfStudy === 1) niveau = 'Licence 1';
  else if (yearsOfStudy === 2) niveau = 'Licence 2';
  else if (yearsOfStudy === 3) niveau = 'Licence 3';
  else if (yearsOfStudy === 4) niveau = 'Master 1';
  else if (yearsOfStudy >= 5) niveau = 'Master 2';

  const primarySocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  return (
    <section id="home" className="section" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="lg:col-span-8">
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#8b949e' }}
            >
              <span style={{ color: '#3fb950' }}>$</span>
              <span>whoami</span>
              <span style={{ width: '8px', height: '16px', background: '#3fb950', display: 'inline-block', marginLeft: '2px', animation: 'blink 1.2s step-end infinite' }} />
              <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#e6edf3', marginBottom: '12px' }}
            >
              Seydou<br />
              <span style={{ color: '#3fb950' }}>Bakhayokho.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#8b949e', lineHeight: 2, marginBottom: '28px', background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '16px 20px' }}
            >
              <span style={{ color: '#58a6ff' }}>const</span>{' '}
              <span style={{ color: '#e6edf3' }}>dev</span>{' = {'}<br />
              &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>role</span>:{' '}
              <span style={{ color: '#a5d6ff' }}>"Développeur Web & Entrepreneur"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>location</span>:{' '}
              <span style={{ color: '#a5d6ff' }}>"Dakar, Sénégal"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>niveau</span>:{' '}
              <span style={{ color: '#a5d6ff' }}>"{niveau}"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>stack</span>:{' '}
              [<span style={{ color: '#a5d6ff' }}>"React"</span>, <span style={{ color: '#a5d6ff' }}>"Vite"</span>, <span style={{ color: '#a5d6ff' }}>"Node"</span>],<br />
              &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>open</span>:{' '}
              <span style={{ color: '#79c0ff' }}>true</span><br />
              {'}'}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.8, color: '#8b949e', maxWidth: '480px', marginBottom: '32px' }}
            >
              Je construis des interfaces web efficaces et des produits numériques utiles,
              avec une approche calme face aux défis techniques.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-minimal">
                Voir les projets <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3 mt-8"
            >
              {primarySocial.map(({ href, label, iconClass }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', color: '#8b949e', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3fb950'; e.currentTarget.style.color = '#3fb950'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#21262d'; e.currentTarget.style.color = '#8b949e'; }}
                >
                  <i className={iconClass} style={{ fontSize: '14px' }} aria-hidden />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', overflow: 'hidden' }}>
                {/* Fake browser bar */}
                <div style={{ padding: '10px 14px', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', gap: '6px', background: '#161b22' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57', marginLeft: '8px' }}>profile.jpg</span>
                </div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img
                    src={assetUrl('IMG-20250518-WA0013.jpg')}
                    alt="Seydou Bakhayokho"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(30%)', opacity: 0.85, transition: 'all 0.4s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(30%)'; e.currentTarget.style.opacity = '0.85'; }}
                  />
                </div>
              </div>
              <div style={{ marginTop: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57', textAlign: 'center' }}>
                // Dakar, SN · {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
