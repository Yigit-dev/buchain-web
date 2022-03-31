import { Card } from '@nextui-org/react'
import { Grid } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'

const MainSupporter = () => {
  return (
    <>
        <Card hoverable style={{ margin:'30px', maxWidth:'1250px'}} justify="center" align="center">
          <Grid.Container gap={2} 
          display="flex"
          justify="center" 
          alignItems="center"
          alignContent="center" >
            <Grid xl={6} justify="center" align="center">
              <Card.Image width={200} height={140} />
            </Grid>

            <Grid xl={6} justify="center" align="center">
              <Text.Title>X ŞİRKETİ</Text.Title>
              <Text.SmallTitleLight><span>
                Şirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket Açıklaması
                Şirket Açıklaması
                </span></Text.SmallTitleLight>
            </Grid>
          </Grid.Container>
        </Card>

        </>
      )
    } 
    
    export default MainSupporter
    