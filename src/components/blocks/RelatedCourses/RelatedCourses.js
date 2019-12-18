import React from "react";
import PropTypes from "prop-types";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default class Paragraph extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    topHeader: PropTypes.string,
    currentHref: PropTypes.string,
  };
  static defaultProps = {
    title: "",
    topHeader: "RelatedCourses",
    currentHref: "#",
  };
  render() {
    const { title, topHeader, currentHref } = this.props;
    const RelatedCourses = Courses.filter(
      (currentcourse) => currentcourse.tag === title,
    );
    console.log(currentHref);
    return (
      <Section padding="20px" margin="50px">
        <BaseTitle title={topHeader} size="H3" center underline />
        <Row>
          {RelatedCourses.map((course) => {
            if (currentHref.includes(course.href)) {
              return null;
            }
            // console.log(course.href);
            return (
              <CourseCard
                key={course.title}
                tag={course.tag}
                title={course.title}
                image={course.image}
                alt={course.alt}
                href={course.href}
              />
            );
          })}
        </Row>
      </Section>
    );
  }

  // export default function RelatedCourseCards({ title, topHeader }) {
  //   // This is to filter the tiles based on Tech
  //   const RelatedCourses = Courses.filter(
  //     (currentcourse) => currentcourse.tag === title,
  //   );

  //   return (
  //     <Section padding="20px" margin="50px">
  //       <BaseTitle
  //         title={topHeader ? topHeader : "Related Courses"}
  //         size="H3"
  //         center
  //         underline
  //       />
  //       <Row>
  //         {RelatedCourses.map((course) => {
  //           if (course.href.includes("html5-css3")) {
  //             return null;
  //           }
  //           // console.log(course.href);
  //           return (
  //             <CourseCard
  //               key={course.title}
  //               tag={course.tag}
  //               title={course.title}
  //               image={course.image}
  //               alt={course.alt}
  //               href={course.href}
  //             />
  //           );
  //         })}
  //       </Row>
  //     </Section>
  //   );
}
