import { NextUIProvider } from '@nextui-org/react'
import { theme } from '../src/utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
