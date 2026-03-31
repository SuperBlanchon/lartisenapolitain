import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tomato: {
          DEFAULT: '#D4271E',
          50: '#FEF2F2',
          100: '#FDE3E1',
          200: '#FCCCC8',
          300: '#F9A8A2',
          400: '#F37169',
          500: '#D4271E',
          600: '#C41F16',
          700: '#A41A12',
          800: '#881A14',
          900: '#711B17',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          50: '#FDFCF9',
          100: '#FAF8F2',
          200: '#F7F2E8',
          300: '#EDE4D0',
          400: '#DED0B0',
        },
        charcoal: {
          DEFAULT: '#1C1C1E',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2E2E30',
          800: '#1C1C1E',
          900: '#121214',
        },
        ember: {
          DEFAULT: '#E07B39',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#E07B39',
          500: '#C2682E',
          600: '#A35524',
          700: '#7C3F1D',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.12), 0 4px 20px -4px rgba(0, 0, 0, 0.05)',
        'glow-tomato': '0 0 30px rgba(212, 39, 30, 0.15)',
        'glow-ember': '0 0 30px rgba(224, 123, 57, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
