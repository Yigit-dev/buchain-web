import { Card } from '@nextui-org/react'
import { Grid } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Container, Row, Col } from '@nextui-org/react'
import WordText from '/src/components/base/Text.js'

const Supporters = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Row justify="center" align="center">
          <Grid xs={9}>
            <Text.Title>DESTEKÇİLER</Text.Title>
          </Grid>
        </Row>

        <Row justify="center" align="center">
          <Grid xs={9}>
            <Text.Title>ANA DESTEKÇİ </Text.Title>
          </Grid>
        </Row>
      </Grid.Container>

      <Grid
        xs={12}
        sm={9}
        display="flex"
        align="center"
        alignItems="center"
        alignContent="center"
      >
        <Card hoverable>
          <Grid.Container gap={2} justify="center">
            <Grid xl={6}>
              <Card.Image width={200} height={140} />
            </Grid>

            <Grid xl={6}>
              <Text.Info>X ŞİRKETİ</Text.Info>
              <p style={{ fontSize: '12px' }}>Şirket Açıklaması</p>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid.Container
        gap={2}
        justify="center"
        display="flex"
        alignItems="center"
        alignContent="center"
      >
        <Row justify="center" align="center">
          <Grid xs={9} md={9}>
            <Text.Title>X Destekçiler</Text.Title>
          </Grid>
        </Row>

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
      </Grid.Container>

      <Grid.Container
        gap={2}
        justify="center"
        display="flex"
        alignItems="center"
        alignContent="center"
      >
        <Row justify="center" align="center">
          <Grid xs={9}>
            <Text.Title>Y Destekçiler</Text.Title>
          </Grid>
        </Row>
      </Grid.Container>
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

        <Grid xs={12} sm={3}>
          <Card hoverable style={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image width={200} height={140} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={3}>
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
