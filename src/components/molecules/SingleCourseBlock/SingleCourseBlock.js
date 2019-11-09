import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Styles from "../../../styles/Styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledRow = styled(Row)`
  margin: 10px auto;
  background: ${Styles.Colors.BaseWhite};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${Styles.Colors.BaseBorderGrey};
  .col {
    padding: 0;
    margin: auto;
  }
  .col-md-7 {
    margin: auto;
  }
`;
const CourseImage = styled(Col)`
  padding-left: 0px;
  padding-right: 0px;
`;

const StyledButton = styled(BaseLink)`
  background-color: transparent !important;
  border: 1px solid #1358db;
  color: #1358db;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: center;
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
    CourseImg: PropTypes.string.isRequired,
    CourseTitle: PropTypes.string.isRequired,
    CourseDescription: PropTypes.string.isRequired,
    CourseTech: PropTypes.string.isRequired,
    CourseStartDate: PropTypes.string.isRequired,
    ExploreCourseButtonLink: PropTypes.string.isRequired,
    EnrolNowButtonLink: PropTypes.string.isRequired,
  };
  static defaultProps = {
    CourseImg: "https://unsplash.it/1500?random",
    CourseTitle: "Course Coming Soon",
    CourseDescription: "We are working on developing the best IT Course",
    CourseTech: "TrainingHub",
    CourseStartDate: "Coming Soon",
    ExploreCourseButtonLink: "#",
    EnrolNowButtonLink: "#",
  };
  render() {
    const {
      CourseImg,
      CourseTitle,
      CourseDescription,
      CourseTech,
      CourseStartDate,
      ExploreCourseButtonLink,
      EnrolNowButtonLink,
    } = this.props;
    return (
      <StyledRow>
        <CourseImage>
          <BaseTile Image={CourseImg} Alt="title" />
        </CourseImage>
        <Col md={7}>
          <BaseTitle title={CourseTitle} size="H4" />
          <Tags>
            <StyledLabel>{CourseTech}</StyledLabel>
            <StyledDate>{CourseStartDate}</StyledDate>
          </Tags>
          <Paragraph>{CourseDescription}</Paragraph>
        </Col>
        <Col>
          <StyledButton
            children="Explore Course"
            href={ExploreCourseButtonLink}
            composedClassName="btn btn-primary btn-block btn-lg"
          />
          <StyledButton
            children="test"
            href={EnrolNowButtonLink}
            composedClassName="btn btn-primary btn-block btn-lg"
          />
        </Col>
      </StyledRow>
    );
  }
}
