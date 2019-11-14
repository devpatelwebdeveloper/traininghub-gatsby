import React from "react";
import Section from "../../organisms/Section/Section";
import Container from "react-bootstrap/Container";
import SingleCourseBlock from "../../molecules/SingleCourseBlock/SingleCourseBlock";
import { Courses } from "../../../contents/Courses";

export default function TilesBlock() {
  return (
    <Section>
      {Courses.map((course) => {
        return (
          <SingleCourseBlock
            courseImg={course.courseImage}
            courseTitle={course.subtitle}
            courseDescription={course.description}
            courseTech={course.title}
            courseStartDate={course.startDate}
            exploreCourseButtonLink={course.href}
            enrolNowButtonLink="/contact"
          />
        );
      })}
    </Section>
  );
}
