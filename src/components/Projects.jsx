import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: "Devi App", type: "Web Application", url: "https://devi-app.netlify.app/" },
  { id: 2, title: "Alkebulan Tech", type: "Knowledge Base", url: "https://alkebulan-tech.netlify.app/" },
  { id: 3, title: "IDA Cours", type: "Education Platform", url: "https://ida-cours.netlify.app/" },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-bg-subtle">
      <div className="container">
        
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-dim mb-4">TRAVAUX</h2>
          <p className="text-4xl font-heading font-bold">Sélection de Projets.</p>
        </div>

        <div className="flex flex-col border-t border-border-subtle">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-border-subtle hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="flex flex-col gap-1 mb-4 md:mb-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-dim group-hover:text-white transition-colors">{project.type}</span>
                <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter">{project.title}</h3>
              </div>
              
              <div className="flex items-center gap-4 text-text-dim group-hover:text-white transition-colors">
                <span className="text-sm font-medium uppercase tracking-widest hidden md:block">Voir le site</span>
                <ArrowUpRight size={32} strokeWidth={1} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
