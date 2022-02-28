import { Button } from '@nextui-org/react'

Button.Register = function RegisterButton({children}) {
  return(
    <Button rounded>{children}</Button>
  )
}