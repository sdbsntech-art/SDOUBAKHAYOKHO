import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const notes = [
  {
    id: 'projet',
    file: 'project-management.md',
    label: 'Gestion de projet',
    color: '#3fb950',
    icon: '📋',
    intro: 'La réussite d\'un projet ne tient pas à la chance — elle tient à la méthode. Voici ce que j\'applique dans chaque projet que je mène.',
    tips: [
      {
        title: 'Commencer par le pourquoi',
        body: 'Avant d\'écrire la moindre ligne de code, posez-vous la question : quel problème concret ce projet résout-il ? Un projet sans problème clair à résoudre est un projet qui dérive. Définissez le besoin utilisateur en une phrase, et revenez-y chaque fois que vous perdez le cap.',
      },
      {
        title: 'Découper en petites victoires',
        body: 'Un projet monolithique écrase. Découpez-le en jalons de 1 à 2 semaines maximum. Chaque livraison partielle vous donne un retour concret, maintient la motivation et réduit le risque d\'aller dans la mauvaise direction pendant des mois.',
      },
      {
        title: 'Documenter en avançant, pas après',
        body: 'La documentation écrite après coup est rarement faite. Prenez l\'habitude de noter vos décisions techniques au moment où vous les prenez — un fichier DECISIONS.md suffit. Dans 6 mois, vous vous remercierez.',
      },
      {
        title: 'La communication est du code',
        body: 'Un projet d\'équipe échoue rarement pour des raisons techniques. Il échoue à cause du silence. Un point de synchronisation court (15 min) chaque jour ou tous les deux jours vaut mieux qu\'une longue réunion par semaine.',
      },
      {
        title: 'Savoir quand s\'arrêter d\'une fonctionnalité',
        body: 'Le perfectionnisme est l\'ennemi du livrable. Une fonctionnalité à 80 % qui fonctionne vaut mieux qu\'une fonctionnalité à 100 % qui n\'est jamais sortie. Livrez, recueillez du retour, améliorez.',
      },
    ],
  },
  {
    id: 'frameworks',
    file: 'frameworks.md',
    label: 'Frameworks',
    color: '#58a6ff',
    icon: '⚙️',
    intro: 'Les frameworks sont des outils, pas des religions. Voici comment je les aborde et ce que je vous conseille.',
    tips: [
      {
        title: 'Maîtrisez le langage avant le framework',
        body: 'Beaucoup apprennent React avant de vraiment maîtriser JavaScript. C\'est une erreur. Comprendre les closures, les promesses, le DOM natif — c\'est ce qui vous rend indépendant du framework. Quand React sera remplacé par autre chose (et il le sera), vos bases resteront.',
      },
      {
        title: 'React + Vite : le duo gagnant en 2025',
        body: 'Pour la majorité des projets web, React avec Vite est le choix le plus sûr : écosystème immense, performances excellentes, déploiement simple. Ajoutez Tailwind CSS pour le style et Framer Motion pour les animations — vous avez une stack qui couvre 90 % des besoins.',
      },
      {
        title: 'Ne changez pas de framework à chaque projet',
        body: 'La tentation de tester chaque nouveau framework est forte dans notre milieu. Résistez. La profondeur vaut plus que la largeur. Connaître React à fond — ses patterns, ses pièges, ses bonnes pratiques — vous rendra 10x plus productif qu\'un développeur qui change de framework tous les 6 mois.',
      },
      {
        title: 'Le backend : restez simple le plus longtemps possible',
        body: 'Node.js + Express pour commencer, puis montez en complexité si le projet l\'exige. Évitez la sur-architecture — un monolith bien structuré est souvent plus maintenable que des microservices prématurés.',
      },
      {
        title: 'Lisez la documentation officielle',
        body: 'La vraie compétence, c\'est de savoir lire une doc. Les tutoriels YouTube vieillissent. La doc officielle est la source de vérité. Prenez l\'habitude de la consulter en premier — vous développerez une compréhension plus solide et plus durable.',
      },
    ],
  },
  {
    id: 'ia',
    file: 'dev-with-ai.md',
    label: 'Développement & IA',
    color: '#f0883e',
    icon: '🤖',
    intro: 'L\'IA change les règles du jeu. Voici comment je l\'utilise aujourd\'hui et comment je vois la suite.',
    tips: [
      {
        title: 'L\'IA est un copilote, pas un remplaçant',
        body: 'Des outils comme GitHub Copilot, Cursor ou Claude génèrent du code en quelques secondes. Mais un code que vous ne comprenez pas est un code que vous ne pourrez pas déboguer, maintenir ni faire évoluer. Utilisez l\'IA pour accélérer — pas pour éviter d\'apprendre.',
      },
      {
        title: 'Le prompt engineering est une compétence fondamentale',
        body: 'Savoir formuler précisément ce que vous voulez à un LLM est devenu aussi important que de savoir formuler une requête SQL. Donnez du contexte, soyez précis dans vos contraintes, demandez des explications. Un bon prompt vous fait gagner des heures.',
      },
      {
        title: 'L\'IA pour accélérer le boilerplate',
        body: 'Les tâches répétitives — setup de projet, écriture de tests, génération de types TypeScript, documentation — sont le domaine où l\'IA brille le plus. Déléguez-leur ces tâches. Concentrez votre énergie humaine sur l\'architecture, la logique métier et l\'expérience utilisateur.',
      },
      {
        title: 'Demain : l\'IA comme partenaire d\'architecture',
        body: 'Dans les 2 à 3 prochaines années, les agents IA seront capables de gérer des features entières de façon autonome. Le développeur du futur sera celui qui sait orchestrer ces agents, valider leur output et maintenir une vision d\'ensemble. La créativité et le jugement humain resteront irremplaçables.',
      },
      {
        title: 'Restez à jour, sans vous disperser',
        body: 'Le domaine évolue vite. Suivez 2 ou 3 sources fiables plutôt que 20 newsletters. Lisez les annonces majeures (OpenAI, Anthropic, Google DeepMind). Expérimentez avec les nouveaux outils dans des projets personnels avant de les adopter en production. Restez curieux, mais restez ancré.',
      },
    ],
  },
];

function NoteSection({ note, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: '#161b22',
        border: '1px solid #21262d',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => !isOpen && (e.currentTarget.style.borderColor = '#30363d')}
      onMouseLeave={e => !isOpen && (e.currentTarget.style.borderColor = '#21262d')}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          borderBottom: isOpen ? '1px solid #21262d' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '16px' }}>{note.icon}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: note.color }}>{note.file}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57', background: '#0d1117', border: '1px solid #21262d', borderRadius: '100px', padding: '2px 8px' }}>
            {note.tips.length} conseils
          </span>
        </div>
        <ChevronDown
          size={16}
          style={{ color: '#484f57', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '20px' }}>
              <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: 1.8, marginBottom: '24px', paddingLeft: '12px', borderLeft: `2px solid ${note.color}` }}>
                {note.intro}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {note.tips.map((tip, i) => (
                  <div
                    key={i}
                    style={{ padding: '16px 0', borderBottom: i < note.tips.length - 1 ? '1px solid #21262d' : 'none', display: 'grid', gridTemplateColumns: '24px 1fr', gap: '12px', alignItems: 'start' }}
                  >
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: note.color, paddingTop: '3px' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#e6edf3', marginBottom: '6px' }}>{tip.title}</h4>
                      <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: 1.8 }}>{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Notes = () => {
  const [openId, setOpenId] = useState('projet');

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="notes" className="section" style={{ borderTop: '1px solid #21262d' }}>
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
          <span>open notes/</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 mb-4">
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em', marginBottom: '8px' }}>
              Notes & Conseils
            </h2>
            <p style={{ fontSize: '14px', color: '#8b949e', maxWidth: '520px', lineHeight: 1.7 }}>
              Des retours d&apos;expérience concrets sur la gestion de projets, les frameworks et l&apos;IA dans le développement.
              Par Seydou Bakhayokho.
            </p>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57', whiteSpace: 'nowrap' }}>
            {notes.length} fichiers
          </span>
        </div>

        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {notes.map((note, i) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <NoteSection
                note={note}
                isOpen={openId === note.id}
                onToggle={() => handleToggle(note.id)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: '24px', padding: '14px 16px', background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            <span style={{ color: '#3fb950' }}>$</span> git log --author=&quot;Seydou Bakhayokho&quot; --oneline
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#3fb950' }}>
            — En cours de mise à jour régulière
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Notes;
