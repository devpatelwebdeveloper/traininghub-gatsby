import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Layout from "./Layout";
import Section from "../../organisms/Section/Section";
import Head from "../../organisms/Head/Head";
import TopBannerCourse from "../../organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../../blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../blocks/Accordion/Accordion";
import { Courses } from "../../../contents/Courses";

export default class SingleCoursePage extends React.Component {
  static propTypes = {
    courseName: PropTypes.any.isRequired,
  };
  static defaultProps = {
    courseName: "",
  };
  render() {
    const { courseName, currentHref } = this.props;
    const Course = Courses.find((course) => {
      return course.title === courseName;
    });
    return (
      <>
        <Head title={`${Course.title} - ${Course.tag}`} />
        <Layout>
          <TopBannerCourse
            courseTitle={Course.title}
            // subtitle={Course.tag} This can be the subtitle
            text={Course.description}
            courseImage={Course.coursePage.courseImage}
          />
          <Section margin="24px" padding="24px">
            <ContentGenericAligned
              title={Course.title}
              text={Course.coursePage.courseIntroduction}
              image={Course.coursePage.courseIntroductionImage}
              alt={Course.title}
              ImageLeft
              buttonOneLink="/contact-us"
              buttonOneText="Contact us"
              buttonOneExternal
            />
          </Section>
          <StudentJourney
            heading={Course.coursePage.studentJourney.heading}
            paragraphContent={Course.coursePage.studentJourney.paragraphContent}
            imageOne={Course.coursePage.studentJourney.imageOne}
            imageOneAlt={Course.coursePage.studentJourney.imageOneAlt}
            imageTwo={Course.coursePage.studentJourney.imageTwo}
            imageTwoAlt={Course.coursePage.studentJourney.imageTwoAlt}
          />
          <Accordion
            accordions={Course.coursePage.courseContent}
            title="Course Content"
          />
          <RelatedCourses title={Course.tag} currentHref={Course.href} />
        </Layout>
      </>
    );
  }
}
