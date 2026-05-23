import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import { assetUrl } from '../lib/assetUrl';

const bootcampSlides = [
  { src: assetUrl('bootcamp 1.jpeg'), alt: "Bootcamp — moment d'équipe 1" },
  { src: assetUrl('bootcamp 2.jpeg'), alt: "Bootcamp — moment d'équipe 2" },
  { src: assetUrl('bootcamp 3.jpeg'), alt: "Bootcamp — moment d'équipe 3" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

function WisdomBlock({ eyebrow, title, audience, children }) {
  return (
    <article className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
          {eyebrow}
        </p>
      )}
      <h3
        className="text-white mb-1"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.04em', lineHeight: 0.95 }}
      >
        {title}
      </h3>
      {audience && (
        <p className="mt-2 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600">
          {audience}
        </p>
      )}
      <div className="text-base font-light leading-relaxed text-neutral-400">
        {children}
      </div>
    </article>
  );
}

const BootcampGallery = () => {
  return (
    <section id="bootcamp" className="section border-t border-neutral-900 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-4">Immersion & souvenirs</p>
          <h2
            className="text-white uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
          >
            L&apos;énergie du collectif, figée dans la lumière.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-neutral-500">
            Quelques intensités partagées valent mieux qu&apos;un long discours : on se serre les coudes,
            on tient le rythme, on grandit ensemble. Ces images racontent des journées où l&apos;on a osé.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.div {...fadeUp}>
            <div className="mb-6">
              <h3
                className="text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.05em' }}
              >
                Bootcamp & cohorte
              </h3>
              <p className="text-sm font-light text-neutral-500">
                Des ateliers serrés, des victoires minuscules qui s&apos;additionnent.
              </p>
            </div>
            <ImageCarousel slides={bootcampSlides} ariaLabel="Photos bootcamp et équipe" />
          </motion.div>

          <div id="sagesse" className="flex flex-col gap-16 border-t border-neutral-900 pt-16">
            <motion.div {...fadeUp}>
              <WisdomBlock
                eyebrow="Mindset"
                title="La discipline : le système derrière le succès"
                audience="Étudiant & pro tech"
              >
                <p className="first-letter:float-left first-letter:mr-2 first-letter:text-blue-600 first-letter:text-4xl" style={{ 'firstLetterFontFamily': "'Bebas Neue'" }}>
                  Dans le monde du numérique, la motivation est une étincelle,
                  mais la discipline est l&apos;algorithme qui tourne en boucle jusqu&apos;au
                  résultat. Être rigoureux, ce n&apos;est pas seulement travailler
                  quand on se sent inspiré ; c&apos;est s&apos;asseoir devant son écran,
                  déboguer cette ligne de code pour la centième fois, et
                  peaufiner son architecture même quand personne ne regarde.
                  Votre cerveau est votre processeur le plus puissant : ne le
                  laissez pas s&apos;encrasser par la procrastination.
                </p>
              </WisdomBlock>
            </motion.div>

            <motion.div {...{ ...fadeUp, transition: { duration: 0.5, delay: 0.05 } }}>
              <WisdomBlock
                eyebrow="Vision"
                title="La rigueur : la signature de l'excellence"
                audience="Entrepreneur"
              >
                <p>
                  L&apos;entrepreneuriat dans la tech n&apos;est pas une course de vitesse,
                  c&apos;est une preuve de résilience. La rigueur est ce qui sépare une
                  idée brillante d&apos;un produit révolutionnaire. Elle se niche dans
                  le détail d&apos;une interface, dans la sécurité d&apos;une base de
                  données et dans la clarté d&apos;un business plan. Ne cherchez pas la
                  facilité, cherchez la solidité.
                </p>
              </WisdomBlock>
            </motion.div>

            <motion.div {...{ ...fadeUp, transition: { duration: 0.5, delay: 0.08 } }}>
              <article className="max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
                  Héritage & focus
                </p>
                <h3
                  className="text-white mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.04em', lineHeight: 0.95 }}
                >
                  Conseils inspirants de grands hommes
                </h3>
                <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Steve Jobs — sur la concentration
                </p>
                <blockquote className="border-l-2 border-blue-600 pl-5 text-base font-light italic leading-relaxed text-neutral-300 mb-6">
                  « Les gens pensent que se concentrer signifie dire oui à la
                  chose sur laquelle on se concentre. Mais ce n&apos;est pas du tout ce
                  que cela signifie. Cela signifie dire non aux cent autres bonnes
                  idées qui existent. Vous devez choisir avec soin. »
                </blockquote>
                <p className="border-l-2 border-neutral-800 pl-5 text-sm font-light leading-relaxed text-neutral-500">
                  La rigueur, c&apos;est savoir éliminer le superflu pour exceller dans l&apos;essentiel.
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
