import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  else if (yearsOfStudy >= 5) niveau = 'Master 2';

  const primarySocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="lg:col-span-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 border border-neutral-800 px-3 py-1.5"
              >
                Sénégal · {niveau}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="leading-[0.85] uppercase m-0 p-0"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(4rem, 12vw, 11rem)',
                letterSpacing: '0.02em',
              }}
            >
              Construire<br />
              <span className="text-blue-600">le futur</span><br />
              avec le code.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-lg text-lg font-light leading-relaxed text-neutral-400"
            >
              Seydou Bakhayokho — développeur web et entrepreneur. Je transforme
              des idées utiles en interfaces claires et efficaces, au service de
              projets qui avancent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-minimal">
                Voir les travaux <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Prendre contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex items-center gap-4"
            >
              {primarySocial.map(({ href, label, iconClass }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-500 hover:text-white"
                >
                  <i className={iconClass} aria-hidden />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="relative w-full max-w-xs mx-auto lg:max-w-none">
              <div className="aspect-[3/4] w-full overflow-hidden border border-neutral-800 group">
                <img
                  src={assetUrl('IMG-20250518-WA0013.jpg')}
                  alt="Seydou Bakhayokho"
                  className="h-full w-full object-cover object-top grayscale opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div
                className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
              >
                Dakar, SN
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-6 md:left-12 lg:left-16 select-none leading-none text-neutral-950"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          letterSpacing: '0.01em',
        }}
        aria-hidden
      >
        PORTFOLIO
      </div>
    </section>
  );
};

export default Hero;
