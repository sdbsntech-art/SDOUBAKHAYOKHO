import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({
  slides,
  ariaLabel = 'Carrousel d’images',
  intervalMs = 6200,
  className = '',
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const len = slides.length;

  const prev = useCallback(() => {
    if (len === 0) return;
    setIndex((i) => (i - 1 + len) % len);
  }, [len]);

  const next = useCallback(() => {
    if (len === 0) return;
    setIndex((i) => (i + 1) % len);
  }, [len]);

  useEffect(() => {
    if (reduceMotion || len <= 1) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [reduceMotion, len, next, intervalMs]);

  if (!len) return null;

  const current = slides[index];

  const variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, scale: 1.03 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          scale: 0.97,
          transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
        },
      };

  return (
    <div
      className={`relative mx-auto w-full max-w-5xl min-w-0 select-none ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-subtle shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:aspect-[2/1]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src + String(index)}
              {...variants}
              drag={reduceMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -48) next();
                else if (info.offset.x > 48) prev();
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <img
                src={current.src}
                alt={current.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"
                aria-hidden
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {len > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition-all hover:bg-black/65 active:scale-95 sm:left-4 sm:h-11 sm:w-11"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition-all hover:bg-black/65 active:scale-95 sm:right-4 sm:h-11 sm:w-11"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </button>

            <div
              className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2 sm:bottom-4"
              role="tablist"
              aria-label="Choisir une image"
            >
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Image ${i + 1} sur ${len}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/35 hover:bg-white/55'
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
