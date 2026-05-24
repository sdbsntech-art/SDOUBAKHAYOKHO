import React from 'react';

export function Colore() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#080510', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
        .glow { box-shadow: 0 0 80px rgba(147, 51, 234, 0.25), 0 0 160px rgba(59, 130, 246, 0.1); }
      `}</style>

      {/* Gradient orbs */}
      <div style={{ position: 'fixed', top: '-200px', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-200px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,5,16,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 48px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SB.</span>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Info', 'Works', 'Contact'].map(l => (
            <a key={l} href="#" style={{ fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>{l}</a>
          ))}
        </div>
        <a href="#" style={{ fontSize: '13px', fontWeight: 600, background: 'linear-gradient(135deg, #a855f7, #6366f1)', color: '#fff', padding: '8px 20px', borderRadius: '100px' }}>Discutons ✦</a>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: '140px', paddingBottom: '80px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '100px', padding: '6px 16px', marginBottom: '32px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7' }} />
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#c084fc', letterSpacing: '0.08em' }}>DISPONIBLE POUR DES PROJETS</span>
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '24px' }}>
          Je construis des<br />
          <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>expériences</span><br />
          mémorables.
        </h1>

        <p style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto 40px' }}>
          Développeur web & entrepreneur basé à Dakar. Je transforme vos idées en produits numériques percutants.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="#" style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)', color: '#fff', padding: '14px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 700, boxShadow: '0 8px 32px rgba(168,85,247,0.4)' }}>Voir les travaux ✦</a>
          <a href="#" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', padding: '14px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>Me contacter</a>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ position: 'relative', zIndex: 1, padding: '0 48px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '32px', textAlign: 'center' }}>Projets récents</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { title: 'Devi App', desc: 'Application web fullstack', gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)', accent: '#818cf8' },
            { title: 'Alkebulan Tech', desc: 'Knowledge Base', gradient: 'linear-gradient(135deg, #1a1035, #2e1065)', accent: '#a855f7' },
            { title: 'IDA Cours', desc: 'Plateforme éducative', gradient: 'linear-gradient(135deg, #0c1a2e, #1e3a5f)', accent: '#3b82f6' },
          ].map((p, i) => (
            <div key={i} style={{ background: p.gradient, borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: p.accent, opacity: 0.1, filter: 'blur(20px)' }} />
              <div style={{ fontSize: '24px', marginBottom: '16px' }}>{['🚀', '⚡', '📚'][i]}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '18px', color: p.accent }}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 1, padding: '28px 48px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Seydou Bakhayokho</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['GitHub', 'LinkedIn', 'YouTube', 'Instagram'].map(s => (
            <a key={s} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Colore;
