import { Text } from '@nextui-org/react'

//Big dark text for titles
Text.Titles = function WordText({ children }) {
  return (
    <Text
      h3
      css={{
        fontFamily: 'Averta-bold',
        color: '$dark',
      }}
    >
      {children}
    </Text>
  )
}

//Content
Text.Info = function WordText({ children }) {
  return (
    <Text
      h6
      css={{
        fontFamily: 'Averta-Bold',
        color: '$dark',
      }}
    >
      {children}
    </Text>
  )
}

//Lighter text for content
Text.InfoLight = function WordText({ children }) {
  return (
    <Text
      h6
      css={{
        fontFamily: 'Averta',
        color: '$dark',
        fontWeight: 'lighter',
      }}
    >
      {children}
    </Text>
  )
}

//Middle sized dark text
Text.MidText = function WordText({ children }) {
  return (
    <Text
      h4
      css={{
        fontFamily: 'Averta-Bold',
        color: '$dark',
      }}
    >
      {children}
    </Text>
  )
}
// Smaller sized title
Text.SmallTitle = function WordText({ children }) {
  return (
    <Text
      h5
      css={{
        fontFamily: 'Averta-Bold',
        color: '$dark',
      }}
    >
      {children}
    </Text>
  )
}
//Lighter small title
Text.SmallTitleLight = function WordText({ children }) {
  return (
    <Text
      h5
      css={{
        fontFamily: 'Averta',
        color: '$dark',
        fontWeight: 'lighter',
      }}
    >
      {children}
    </Text>
  )
}
//Etkinlikler Menu
Text.MenuPassive = function WordText({ children }) {
  return (
    <Text
      h5
      css={{
        fontFamily: 'Averta-Bold',
        color: '$lightGrey',
        '&:hover': { color: '$darkGrey', cursor: 'pointer' },
      }}
    >
      {children}
    </Text>
  )
}

//Navbar white text
Text.WhiteText = function WordText({ children }) {
  return (
    <Text
      h5
      css={{
        fontFamily: 'Averta',
        color: 'white',
        fontWeight: 'lighter',
        '&:hover': { color: 'lightgrey', cursor: 'pointer' },
      }}
    >
      {children}
    </Text>
  )
}
