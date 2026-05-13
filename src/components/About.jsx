import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const About = () => {
  const mainSocial = socialLinks.filter((s) =>
    ['GitHub', 'LinkedIn', 'YouTube'].includes(s.label),
  );

  return (
    <section id="about" className="section border-t border-border-subtle">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-text-dim">
              À propos
            </h2>
            <p className="font-heading text-2xl font-bold leading-tight text-white">
              Du vivant au numérique : rigueur, curiosité, impact.
            </p>
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="text-2xl leading-relaxed text-white">
              Mon parcours s&apos;est d&apos;abord construit autour de la{' '}
              <strong className="text-white">biologie médicale</strong> : deux
              années d&apos;études à l&apos;
              <strong className="text-white">
                Institut Santé Service (ISS)
              </strong>
              , situé à la{' '}
              <strong className="text-white">Cité Keur Gorgui</strong>, à Dakar.
              Cette base m&apos;a appris la méthode, le respect des protocoles et
              le goût de la précision — des qualités que je transpose aujourd&apos;hui
              dans le développement web.
            </p>
            <p className="text-lg leading-relaxed text-text-dim">
              Je suis convaincu qu&apos;observer le vivant avec sérieux aide à mieux
              comprendre le monde. C&apos;est pourquoi je me tourne vers la{' '}
              <strong className="text-white">recherche médicale et biologique</strong>
              , avec l&apos;ambition d&apos;y associer{' '}
              <strong className="text-white">l&apos;intelligence artificielle</strong>{' '}
              pour croiser les données, poser de meilleures questions et rendre
              certaines réponses plus lisibles — toujours avec humilité et éthique.
            </p>
            <p className="text-lg leading-relaxed text-text-dim">
              En parallèle, je construis des produits numériques utiles : interfaces
              soignées, logique métier solide, et une approche calme face aux défis
              techniques. Chaque projet est une occasion d&apos;apprendre, de
              progresser et de livrer quelque chose dont on peut être fier.
            </p>

            <div className="grid grid-cols-1 gap-8 border-t border-border-subtle pt-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-text-dim">
                  Orientation
                </h4>
                <ul className="space-y-1 text-sm text-text-main">
                  <li>Biologie médicale & culture scientifique</li>
                  <li>Recherche, données & IA (perspectives)</li>
                  <li>Développement web moderne (React)</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-text-dim">
                  Liens utiles
                </h4>
                <ul className="space-y-2 text-sm">
                  {mainSocial.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-dim transition-colors hover:text-white"
                      >
                        {label}
                        {label === 'GitHub' ? ' (sdbsntech-art)' : ''}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
