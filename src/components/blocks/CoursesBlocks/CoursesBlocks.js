import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CoursesBlock from "../../molecules/CoursesBlock/CoursesBlock"
import Button from "react-bootstrap/Button"
import BaseTile from "../../atoms/BaseTile/BaseTile"

const StyledRow = styled(Row)`
  position: relative;
  margin: 5px auto;
  background: #fff;
  border-radius: 0.21428571rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e7e7e7;
  BaseTile {
  }
`
const CourseImage = styled(Col)`
  padding-left: 0px;
  padding-right: 0px;
`

export default function TilesBlock() {
  return (
    <Container>
      <StyledRow>
        <CourseImage md={3}>
          <BaseTile image="https://unsplash.it/1500?random" alt="title" />
        </CourseImage>
        <Col md={7}>
          <h2>Course Name</h2>
          <div>
            <span>Microsoft</span> <span>Full time</span>
          </div>
          <p>
            The part-time Data Analytics course was designed to introduce
            students to the fundamentals of data analysis.
          </p>
        </Col>
        <Col md={2} sm={false}>
          <Button variant="primary" size="lg">
            Primary
          </Button>
          <Button variant="primary" size="lg">
            Primary
          </Button>
        </Col>
      </StyledRow>
    </Container>
  )
}
