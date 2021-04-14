module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        darkest: '#252734',
        DEFAULT: '#333646',
        light: '#eaeaec'
      },
      yellow: {
        DEFAULT: '#f7c25c'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
