import { Card, Col, Row, Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export const CourseCard = () => {
  return (
    <>
        <Card>
            <Col>
                <Card.Image />
            </Col>
            <Col>
                <Row>
                    <Card.Header>
                        <Card.Title>{ course.title }</Card.Title>
                        <Button.Group>
                            <Button clickable={false}>{course.isAvailable}</Button>
                            <Button clickable={false}>{course.forWhom}</Button>
                        </Button.Group>
                    </Card.Header>
                </Row>
                    <Text>
                        {course.description}
                    </Text>
                <Row>
                    <Card.Footer>
                        <Text>{course.date}</Text>
                        <Text>{course.applicationDates}</Text>
                    </Card.Footer>
                </Row>
                <Row>
                    <Button.apply></Button.apply>
                </Row>
            </Col>
        </Card>
    </>
  )
}

