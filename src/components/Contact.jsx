import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Code2 } from 'lucide-react';
import { personal } from '../data/personal';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@sahilcode17',
    href: personal.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sahilcode17',
    href: personal.linkedin,
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'khandelwalsahil09',
    href: personal.leetcode,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's talk</h2>
        <div className="warm-divider w-24 mt-4 mb-10" />
        <p className="text-text-muted max-w-2xl mb-10">
          Hiring for backend, distributed systems, or AI agent work? I'm open
          to remote opportunities and interesting conversations.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {contactLinks.map((c, idx) => {
          const Wrapper = c.href ? 'a' : 'div';
          const props = c.href
            ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: c.href.startsWith('http') ? 'noreferrer' : undefined }
            : {};
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <Wrapper
                {...props}
                className={`card card-hover flex items-center gap-3 h-full ${
                  c.href && 'cursor-pointer'
                }`}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-warm-gradient/10 border border-accent-orange/20 flex items-center justify-center">
                  <c.icon size={16} className="text-accent-amber" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-text-muted">
                    {c.label}
                  </div>
                  <div className="text-sm text-text-primary truncate">
                    {c.value}
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-warm-gradient text-bg font-semibold shadow-warm-md hover:shadow-warm-lg transition-shadow"
        >
          <FileText size={16} /> Download Resume
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-surface border border-bg-border text-text-primary hover:border-accent-orange/40 transition-colors"
        >
          <Mail size={16} /> Email me
        </a>
      </motion.div>
    </section>
  );
}
