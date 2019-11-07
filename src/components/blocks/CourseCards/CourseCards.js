import React from "react";
import Container from "react-bootstrap/Container";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";

export default function CourseCards() {
  return (
    <Section>
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
