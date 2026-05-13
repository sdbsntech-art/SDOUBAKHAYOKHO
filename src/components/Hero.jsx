import React from 'react';
import { motion } from 'framer-motion';
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
  else if (yearsOfStudy === 5) niveau = 'Master 2';

  const primarySocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  return (
    <section
      id="home"
      className="flex min-h-screen w-full min-w-0 flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-5 md:pt-28"
    >
      <div className="container flex w-full min-w-0 max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="badge-minimal">Sénégal • {niveau}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mb-8 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl"
        >
          Construire le <span className="text-text-dim">futur</span> avec le code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-lg text-lg leading-relaxed text-text-dim md:text-xl"
        >
          Seydou Bakhayokho — développeur web et entrepreneur. J’aime transformer
          des idées utiles en interfaces claires, sobres et efficaces, au service
          de projets qui avancent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {primarySocial.map(({ href, label, iconClass }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-dim transition-colors hover:border-white/30 hover:text-white"
            >
              <i className={iconClass} aria-hidden />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-14 flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="btn-minimal">
            Voir les travaux
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium uppercase tracking-widest text-text-dim transition-colors hover:text-white"
          >
            Prendre contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-20 w-full max-w-xs overflow-hidden rounded-2xl border border-border-subtle sm:max-w-sm md:max-w-md"
        >
          <div className="aspect-[4/5] max-h-[min(52vh,440px)] w-full sm:aspect-[3/4] sm:max-h-[min(48vh,400px)]">
            <img
              src={assetUrl('IMG-20250518-WA0013.jpg')}
              alt="Seydou Bakhayokho"
              className="h-full w-full object-cover object-top grayscale opacity-60 transition-all duration-700 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
