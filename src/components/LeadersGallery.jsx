import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../lib/assetUrl';

const leaders = [
  {
    name: 'Serigne Cheikh Ahmed Tidiane Sy',
    role: 'Homme multidimensionnel — «&nbsp;le Capitaine&nbsp;»',
    src: assetUrl('serigne cheikh ahmed tidiane sy capitaine.jpeg'),
    quote: 'Une présence qui rappelle que le service et la retenue peuvent porter très loin.',
  },
  {
    name: 'Cheikh Anta Diop',
    role: 'Historien, scientifique, penseur africain',
    src: assetUrl('cheikh anta diop.jfif'),
    quote: "L'exigence des preuves et la fierté d'une histoire bien lue : un compas intellectuel.",
  },
];

function LeaderPortrait({ name, role, src, quote }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden border border-neutral-900 hover:border-neutral-700 transition-colors"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {!failed ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover object-top grayscale opacity-70 transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:opacity-90"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-neutral-950 p-8 text-center">
            <p className="font-heading text-lg font-bold text-white">{name}</p>
            <p className="max-w-xs text-xs text-neutral-500">Image non trouvée</p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3
            className="text-white mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.04em' }}
          >
            {name}
          </h3>
          <p className="text-xs uppercase tracking-[0.12em] text-neutral-400 mb-4" dangerouslySetInnerHTML={{ __html: role }} />
          <p className="max-w-md border-l-2 border-blue-600 pl-4 text-sm font-light leading-relaxed text-neutral-300">
            {quote}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

const LeadersGallery = () => {
  return (
    <section id="leaders" className="section border-t border-neutral-900 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-4">Figures emblématiques</p>
          <h2
            className="text-white uppercase max-w-3xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
          >
            Deux repères : la science au sol, la profondeur du cœur.
          </h2>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-500">
            Cheikh Anta Diop nous invite à croiser les disciplines et à respecter les faits ;
            Serigne Cheikh Ahmed Tidiane Sy rappelle la mesure, l&apos;humilité et le sens du don.
            Ensemble, ils dessinent une boussole.
          </p>
        </motion.div>

        <div className="grid gap-px bg-neutral-900 md:grid-cols-2">
          {leaders.map((leader) => (
            <LeaderPortrait key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersGallery;
