import React from "react";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "./Layout";
import Section from "../../organisms/Section/Section";
import Head from "../../organisms/Head/Head";
import TopBannerCourse from "../../organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../../blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../blocks/RelatedCourses/RelatedContentful";
import Accordion from "../../blocks/Accordion/Accordion";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import { RichTextOptions } from "../../../utilities/richtextFunction";
import { CourseQuery } from "../../../contents/ContentfulContents/ContentfulCourses";

const GatsbyCourse = ({ courseName }) => {
  const Courses = [];
  const data = CourseQuery();
  data.allContentfulCourseContent.edges.forEach((singleCourse) => {
    Courses.push(singleCourse.node);
  });
  const GatsbyCourses = data.allContentfulCourseContent.edges;
  const Course = GatsbyCourses.find((course) => {
    return course.node.title === courseName;
  }).node;

  const currentHref = `/courses/${Course.category.slug}/${Course.slug}`;

  const courseContentExtractor = (courseContentDetails) => {
    let courseAccordion = [];
    courseContentDetails.map((courseContent) => {
      courseAccordion.push({
        title: courseContent.courseTopic.courseTopic,
        paragraph: documentToReactComponents(
          courseContent.courseContentDetailDescription.json,
          RichTextOptions,
        ),
      });
    });
    return courseAccordion;
  };

  const courseDetails = Course.courseContentDetails
    ? courseContentExtractor(Course.courseContentDetails)
    : Course.courseContent.courseContent;

  return (
    <>
      <Head title={`${Course.title}`} />
      <Layout>
        <TopBannerCourse
          courseTitle={Course.title}
          // subtitle={Course.category.courseName} //This can be the subtitle
          text={documentToReactComponents(
            Course.courseIntroduction.json,
            RichTextOptions,
          )}
          courseImage={Course.topBannerImage.file.url}
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title={Course.title}
            text={documentToReactComponents(
              Course.description.json,
              RichTextOptions,
            )}
            image={Course.courseImage.file.url}
            alt={Course.title}
            ImageLeft
            buttonOneLink="/contact-us"
            buttonOneText="Contact us"
          />
        </Section>
        <StudentJourney
          heading="Student Journey"
          paragraphContent={documentToReactComponents(
            Course.studentJourneyDescription.json,
            RichTextOptions,
          )}
          imageOne={Course.studentJourneyImages[0].file.url}
          imageOneAlt={`${Course.title}- Student Journey`}
          imageTwo={Course.studentJourneyImages[1].file.url}
          imageTwoAlt={`${Course.title}- Student Journey`}
        />
        <Accordion accordions={courseDetails} title="Course Content" />
        <RelatedCourses
          title={Course.category.courseName}
          currentHref={currentHref}
        />
        {Course.courseDescriptionAndFaq?.json && (
          <Section>
            <BaseTitle title={`More about ${Course.title}`} size="H3" />

            {documentToReactComponents(
              Course.courseDescriptionAndFaq.json,
              RichTextOptions,
            )}
          </Section>
        )}
      </Layout>
    </>
  );
};

export default GatsbyCourse;
