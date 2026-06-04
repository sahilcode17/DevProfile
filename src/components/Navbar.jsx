import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai-projects', label: 'AI Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-lg border-b border-bg-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tight"
        >
          <span className="warm-text">SK</span>
          <span className="text-text-muted">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/12jCkYre6uh18i13B_yvzZzhkj4QM4PSV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-1.5 rounded-full bg-warm-gradient text-bg font-semibold hover:shadow-warm-md transition-shadow"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-lg border-b border-bg-border">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-text-muted hover:text-text-primary block py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/12jCkYre6uh18i13B_yvzZzhkj4QM4PSV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm px-4 py-2 rounded-full bg-warm-gradient text-bg font-semibold"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
