module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'yellow-investmoney': {
          400: '#FBBC44',
          500: '#F59E0B',
          600: '#D97706'
        },
        'gray-investmoney': {
          600: '#333333'
        }
      }
    },
  },
  plugins: [],
};