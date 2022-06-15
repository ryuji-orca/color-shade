module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        colorBoxItem: 'repeat(11,minmax(65px, 1fr))',
      },
    },
  },
  // corePlugins: {
  //   textOpacity: false,
  //   backgroundOpacity: false,
  //   borderOpacity: false,
  //   divideOpacity: false,
  //   placeholderOpacity: false,
  //   ringOpacity: false,
  // },
  plugins: [],
};
