module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'pure-white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'darker-blue': 'hsl(216, 12%, 8%)',
      'bright-orange': '#FC7614',
      'gradient-black-start': '#232A34',
      'gradient-black-end': '#181E27',
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
