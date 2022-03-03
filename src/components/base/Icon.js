import {
  Discord,
  Down,
  Envelope,
  Hamburger,
  Instagram,
  Logo,
  Twitter,
} from '../../../public/icons/index'

const iconStyle = {
  height: 30,
  width: 30,
  fill: '#2a2d41',
}

const iconTypes = {
  envelope: Envelope,
  twitter: Twitter,
  instagram: Instagram,
  discord: Discord,
  hamburger: Hamburger,
  down: Down,
  logo: Logo,
}

const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon style={iconStyle} {...props} />
}

export default Icon
