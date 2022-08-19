/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'overlayModal': 'rgba(0,0,0,0.5)',
        'primary': { DEFAULT: '#702CC3', '50': '#D1B8EF', '100': '#C6A7EB', '200': '#B086E4', '300': '#9A64DC', '400': '#8543D5', '500': '#702CC3', '600': '#562295', '700': '#3B1767', '800': '#210D3A', '900': '#07030C' },
        'mikeWhite': '#fefefe',
        'mikeBlack': '#2b2b2b'
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' }
        }
      }
    },
  },
  corePlugins: {
    container: false //Deshabilito el container que traía el tailwindcss por default y lo sobrescribo por el de abajo en [addComponents]
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0px 0px 0px 0px',
          marginTop: '4.5rem'
        }
      });
    },
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      display: ['group-focus']
    }
  }
}
