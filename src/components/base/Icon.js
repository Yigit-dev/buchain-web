import Envelope from '/public/icons/envelope.svg'
import Twitter from '/public/icons/twitter.svg'
import Instagram from '/public/icons/instagram.svg'
import Discord from '/public/icons/discord.svg'
import Hamburger from '/public/icons/hamburger.svg'
import Down from '/public/icons/down.svg'

const iconStyle = {
  height: '30px',
  width: '30px',
  fill: '#2a2d41',
}

const iconTypes = {
  envelope: Envelope,
  twitter: Twitter,
  instagram: Instagram,
  discord: Discord,
  hamburger: Hamburger,
  down: Down,
}

const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon {...props} style={iconStyle} />
}

export default Icon
