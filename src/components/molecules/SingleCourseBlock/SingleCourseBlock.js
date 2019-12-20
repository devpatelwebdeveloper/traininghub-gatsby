import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import Button from "../Button/Button";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledRow = styled(Row)`
  margin: 10px auto;
  background: ${Styles.Colors.BaseWhite};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${Styles.Colors.BaseBorderGrey};
  .col {
    padding: 0px;
    margin: auto;
  }
  .col-md-7 {
    padding: 10px;
    margin: auto;
  }
`;
const CourseImage = styled(Col)`
  margin: 0px auto;
  padding-left: 0px;
  padding-right: 0px;
`;

const Tags = styled.div`
  margin: 10px auto;
`;

const StyledLabel = styled.span`
  margin: 5px;
  display: inline;
  font-size: 10px;
  color: ${Styles.Colors.BrandOrange};
  background-color: rgba(219, 59, 0, 0.1);
  padding: 5px 10px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
`;
const StyledDate = styled.span`
  margin: 5px;
  display: inline;
  font-size: 10px;
  color: ${Styles.Colors.BrandGreen};
  background-color: rgba(13, 127, 80, 0.1);
  padding: 5px 10px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
`;

export default class SingleCourseBlock extends React.Component {
  static propTypes = {
    courseImg: PropTypes.string.isRequired,
    courseTitle: PropTypes.string.isRequired,
    courseDescription: PropTypes.string.isRequired,
    courseTech: PropTypes.string.isRequired,
    courseStartDate: PropTypes.string.isRequired,
    exploreCourseButtonLink: PropTypes.string.isRequired,
  };
  static defaultProps = {
    courseImg: "",
    courseTitle: "Course Coming Soon",
    courseDescription: "We are working on developing the best IT Course",
    courseTech: "TrainingHub",
    courseStartDate: "Coming Soon",
    exploreCourseButtonLink: "#",
  };
  render() {
    const {
      courseImg,
      courseTitle,
      courseDescription,
      courseTech,
      courseStartDate,
      exploreCourseButtonLink,
    } = this.props;
    const isCourseStartDate =
      courseStartDate !== "" ? courseStartDate : "Coming Soon";

    return (
      <StyledRow>
        <CourseImage>
          <BaseTile image={courseImg} alt={courseTitle} />
        </CourseImage>
        <Col md={7}>
          <BaseTitle title={courseTitle} size="H4" />
          <Tags>
            <StyledLabel>{courseTech}</StyledLabel>
            <StyledDate>{isCourseStartDate}</StyledDate>
          </Tags>
          <Paragraph>{courseDescription}</Paragraph>
        </Col>
        <Col>
          <Button
            link={exploreCourseButtonLink}
            text="Explore Course"
            external
          />
          <Button link="/contact-us" text="Contact us" outline />
        </Col>
      </StyledRow>
    );
  }
}
