import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Where I've built</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
      </motion.div>

      <div className="relative">
        {/* timeline rail */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-orange/40 via-bg-border to-transparent" />

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* dot */}
              <div
                className={`absolute left-0 sm:left-2 top-6 w-5 h-5 rounded-full border-2 ${
                  job.current
                    ? 'bg-accent-orange border-accent-amber shadow-warm-sm'
                    : 'bg-bg-surface border-bg-border'
                }`}
              >
                {job.current && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-accent-orange/40" />
                )}
              </div>

              <div className="card card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary flex items-center gap-2 flex-wrap">
                      {job.role}
                      {job.current && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-accent-amber font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-orange" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
