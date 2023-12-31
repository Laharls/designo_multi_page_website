/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'desktop': '1440px',
      '2xl': '1536px',
    },
    colors:{
      'orange': '#E7816B',
      'white': '#FFFFFF',
      'black': '#333136',
      'beige': '#FDF3F0',
      'light-orange': '#FFAD9B',
    }
  },
  plugins: [],
}
