/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#0A0E1A',
        'bg-secondary': '#111827',
        'bg-card': 'rgba(17, 24, 39, 0.6)',

        // Accents
        'neon-green': '#00FF94',
        'electric-cyan': '#00D9FF',
        'warning-orange': '#FF6B2C',
        'danger-red': '#FF3B3B',

        // Texts
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
      },
      fontFamily: {
        display: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00FF94 0%, #00D9FF 100%)',
        'gradient-danger': 'linear-gradient(135deg, #FF6B2C 0%, #FF3B3B 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0E1A 0%, #111827 100%)',
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 148, 0.3), 0 0 40px rgba(0, 255, 148, 0.1), inset 0 0 20px rgba(0, 255, 148, 0.05)',
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.1)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}
