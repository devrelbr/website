import type { Config } from 'tailwindcss';

const BASE = 8;

const minWidth = {
  xs: 0,
  sm: '320px',
  md: '768px',
  lg: '1025px',
  xl: '1600px',
  '1/2': '50%',
  full: '100%',
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
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
      padding: {
        DEFAULT: `calc(${BASE}px * 4)`,
        xs: `calc(${BASE}px * 4)`,
      },
    },
    extend: {
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
