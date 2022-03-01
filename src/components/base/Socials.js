import { Grid } from '@nextui-org/react'
import Icon from './Icon'

const Socials = () => {
  return (
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Icon name="instagram"/>
        </Grid>
        <Grid>
          <Icon name="twitter" />
        </Grid>
        <Grid>
          <Icon name="discord"/>
        </Grid>
      </Grid.Container>
  )
}

export default Socials
