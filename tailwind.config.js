/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      aspectRatio: {
        '16/9': [16, 9], // Add other aspect ratios as needed
        '4/3': [4, 3],
        '1/1': [1, 1],
        '3/2': [3, 2],
        '2/3': [2, 3]
      },

      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        accent1: 'var(--accent-1)',
        accent2: 'var(--accent-2)',
        accent3: 'var(--accent-3)',
        accent4: 'var(--accent-4)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
      },
      fontWeight: {
        'thin': 100,
        'light': 200,
        'regular': 400,
        'text': 500,
        'medium': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
