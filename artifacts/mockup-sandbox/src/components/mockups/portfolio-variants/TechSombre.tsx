import React from 'react';

export function TechSombre() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0d1117', color: '#e6edf3', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #21262d', padding: '0 48px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3fb950', boxShadow: '0 0 6px #3fb950' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: '13px', color: '#e6edf3', letterSpacing: '0.02em' }}>seydou.dev</span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['~/info', '~/works', '~/contact'].map(l => (
            <a key={l} href="#" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 400, color: '#8b949e', letterSpacing: '0.02em' }}>{l}</a>
          ))}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#3fb950', border: '1px solid #238636', padding: '6px 14px', borderRadius: '6px' }}>
          available=true
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '130px', paddingBottom: '80px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#3fb950', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#8b949e' }}>$</span> whoami
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#e6edf3', marginBottom: '24px' }}>
          Seydou<br />
          <span style={{ color: '#3fb950' }}>Bakhayokho.</span>
        </h1>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: '#8b949e', marginBottom: '12px', lineHeight: 1.8 }}>
          <span style={{ color: '#58a6ff' }}>const</span> <span style={{ color: '#e6edf3' }}>dev</span> = {'{'}<br />
          &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>role</span>: <span style={{ color: '#a5d6ff' }}>"Fullstack Developer"</span>,<br />
          &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>location</span>: <span style={{ color: '#a5d6ff' }}>"Dakar, SN"</span>,<br />
          &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>stack</span>: [<span style={{ color: '#a5d6ff' }}>"React"</span>, <span style={{ color: '#a5d6ff' }}>"Node"</span>, <span style={{ color: '#a5d6ff' }}>"Vite"</span>],<br />
          &nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>open</span>: <span style={{ color: '#79c0ff' }}>true</span><br />
          {'}'}
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '36px' }}>
          <a href="#" style={{ background: '#238636', color: '#fff', padding: '10px 22px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, border: '1px solid #3fb950' }}>Voir les projets</a>
          <a href="#" style={{ background: 'transparent', color: '#c9d1d9', padding: '10px 22px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: '1px solid #30363d' }}>Contacter</a>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 48px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', marginBottom: '24px' }}>
          <span style={{ color: '#3fb950' }}>$</span> ls ./projects
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { name: 'devi-app', desc: 'Application web fullstack', lang: 'TypeScript', color: '#3178c6' },
            { name: 'alkebulan-tech', desc: 'Knowledge base & docs', lang: 'React', color: '#61dafb' },
            { name: 'ida-cours', desc: 'Education platform', lang: 'JavaScript', color: '#f7df1e' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '20px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px' }}>📁</span>
                <span style={{ color: '#58a6ff', fontSize: '20px' }}>↗</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600, color: '#e6edf3', marginBottom: '6px' }}>{p.name}</div>
              <div style={{ fontSize: '12px', color: '#8b949e', marginBottom: '16px' }}>{p.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.color }} />
                <span style={{ fontSize: '12px', color: '#8b949e' }}>{p.lang}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '24px 48px', borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f58' }}>// © 2026 Seydou Bakhayokho</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['GitHub', 'LinkedIn', 'YouTube'].map(s => (
            <a key={s} href="#" style={{ fontSize: '12px', color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default TechSombre;
