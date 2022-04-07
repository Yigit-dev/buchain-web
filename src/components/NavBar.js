import WordText from '/src/components/base/Text.js'
import Icon from './base/Icon'
import styles from '../../styles/NavBar.module.css'
import { Text, Link, Grid, StyledSwitch, Row } from '@nextui-org/react'
import { useState, useEffect } from 'react'
const NavBar = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (visible) {
      //show
    } else {
      //dont show
    }
  }, [visible])
  return (
    <Grid.Container justify="center" alignItems="center" className={styles.nav}>
      <Grid xs={8} sm={4} md={3} className={styles.logoPadding} justify="left">
        <Link href="/">
          <Icon name="logo" style={{ width: 300, height: 75 }} />
        </Link>
      </Grid>
      <Grid xs={0} sm={8} md={6} className={styles.navLinks}>
        <li className={styles.navElement + ' ' + styles.expandableNavElement}>
          <Link href="/hakkimizda" className={styles.navTitle}>
            <Text.SmallTitle span>Hakkımızda</Text.SmallTitle>
            <Icon name="down" style={{ width: 12 }} />
          </Link>
          <div className={styles.extended}>
            <Link href="/manifesto" className={styles.link}>
              <Text.White>Manifesto</Text.White>
            </Link>
            <Link href="#" className={styles.link}>
              <Text.White>Yönetişim</Text.White>
            </Link>
            <Link href="#" className={styles.link}>
              <Text.White>Tüzük</Text.White>
            </Link>
            <Link href="#" className={styles.link}>
              <Text.White>Üyeler ve Destekçiler</Text.White>
            </Link>
          </div>
        </li>

        <li className={styles.navElement + ' ' + styles.expandableNavElement}>
          <Link href="/basvuru" className={styles.navTitle}>
            <Text.SmallTitle span>Başvuru</Text.SmallTitle>
            <Icon name="down" style={{ width: 12 }} />
          </Link>
          <div className={styles.extended}>
            <Link
              href="https://forms.gle/XcqyH6LVFsDL6zdy8"
              className={styles.link}
              size="@tiny"
            >
              <Text.White>Üyelik Kayıt Formu</Text.White>
            </Link>
            <Link href="/basvuru" className={styles.link}>
              <Text.White>Girişim Başvurusu</Text.White>
            </Link>
            <Link href="/basvuru" className={styles.link}>
              <Text.White>Sponsorluk</Text.White>
            </Link>
          </div>
        </li>

        <li className={styles.navElement + ' ' + styles.expandableNavElement}>
          <Link href="/olusumlar" className={styles.navTitle}>
            <Text.SmallTitle span>Oluşumlar</Text.SmallTitle>
            <Icon name="down" style={{ width: 12 }} />
          </Link>
          <div className={styles.extended}>
            <Link href="/olusum" className={styles.link} size="@tiny">
              <Text.White>Girişim</Text.White>
            </Link>
            <Link href="/olusum" className={styles.link}>
              <Text.White>BUCHAIN Insights</Text.White>
            </Link>
            <Link href="/olusum" className={styles.link}>
              <Text.White>BUCHAIN DEVS</Text.White>
            </Link>
          </div>
        </li>
        <li className={styles.navElement + ' ' + styles.expandableNavElement}>
          <Link href="/egitimler" className={styles.navTitle}>
            <Text.SmallTitle span>Eğitimler</Text.SmallTitle>
            <Icon name="down" style={{ width: 12 }} />
          </Link>
          <div className={styles.extended}>
            <Link href="#" className={styles.link}>
              <Text.White>Temel Eğitim Grubu</Text.White>
            </Link>
            <Link href="#" className={styles.link}>
              <Text.White>Development Ekibi</Text.White>
            </Link>
            <Link href="#" className={styles.link}>
              <Text.White>Sektörel Eğitimler</Text.White>
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
      </Grid>
      <Grid
        xs={4}
        sm={0}
        onClick={() => {
          setVisible(!visible)
        }}
        justify="right"
        className={styles.menuPadding}
      >
        <Icon name={visible ? 'xmark' : 'hamburger'} style={{ width: 14 }} />
      </Grid>
      <div className={visible ? styles.hamburgerLinks : styles.dnone}>
        <Link href="/hakkimizda" className={styles.navTitle}>
          <Text.SmallTitle span>Hakkımızda</Text.SmallTitle>
        </Link>
        <Link href="/basvuru" className={styles.navTitle}>
          <Text.SmallTitle span>Başvuru</Text.SmallTitle>
        </Link>
        <Link href="/olusumlar" className={styles.navTitle}>
          <Text.SmallTitle span>Oluşumlar</Text.SmallTitle>
        </Link>
        <Link href="/egitimler" className={styles.navTitle}>
          <Text.SmallTitle span>Eğitimler</Text.SmallTitle>
        </Link>
        <Link href="mailto:bogazicichain@gmail.com" className={styles.navTitle}>
          <Icon name="envelope" style={{ width: 20 }} />
        </Link>
      </div>
    </Grid.Container>
  )
}

export default NavBar
