import Socials from './base/Socials'
import { Container, Grid, Link, Spacer, Text } from '@nextui-org/react'
import Icon from './base/Icon'
// <Socials />
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        background: '#F7F8FC',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderTopColor: 'gray',
        borderTopStyle: 'solid',
      }}
    >
      <Grid.Container gap={2} alignItems="center">
        <Grid xs={12} sm={4} justify="center">
          <Link href="http://www.buchain.org/">
            <Icon name="logo" style={{ width: 300, height: 75 }} />
          </Link>
        </Grid>
        <Grid xs={12} sm={4} justify="center">
          <Socials />
        </Grid>
        <Grid xs={12} sm={4} justify="center">
          <Link href="#">
            <Text>mail.com</Text>
          </Link>
        </Grid>
        <Spacer y={2} />
        <Grid.Container xs={12} justify="center">
          <Grid>
            <Text small>Copyright &copy; {year} BUCHAIN</Text>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </footer>
  )
}

export default Footer
