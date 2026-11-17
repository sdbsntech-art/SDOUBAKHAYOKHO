import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../lib/assetUrl';

const bootcampSlides = [
  { src: assetUrl('bootcamp-1.jpeg'), alt: "Bootcamp — moment d'équipe 1" },
  { src: assetUrl('bootcamp-2.jpeg'), alt: "Bootcamp — moment d'équipe 2" },
  { src: assetUrl('bootcamp-3.jpeg'), alt: "Bootcamp — moment d'équipe 3" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const wisdomBlocks = [
  {
    label: 'mindset.md',
    title: 'La discipline : le système derrière le succès',
    audience: 'Étudiant & pro tech',
    color: '#3fb950',
    text: "Dans le monde du numérique, la motivation est une étincelle, mais la discipline est l'algorithme qui tourne en boucle jusqu'au résultat. Être rigoureux, ce n'est pas seulement travailler quand on se sent inspiré ; c'est s'asseoir devant son écran, déboguer cette ligne de code pour la centième fois, et peaufiner son architecture même quand personne ne regarde. Votre cerveau est votre processeur le plus puissant : ne le laissez pas s'encrasser par la procrastination.",
  },
  {
    label: 'vision.md',
    title: "La rigueur : la signature de l'excellence",
    audience: 'Entrepreneur',
    color: '#58a6ff',
    text: "L'entrepreneuriat dans la tech n'est pas une course de vitesse, c'est une preuve de résilience. La rigueur est ce qui sépare une idée brillante d'un produit révolutionnaire. Elle se niche dans le détail d'une interface, dans la sécurité d'une base de données et dans la clarté d'un business plan. Ne cherchez pas la facilité, cherchez la solidité.",
  },
];

function BootcampPhoto({ slide, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ minWidth: 0, margin: 0, background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', overflow: 'hidden' }}
    >
      <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: '#0d1117' }}>
        {failed ? (
          <div
            role="img"
            aria-label={`Photo indisponible : ${slide.alt}`}
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', color: '#8b949e', fontSize: '13px', textAlign: 'center' }}
          >
            Photo momentanément indisponible
          </div>
        ) : (
          <img
            src={slide.src}
            alt={slide.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
      <figcaption style={{ padding: '12px 14px', color: '#8b949e', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}>
        Bootcamp · moment d&apos;équipe {index + 1}
      </figcaption>
    </motion.figure>
  );
}

const BootcampGallery = () => {
  return (
    <section id="bootcamp" className="section" style={{ borderTop: '1px solid #21262d' }}>
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
          <span>open gallery/</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>
            Bootcamps d&apos;intégration
          </h2>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            Bel Air · Yeumbeul · Dakar
          </span>
        </div>

        <motion.div {...fadeUp} style={{ marginBottom: '48px' }}>
          <p style={{ maxWidth: '760px', fontSize: '15px', color: '#8b949e', lineHeight: 1.85, marginBottom: '24px' }}>
            Avec l&apos;accompagnement de Force N, j&apos;ai eu l&apos;opportunité de participer
            à des bootcamps d&apos;intégration organisés notamment à Bel Air et à Yeumbeul.
            J&apos;y ai découvert un environnement marqué par la discipline et la cohésion,
            et partagé des expériences avec des militaires et des développeurs. Ces
            rencontres m&apos;ont appris l&apos;importance de l&apos;écoute, de la rigueur et
            de l&apos;entraide dans le travail en équipe.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Photos des bootcamps">
            {bootcampSlides.map((slide, index) => (
              <BootcampPhoto key={slide.src} slide={slide} index={index} />
            ))}
          </div>
        </motion.div>

        <div id="sagesse" className="flex flex-col gap-6">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>//</span> Notes & réflexions
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wisdomBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                {...{ ...fadeUp, transition: { duration: 0.5, delay: i * 0.08 } }}
                style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', overflow: 'hidden' }}
              >
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#58a6ff' }}>{block.label}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: block.color }}>// {block.audience}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e6edf3', marginBottom: '12px', lineHeight: 1.4 }}>{block.title}</h3>
                  <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: 1.8 }}>{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...{ ...fadeUp, transition: { duration: 0.5, delay: 0.16 } }}
            style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', overflow: 'hidden' }}
          >
            <div style={{ padding: '10px 16px', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#58a6ff' }}>quotes.md</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f0883e' }}>// Steve Jobs</span>
            </div>
            <div style={{ padding: '20px' }}>
              <blockquote style={{ borderLeft: '2px solid #3fb950', paddingLeft: '16px', fontSize: '15px', fontStyle: 'italic', color: '#c9d1d9', lineHeight: 1.8, marginBottom: '12px' }}>
                « Les gens pensent que se concentrer signifie dire oui à la chose sur laquelle on se concentre. Mais ce n&apos;est pas du tout ce que cela signifie. Cela signifie dire non aux cent autres bonnes idées qui existent. Vous devez choisir avec soin. »
              </blockquote>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e' }}>
                <span style={{ color: '#3fb950' }}>//</span> La rigueur, c&apos;est savoir éliminer le superflu pour exceller dans l&apos;essentiel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BootcampGallery;
