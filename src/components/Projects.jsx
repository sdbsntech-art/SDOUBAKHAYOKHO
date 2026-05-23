import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'devi-app',
    title: 'Devi App',
    desc: 'Application web fullstack pour la gestion et le suivi.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    role: 'Fullstack',
    year: '2024',
    url: 'https://devi-app.netlify.app/',
    stars: 4,
  },
  {
    id: 2,
    name: 'alkebulan-tech',
    title: 'Alkebulan Tech',
    desc: 'Base de connaissances technologique, architecture moderne.',
    lang: 'React',
    langColor: '#61dafb',
    role: 'Architecture',
    year: '2023',
    url: 'https://alkebulan-tech.netlify.app/',
    stars: 3,
  },
  {
    id: 3,
    name: 'ida-cours',
    title: 'IDA Cours',
    desc: 'Plateforme éducative pour l\'apprentissage en ligne.',
    lang: 'JavaScript',
    langColor: '#f7df1e',
    role: 'Lead Dev',
    year: '2023',
    url: 'https://ida-cours.netlify.app/',
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
          <span>ls ./projects</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>
            Projets sélectionnés
          </h2>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            {projects.length} repositories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '20px', cursor: 'pointer', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#30363d'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📁</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600, color: '#58a6ff' }}>{p.name}</span>
                </div>
                <ExternalLink size={14} style={{ color: '#484f57' }} />
              </div>
              <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: 1.6, marginBottom: '20px' }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.langColor, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e' }}>{p.lang}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57' }}>{p.year}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    ⭐ {p.stars}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
