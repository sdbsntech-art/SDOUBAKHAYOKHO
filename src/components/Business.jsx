import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '💻',
    name: 'hardware-it',
    title: 'Hardware IT',
    desc: "Vente et conseil en matériel informatique de haute performance pour professionnels et particuliers.",
    items: ['Laptops Premium', 'Accessoires Gaming & Pro', 'Audit de parc informatique'],
    lang: 'Hardware',
    langColor: '#3178c6',
  },
  {
    icon: '🐓',
    name: 'agro-business',
    title: 'Agro-Business',
    desc: "Gestion d'une activité d'élevage avicole moderne centrée sur la distribution locale de qualité.",
    items: ['Élevage contrôlé', 'Distribution directe', 'Logistique optimisée'],
    lang: 'Agriculture',
    langColor: '#3fb950',
  },
];

const Business = () => {
  return (
    <section id="business" className="section" style={{ borderTop: '1px solid #21262d' }}>
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
          <span>ls ./services</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>
            Entrepreneuriat
          </h2>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            {services.length} activités
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '20px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#30363d'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>{s.icon}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600, color: '#58a6ff' }}>{s.name}</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: 1.7, marginBottom: '16px' }}>{s.desc}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '16px' }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', padding: '6px 0', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#3fb950' }}>+</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: s.langColor, display: 'inline-block' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e' }}>{s.lang}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
