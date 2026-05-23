import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const certs = [
  { id: 1, title: 'IA & Machine Learning', org: 'Force-N', year: '2025', link: 'document/Certificat (1).pdf' },
  { id: 2, title: 'Software Engineering', org: 'Coursera', year: '2024', link: 'document/coursera  software.pdf' },
  { id: 3, title: 'Cybersécurité', org: 'Coursera', year: '2024', link: 'document/coursera mon diplome de cybersécurité.pdf' },
  { id: 4, title: 'Front-End Development', org: 'Sénégal', year: '2025', link: 'document/Certificat FRONT-END.pdf' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section border-t border-neutral-900 bg-neutral-950 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-3">Accréditations</p>
            <h2
              className="text-white uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
            >
              Formations & diplômes.
            </h2>
          </motion.div>
          <span className="text-xs text-neutral-700 font-light uppercase tracking-widest">Apprentissage continu</span>
        </div>

        <div className="flex flex-col">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group border-t border-neutral-900 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-8">
                <span className="text-neutral-700 text-sm font-light tabular-nums w-10 shrink-0">{cert.year}</span>
                <div>
                  <h3
                    className="text-white text-xl group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', fontSize: '1.4rem' }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-xs text-neutral-600 uppercase tracking-widest font-light mt-0.5">{cert.org}</p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-white transition-colors shrink-0"
              >
                Voir le diplôme <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
