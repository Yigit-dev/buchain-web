import Logo from '../../../public/temporaryIcons/buchain-full-logo.svg'
import MailIcon from '../../../public/temporaryIcons/mail.svg'
import DownIcon from '../../../public/temporaryIcons/down.svg'
import Image from 'next/image'
import styles from '../../../styles/NavBar.module.css'
import { Text, Link, Grid } from '@nextui-org/react'
import { useState } from 'react'

Text.NavTitle = function WordText({ children }) {
  return (
    <Text
      span
      css={{
        color: '$darkColor',
        fontSize: '$base',
        fontFamily: '$AvertaBold',
      }}
    >
      {children}
    </Text>
  )
}

Text.NavLink = function WordText({ children }) {
  return (
    <Text
      span
      css={{
        color: '$white',
        fontSize: '$base',
        fontFamily: '$Averta',
      }}
    >
      {children}
    </Text>
  )
}

const NavBar = () => {
  const [expanded, setExpanded] = useState(false)

  const expand = () => {
    setExpanded(!expanded)
  }
  return (
    <Grid.Container
      display="flex"
      justify="space-around"
      alignItems="center"
      className={styles.nav}
    >
      <Link href="http://www.buchain.org/">
        <Image src={Logo} alt="BUCHAIN logo" height={50} width={300} />
      </Link>
      <div>
        <Grid.Container
          className={
            styles.linkContainer + ' ' + (expanded ? styles.expanded : null) //add "expanded" class if it is clicked
          }
          display="flex"
          alignItems="center"
          alignContent="center"
        >
          <li className={styles.navElement}>
            <div className={styles.align}>
              <Text.NavTitle span className={styles.navText}>
                Hakkımızda
              </Text.NavTitle>
              <Image src={DownIcon} alt="down" height={15} width={15} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Manifesto</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Yönetişim</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Tüzük</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Üyeler ve Destekçiler</Text.NavLink>
              </Link>
            </div>
          </li>
          {/* <li className={styles.navElement}>
            <Text.NavTitle span className={styles.navText}>
              Başvuru
            </Text.NavTitle>
            <div className={styles.extended}>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Üyelik Kayıt Formu</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Girişim Başvurusu</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Sponsorluk</Text.NavLink>
              </Link>
            </div>
          </li> */}
          <li className={styles.navElement}>
            <div className={styles.align}>
              <Text.NavTitle span className={styles.navText}>
                Oluşumlar
              </Text.NavTitle>
              <Image src={DownIcon} alt="down" height={15} width={15} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link} size="@tiny">
                <Text.NavLink>Girişim</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>BUCHAIN Insights</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>BUCHAIN DEVS</Text.NavLink>
              </Link>
            </div>
          </li>
          <li className={styles.navElement}>
            <div className={styles.align}>
              <Text.NavTitle span className={styles.navText}>
                Eğitimler
              </Text.NavTitle>
              <Image src={DownIcon} alt="down" height={15} width={15} />
            </div>
            <div className={styles.extended}>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Temel Eğitim Grubu</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Development Ekibi</Text.NavLink>
              </Link>
              <Link href="#" className={styles.link}>
                <Text.NavLink>Sektörel Eğitimler</Text.NavLink>
              </Link>
            </div>
          </li>
          <li className={styles.navElement}>
            <Link
              href="mailto:bogazicichain@gmail.com"
              className={styles.align}
            >
              <Image src={MailIcon} alt="mail icon" height={20} width={20} />
            </Link>
          </li>
        </Grid.Container>
      </div>
    </Grid.Container>
  )
}

export default NavBar
