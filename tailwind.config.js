const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      IBM: ['"IBM Plex Serif"', 'serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    groups: ['nested-l1'],
    extend: {
      colors: {
        // PRIMARY COLORS
        primarySky: '#4299e1',
        secondaryDark: '#222225',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, theme }) => {
      const groups = theme('groups') || []

      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`
        })
      })
    })
  ]
};
