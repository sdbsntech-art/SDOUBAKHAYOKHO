import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-neutral-900 bg-black px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div
          className="text-2xl text-neutral-600 tracking-widest"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}
        >
          SB <span className="text-blue-600">©{new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/sdbsntech-art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-white transition-colors text-xs font-light uppercase tracking-widest"
          >
            <i className="fa-brands fa-github text-base" aria-hidden />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/seydou-bakhayokho-864070343"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-white transition-colors text-xs font-light uppercase tracking-widest"
          >
            <i className="fa-brands fa-linkedin text-base" aria-hidden />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCd2g3LCyGPa2lxCdAk1ZP3g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-white transition-colors text-xs font-light uppercase tracking-widest"
          >
            <i className="fa-brands fa-youtube text-base" aria-hidden />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <a
            href="https://www.instagram.com/princeseydoubhk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-white transition-colors text-xs font-light uppercase tracking-widest"
          >
            <i className="fa-brands fa-instagram text-base" aria-hidden />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>

        <div className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.18em] text-neutral-700">
          <span>Dakar</span>
          <span className="w-6 h-px bg-neutral-800" />
          <span>Sénégal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
