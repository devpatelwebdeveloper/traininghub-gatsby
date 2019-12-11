import React from "react";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function RelatedCourseCards({ title, topHeader }) {
  // This is to filter the tiles based on Tech
  const RelatedCourses = Courses.filter((course) => course.tag === title);

  return (
    <Section padding="20px" margin="50px">
      <BaseTitle
        title={topHeader ? topHeader : "Related Courses"}
        size="H3"
        center
        underline
      />
      <Row>
        {RelatedCourses.map((course) => (
          <CourseCard
            key={course.title}
            tag={course.tag}
            title={course.title}
            image={course.image}
            alt={course.alt}
            href={course.href}
          />
        ))}
      </Row>
    </Section>
  );
}
