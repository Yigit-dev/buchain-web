import { Text } from '@nextui-org/react'

//Big dark text for titles
Text.Titles = function WordText({ children }) {
  return (
    <Text
      h3
      color="$dark"
      css={{
        fontFamily: 'Averta-bold',
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
      color="$dark"
      css={{
        fontFamily: 'Averta-Bold',
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
      color="$dark"
      css={{
        fontFamily: 'Averta',
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
      color="$dark"
      css={{
        fontFamily: 'Averta-Bold',
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
      color="$dark"
      css={{
        fontFamily: 'Averta-Bold',
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
      color="$dark"
      css={{
        fontFamily: 'Averta',
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
      color="$lightGrey"
      css={{
        fontFamily: 'Averta-Bold',
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
      color="white"
      css={{
        fontFamily: 'Averta',
        fontWeight: 'lighter',
        '&:hover': { color: 'lightgrey', cursor: 'pointer' },
      }}
    >
      {children}
    </Text>
  )
}
