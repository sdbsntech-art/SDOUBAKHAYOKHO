import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, Mail, MapPin } from 'lucide-react';

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
    <section id="contact" className="section border-t border-neutral-900 bg-neutral-950 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-blue-600 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(7rem, 15vw, 13rem)', letterSpacing: '0.02em' }}
              >03</div>
              <h2
                className="text-white uppercase mt-[-0.12em] mb-10"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '0.03em', lineHeight: 0.9 }}
              >
                Contact
              </h2>
              <p className="text-neutral-400 font-light text-lg mb-12 max-w-sm">
                Prêt à transformer vos idées en réalité ? Discutons de votre prochain projet.
              </p>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:sdbsntech@gmail.com"
                  className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Mail size={18} className="text-blue-600 shrink-0" />
                  <span className="font-light">sdbsntech@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-neutral-500">
                  <MapPin size={18} className="text-blue-600 shrink-0" />
                  <span className="font-light">Dakar, Sénégal</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              action={FORMSPREE_URL}
              method="POST"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-10 lg:pt-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.12em', fontSize: '0.85rem' }}
                  >
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Votre nom"
                    className="bg-transparent border-b border-neutral-800 py-3 text-base text-white placeholder:text-neutral-700 focus:border-blue-600 focus:outline-none transition-colors font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.12em', fontSize: '0.85rem' }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Votre email"
                    className="bg-transparent border-b border-neutral-800 py-3 text-base text-white placeholder:text-neutral-700 focus:border-blue-600 focus:outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.12em', fontSize: '0.85rem' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Comment puis-je vous aider ?"
                  className="resize-none bg-transparent border-b border-neutral-800 py-3 text-base text-white placeholder:text-neutral-700 focus:border-blue-600 focus:outline-none transition-colors font-light"
                />
              </div>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" aria-hidden />
                  Message envoyé. Merci — je vous réponds très vite.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Envoi impossible pour le moment. Réessayez ou écrivez-moi par email.
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group flex items-center justify-between bg-white text-black py-5 px-8 hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto sm:min-w-[280px] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em', fontSize: '1.2rem' }}>
                    {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </span>
                  {status === 'submitting'
                    ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                    : <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" aria-hidden />
                  }
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
