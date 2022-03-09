import { Button, Card, Grid, Link, Text, useModal } from '@nextui-org/react'
import { DATA } from '../../utils/data'
import FormationModul from '../Modal/FormationModul'

const ExampleCard = () => {
  return (
    <Grid.Container gap={2}>
      {DATA.map(item => (
        <Grid sm={12} md={5} key={item.id}>
          <Card css={{ mw: '330px' }}>
            <Text h4>{item.title}</Text>
            <Text>🚀 Beautiful and modern React UI library.</Text>
            <Card.Footer>
              <Link
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
              <FormationModul
                title={item.title}
                description={item.description}
              />
              {/* <Button color="warning">Modal Button</Button> */}
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default ExampleCard
