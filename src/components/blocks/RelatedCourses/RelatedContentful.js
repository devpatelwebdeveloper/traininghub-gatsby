import React from "react";
import PropTypes from "prop-types";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { CourseQuery } from "../../../contents/ContentfulCourses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function Related({ title, topHeader, currentHref }) {
  const Courses = [];
  const data = CourseQuery();
  data.allContentfulCourseContent.edges.forEach((singleCourse) => {
    Courses.push(singleCourse.node);
  });
  const RelatedCourses = Courses.filter(
    (currentcourse) => currentcourse.category.courseName === title,
  );

  const CoursesGroup = RelatedCourses.length <= 1 ? Courses : RelatedCourses;

  return (
    <>
      <Section padding="20px" margin="50px">
        <BaseTitle
          title={RelatedCourses.length <= 1 ? "Other Courses" : topHeader}
          size="H3"
          center
          underline
        />
        <Row>
          {CoursesGroup.map((course) => {
            if (
              currentHref.includes(
                `/courses/${course.category.slug}/${course.slug}`,
              )
            ) {
              return null;
            }
            return (
              <CourseCard
                key={course.title}
                tag={course.category.courseName}
                title={course.title}
                image={course.category.icon}
                alt={course.alt}
                href={`/courses/${course.category.slug}/${course.slug}`}
              />
            );
          })}
        </Row>
      </Section>
    </>
  );
}

Related.propTypes = {
  title: PropTypes.string.isRequired,
  topHeader: PropTypes.string,
  currentHref: PropTypes.string,
};
Related.defaultProps = {
  title: "",
  topHeader: "RelatedCourses",
  currentHref: "#",
};

// export default class Paragraph extends React.Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     topHeader: PropTypes.string,
//     currentHref: PropTypes.string,
//   };
//   static defaultProps = {
//     title: "",
//     topHeader: "RelatedCourses",
//     currentHref: "#",
//   };
//   render() {
//     const { title, topHeader, currentHref } = this.props;
//     const RelatedCourses = Courses.filter(
//       (currentcourse) => currentcourse.tag === title,
//     );

//     const CoursesGroup = RelatedCourses.length <= 1 ? Courses : RelatedCourses;
//     console.log(CourseQuery);

//     return (
//       <Section padding="20px" margin="50px">
//         <BaseTitle
//           title={RelatedCourses.length <= 1 ? "Other Courses" : topHeader}
//           size="H3"
//           center
//           underline
//         />
//         <Row>
//           {CoursesGroup.map((course) => {
//             if (currentHref.includes(course.href)) {
//               return null;
//             }
//             return (
//               <CourseCard
//                 key={course.title}
//                 tag={course.tag}
//                 title={course.title}
//                 image={course.image}
//                 alt={course.alt}
//                 href={course.href}
//               />
//             );
//           })}
//         </Row>
//       </Section>
//     );
//   }
// }
