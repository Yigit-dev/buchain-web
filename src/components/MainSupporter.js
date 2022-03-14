import { Card } from '@nextui-org/react'
import { Grid } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'

const MainSupporter = () => {
  return (
    <>
        <Card hoverable style={{width:'60vw'}} justify="center" align="center">
          <Grid.Container gap={2} 
          display="flex"
          justify="center" 
          alignItems="center"
          alignContent="center" >
            <Grid xl={6}>
              <Card.Image width={200} height={140} />
            </Grid>

            <Grid xl={6} >
              <Text.Info>X ŞİRKETİ</Text.Info>
              <p style={{ fontSize: '14px' }}>Şirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket AçıklamasıŞirket Açıklaması</p>
            </Grid>
          </Grid.Container>
        </Card>

        </>
      )
    } 
    
    export default MainSupporter
    