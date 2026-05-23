import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const About = () => {
  const mainSocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  return (
    <section id="about" className="section border-t border-neutral-900 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="text-blue-600 leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(7rem, 15vw, 13rem)', letterSpacing: '0.02em' }}
                >01</div>
                <h2
                  className="text-white uppercase mt-[-0.12em]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
                >
                  Info
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
                Mon parcours s&apos;est d&apos;abord construit autour de la{' '}
                <strong className="font-semibold text-white">biologie médicale</strong>{' '}
                : deux années à l&apos;
                <strong className="font-semibold text-white">Institut Santé Service (ISS)</strong>,
                à Dakar. Cette base m&apos;a appris la méthode, le respect des protocoles et
                le goût de la précision — des qualités que je transpose dans le développement web.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg font-light leading-relaxed text-neutral-400">
                Je suis convaincu qu&apos;observer le vivant avec sérieux aide à mieux comprendre
                le monde. C&apos;est pourquoi je me tourne vers la{' '}
                <strong className="font-medium text-white">recherche médicale et biologique</strong>,
                avec l&apos;ambition d&apos;y associer{' '}
                <strong className="font-medium text-white">l&apos;intelligence artificielle</strong>{' '}
                pour croiser les données et rendre certaines réponses plus lisibles.
              </p>
              <p className="text-lg font-light leading-relaxed text-neutral-400">
                En parallèle, je construis des produits numériques utiles : interfaces soignées,
                logique métier solide, et une approche calme face aux défis techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-neutral-900 pt-10"
            >
              <div>
                <h4
                  className="text-blue-600 mb-5 text-2xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  Orientation
                </h4>
                <ul className="flex flex-col gap-0">
                  {[
                    'Biologie médicale & culture scientifique',
                    'Recherche, données & IA (perspectives)',
                    'Développement web moderne (React)',
                  ].map((item) => (
                    <li key={item} className="border-b border-neutral-900 py-3 text-sm font-light text-neutral-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className="text-blue-600 mb-5 text-2xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  Liens utiles
                </h4>
                <ul className="flex flex-col gap-0">
                  {mainSocial.map(({ href, label }) => (
                    <li key={href} className="border-b border-neutral-900 py-3">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-light text-neutral-400 transition-colors hover:text-white"
                      >
                        {label}{label === 'GitHub' ? ' (sdbsntech-art)' : ''}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
