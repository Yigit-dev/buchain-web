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
        <Button.Group>
            <Button light color="primary" auto>TÜMÜ</Button>
            <Button light color="primary" auto>ŞİRKETLER İÇİN</Button>
            <Button light color="primary" auto>ÜYELER İÇİN</Button>
            <Button light color="primary" auto>YAZILIMCILAR İÇİN</Button>
        </Button.Group>
    )
} 