import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Youtube, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

export function Luxe() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Devi App",
      category: "Web App",
      description: "Une application web innovante conçue pour simplifier la gestion quotidienne.",
      year: "2024"
    },
    {
      title: "Alkebulan Tech",
      category: "Knowledge Base",
      description: "Base de connaissances centralisée pour l'écosystème tech africain.",
      year: "2023"
    },
    {
      title: "IDA Cours",
      category: "Education Platform",
      description: "Plateforme éducative moderne pour la diffusion de cours interactifs.",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-[#C9A84C] selection:text-[#0a0a0a] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        .gold-glow {
          box-shadow: 0 0 40px rgba(201, 168, 76, 0.05);
        }
        
        .gold-glow-hover:hover {
          box-shadow: 0 0 30px rgba(201, 168, 76, 0.15);
        }

        .text-gold {
          color: #C9A84C;
        }

        .bg-gold {
          background-color: #C9A84C;
        }

        .border-gold {
          border-color: rgba(201, 168, 76, 0.3);
        }

        .border-gold-solid {
          border-color: #C9A84C;
        }

        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border: 1px solid rgba(201, 168, 76, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #C9A84C;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-gold py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-widest text-white uppercase flex items-center gap-2">
            <span className="text-gold">S</span>B
          </a>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#about" className="hover:text-gold transition-colors">À Propos</a>
            <a href="#projects" className="hover:text-gold transition-colors">Projets</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-gray-300 hover:text-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-gold tracking-[0.2em] text-xs md:text-sm uppercase font-medium">Développeur Web & Entrepreneur</p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
                Seydou <br className="hidden md:block"/>
                <span className="italic font-light">Bakhayokho</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mx-auto md:mx-0">
              Construire le futur avec le code. De Dakar, Sénégal au monde entier.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-4 bg-transparent border border-gold-solid text-gold hover:bg-gold hover:text-[#0a0a0a] transition-all duration-300 tracking-widest text-sm uppercase">
                Découvrir l'œuvre
              </a>
              <div className="flex gap-6 items-center">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Github size={20} strokeWidth={1.5} /></a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-[28rem] gold-glow">
              {/* Refined Frame Placeholder */}
              <div className="absolute inset-0 border border-gold transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-[#111] border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a1a] opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                <span className="font-serif text-6xl text-gold opacity-50 font-light italic">SB</span>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-pulse opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-gold writing-vertical-rl rotate-180">Défiler</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-gold relative">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                L'Artisan<br/>
                <span className="text-gold italic">Digital</span>
              </h2>
              <div className="w-12 h-[1px] bg-gold mb-8"></div>
            </div>
            <div className="w-full md:w-2/3 space-y-8 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Passionné par la création d'expériences numériques d'exception, je fusionne la rigueur de l'ingénierie logicielle avec une sensibilité esthétique raffinée.
              </p>
              <p>
                Basé à Dakar, mon approche s'enracine dans la conviction que le code est une forme d'artisanat moderne. Chaque ligne est pensée, chaque interface est sculptée pour offrir des solutions qui allient performance, élégance et utilité.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-900">
                <div>
                  <h3 className="text-white font-serif text-xl mb-4">Expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Développement Frontend</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Architecture Web</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Design d'Interface</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-4">Valeurs</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Excellence technique</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Design intemporel</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div>Impact mesurable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 border-t border-gold relative bg-[#0d0d0d]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Œuvres<br/>
                <span className="text-gold italic">Choisies</span>
              </h2>
              <div className="w-12 h-[1px] bg-gold"></div>
            </div>
            <p className="text-gray-400 font-light max-w-md text-sm">
              Une sélection de projets récents, démontrant un engagement constant envers l'excellence et l'innovation.
            </p>
          </div>

          <div className="space-y-0 border-t border-gray-900">
            {projects.map((project, index) => (
              <div key={index} className="group relative border-b border-gray-900 py-12 hover:bg-[#111] transition-colors duration-500 px-6 -mx-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer">
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="font-serif text-gold text-2xl md:text-3xl font-light italic">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl text-white group-hover:text-gold transition-colors duration-300">{project.title}</h3>
                    <span className="text-[10px] tracking-widest uppercase text-gray-500 mt-2 block">{project.category}</span>
                  </div>
                </div>
                
                <div className="md:w-1/3 text-gray-400 font-light text-sm md:text-base">
                  {project.description}
                </div>
                
                <div className="md:w-1/4 flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                  <span className="font-serif text-gray-600 text-lg">{project.year}</span>
                  <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <ArrowRight className="text-gray-500 group-hover:text-gold transition-colors" size={20} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 border-t border-gold relative">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gold tracking-[0.2em] text-xs uppercase mb-8">Collaborations & Opportunités</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-12">
            Discutons de votre<br/>
            <span className="italic font-light">Prochain Projet</span>
          </h2>
          
          <a href="mailto:contact@example.com" className="inline-flex items-center gap-4 text-2xl md:text-3xl font-serif text-white hover:text-gold transition-colors border-b border-gray-800 hover:border-gold pb-2">
            bonjour@seydou-b.com
            <ArrowRight strokeWidth={1} />
          </a>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-gray-900 pt-16">
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Localisation</h4>
              <p className="text-gray-400 font-light text-sm">Dakar, Sénégal<br/>Disponible internationalement</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Réseaux</h4>
              <div className="flex flex-col gap-2 text-sm font-light">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2">LinkedIn <ExternalLink size={12}/></a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2">GitHub <ExternalLink size={12}/></a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2">Instagram <ExternalLink size={12}/></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Disponibilité</h4>
              <p className="text-gray-400 font-light text-sm">Actuellement ouvert aux nouvelles opportunités et projets freelance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gold/50 bg-[#050505]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-gray-500 uppercase">
          <p>&copy; {new Date().getFullYear()} Seydou Bakhayokho.</p>
          <div className="flex gap-2 items-center">
            <span>Tous droits réservés.</span>
            <span className="w-1 h-1 bg-gold rounded-full mx-2"></span>
            <span>Design avec <span className="text-gold">♥</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
