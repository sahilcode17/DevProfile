import { personal } from '../data/personal';

export default function Footer() {
  return (
    <footer className="border-t border-bg-border mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-muted">
        <div>
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite.
        </div>
        <div className="flex gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-amber transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-amber transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-amber transition-colors"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
