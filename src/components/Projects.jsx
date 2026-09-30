import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';

const projects = [
  {
    id: 'maison-heritage',
    name: 'maison-heritage',
    title: 'Maison Heritage',
    desc: 'Plateforme digitale élégante valorisant le patrimoine architectural et culturel avec une expérience utilisateur immersive.',
    lang: 'React',
    langColor: '#61dafb',
    type: 'Plateforme Web',
    year: '2026',
    url: 'https://maison-heritage-z8r9.vercel.app/',
    isSaaS: false,
    stars: 5,
  },
  {
    id: 'poulet-de-la-cite',
    name: 'poulet-de-la-cite',
    title: 'Poulet de la Cité',
    desc: 'Application vitrine et commerciale moderne facilitant la réservation, commande et distribution de produits avicoles à Dakar.',
    lang: 'JavaScript',
    langColor: '#f7df1e',
    type: 'Agro-Commerce',
    year: '2026',
    url: 'https://poulet-de-la-cite.vercel.app/',
    isSaaS: false,
    stars: 5,
  },
  {
    id: 'le-poulailler',
    name: 'le-poulailler-saas',
    title: 'Le Poulailler',
    desc: 'Plateforme SaaS clé en main pour la gestion globale d’exploitations avicoles : suivi de ponte, mortalité, aliments, trésorerie et reporting.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    type: 'SaaS Business',
    year: '2026',
    url: 'https://le-poulailler-h648.vercel.app/',
    isSaaS: true,
    stars: 5,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid #21262d' }}>
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
          <span>ls ./projects --all</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.015em' }}>
              Projets & SaaS
            </h2>
            <p style={{ fontSize: '14px', color: '#8b949e', marginTop: '4px' }}>
              Applications en production et plateformes SaaS déployées sur Vercel.
            </p>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#3fb950', background: 'rgba(63,185,80,0.08)', border: '1px solid rgba(63,185,80,0.2)', borderRadius: '6px', padding: '4px 10px' }}>
            {projects.length} projets actifs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col justify-between"
              style={{
                background: '#161b22',
                border: p.isSaaS ? '1px solid #238636' : '1px solid #21262d',
                borderRadius: '8px',
                padding: '22px',
                position: 'relative',
                transition: 'all 0.25s ease-in-out',
                boxShadow: p.isSaaS ? '0 0 20px rgba(35,134,54,0.12)' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.isSaaS ? '#3fb950' : '#30363d';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = p.isSaaS ? '#238636' : '#21262d';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', fontWeight: 600, color: '#e6edf3' }}>
                      {p.title}
                    </span>
                    {p.isSaaS && (
                      <span className="flex items-center gap-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#3fb950', background: 'rgba(63,185,80,0.15)', border: '1px solid rgba(63,185,80,0.4)', borderRadius: '100px', padding: '2px 8px' }}>
                        <Sparkles size={10} /> SaaS
                      </span>
                    )}
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ouvrir ${p.title}`}
                    style={{ color: '#58a6ff', padding: '4px', borderRadius: '4px', transition: 'color 0.2s', background: 'rgba(88,166,255,0.08)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#3fb950'}
                    onMouseLeave={e => e.currentTarget.style.color = '#58a6ff'}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '12px' }}>
                  <span style={{ color: '#484f57' }}>url: </span>
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'underline text-decoration-color: #30363d' }}>
                    {p.url.replace('https://', '').replace('/', '')}
                  </a>
                </div>

                <p style={{ fontSize: '13.5px', color: '#8b949e', lineHeight: 1.65, marginBottom: '22px' }}>
                  {p.desc}
                </p>
              </div>

              <div>
                <div style={{ borderTop: '1px solid #21262d', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.langColor, display: 'inline-block', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e' }}>{p.lang}</span>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ fontSize: '11px', padding: '4px 10px', gap: '4px' }}
                  >
                    Visiter le site <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
