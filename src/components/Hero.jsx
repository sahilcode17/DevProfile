import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import { personal, stats } from '../data/personal';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background warm glow */}
      <div className="absolute inset-0 bg-warm-glow pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"
        aria-hidden
      />

      <div className="section relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/5 border border-accent-amber/20 text-xs text-accent-amber mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Hi, I'm <span className="warm-text">Sahil</span>.
            <br />
            I build <span className="warm-text">distributed</span> systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-text-muted max-w-xl mb-8 text-balance"
          >
            {personal.tagline} Currently engineering the core execution engine
            and ReAct/CoT prompting frameworks at <span className="text-text-primary font-medium">Ottimate</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-warm-gradient text-bg font-semibold shadow-warm-md hover:shadow-warm-lg transition-shadow"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-surface border border-bg-border text-text-primary hover:border-accent-orange/40 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-surface border border-bg-border text-text-primary hover:border-accent-orange/40 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 text-sm text-text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-accent-amber" /> {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} className="text-accent-amber" /> {personal.email}
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Stats / Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute -inset-4 bg-warm-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-accent-orange/30 shadow-warm-lg">
                <img
                  src="img/dp.jpg"
                alt="Sahil Khandelwal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mt-6 max-w-md mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className="card text-center py-4"
              >
                <div className="text-2xl font-bold warm-text">{s.value}</div>
                <div className="text-xs text-text-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-amber transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
