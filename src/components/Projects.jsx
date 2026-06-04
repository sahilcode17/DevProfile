import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
        <p className="text-text-muted max-w-2xl mb-10">
          A handful of things I've built, from research papers to production
          APIs. Many of these are older — they document where my engineering
          taste comes from.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card card-hover flex flex-col group"
          >
            {p.featured && (
              <div className="absolute -top-px -left-px -right-px h-px bg-warm-gradient" />
            )}

            <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-accent-amber transition-colors">
              {p.name}
            </h3>
            <p className="text-xs text-accent-amber/80 mb-3">{p.tagline}</p>
            <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-bg-border">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-amber transition-colors"
              >
                <Github size={14} /> Code
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-amber transition-colors"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {p.name === 'SoundMaven' && (
                <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                  <Star size={12} /> Kaggle
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href={projects.find((p) => p.name === 'sahilcode17' ? p : null)?.github || 'https://github.com/sahilcode17'}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-amber transition-colors"
        >
          <Github size={14} /> See all 58 repos on GitHub →
        </a>
      </motion.div>
    </section>
  );
}
