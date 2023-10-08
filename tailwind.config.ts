import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#17171F',
        primary: '#3F3FFF',
        secondary: '#A3A3FF',
        accent: '#FDA50F',
      },
    },
  },
  plugins: [],
};
export default config;
