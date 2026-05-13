import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-subtle bg-bg-base">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-text-dim">
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="https://github.com/sdbsntech-art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white group">
            <i className="fa-brands fa-github text-lg"></i>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/seydou-bakhayokho-864070343" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white group">
            <i className="fa-brands fa-linkedin text-lg"></i>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/channel/UCd2g3LCyGPa2lxCdAk1ZP3g" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white group">
            <i className="fa-brands fa-youtube text-lg"></i>
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <a href="https://www.instagram.com/princeseydoubhk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white group">
            <i className="fa-brands fa-instagram text-lg"></i>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} Seydou Bakhayokho</p>

        <div className="flex items-center gap-2">
          <span>Dakar</span>
          <span className="w-8 h-px bg-border-subtle"></span>
          <span>Sénégal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
