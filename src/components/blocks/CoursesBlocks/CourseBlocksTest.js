import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CoursesBlockTest from '../../molecules/CoursesBlock/CourseBlock2';

export default function() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <CoursesBlockTest />
            <CoursesBlockTest />
            <CoursesBlockTest />
          </Row>
        </Container>
      </section>
    </>
  );
}
