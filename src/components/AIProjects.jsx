import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Lock } from 'lucide-react';
import { aiProjects } from '../data/aiProjects';

export default function AIProjects() {
  return (
    <section id="ai-projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">AI & Agentic Work</p>
        <h2 className="section-title">Building with agents</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
        <p className="text-text-muted max-w-2xl mb-10">
          I'm currently working on a multi-agent AI startup — building products
          for both end-users (merchants, traders) and developers (LLM cost
          control, agent governance).
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {aiProjects.map((p, idx) => (
          <motion.a
            key={p.name}
            href={p.liveUrl || '#'}
            target={p.liveUrl ? '_blank' : undefined}
            rel={p.liveUrl ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`card card-hover group relative overflow-hidden ${
              !p.liveUrl && 'cursor-default'
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-px -left-px -right-px h-px bg-warm-gradient" />
            )}

            <div className="flex items-start justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-warm-gradient/10 border border-accent-orange/20 flex items-center justify-center">
                <Sparkles size={20} className="text-accent-amber" />
              </div>
              {p.liveUrl ? (
                <ExternalLink
                  size={18}
                  className="text-text-muted group-hover:text-accent-amber transition-colors"
                />
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-text-muted">
                  <Lock size={11} /> Private
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-text-primary mb-1">
              {p.name}
            </h3>
            <p className="text-sm text-accent-amber/80 mb-3">{p.tagline}</p>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>

            {p.liveUrl && (
              <div className="mt-4 text-sm text-text-muted group-hover:text-accent-amber transition-colors">
                {p.cta} →
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
