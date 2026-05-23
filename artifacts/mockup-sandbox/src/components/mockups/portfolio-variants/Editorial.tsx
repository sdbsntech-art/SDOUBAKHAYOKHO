import React from 'react';
import { ArrowRight, Github, Linkedin, Youtube, Instagram, Mail, MapPin } from 'lucide-react';

export function Editorial() {
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .accent-blue { color: #2563EB; }
        .bg-accent-blue { background-color: #2563EB; }
        .border-accent-blue { border-color: #2563EB; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-bebas text-2xl tracking-wider">SEYDOU BAKHAYOKHO</div>
        <div className="hidden md:flex gap-8 font-inter text-sm font-medium tracking-widest uppercase">
          <a href="#info" className="hover:accent-blue transition-colors">Info</a>
          <a href="#works" className="hover:accent-blue transition-colors">Works</a>
          <a href="#contact" className="hover:accent-blue transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[100dvh] pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10">
            <h1 className="font-bebas text-[12vw] leading-[0.85] uppercase m-0 p-0">
              Construire <br />
              <span className="accent-blue">le futur</span> <br />
              avec le code.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="w-full aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
              {/* Editorial abstract image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-50 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" 
                alt="Abstract Tech" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 font-bebas text-xl">Dakar, SN</div>
            </div>
            <div className="font-inter text-neutral-400 font-light text-lg max-w-sm">
              Développeur web & entrepreneur, créant des expériences numériques percutantes.
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-24 font-bebas text-8xl md:text-[150px] lg:text-[200px] text-neutral-900 -z-10 leading-none select-none">
          PORTFOLIO
        </div>
      </section>

      {/* 01 INFO */}
      <section id="info" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="font-bebas text-[120px] md:text-[180px] leading-none accent-blue m-0 p-0">01</div>
              <h2 className="font-bebas text-5xl md:text-7xl mt-[-20px] uppercase">INFO</h2>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-16 lg:pt-16">
            <div className="text-xl md:text-3xl font-inter font-light leading-relaxed text-neutral-200">
              Je suis un développeur passionné basé à Dakar. Mon objectif est de fusionner design, technologie et stratégie commerciale pour créer des solutions web qui ont un véritable impact.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bebas text-3xl mb-6 accent-blue">Expertise</h3>
                <ul className="flex flex-col gap-4 font-inter font-light text-neutral-400">
                  <li className="border-b border-neutral-800 pb-4">Frontend Development</li>
                  <li className="border-b border-neutral-800 pb-4">Backend Architecture</li>
                  <li className="border-b border-neutral-800 pb-4">UI/UX Design Implementation</li>
                  <li className="border-b border-neutral-800 pb-4">Technical Strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bebas text-3xl mb-6 accent-blue">Entreprises</h3>
                <ul className="flex flex-col gap-4 font-inter font-light text-neutral-400">
                  <li className="border-b border-neutral-800 pb-4 flex justify-between">
                    <span className="text-white">Alkebulan Tech</span>
                    <span>Fondateur</span>
                  </li>
                  <li className="border-b border-neutral-800 pb-4 flex justify-between">
                    <span className="text-white">IDA Cours</span>
                    <span>Plateforme</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WORKS */}
      <section id="works" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="lg:col-span-4">
            <div className="font-bebas text-[120px] md:text-[180px] leading-none accent-blue m-0 p-0">02</div>
            <h2 className="font-bebas text-5xl md:text-7xl mt-[-20px] uppercase">WORKS</h2>
          </div>
          <div className="lg:col-span-8 flex items-end pb-8">
            <p className="text-neutral-400 font-inter font-light max-w-md">
              Une sélection de projets récents alliant performance technique et excellence visuelle.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {[
            { title: "DEVI APP", type: "Web Application", role: "Fullstack", year: "2024" },
            { title: "ALKEBULAN TECH", type: "Knowledge Base", role: "Architecture", year: "2023" },
            { title: "IDA COURS", type: "Education Platform", role: "Lead Dev", year: "2023" }
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer border-t border-neutral-800 hover:border-neutral-500 transition-colors py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                <span className="font-inter text-neutral-600 text-sm md:text-base">{(i + 1).toString().padStart(2, '0')}</span>
                <h3 className="font-bebas text-5xl md:text-7xl lg:text-8xl group-hover:accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="flex w-full md:w-auto justify-between md:justify-end md:gap-16 items-center">
                <div className="flex flex-col gap-1 text-sm font-inter font-light text-neutral-400 text-left md:text-right">
                  <span className="text-white">{project.type}</span>
                  <span>{project.role}</span>
                </div>
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-neutral-700 group-hover:text-white transition-colors duration-300 transform group-hover:-rotate-45" />
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-800"></div>
        </div>
      </section>

      {/* 03 CONTACT */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-neutral-800 bg-neutral-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="font-bebas text-[120px] md:text-[180px] leading-none accent-blue m-0 p-0">03</div>
            <h2 className="font-bebas text-5xl md:text-7xl mt-[-20px] uppercase mb-12">CONTACT</h2>
            
            <div className="font-inter font-light text-neutral-400 text-lg mb-16 max-w-md">
              Prêt à transformer vos idées en réalité ? Discutons de votre prochain projet.
            </div>

            <div className="flex flex-col gap-6 font-inter">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-xl hover:accent-blue transition-colors w-fit">
                <Mail className="w-5 h-5" />
                hello@seydoubakhayokho.com
              </a>
              <div className="flex items-center gap-4 text-xl text-neutral-400">
                <MapPin className="w-5 h-5" />
                Dakar, Sénégal
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form className="flex flex-col gap-12 lg:pt-32">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="VOTRE NOM" 
                  className="w-full bg-transparent border-b border-neutral-800 pb-4 text-xl font-bebas tracking-wider focus:outline-none focus:border-blue-600 transition-colors placeholder:text-neutral-700"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="VOTRE EMAIL" 
                  className="w-full bg-transparent border-b border-neutral-800 pb-4 text-xl font-bebas tracking-wider focus:outline-none focus:border-blue-600 transition-colors placeholder:text-neutral-700"
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="VOTRE MESSAGE" 
                  rows={4}
                  className="w-full bg-transparent border-b border-neutral-800 pb-4 text-xl font-bebas tracking-wider focus:outline-none focus:border-blue-600 transition-colors placeholder:text-neutral-700 resize-none"
                ></textarea>
              </div>
              <button type="button" className="group flex items-center justify-between bg-white text-black py-6 px-8 hover:bg-accent-blue hover:text-white transition-all duration-300 w-full sm:w-auto">
                <span className="font-bebas text-2xl tracking-wider">ENVOYER LE MESSAGE</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-neutral-900 bg-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-bebas text-3xl tracking-widest text-neutral-500">
          SB <span className="accent-blue">© {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-neutral-500 hover:accent-blue transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-neutral-500 hover:accent-blue transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-neutral-500 hover:accent-blue transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="text-neutral-500 hover:accent-blue transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Editorial;
