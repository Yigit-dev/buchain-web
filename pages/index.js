import { Text } from '@nextui-org/react'
import NavBar from '../src/components/NavBar'
// import Footer from '../src/components/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <Text size="$test" color="$yigit">
        Home
      </Text>
      <p>Lorem, ipsum dolor.</p>
      <p>Github</p>

      {/* <Footer /> */}
    </>
  )
}

export default Home
