import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        lightGray: 'var(--color-light-gray)',
        gray: 'var(--color-gray)',
        darkGray: 'var(--color-dark-gray)',
        greenButton: 'var(--color-green-button)',
        yellowButton: 'var(--color-yellow-button)',
        redButton: 'var(--color-red-button)',
        blue: 'var(--color-blue)',
        skyBlue: 'var(--color-sky-blue)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
};

export default config;
