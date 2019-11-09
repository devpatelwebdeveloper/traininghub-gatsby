import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import BaseLink from "../../atoms/BaseLink/BaseLink";

const StyledRow = styled(Row)`
  margin: 5px auto;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e7e7e7;
  .col {
    padding: 0;
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
          <h2>{CourseTitle}</h2>
          <div>
            <span>{CourseTech}</span> <span>{CourseStartDate}</span>
          </div>
          <p>{CourseDescription}</p>
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
