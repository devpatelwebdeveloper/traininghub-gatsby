import React from "react";
import Container from "react-bootstrap/Container";
import CoursesBlock from "../../molecules/CoursesBlock/CoursesBlock";

export default function TilesBlock() {
  return (
    <Container>
      <CoursesBlock
        CourseImg="https://unsplash.it/1500?random"
        CourseTitle="Course Name"
        CourseDescription="The part-time Data Analytics course was designed to introduce students to the fundamentals of data analysis."
        CourseTech="Microsoft"
        CourseStartDate="Nov 30 3019"
        ExploreCourseButtonLink="https://www.google.com"
        EnrolNowButtonLink="https://www.google.com"
      />
      <CoursesBlock />
    </Container>
  );
}
