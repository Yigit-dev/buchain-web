import { NextUIProvider } from '@nextui-org/react'
import { theme } from '../src/utils/theme'
import "../styles/globals.css";
import "../styles/palette.module.scss"


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
