/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        luxeGold: '#d4af37',
        luxeCyan: '#3de5ff',
        luxeBgStart: '#0a0a0a',
        luxeBgEnd: '#1a1a1a'
      },
      boxShadow: {
        glow: '0 0 30px rgba(61,229,255,0.25)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
