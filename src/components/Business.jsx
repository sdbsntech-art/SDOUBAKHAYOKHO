import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hardware IT',
    desc: 'Vente et conseil en matériel informatique de haute performance pour professionnels et particuliers.',
    items: ['Laptops Premium', 'Accessoires Gaming & Pro', 'Audit de parc informatique'],
  },
  {
    title: 'Agro-Business',
    desc: "Gestion d'une activité d'élevage avicole moderne centrée sur la distribution locale de qualité.",
    items: ['Élevage contrôlé', 'Distribution directe', 'Logistique optimisée'],
  },
];

const Business = () => {
  return (
    <section id="business" className="section border-t border-neutral-900 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-4"
              >Services</p>
              <h2
                className="text-white uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
              >
                Entrepreneuriat.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-8 flex lg:items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-400 font-light text-lg"
            >
              En plus du développement, je gère des activités commerciales concrètes
              qui m&apos;ont appris la rigueur et la gestion opérationnelle.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-900">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-black p-10 md:p-14 hover:bg-neutral-950 transition-colors"
            >
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.05em' }}
              >
                {s.title}
              </h3>
              <p className="text-neutral-400 font-light text-base mb-8 leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-0">
                {s.items.map((item) => (
                  <li key={item} className="border-t border-neutral-900 py-3 text-sm font-light text-neutral-500">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
