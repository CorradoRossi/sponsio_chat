/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: ["./components/*.{html,js}",
            "./lib/*.{html,js}",
            "./pages/*.{html,js}",
            "./pages/**/*.{html,js}",  
            "./static/*.{html,js}",
    ],
    theme: {
      extend: {
        colors: {
          gray: {
            '50':  '#FAFCFC',
            '100': '#E4E8EE',
            '200': '#C1C9D0',
            '300': '#A2ABB7',
            '400': '#8892A2',
            '500': '#6B7385',
            '600': '#505669',
            '700': '#3C4055',
            '800': '#2B2E44',
            '900': '#2B2E44',
          },
          blue: {
            '50':  '#F5FCFF',
            '100': '#D9EDFF',
            '200': '#ACCFFC',
            '300': '#85ACF4',
            '400': '#758CEC',
            '500': '#5C66D2',
            '600': '#414AA6',
            '700': '#313B84',
            '800': '#262C62',
            '900': '#152041',
          },
          teal: {
            '50':  '#EEFDFE',
            '100': '#CFF3FB',
            '200': '#8ED8E9',
            '300': '#62BDE4',
            '400': '#4D9DCE',
            '500': '#277FB5',
            '600': '#1C5B92',
            '700': '#154876',
            '800': '#0F3451',
            '900': '#082530',
          },
          emerald: {
            '50':  '#F2FEEE',
            '100': '#CFF7C9',
            '200': '#91E396',
            '300': '#52D080',
            '400': '#3EB574',
            '500': '#288D60',
            '600': '#216B44',
            '700': '#18533A',
            '800': '#113B34',
            '900': '#0A2627',
          },
          orange: {
            '50':  '#FBF9EA',
            '100': '#F6E4BA',
            '200': '#E7C07B',
            '300': '#DC9742',
            '400': '#CB7519',
            '500': '#AD5102',
            '600': '#893301',
            '700': '#6C2706',
            '800': '#501A0F',
            '900': '#361206',
          },
          chestnut: {
            '50':  '#FEFAEE',
            '100': '#FCE2C0',
            '200': '#EFB586',
            '300': '#E78B5F',
            '400': '#D7664B',
            '500': '#B34434',
            '600': '#912728',
            '700': '#731620',
            '800': '#550F1C',
            '900': '#3B0B14',
          },
          cerise: {
            '50':  '#FEF7F4',
            '100': '#FBE0DD',
            '200': '#F2AFB3',
            '300': '#EC798B',
            '400': '#DC5472',
            '500': '#BC3263',
            '600': '#98184D',
            '700': '#73123F',
            '800': '#560E39',
            '900': '#3B0427',
          },
          purple: {
            '50':  '#FEF7FF',
            '100': '#F8DDF4',
            '200': '#E8ADE1',
            '300': '#D882D9',
            '400': '#BF62CF',
            '500': '#9B47B2',
            '600': '#743095',
            '700': '#57237E',
            '800': '#3D1867',
            '900': '#2A0D53',
          },
          indigo: {
            '50': '#eff0fe',
            '100': '#e2e4fd',
            '200': '#cacdfb',
            '300': '#aaacf7',
            '400': '#8c87f2',
            '500': '#796aea',
            '600': '#6a4edd',
            '700': '#5d40c2',
            '800': '#4b369d',
            '900': '#18132f',
          },        
        }
      }
    },
  plugins: [require('@tailwindcss/forms')],
}