import Layout from '../src/Layout'
import { Button, Collapse, Grid, Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import FormationModul from '../src/components/Modal/FormationModul'
import FormationCard from '../src/components/Card/FormationCard'

const Olusumlar = () => {
    return (
      <Layout>
              <Grid.Container
                  style={{marginBottom:'20px',marginTop:'20px'}}
                  gap={2}
                  justify="center"
                  display="flex"
                  alignItems="center"
                  alignContent="center"
                >
              <Grid>
                   <FormationCard/>
              </Grid>
              </Grid.Container>
 </Layout>
    )
  }
  
export default Olusumlar