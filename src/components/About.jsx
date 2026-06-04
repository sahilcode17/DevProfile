import { motion } from 'framer-motion';
import { Sparkles, Cpu, ServerCog } from 'lucide-react';
import { personal } from '../data/personal';

const highlights = [
  {
    icon: ServerCog,
    title: 'Distributed systems',
    body: 'Designed microservices, event-driven pipelines and EDI parsers that move real money for enterprise clients.',
  },
  {
    icon: Sparkles,
    title: 'AI agent infrastructure',
    body: 'Architecting multi-agent orchestration and ReAct/CoT prompting frameworks that turn unstructured documents into structured data.',
  },
  {
    icon: Cpu,
    title: 'Production-grade backend',
    body: 'Java + Spring Boot, Node.js, Python, AWS/GCP. From 45% integration error rates to under 10%. From 30% slower APIs to sub-50µs proxies.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">A bit about me</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
      </motion.div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-text-muted leading-relaxed text-balance"
        >
          {personal.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="card card-hover flex gap-4 items-start"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-warm-gradient/10 border border-accent-orange/20 flex items-center justify-center">
                <h.icon size={18} className="text-accent-amber" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {h.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {h.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
