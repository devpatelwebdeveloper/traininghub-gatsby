import React from "react";
import Styles from "../../../styles/Styles";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import CourseCard from "../../molecules/CourseCard/CourseCard";
import { Courses } from "../../../contents/Courses";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function CourseCards() {
  //Random shuffle but not working need to think about this
  // function shuffle(array) {
  //   var currentIndex = array.length,
  //     temporaryValue,
  //     randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // }
  // const randCourse = shuffle(Courses);
  return (
    <Section
      padding="20px"
      margin="50px"
      padding="50px"
      background={Styles.Colors.BaseLightBlue}>
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
            tag={course.tag}
            image={course.image}
            alt={course.alt}
            href={course.href}
          />
        ))}
      </Row>
    </Section>
  );
}
