import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">My toolbox</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card"
          >
            <h3 className="text-sm uppercase tracking-wider text-accent-amber font-semibold mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="badge hover:border-accent-orange/30 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
