import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import CourseCard from '../../molecules/CourseCard/CourseCard';
import { Courses } from '../../../contents/Courses';

const Section = styled.section`
  margin: 50px auto;
`;

export default function CourseCards() {
  return (
    <Section>
      <Container>
        <Row>
          {Courses.map(course => (
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
      </Container>
    </Section>
  );
}
