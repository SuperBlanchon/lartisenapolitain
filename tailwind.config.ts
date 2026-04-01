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
        surface: {
          DEFAULT: '#faf9f6',
          dim: '#dbdad7',
          bright: '#faf9f6',
          container: {
            DEFAULT: '#efeeeb',
            low: '#f4f3f1',
            high: '#e9e8e5',
            highest: '#e3e2e0',
            lowest: '#ffffff',
          },
        },
        primary: {
          DEFAULT: '#923317',
          container: '#b24a2c',
          fixed: '#ffdbd1',
          'fixed-dim': '#ffb5a0',
        },
        'on-primary': '#ffffff',
        'on-surface': '#1a1c1a',
        'on-surface-variant': '#57423c',
        'on-primary-container': '#ffe7e1',
        'outline': '#8a726b',
        'outline-variant': '#ddc0b9',
        tertiary: {
          DEFAULT: '#505542',
          container: '#686d59',
          fixed: '#e0e5cc',
          'fixed-dim': '#c4c9b1',
        },
        'on-tertiary-fixed': '#191d0e',
        'on-tertiary-fixed-variant': '#444937',
        secondary: {
          DEFAULT: '#5f5e5e',
          container: '#e4e2e1',
        },
      },
      fontFamily: {
        headline: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        label: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
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
