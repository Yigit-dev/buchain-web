import Layout from '../src/Layout'
import { Grid } from '@nextui-org/react'
import ApplicationCard from '../src/components/Card/ApplicationCard'
import { APPLYDATA } from '../src/utils/applyCardData'

const Basvuru = () => {
  return (
    <Layout>
      <Grid.Container
        align="center"
        justify="center"
        gap={3}
        css={{ padding: '0', marginTop: '10px', marginBottom:'60px' }}
      >
        {APPLYDATA.map(data => 
          <Grid key={data.id} xs={12} md={6} alignItems="center" justify='center'>
            <ApplicationCard data={data}/>
          </Grid>
        )}
      </Grid.Container>
    </Layout>
  )
}

export default Basvuru
