import { Button } from '@nextui-org/react'

Button.Apply = function ApplyButton({children}) {
    return(
      <Button>{children}</Button>
    )
}

Button.Register = function RegisterButton({children}) {
    return(
        <Button rounded>{children}</Button>
    )
}