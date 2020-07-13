import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SchoolBoard from "../../../contents/icons/SchoolBoard.svg";

const StyledSection = styled.section`
  min-height: 50vh;
  background-color: #101d42;
  color: ${Styles.Colors.BaseWhite};
  background-image: url(${(props) => props.background || SchoolBoard});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: 100% 10%, 95% 60%, center bottom;
  h1,
  h4,
  p {
    color: ${Styles.Colors.BaseWhite};
  }
  ${Styles.ScreenSizes.medium`
    background-image:none;
     `}
`;
const BannerImage = styled.img`
  display: block;
  max-width: 90%;
  height: auto;
  margin: 50px auto;
`;
const LeftCol = styled(Col)`
  top: 10px;
  margin: 50px auto;
`;

export default class TopBannerCourse extends React.PureComponent {
  static propTypes = {
    courseTitle: PropTypes.any.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.any.isRequired,
    courseImage: PropTypes.string,
    background: PropTypes.string.isRequired,
  };
  static defaultProps = {
    courseTitle: "Programs and Courses",
    subtitle: " ",
    text: `TrainingHub offers a wide variety of programs and courses built on adaptive curriculum and led by leading industry experts.`,
    courseImage: "",
    background: SchoolBoard,
  };
  render() {
    const { courseTitle, subtitle, text, courseImage, background } = this.props;
    const courseImg = courseImage ? (
      <BannerImage src={courseImage} alt={courseTitle} />
    ) : null;
    const subHeading = subtitle ? (
      <BaseTitle title={subtitle} size="H4" />
    ) : null;
    return (
      <StyledSection background={background}>
        <Container>
          <Row>
            <LeftCol md={6}>
              <BaseTitle title={courseTitle} size="H1" />
              {subHeading}
              <Paragraph>{text}</Paragraph>
            </LeftCol>
            <Col md={6}>{courseImg}</Col>
          </Row>
        </Container>
      </StyledSection>
    );
  }
}
