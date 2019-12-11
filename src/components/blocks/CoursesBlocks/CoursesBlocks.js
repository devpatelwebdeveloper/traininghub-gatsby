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
            courseTitle={course.title}
            courseDescription={course.description}
            courseTech={course.tag}
            courseStartDate={course.startDate}
            exploreCourseButtonLink={course.href}
            enrolNowButtonLink="/contact-us"
          />
        );
      })}
    </Section>
  );
}
