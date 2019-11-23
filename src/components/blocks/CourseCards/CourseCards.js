import React from "react";
import { graphql, useStaticQuery } from "gatsby"

import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";



export default function CourseCards() {
  const data = useStaticQuery(graphql`
  query {
    traininghub {
      courses {
        alt
        courseImage
        description
        href
        icon
        startDate
        subtitle
        title
      }
    }
  }
`)

  console.log("Data.................", data);
  return (
    <Section padding="20px" margin="50px">
      <BaseTitle
        title="Achieve your career goals with industry-recognized learning paths"
        size="H3"
        center
        underline
      />
      <Row>
        {data.traininghub.courses.map((course) => (
          <CourseCard
            key={course.subtitle}
            title={course.title}
            subtitle={course.subtitle}
            image={course.icon}
            alt={course.alt}
            href={course.href}
          />
        ))}
      </Row>
    </Section>
  );
}

