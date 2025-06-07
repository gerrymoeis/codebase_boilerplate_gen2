// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // atau 'media' jika Anda lebih suka mode gelap berbasis sistem operasi
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      // Anda dapat memperluas tema di sini, misalnya dengan warna kustom
      // colors: {
      //   primary: '#your-primary-color',
      //   secondary: '#your-secondary-color',
      // },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Jika Anda menggunakan tailwindcss-animate
    // tambahkan plugin lain di sini jika perlu
  ],
};
export default config;
