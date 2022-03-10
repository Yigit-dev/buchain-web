import { Card } from '@nextui-org/react'
import { Grid } from '@nextui-org/react'
import { Text } from '@nextui-org/react'

const ConsultantCard = () => {
  const list = [
    {
      name: 'Ad Soyad',
      img: '',
      title: 'Title',
    },
    {
      name: 'Ad Soyad',
      img: '',
      title: 'Title',
    },
    {
      name: 'Ad Soyad',
      img: '',
      title: 'Title',
    },
    {
      name: 'Ad Soyad',
      img: '',
      title: 'Title',
    },
  ]

  return (
    <Grid.Container>
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card hoverable>
            <Card.Body>
              <Card.Image
                objectFit="cover"
                src={item.img}
                width="100%"
                height={140}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Text b>{item.name}</Text>
              <Text>{item.title}</Text>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default ConsultantCard
