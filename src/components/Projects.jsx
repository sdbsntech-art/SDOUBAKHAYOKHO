import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Devi App', type: 'Web Application', role: 'Fullstack', year: '2024', url: 'https://devi-app.netlify.app/' },
  { id: 2, title: 'Alkebulan Tech', type: 'Knowledge Base', role: 'Architecture', year: '2023', url: 'https://alkebulan-tech.netlify.app/' },
  { id: 3, title: 'IDA Cours', type: 'Education Platform', role: 'Lead Dev', year: '2023', url: 'https://ida-cours.netlify.app/' },
];

const Projects = () => {
  return (
    <section id="projects" className="section border-t border-neutral-900 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-blue-600 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(7rem, 15vw, 13rem)', letterSpacing: '0.02em' }}
              >02</div>
              <h2
                className="text-white uppercase mt-[-0.12em]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
              >
                Works
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-8 flex lg:items-end lg:pb-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-500 font-light text-lg max-w-md"
            >
              Une sélection de projets récents alliant performance technique et excellence visuelle.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border-t border-neutral-900 hover:border-neutral-700 transition-colors py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                <span className="text-neutral-700 text-sm tabular-nums font-light">{String(i + 1).padStart(2, '0')}</span>
                <h3
                  className="text-white group-hover:text-blue-600 transition-colors duration-300 uppercase"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex w-full md:w-auto justify-between md:justify-end md:gap-12 items-center">
                <div className="flex flex-col gap-1 text-sm font-light text-neutral-500 text-left md:text-right">
                  <span className="text-neutral-300">{project.type}</span>
                  <span>{project.role} · {project.year}</span>
                </div>
                <ArrowRight
                  size={32}
                  strokeWidth={1}
                  className="text-neutral-700 group-hover:text-white transition-all duration-300 group-hover:-rotate-45"
                />
              </div>
            </motion.a>
          ))}
          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
