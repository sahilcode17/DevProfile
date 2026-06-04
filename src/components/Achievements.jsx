import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Snowflake,
  Github,
  Trophy,
  ExternalLink,
} from 'lucide-react';
import { achievements } from '../data/achievements';

const iconMap = {
  GraduationCap,
  Users,
  Snowflake,
  Github,
  Trophy,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title">Beyond the day job</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, idx) => {
          const Icon = iconMap[a.icon] || Trophy;
          const Wrapper = a.link ? 'a' : 'div';
          const wrapperProps = a.link
            ? {
                href: a.link,
                target: '_blank',
                rel: 'noreferrer',
              }
            : {};
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Wrapper
                {...wrapperProps}
                className={`card card-hover flex gap-4 items-start h-full ${
                  a.link && 'cursor-pointer'
                }`}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-warm-gradient/10 border border-accent-orange/20 flex items-center justify-center">
                  <Icon size={18} className="text-accent-amber" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-1 flex items-center gap-2">
                    {a.title}
                    {a.link && (
                      <ExternalLink
                        size={13}
                        className="text-text-muted shrink-0"
                      />
                    )}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10"
        id="education"
      >
        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Bennett University
              </h3>
              <p className="text-accent-amber text-sm">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-text-muted text-sm mt-1">Greater Noida, India</p>
            </div>
            <span className="text-sm text-text-muted">Aug. 2018 – May 2022</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
