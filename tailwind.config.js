module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#169DEF',
      primary_dark: '#176FA4',
      accent: '#E87474',
      white: '#FFFFFF',
      gray_1: '#333333',
      gray_2: '#4F4F4F',
      blue_1: '#F7FBFE',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      text: '0.9375em',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
