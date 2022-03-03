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

Button.Courses = function CoursesButton({children}) {
    return (
            <Button light color="primary" auto>{children}</Button>
    )
} 




