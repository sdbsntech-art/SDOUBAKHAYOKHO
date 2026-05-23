import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../lib/assetUrl';

const leaders = [
  {
    name: 'Serigne Cheikh Ahmed Tidiane Sy',
    role: 'Homme multidimensionnel aux expertises multiples — connu comme « le Capitaine »',
    src: assetUrl('serigne cheikh ahmed tidiane sy capitaine.jpeg'),
    quote:
      'Une présence qui rappelle que le service et la retenue peuvent porter très loin.',
  },
  {
    name: 'Cheikh Anta Diop',
    role: 'Historien, scientifique, penseur africain',
    src: assetUrl('cheikh anta diop.jfif'),
    quote:
      'L’exigence des preuves et la fierté d’une histoire bien lue : un compas intellectuel.',
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
      className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-subtle shadow-[0_20px_60px_-24px_rgba(0,0,0,0.75)]"
    >
      <div className="relative aspect-[4/5] w-full min-h-[200px] flex-1 sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
        {!failed ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-bg-subtle to-bg-base p-8 text-center">
            <p className="font-heading text-lg font-bold text-white">{name}</p>
            <p className="max-w-xs text-xs text-text-dim">
              Image non trouvée — vérifiez le nom du fichier dans{' '}
              <span className="text-text-main/80">public/asset/</span>
            </p>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
          <h3 className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">
            {name}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/75 sm:text-sm sm:normal-case sm:tracking-normal">
            {role}
          </p>
          <p className="mt-4 max-w-md border-l border-white/25 pl-4 text-sm leading-relaxed text-white/85">
            {quote}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

const LeadersGallery = () => {
  return (
    <section id="leaders" className="section border-t border-border-subtle">
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-text-dim">
            Figures emblématiques
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Deux repères : la science au sol, la profondeur du cœur.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-text-dim sm:text-base">
            Cheikh Anta Diop nous invite à croiser les disciplines et à respecter
            les faits ; Serigne Cheikh Ahmed Tidiane Sy, lui, est un homme, un grand homme multidisciplinaire, qui analyse les choses avec une profondeur et une clarté rares. Il ne figure pas un sens abstrait : il nous fait savoir comment sont réellement les choses et nous guide sur le droit chemin — celui de l'évolution nécessaire de l'homme à l'humain.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          {leaders.map((leader) => (
            <LeaderPortrait key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersGallery;
