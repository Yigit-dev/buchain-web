import { Grid, Link } from '@nextui-org/react'
import Icon from './Icon'

const Socials = () => {
  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      <Grid justify="center" xs={4}>
        <Link href="#">
          <Icon name="instagram" />
        </Link>
      </Grid>
      <Grid justify="center" xs={4}>
        <Link href="#">
          <Icon name="twitter" />
        </Link>
      </Grid>
      <Grid justify="center" xs={4}>
        <Link href="#">
          <Icon name="discord" />
        </Link>
      </Grid>
    </Grid.Container>
  )
}

export default Socials
