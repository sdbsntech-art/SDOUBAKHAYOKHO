import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../lib/assetUrl';

const leaders = [
  {
    name: 'Serigne Cheikh Ahmed Tidiane Sy',
    handle: 'le-capitaine',
    role: 'Homme multidimensionnel aux expertises multiples',
    src: assetUrl('serigne cheikh ahmed tidiane sy capitaine.jpeg'),
    quote: 'Une présence qui rappelle que le service et la retenue peuvent porter très loin.',
    color: '#f0883e',
  },
  {
    name: 'Cheikh Anta Diop',
    handle: 'cheikh-anta-diop',
    role: 'Historien, scientifique, penseur africain',
    src: assetUrl('cheikh anta diop.jfif'),
    quote: "L'exigence des preuves et la fierté d'une histoire bien lue : un compas intellectuel.",
    color: '#58a6ff',
  },
];

function LeaderCard({ name, handle, role, src, quote, color }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = color + '60'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
    >
      <div style={{ padding: '10px 16px', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, display: 'inline-block' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#58a6ff' }}>{handle}</span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57' }}>figure.jpg</span>
      </div>

      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
        {!failed ? (
          <img
            src={src}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(40%)', opacity: 0.75, transition: 'all 0.5s ease' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '0.95'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(40%)'; e.currentTarget.style.opacity = '0.75'; }}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161b22', color: '#484f57', fontSize: '14px', fontFamily: "'JetBrains Mono', monospace" }}>
            Image non trouvée
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.4) 50%, transparent 100%)' }} aria-hidden />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#e6edf3', marginBottom: '4px' }}>{name}</h3>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '10px' }}>{role}</p>
          <p style={{ fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6, borderLeft: `2px solid ${color}`, paddingLeft: '10px' }}>{quote}</p>
        </div>
      </div>
    </motion.article>
  );
}

const LeadersGallery = () => {
  return (
    <section id="leaders" className="section" style={{ borderTop: '1px solid #21262d' }}>
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
          <span>cat figures.md</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>
            Figures emblématiques
          </h2>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            {leaders.length} figures
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '15px', color: '#8b949e', lineHeight: 1.8, maxWidth: '640px', marginBottom: '32px' }}
        >
          Cheikh Anta Diop nous invite à croiser les disciplines et à respecter les faits ; Serigne Cheikh Ahmed Tidiane Sy, lui, est un homme, un grand homme multidisciplinaire, qui analyse les choses avec une profondeur et une clarté rares. Il ne figure pas un sens abstrait : il nous fait savoir comment sont réellement les choses et nous guide sur le droit chemin — celui de l'évolution nécessaire de l'homme à l'humain.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersGallery;
