import React from 'react';

export function Minimaliste() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f8f8f6', color: '#111', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(248,248,246,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e5e5e5', padding: '0 48px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em', color: '#111' }}>Seydou Bakhayokho</span>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Info', 'Works', 'Contact'].map(l => (
            <a key={l} href="#" style={{ fontSize: '13px', fontWeight: 500, color: '#666', letterSpacing: '0.01em' }}>{l}</a>
          ))}
        </div>
        <a href="#" style={{ fontSize: '13px', fontWeight: 500, background: '#111', color: '#fff', padding: '8px 18px', borderRadius: '6px' }}>Disponible</a>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '140px', paddingBottom: '100px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: '#e8f4e8', color: '#166534', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.04em', marginBottom: '32px' }}>
          OUVERT AUX PROJETS
        </div>
        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#111', marginBottom: '28px', maxWidth: '800px' }}>
          Développeur web &<br />
          <span style={{ color: '#555' }}>entrepreneur créatif.</span>
        </h1>
        <p style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7, color: '#666', maxWidth: '500px', marginBottom: '40px' }}>
          Je construis des interfaces web rapides et soignées, au service de projets à impact. Basé à Dakar, disponible partout.
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="#" style={{ background: '#111', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}>Voir les projets →</a>
          <a href="#" style={{ background: '#fff', color: '#111', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, border: '1px solid #e0e0e0' }}>Me contacter</a>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '40px', marginTop: '64px', paddingTop: '40px', borderTop: '1px solid #e5e5e5' }}>
          {[['3+', 'Projets livrés'], ['2', 'Entreprises'], ['Dakar', 'Localisation']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{n}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: '#fff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', color: '#888', textTransform: 'uppercase' }}>Projets sélectionnés</h2>
            <a href="#" style={{ fontSize: '13px', color: '#111', fontWeight: 500 }}>Voir tout →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { title: 'Devi App', type: 'Application Web', year: '2024', tag: 'Fullstack' },
              { title: 'Alkebulan Tech', type: 'Knowledge Base', year: '2023', tag: 'Architecture' },
              { title: 'IDA Cours', type: 'Plateforme Éducative', year: '2023', tag: 'Lead Dev' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '12px', color: '#bbb', fontWeight: 500, width: '24px' }}>0{i + 1}</span>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: 600, color: '#111', letterSpacing: '-0.01em' }}>{p.title}</div>
                    <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{p.type}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '12px', background: '#f5f5f5', color: '#555', padding: '4px 10px', borderRadius: '100px', fontWeight: 500 }}>{p.tag}</span>
                  <span style={{ fontSize: '13px', color: '#aaa' }}>{p.year}</span>
                  <span style={{ color: '#bbb', fontSize: '18px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 48px', maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: '#aaa' }}>© 2026 Seydou Bakhayokho</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['GitHub', 'LinkedIn', 'YouTube'].map(s => (
            <a key={s} href="#" style={{ fontSize: '13px', color: '#888', fontWeight: 500 }}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Minimaliste;
