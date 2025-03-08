/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'primary-blue': 'hsl(var(--primary-blue))',
        'primary-blue-foreground': 'hsl(var(--primary-blue-foreground))',
        'light-blue': 'hsl(var(--light-blue))',
        'neutral-white': 'hsl(var(--neutral-white))',
        'neutral-black': 'hsl(var(--neutral-black))',
        'neutral-charcoal': 'hsl(var(--neutral-charcoal))',
        'neutral-grey': 'hsl(var(--neutral-grey))',
        'text-title': 'hsl(var(--text-title))',
        'text-white': 'hsl(var(--text-white))',
        'text-body': 'hsl(var(--text-body))',
        'text-body2': 'hsl(var(--text-body2))',
        'bluish-white': 'hsl(var(--bluish-white))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        h1: [
          '3.062rem',
          {
            lineHeight: '1.2',
          },
        ],
        h2: [
          '2.438rem',
          {
            lineHeight: '1.3',
          },
        ],
        h3: [
          '1.938rem',
          {
            lineHeight: '1.3',
          },
        ],
        h4: [
          '1.562rem',
          {
            lineHeight: '1.4',
          },
        ],
        h5: [
          '1.25rem',
          {
            lineHeight: '1.4',
          },
        ],
        p: [
          '1rem',
          {
            lineHeight: '1.5',
          },
        ],
        small: [
          '0.812rem',
          {
            lineHeight: '1.4',
          },
        ],
        caption: [
          '0.625rem',
          {
            lineHeight: '1.3',
          },
        ],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
