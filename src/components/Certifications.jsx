import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certs = [
  { id: 1, title: 'IA & Machine Learning', org: 'Force-N', year: '2025', link: 'document/Certificat (1).pdf', color: '#f0883e' },
  { id: 2, title: 'Software Engineering', org: 'Coursera', year: '2024', link: 'document/coursera  software.pdf', color: '#58a6ff' },
  { id: 3, title: 'Cybersécurité', org: 'Coursera', year: '2024', link: 'document/coursera mon diplome de cybersécurité.pdf', color: '#f85149' },
  { id: 4, title: 'Front-End Development', org: 'Sénégal', year: '2025', link: 'document/Certificat FRONT-END.pdf', color: '#3fb950' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ borderTop: '1px solid #21262d', background: '#0d1117' }}>
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
          <span>cat certifications.json</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>
            Formations & diplômes
          </h2>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            {certs.length} certifications
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '18px', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = cert.color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cert.color, display: 'inline-block', marginTop: '4px', boxShadow: `0 0 6px ${cert.color}80` }} />
                <ExternalLink size={12} style={{ color: '#484f57' }} />
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57', marginBottom: '6px' }}>{cert.year}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#e6edf3', lineHeight: 1.4, marginBottom: '6px' }}>{cert.title}</h3>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e' }}>{cert.org}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
