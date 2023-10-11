import type { Config } from 'tailwindcss';

const BASE = 8;

const minWidth = {
  sm: '320px',
  md: '768px',
  lg: '1025px',
  xl: '1200px',
};

const spacing = {
  0: '0',
  '1/2': '4px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
};

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      /**
       * @todo adicionar a `safelist` apenas o que for necessário.
       */
      pattern: /border-*|bg-*|text-*/,
      variants: ['hover'],
    }
  ],
  theme: {
    spacing,
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '56px',
      '6xl': '64px',
    },
    lineHeight: {
      xs: '18px',
      sm: '20px',
      md: '24px',
      lg: '28px',
      xl: '32px',
      '2xl': '36px',
      '3xl': '40px',
      '4xl': '64px',
      '5xl': '72px',
    },
    borderRadius: {
      ...spacing,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: `calc(${BASE}px * 4)`,
        xs: `calc(${BASE}px * 4)`,
      },
      screens: {
        ...minWidth,
      },
    },
    extend: {
      minWidth,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
