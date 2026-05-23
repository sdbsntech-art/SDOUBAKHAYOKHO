import React from 'react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/sdbsntech-art', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seydou-bakhayokho-864070343', icon: 'fa-brands fa-linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCd2g3LCyGPa2lxCdAk1ZP3g', icon: 'fa-brands fa-youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/princeseydoubhk/', icon: 'fa-brands fa-instagram' },
];

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #21262d', background: '#0d1117', padding: '32px 0' }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57' }}>
            <span style={{ color: '#3fb950' }}>$</span> echo "© {new Date().getFullYear()} Seydou Bakhayokho"
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', color: '#8b949e', fontSize: '14px', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#3fb950'; e.currentTarget.style.color = '#3fb950'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#21262d'; e.currentTarget.style.color = '#8b949e'; }}
              >
                <i className={icon} aria-hidden />
              </a>
            ))}
          </div>

          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#484f57' }}>
            // Dakar, Sénégal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
