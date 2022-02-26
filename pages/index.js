import { Text } from '@nextui-org/react'
import NavBar from '../src/components/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <Text size="$test" color="$yigit">
        Home
      </Text>
      <p>Lorem, ipsum dolor.</p>
      <p>Github</p>
    </>
  )
}

export default Home
