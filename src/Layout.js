import { Container } from '@nextui-org/react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <div
     css={{
       position:'relative',
       minHeight:'100vh',
     }}
     >
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
