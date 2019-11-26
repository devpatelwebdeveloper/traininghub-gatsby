import React from "react";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function CourseCards() {
  return (
    <Section padding="20px" margin="50px">
      <BaseTitle
        title="Achieve your career goals with industry-recognized learning paths"
        size="H3"
        center
        underline
      />
      <Row>
        {Courses.map((course) => (
          <CourseCard
            key={course.subtitle}
            title={course.title}
            subtitle={course.subtitle}
            image={course.image}
            alt={course.alt}
            href={course.href}
          />
        ))}
      </Row>
    </Section>
  );
}
