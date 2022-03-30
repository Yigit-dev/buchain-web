import Layout from '../src/Layout'
import { Container, Grid, Text } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'

const Home = () => {
  return (
    <Layout>
      <section className='home'>
      <Grid.Container justify='center'>
        <Grid css={{ width: "50%", zIndex: 999}}>
          <Text.PageTitle>Blokzincir projesi geliştiren ve geliştirmek isteyen insanları bir araya getiren merkezsiz, Boğaziçi tabanlı bir platform!</Text.PageTitle>
        </Grid>
      </Grid.Container>
      </section>
    </Layout>
  )
}

export default Home
