import { Card } from '@nextui-org/react'
import { Grid } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'

const Supporters = () => {
  return (
    <>
          <div justify="center" align="center">
            <Text.Title>X Destekçiler</Text.Title>
          </div>

        <Grid.Container
          gap={2}
          justify="center"
          display="flex"
          alignItems="center"
          alignContent="center"
        >
          <Grid xs={12} md={3} sm={3} justify="center" align="center">
            <Card hoverable style={{ padding: '10px' }}>
              <Card.Body>
                <Card.Image width={200} height={140} />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} md={3} sm={3}>
            <Card hoverable style={{ padding: '10px' }}>
              <Card.Body>
                <Card.Image width={200} height={140} />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} md={3} sm={3}>
            <Card hoverable style={{ padding: '10px' }}>
              <Card.Body>
                <Card.Image width={200} height={140} />
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>


          <div justify="center" align="center">
            <Text.Title>Y Destekçiler</Text.Title>
          </div>

      <Grid.Container
        gap={2}
        justify="center"
        display="flex"
        alignItems="center"
        alignContent="center"
      >
        <Grid xs={12} md={3} sm={3} justify="center" align="center">
          <Card hoverable style={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image width={200} height={140} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={3} sm={3}>
          <Card hoverable style={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image width={200} height={140} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={3} sm={3}>
          <Card hoverable style={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image width={200} height={140} />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Supporters
