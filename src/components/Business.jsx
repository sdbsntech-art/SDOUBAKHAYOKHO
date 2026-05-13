import React from 'react';
import { motion } from 'framer-motion';

const Business = () => {
  return (
    <section id="business" className="section border-t border-border-subtle">
      <div className="container">
        
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-dim mb-4">SERVICES</h2>
            <p className="text-4xl font-heading font-bold">Entrepreneuriat.</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-text-dim leading-relaxed">
              En plus du développement, je gère des activités commerciales concrètes qui m'ont appris la rigueur et la gestion opérationnelle.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-2xl overflow-hidden">
          <div className="bg-bg-base p-12 hover:bg-white/[0.02] transition-colors">
            <h3 className="text-2xl font-bold mb-4">Hardware IT</h3>
            <p className="text-text-dim mb-8">Vente et conseil en matériel informatique de haute performance pour professionnels et particuliers.</p>
            <ul className="text-sm space-y-2 text-text-main">
              <li>• Laptops Premium</li>
              <li>• Accessoires Gaming & Pro</li>
              <li>• Audit de parc informatique</li>
            </ul>
          </div>
          <div className="bg-bg-base p-12 hover:bg-white/[0.02] transition-colors">
            <h3 className="text-2xl font-bold mb-4">Agro-Business</h3>
            <p className="text-text-dim mb-8">Gestion d'une activité d'élevage avicole moderne centrée sur la distribution locale de qualité.</p>
            <ul className="text-sm space-y-2 text-text-main">
              <li>• Élevage contrôlé</li>
              <li>• Distribution directe</li>
              <li>• Logistique optimisée</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Business;
