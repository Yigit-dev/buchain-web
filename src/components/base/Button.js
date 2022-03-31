import { Button } from '@nextui-org/react'

Button.Apply = function CustomButton({ children }) {
  return <Button>{children}</Button>
}

Button.Register = function CustomButton({ children }) {
  return <Button rounded>{children}</Button>
}

Button.ApplyManifesto = function CustomButton({ children }) {
  return <Button
  css={{
    backgroundColor: '$dark'
  }} rounded>{children}</Button>
}


Button.Courses = function CustomButton({ children }) {
  return (
    <Button light color="primary" auto>
      {children}
    </Button>
  )
}
