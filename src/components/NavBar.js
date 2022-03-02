import WordText from '/src/components/base/Text.js'
import Icon from './base/Icon'
import styles from '../../styles/NavBar.module.css'
import { Text, Link, Grid } from '@nextui-org/react'
// import { useState } from 'react'

const NavBar = () => {
  // const [expanded, setExpanded] = useState(false)

  // const expand = () => {
  //   setExpanded(!expanded)
  // }
  return (
    <Grid.Container
      display="flex"
      justify="space-around"
      alignItems="center"
      className={styles.nav}
    >
      <Link href="http://www.buchain.org/">
        <Icon name="logo" style={{ width: 300, height: 75 }} />
      </Link>
      <div>
        <Grid.Container
          className={styles.linkContainer}
          display="flex"
          alignItems="center"
          alignContent="center"
        >
          <li className={styles.navElement + ' ' + styles.expandableNavElement}>
            <div className={styles.navTitle}>
              <Text.SmallTitle>Hakkımızda</Text.SmallTitle>
              <Icon name="down" style={{ width: 15 }} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Manifesto</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Yönetişim</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Tüzük</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Üyeler ve Destekçiler</Text.WhiteText>
              </Link>
            </div>
          </li>

          <li className={styles.navElement + ' ' + styles.expandableNavElement}>
            <div className={styles.navTitle}>
              <Text.SmallTitle span>Oluşumlar</Text.SmallTitle>
              <Icon name="down" style={{ width: 15 }} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link} size="@tiny">
                <Text.WhiteText>Girişim</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>BUCHAIN Insights</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>BUCHAIN DEVS</Text.WhiteText>
              </Link>
            </div>
          </li>
          <li className={styles.navElement + ' ' + styles.expandableNavElement}>
            <div className={styles.navTitle}>
              <Text.SmallTitle span>Eğitimler</Text.SmallTitle>
              <Icon name="down" style={{ width: 15 }} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Temel Eğitim Grubu</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Development Ekibi</Text.WhiteText>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.WhiteText>Sektörel Eğitimler</Text.WhiteText>
              </Link>
            </div>
          </li>
          <li className={styles.navElement}>
            <Link
              href="mailto:bogazicichain@gmail.com"
              className={styles.navTitle}
            >
              <Icon name="envelope" style={{ width: 20 }} />
            </Link>
          </li>
        </Grid.Container>
      </div>
    </Grid.Container>
  )
}

export default NavBar
