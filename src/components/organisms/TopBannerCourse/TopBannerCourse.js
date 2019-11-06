import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Styles from "../../../styles/Styles"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BaseTile from "../../atoms/BaseTile/BaseTile"
import BaseTitle from "../../atoms/BaseTitle/BaseTitle"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import SchoolBoard from "../../../contents/icons/SchoolBoard.svg"

const StyledSection = styled.section`
  min-height: 50vh;
  background-color: #101d42;
  color: #ffffff;
  background-image: url(${SchoolBoard});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: 105% 150%, 95% 60%, center bottom;
  ${Styles.ScreenSizes.medium`
    background-image:none;
     `}
`
const BannerImage = styled.img`
  display: block;
  max-width: 60%;
  height: auto;
  margin: 50px auto;
`
const LeftCol = styled(Col)`
  top: 10px;
  margin: 50px auto;
`

export default class TopBannerCourse extends React.PureComponent {
  render() {
    const courseImg = this.props.CourseImage ? (
      <BannerImage src={this.props.CourseImage} alt={this.props.CoursrTitle} />
    ) : null
    return (
      <StyledSection>
        <Container>
          <Row>
            <LeftCol md={5}>
              <BaseTitle title={this.props.CoursrTitle} size="H1" />
              <Paragraph>{this.props.Paragraph}</Paragraph>
            </LeftCol>
            <Col md={7}>{courseImg}</Col>
          </Row>
        </Container>
      </StyledSection>
    )
  }
}

TopBannerCourse.propTypes = {
  CoursrTitle: PropTypes.any.isRequired,
  Paragraph: PropTypes.string.isRequired,
  CourseImage: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.string.isRequired,
}
TopBannerCourse.defaultProps = {
  CoursrTitle: "Course Title",
  Paragraph: "Paragraph",
  CourseImage: "",
  subtitle: "",
  background: SchoolBoard,
}
