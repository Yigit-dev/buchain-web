import { Container } from '@nextui-org/react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
