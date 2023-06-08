/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-manrope)'],
        headings: ['var(--font-switzer)'],
      },
      colors: {
        'primary-blue': '#10212F',
        'primary-dark': '#1C1F22',
        'primary-highlight': '#2DDEED',
        'primary-clean-blue': '#3EA9F5'
      },
      screens: {
        '3xl': '1920px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      }
    },
  },
  plugins: [],
};
