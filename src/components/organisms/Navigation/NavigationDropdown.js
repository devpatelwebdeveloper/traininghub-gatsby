import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import { Courses } from "../../../contents/Courses";
import { CourseQuery } from "../../../contents/ContentfulContents/ContentfulCourses";

const StyledDescription = styled(Col)`
  ${Styles.ScreenSizes.medium`
    display:none;
  `}
`;

const StyledNavDropdown = styled(NavDropdown)`
  position: static !important;
  .dropdown-menu {
    margin: 0px;
    border-radius: 0px !important;
    border: none !important;
    width: 100%;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
    ${Styles.ScreenSizes.small`
    box-shadow: none;
  `}
  }
  dropdown-item {
    padding-bottom: 8px;
  }
  .row {
    margin: 0px !important;
  }
`;

const NavigationDropDown = ({ title, descTitle, description }) => {
  const ContentfulCourses = [];
  const data = CourseQuery();
  data.allContentfulCourseContent.edges.forEach((singleCourse) => {
    ContentfulCourses.push(singleCourse.node);
  });
  return (
    <>
      <StyledNavDropdown title={title} id="courses-dropdown">
        <Row>
          <StyledDescription>
            <BaseTitle title={descTitle} size="H5" />
            <Paragraph>{description}</Paragraph>
          </StyledDescription>
          <Col>
            <BaseTitle title="Microsoft Technologies" size="H6" />
            {ContentfulCourses.map((course, key) => {
              if (course.category.courseName === "Microsoft Technologies") {
                return (
                  <Link
                    to={`/courses/${course.category.slug}/${course.slug}`}
                    key={key}
                    className="dropdown-item">
                    {course.title}
                  </Link>
                );
              }
              return null;
            })}
            <BaseTitle title="Programming" size="H6" />
            {ContentfulCourses.map((course, key) => {
              if (course.category.courseName === "Programming") {
                return (
                  <Link
                    to={`/courses/${course.category.slug}/${course.slug}`}
                    key={key}
                    className="dropdown-item">
                    {course.title}
                  </Link>
                );
              }
              return null;
            })}
          </Col>
          <Col>
            <BaseTitle title="Web Technologies" size="H6" />
            {ContentfulCourses.map((course, key) => {
              if (course.category.courseName === "Web Technologies") {
                return (
                  <Link
                    to={`/courses/${course.category.slug}/${course.slug}`}
                    key={key}
                    className="dropdown-item">
                    {course.title}
                  </Link>
                );
              }
              return null;
            })}
          </Col>
          <Col>
            <BaseTitle title="Quality Engineering" size="H6" />
            {ContentfulCourses.map((course, key) => {
              if (course.category.courseName === "QA") {
                return (
                  <Link
                    to={`/courses/${course.category.slug}/${course.slug}`}
                    key={key}
                    className="dropdown-item">
                    {course.title}
                  </Link>
                );
              }
              return null;
            })}
            <BaseTitle title="Data" size="H6" />
            {ContentfulCourses.map((course, key) => {
              if (course.category.courseName === "Data") {
                return (
                  <Link
                    to={`/courses/${course.category.slug}/${course.slug}`}
                    key={key}
                    className="dropdown-item">
                    {course.title}
                  </Link>
                );
              }
              return null;
            })}
          </Col>
        </Row>
      </StyledNavDropdown>
    </>
  );
};

export default NavigationDropDown;
