import { motion } from 'framer-motion';

const SectionHeader = ({
  eyebrow,
  title,
  titleMuted,
  description,
  trailing,
  headerAlign = 'start',
  className = '',
}) => {
  const headlineAlign =
    headerAlign === 'center'
      ? 'items-center text-center md:items-start md:text-left'
      : 'items-start text-left';

  const eyebrowRow =
    headerAlign === 'center'
      ? 'justify-center md:justify-start'
      : 'justify-start';

  return (
    <div
      className={`flex flex-col gap-8 mb-16 md:mb-24 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`flex max-w-3xl flex-col gap-5 ${headlineAlign}`}
      >
        <div className={`flex items-center gap-3 ${eyebrowRow}`}>
          <span className="h-px w-8 bg-accent-champagne/60" aria-hidden />
          <span className="section-eyebrow">{eyebrow}</span>
        </div>
        <h2 className="section-title">
          {title}
          {titleMuted != null && titleMuted !== '' && (
            <>
              <br />
              <span className="text-white/[0.14]">{titleMuted}</span>
            </>
          )}
        </h2>
        {description ? (
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            {description}
          </p>
        ) : null}
      </motion.div>
      {trailing ? (
        <div className="shrink-0 md:max-w-sm md:text-right">{trailing}</div>
      ) : null}
    </div>
  );
};

export default SectionHeader;
