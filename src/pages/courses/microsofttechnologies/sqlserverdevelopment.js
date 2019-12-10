import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Section from "../../../components/organisms/Section/Section";
import Head from "../../../components/organisms/Head/Head";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../../../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../../components/blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../../components/blocks/Accordion/Accordion";
import { SqlServerDeveloper } from "../../../contents/Accordions/Accordions";
import { Courses } from "../../../contents/Courses";

export default function CourseSingle() {
  const Course = Courses.find((course) => {
    return course.title === "Microsoft SQL Developer";
  });
  return (
    <>
      <Head title={`${Course.title} - ${Course.tag}`} />
      <Layout>
        <TopBannerCourse
          courseTitle={Course.title}
          subtitle={Course.tag}
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
        <RelatedCourses title="Microsoft" />
      </Layout>
    </>
  );
}
