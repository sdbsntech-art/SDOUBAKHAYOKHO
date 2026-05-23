import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const About = () => {
  const mainSocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  const skills = [
    { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { label: 'Outils', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
    { label: 'Intérêts', items: ['Biologie médicale', 'IA & données', 'Recherche'] },
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid #21262d' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e' }}
        >
          <span style={{ color: '#3fb950' }}>$</span>
          <span>cat about.md</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.015em', marginBottom: '16px' }}>
                À propos
              </h2>
              <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.85, color: '#8b949e', marginBottom: '16px' }}>
                Mon parcours s&apos;est d&apos;abord construit autour de la{' '}
                <span style={{ color: '#e6edf3', fontWeight: 500 }}>biologie médicale</span>{' '}
                — deux années à l&apos;Institut Santé Service (ISS) à Dakar. Cette base m&apos;a appris
                la méthode, le respect des protocoles et le goût de la précision.
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.85, color: '#8b949e', marginBottom: '16px' }}>
                Je me tourne vers la{' '}
                <span style={{ color: '#e6edf3', fontWeight: 500 }}>recherche médicale et biologique</span>
                , avec l&apos;ambition d&apos;y associer{' '}
                <span style={{ color: '#3fb950', fontWeight: 500 }}>l&apos;intelligence artificielle</span>
                {' '}pour croiser les données et rendre certaines réponses plus lisibles.
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.85, color: '#8b949e' }}>
                En parallèle, je construis des produits numériques utiles : interfaces soignées,
                logique métier solide, et une approche calme face aux défis techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '20px' }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', marginBottom: '12px' }}>
                <span style={{ color: '#3fb950' }}>//</span> Liens
              </div>
              <div className="flex flex-col gap-0">
                {mainSocial.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #21262d', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#58a6ff', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#3fb950'}
                    onMouseLeave={e => e.currentTarget.style.color = '#58a6ff'}
                  >
                    {label}
                    <span style={{ color: '#484f57' }}>↗</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', marginBottom: '4px' }}
            >
              <span style={{ color: '#3fb950' }}>//</span> Stack & compétences
            </motion.div>
            {skills.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '14px 16px' }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '8px', letterSpacing: '0.05em' }}>{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a5d6ff', background: 'rgba(88,166,255,0.08)', border: '1px solid rgba(88,166,255,0.15)', borderRadius: '4px', padding: '2px 8px' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
