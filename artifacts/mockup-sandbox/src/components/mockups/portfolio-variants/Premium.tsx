import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  Mail,
  ExternalLink,
  ChevronRight,
  MonitorSmartphone,
  Server
} from 'lucide-react';

export function Premium() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-gray-300 font-sans selection:bg-violet-500/30 selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        .font-display { font-family: 'Syne', sans-serif; }
        .font-sans { font-family: 'Space Grotesk', sans-serif; }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .glass-panel:hover {
          border: 1px solid rgba(124, 58, 237, 0.3);
          background: rgba(255, 255, 255, 0.03);
        }

        .text-gradient {
          background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient-accent {
          background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .bg-gradient-accent {
          background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
        }

        .glow-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="glow-blob top-[-20%] left-[-10%]" />
        <div className="glow-blob bottom-[-20%] right-[-10%] bg-cyan-900/10" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050508]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <a href="#" className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-sm">SB</span>
            Seydou B.
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white text-sm font-medium hover:bg-white/5 transition-all">
            Discutons <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-6xl min-h-[80vh] flex flex-col justify-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel w-fit mb-8 border-violet-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium text-violet-200">Disponible pour de nouveaux projets</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-gradient">Construire le futur</span><br />
            <span className="text-gradient">avec le </span>
            <span className="text-gradient-accent">code.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Développeur web & entrepreneur basé à Dakar, Sénégal. 
            Je transforme des idées complexes en expériences numériques élégantes et performantes.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              Voir les projets <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel">
              <a href="https://github.com/sdbsntech-art" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6 max-w-6xl mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Projets Phares</h2>
              <p className="text-gray-400 max-w-md">Une sélection de mes travaux récents, alliant design intuitif et architecture robuste.</p>
            </div>
            <a href="#" className="text-violet-400 hover:text-violet-300 flex items-center gap-2 mt-4 md:mt-0 font-medium transition-colors">
              Voir tout le portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Devi App",
                desc: "Application Web innovante pour la gestion de devis et facturation.",
                tags: ["React", "Node.js", "Tailwind"],
                gradient: "from-violet-500/20 to-cyan-500/20"
              },
              {
                title: "Alkebulan Tech",
                desc: "Base de connaissances technologique axée sur le continent africain.",
                tags: ["Next.js", "MDX", "Vercel"],
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "IDA Cours",
                desc: "Plateforme éducative interactive pour étudiants et professeurs.",
                tags: ["Vue", "Firebase", "Stripe"],
                gradient: "from-emerald-500/20 to-cyan-500/20",
                fullWidth: true
              }
            ].map((p, i) => (
              <div key={i} className={`glass-panel rounded-2xl p-2 group transition-all duration-500 ${p.fullWidth ? 'md:col-span-2' : ''}`}>
                <div className={`h-48 md:h-64 rounded-xl mb-6 bg-gradient-to-br ${p.gradient} relative overflow-hidden flex items-center justify-center border border-white/5`}>
                  <div className="absolute inset-0 bg-[#050508]/40 group-hover:bg-transparent transition-colors duration-500" />
                  <Code2 className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform duration-500 group-hover:text-white" />
                </div>
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl font-semibold text-white group-hover:text-violet-400 transition-colors">{p.title}</h3>
                    <a href="#" className="w-8 h-8 rounded-full glass-panel flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
                  <div className="flex gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Expertise */}
        <section id="services" className="container mx-auto px-6 max-w-6xl mb-40">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-16">Expertise & Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MonitorSmartphone, title: "Développement Frontend", desc: "Interfaces réactives, performantes et accessibles avec React & Vue." },
              { icon: Server, title: "Architecture Backend", desc: "APIs robustes, gestion de bases de données et sécurité avec Node & Python." },
              { icon: Globe, title: "Stratégie Digitale", desc: "Accompagnement et conception de solutions web pour votre business." }
            ].map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-violet-500/20" />
                <s.icon className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Prêt à lancer <br/>votre prochain projet ?
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">
              Que ce soit pour une nouvelle application, une refonte ou une consultation, je suis à votre écoute.
            </p>
            
            <form className="max-w-md mx-auto relative z-10 space-y-4 text-left">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <textarea 
                placeholder="Parlez-moi de votre projet..." 
                rows={3}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              ></textarea>
              <button type="button" className="w-full bg-gradient-accent text-white font-medium rounded-xl px-4 py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Envoyer le message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 relative z-10 bg-[#020204]">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <span className="w-6 h-6 rounded-md bg-gradient-accent flex items-center justify-center text-[10px] font-bold text-white">SB</span>
             <span className="font-display font-semibold text-white text-sm">Seydou Bakhayokho</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dakar, Sénégal. Tous droits réservés.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
