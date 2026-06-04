/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0f0a06',
          surface: '#1a120c',
          border: '#2a1f18',
        },
        accent: {
          orange: '#f97316',
          amber: '#fbbf24',
        },
        text: {
          primary: '#faf6f0',
          muted: '#a39485',
        },
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
        'warm-glow':
          'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.15) 0%, transparent 60%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm-sm': '0 4px 14px 0 rgba(249, 115, 22, 0.15)',
        'warm-md': '0 8px 30px 0 rgba(249, 115, 22, 0.2)',
        'warm-lg': '0 20px 50px 0 rgba(249, 115, 22, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
