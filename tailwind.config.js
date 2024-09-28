module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@headlessui/react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'Open Sans', 'sans-serif'], // Use both fonts
      }
    },
  },
  plugins: [],
}