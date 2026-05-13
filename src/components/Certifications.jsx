import React from 'react';

const certs = [
  { id: 1, title: 'IA & Machine Learning', org: 'Force-N', year: '2025', link: 'document/Certificat (1).pdf' },
  { id: 2, title: 'Software Engineering', org: 'Coursera', year: '2024', link: 'document/coursera  software.pdf' },
  { id: 3, title: 'Cybersécurité', org: 'Coursera', year: '2024', link: 'document/coursera mon diplome de cybersécurité.pdf' },
  { id: 4, title: 'Front-End Development', org: 'Sénégal', year: '2025', link: 'document/Certificat FRONT-END.pdf' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-bg-subtle border-y border-border-subtle">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-dim">ACCRÉDITATIONS</h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">Apprentissage continu</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert) => (
            <div key={cert.id} className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-text-dim">{cert.year}</span>
              <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
              <p className="text-xs text-text-dim uppercase tracking-wider">{cert.org}</p>
              <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold underline hover:text-white transition-colors mt-auto pt-4">Voir le diplôme</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
