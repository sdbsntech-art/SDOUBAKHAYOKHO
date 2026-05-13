import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-text-dim">
            Contact
          </h2>
          <p className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-5xl">
            Parlons de vos idées.
          </p>
          <p className="mx-auto mt-6 text-lg text-text-dim">
            Vous pouvez me joindre par email à{' '}
            <strong className="font-medium text-white">sdbsntech@gmail.com</strong>{' '}
            ou via le formulaire ci-dessous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto max-w-xl"
        >
          <form
            action={FORMSPREE_URL}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-[10px] font-bold uppercase tracking-widest text-text-dim"
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
                  className="bg-transparent border-b border-border-subtle py-2 text-base text-white placeholder:text-text-dim/50 focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-[10px] font-bold uppercase tracking-widest text-text-dim"
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
                  className="bg-transparent border-b border-border-subtle py-2 text-base text-white placeholder:text-text-dim/50 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-[10px] font-bold uppercase tracking-widest text-text-dim"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Comment puis-je vous aider ?"
                className="resize-none bg-transparent border-b border-border-subtle py-2 text-base text-white placeholder:text-text-dim/50 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {status === 'success' ? (
              <p className="flex items-center justify-center gap-2 text-sm text-white sm:justify-start">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                Message envoyé. Merci — je vous réponds très vite.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="text-center text-sm text-red-400/90 sm:text-left">
                Envoi impossible pour le moment. Réessayez ou écrivez-moi par
                email.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-minimal flex w-full items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Envoi…
                </>
              ) : (
                <>
                  Envoyer
                  <Send size={16} aria-hidden />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
