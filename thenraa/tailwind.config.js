/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#3d4515', leaf: '#6b7a2e', ivory: '#fffef8',
        sand: '#efefe3', bark: '#8b5a3c', ink: '#2e3a24',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Karla', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
