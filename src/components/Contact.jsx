import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, Send } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xqapevvv';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    try {
      const body = new FormData(form);
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid #21262d' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e' }}
        >
          <span style={{ color: '#3fb950' }}>$</span>
          <span>git commit -m "send message"</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.015em', marginBottom: '12px' }}>
                Travaillons ensemble
              </h2>
              <p style={{ fontSize: '15px', color: '#8b949e', lineHeight: 1.8, marginBottom: '32px' }}>
                Un projet en tête ? Une collaboration à explorer ? Envoyez-moi un message.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: '📧', label: 'Email', value: 'sdbsntech@gmail.com', href: 'mailto:sdbsntech@gmail.com' },
                  { icon: '📍', label: 'Localisation', value: 'Dakar, Sénégal', href: null },
                  { icon: '🕐', label: 'Disponibilité', value: 'Ouvert aux projets', href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '14px' }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#484f57', marginBottom: '2px' }}>{label}</div>
                      {href
                        ? <a href={href} style={{ fontSize: '13px', color: '#58a6ff', textDecoration: 'none' }}>{value}</a>
                        : <span style={{ fontSize: '13px', color: '#8b949e' }}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '6px', overflow: 'hidden' }}
            >
              {/* Fake terminal header */}
              <div style={{ padding: '10px 16px', borderBottom: '1px solid #21262d', display: 'flex', alignItems: 'center', gap: '8px', background: '#161b22' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#484f57', marginLeft: '8px' }}>message.sh</span>
              </div>

              <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} style={{ padding: '24px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="c-name" style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '6px' }}>
                      <span style={{ color: '#3fb950' }}>--</span>name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Votre nom"
                      style={{ width: '100%', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#e6edf3', outline: 'none', fontFamily: "'Inter', sans-serif", transition: 'border-color 0.2s' }}
                      onFocus={e => e.currentTarget.style.borderColor = '#3fb950'}
                      onBlur={e => e.currentTarget.style.borderColor = '#30363d'}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '6px' }}>
                      <span style={{ color: '#3fb950' }}>--</span>email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Votre email"
                      style={{ width: '100%', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#e6edf3', outline: 'none', fontFamily: "'Inter', sans-serif", transition: 'border-color 0.2s' }}
                      onFocus={e => e.currentTarget.style.borderColor = '#3fb950'}
                      onBlur={e => e.currentTarget.style.borderColor = '#30363d'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="c-message" style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8b949e', marginBottom: '6px' }}>
                    <span style={{ color: '#3fb950' }}>--</span>message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Décrivez votre projet ou votre demande..."
                    style={{ width: '100%', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#e6edf3', outline: 'none', fontFamily: "'Inter', sans-serif", resize: 'none', transition: 'border-color 0.2s', lineHeight: 1.6 }}
                    onFocus={e => e.currentTarget.style.borderColor = '#3fb950'}
                    onBlur={e => e.currentTarget.style.borderColor = '#30363d'}
                  />
                </div>

                {status === 'success' && (
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#3fb950', marginBottom: '16px', fontFamily: "'JetBrains Mono', monospace" }}>
                    <CheckCircle2 size={15} /> Message envoyé avec succès.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ fontSize: '13px', color: '#f85149', marginBottom: '16px', fontFamily: "'JetBrains Mono', monospace" }}>
                    Erreur d&apos;envoi. Réessayez ou écrivez à sdbsntech@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-minimal"
                  style={{ opacity: status === 'submitting' ? 0.6 : 1 }}
                >
                  {status === 'submitting'
                    ? <><Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> Envoi...</>
                    : <><Send size={14} /> Envoyer le message</>
                  }
                </button>
                <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
