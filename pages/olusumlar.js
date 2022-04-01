import Layout from '../src/Layout'
import { Button, Collapse, Grid, Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import FormationModul from '../src/components/Modal/FormationModul'

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
                <Grid.Container
                        gap={2}
                        justify="center"
                        display="flex"
                        alignItems="center"
                        alignContent="center"
                        alignText="left"
                        style={{margin:'30px'}}
                >
                    <Grid xs={8} md={5} sm={6} justify="center" align="left">                       
                    <span>
                        <Image width={400} height={400} alt=""/>
                         <Text.MidText>Oluşum Adı</Text.MidText>
                            <Text.SmallTitleLight>Oluşum Açıklaması</Text.SmallTitleLight>
                            <br/> <FormationModul title={"Oluşum 1"} description={"Oluşum Açıklaması"}/>
                       </span>
                    </Grid>

                    <Grid xs={8} md={5} sm={6} justify="center" align="left">                       
                    <span>
                        <Image width={400} height={400} alt=""/>
                         <Text.MidText>Oluşum Adı</Text.MidText>
                            <Text.SmallTitleLight>Oluşum Açıklaması</Text.SmallTitleLight>
                            <br/> <FormationModul title={"Oluşum 2"} description={"Oluşum Açıklaması"}/>
                       </span>
                    </Grid>

                    <Grid xs={8} md={5} sm={6} justify="center" align="left">                       
                    <span>
                        <Image width={400} height={400} alt=""/>
                         <Text.MidText>Oluşum Adı</Text.MidText>
                            <Text.SmallTitleLight>Oluşum Açıklaması</Text.SmallTitleLight>
                            <br/> <FormationModul title={"Oluşum 3"} description={"Oluşum Açıklaması"}/>
                       </span>
                    </Grid>

                    <Grid xs={8} md={5} sm={6} justify="center" align="left">                       
                    <span>
                        <Image width={400} height={400} alt=""/>
                         <Text.MidText>Oluşum Adı</Text.MidText>
                            <Text.SmallTitleLight>Oluşum Açıklaması</Text.SmallTitleLight>
                            <br/> <FormationModul title={"Oluşum 4"} description={"Oluşum Açıklaması"}></FormationModul>
                       </span>
                    </Grid>
                </Grid.Container>
            </Grid.Container>

      </Layout>
    )
  }
  
  export default Olusumlar