/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#10212F',
        'primary-dark': '#1C1F22',
        'primary-highlight': '#2DDEED'
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
