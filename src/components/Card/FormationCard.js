import { Button, Card, Grid, Link, Text, useModal } from '@nextui-org/react'
import { DATA } from '../../utils/data'
import FormationModul from '../Modal/FormationModul'
import WordText from '/src/components/base/Text.js'

const FormationCard = () => {
  return (
    <Grid.Container gap={2} justify="center">
      {DATA.map(item => (
        <Grid xs={8} sm={6} md={3} key={item.id} justify="center">
          <Card>
            <Card.Image
              objectFit="cover"
              src={item.imgUrl}
              height={340}
              width="100%"
              alt="Card image background"
            />
            <Text.Title>{item.title}</Text.Title>
            <Text.InfoLight>{item.cardText}</Text.InfoLight>
            <Card.Footer>
              <FormationModul
                title={item.title}
                description={item.modalDescription}
              />
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default FormationCard
