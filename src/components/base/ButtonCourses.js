import RegisterButton from "../src/components/base/Button"
import { Button, StyledButtonGroup } from "@nextui-org/react"

const ButtonCourses = () => {
  return (
    <Button.Group>
        <Button.Courses>TÜMÜ</Button.Courses>
        <Button.Courses>ŞİRKETLER İÇİN</Button.Courses>
        <Button.Courses>ÜYELER İÇİN</Button.Courses>
        <Button.Courses>YAZILIMCILAR İÇİN</Button.Courses>
    </Button.Group>
  )
}

export default ButtonCourses

