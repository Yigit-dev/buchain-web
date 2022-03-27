import { createTheme } from '@nextui-org/react'

export const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      white: '#fff',
      dark: '#2a2d41',
      darkGrey: '#5a5f63',
      lightGrey: '#e6e7e9',
      lightBlue: '#43aefe',
      darkBlue: '#006ee9',

      /* BUTTON BLUE */
      blueBtnBgNormal: '#006ee9',
      blueBtnTxtNormal: '#FFFFFF',

      blueBtnBgHover: '#66abf3',
      blueBtnTxtHover: '#FFFFFF',

      blueBtnBgActive: '#023e7f',
      blueBtnTxtActive: '#91a2ea',

      /* BUTTON GREY */

      greyBtnBgNormal: '#d8dde3',
      greyBtnTxtNormal: '#2a2d41',

      greyBtnBgHover: '#ebf0f3',
      greyBtnTxtHover: '#6db8f2',

      greyBtnBgActive: '#a5bbd3',
      greyBtnTxtActive: '#3e4980',
    },
    space: {},
    fontSizes: {
      tiny: '12px',
      xs: '14px',
      base: '16px',
    },
    fonts: {
      Averta: 'Averta',
      AvertaBold: 'Averta-Bold',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})
