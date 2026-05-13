import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import { assetUrl } from '../lib/assetUrl';

const bootcampSlides = [
  {
    src: assetUrl('bootcamp 1.jpeg'),
    alt: 'Bootcamp — moment d’équipe 1',
  },
  {
    src: assetUrl('bootcamp 2.jpeg'),
    alt: 'Bootcamp — moment d’équipe 2',
  },
  {
    src: assetUrl('bootcamp 3.jpeg'),
    alt: 'Bootcamp — moment d’équipe 3',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const fadeUpDelayed = (delay = 0) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/** Texte libre, même esprit typographique que l’intro « Figures emblématiques » : pas de carte ni de bordure. */
function WisdomBlock({ eyebrow, title, audience, children }) {
  return (
    <article className="mx-auto max-w-3xl text-center sm:text-left">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-text-dim">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h3>
      {audience ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-text-dim sm:text-sm">
          {audience}
        </p>
      ) : null}
      <div className="mt-6 text-sm leading-relaxed text-text-dim sm:text-base md:text-[17px] md:leading-[1.85]">
        {children}
      </div>
    </article>
  );
}

const BootcampGallery = () => {
  return (
    <section id="bootcamp" className="section border-t border-border-subtle">
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-text-dim">
            Immersion & souvenirs
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            L’énergie du collectif, figée dans la lumière.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-text-dim sm:text-base">
            Quelques intensités partagées valent mieux qu’un long discours : on
            se serre les coudes, on tient le rythme, on grandit ensemble. Ces
            images racontent des journées où l’on a osé, où l’on a appris, où
            l’on est reparti un peu plus solide — pour soi et pour les autres.
          </p>
        </motion.header>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 md:gap-16">
          <motion.div {...fadeUp} className="w-full">
            <div className="mb-5 flex flex-col gap-1 text-center sm:mb-6 sm:text-left">
              <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">
                Bootcamp & cohorte
              </h3>
              <p className="text-sm text-text-dim sm:max-w-xl">
                Des ateliers serrés, des rires nerveux, des victoires minuscules
                qui s’additionnent : la preuve qu’on peut avancer vite sans
                brûler les étapes humaines.
              </p>
            </div>
            <ImageCarousel
              slides={bootcampSlides}
              ariaLabel="Photos bootcamp et équipe"
            />
          </motion.div>

          <div
            id="sagesse"
            className="mx-auto flex w-full max-w-3xl flex-col gap-14 sm:gap-16 md:gap-20"
          >
            <motion.div {...fadeUp}>
              <WisdomBlock
                eyebrow="Mindset"
                title="La discipline : le système derrière le succès"
                audience="Étudiant & pro tech"
              >
                <p className="first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-3xl first-letter:font-bold first-letter:text-white sm:first-letter:text-4xl">
                  Dans le monde du numérique, la motivation est une étincelle,
                  mais la discipline est l’algorithme qui tourne en boucle jusqu’au
                  résultat. Être rigoureux, ce n’est pas seulement travailler
                  quand on se sent inspiré ; c’est s’asseoir devant son écran,
                  déboguer cette ligne de code pour la centième fois, et
                  peaufiner son architecture même quand personne ne regarde.
                  Votre cerveau est votre processeur le plus puissant : ne le
                  laissez pas s’encrasser par la procrastination. La maîtrise
                  technique n’est pas un don, c’est une accumulation de gestes
                  précis répétés chaque jour sans exception.
                </p>
              </WisdomBlock>
            </motion.div>

            <motion.div {...fadeUpDelayed(0.05)}>
              <WisdomBlock
                eyebrow="Vision"
                title="La rigueur : la signature de l’excellence"
                audience="Entrepreneur"
              >
                <p>
                  L’entrepreneuriat dans la tech n’est pas une course de vitesse,
                  c’est une preuve de résilience. La rigueur est ce qui sépare une
                  idée brillante d’un produit révolutionnaire. Elle se niche dans
                  le détail d’une interface, dans la sécurité d’une base de
                  données et dans la clarté d’un business plan. Quand vous
                  choisissez la rigueur, vous choisissez le respect : respect pour
                  votre vision, pour vos collaborateurs et pour vos futurs
                  utilisateurs. Ne cherchez pas la facilité, cherchez la solidité.
                  Un empire construit sur du code propre et une éthique de travail
                  inflexible est invincible.
                </p>
              </WisdomBlock>
            </motion.div>

            <motion.div {...fadeUpDelayed(0.08)}>
              <article className="mx-auto max-w-3xl text-center sm:text-left">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-text-dim">
                  Héritage & focus
                </p>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                  Conseils inspirants de grands hommes
                </h3>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-text-dim sm:mx-0 sm:text-base">
                  Voici des principes de vie issus de figures qui ont marqué
                  l’histoire par leur discipline de fer.
                </p>

                <p className="mt-10 text-xs font-bold uppercase tracking-widest text-text-dim">
                  Steve Jobs — sur la concentration
                </p>
                <blockquote className="mx-auto mt-4 max-w-2xl border-l border-white/25 pl-4 text-left text-sm italic leading-relaxed text-text-main sm:mx-0 sm:pl-5 sm:text-base md:text-[17px] md:leading-[1.75]">
                  « Les gens pensent que se concentrer signifie dire oui à la
                  chose sur laquelle on se concentre. Mais ce n’est pas du tout ce
                  que cela signifie. Cela signifie dire non aux cent autres bonnes
                  idées qui existent. Vous devez choisir avec soin. »
                </blockquote>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-text-dim">
                  Conseil
                </p>
                <p className="mx-auto mt-3 max-w-2xl border-l border-white/25 pl-4 text-left text-sm leading-relaxed text-text-main sm:mx-0 sm:pl-5 sm:text-base">
                  La rigueur, c’est savoir éliminer le superflu pour exceller dans
                  l’essentiel.
                </p>
              </article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampGallery;
