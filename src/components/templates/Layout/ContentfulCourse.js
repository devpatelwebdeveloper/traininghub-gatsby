import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "./Layout";
import Section from "../../organisms/Section/Section";
import Head from "../../organisms/Head/Head";
import TopBannerCourse from "../../organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../../blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../blocks/Accordion/Accordion";
import { Courses } from "../../../contents/Courses";
import { RichTextOptions } from "../../../utilities/richtextFunction";

const GatsbyCourse = ({ courseName, currentHref }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCourseContent {
        edges {
          node {
            title
            category {
              courseName
              icon
            }
            courseIntroduction {
              json
            }
            topBannerImage {
              file {
                url
              }
            }
            courseIntroduction {
              json
            }
            description {
              json
            }
            courseImage {
              file {
                url
              }
            }
            studentJourneyDescription {
              json
            }
            studentJourneyImages {
              file {
                url
              }
            }
            courseContent {
              courseContent {
                title
                paragraph
              }
            }
          }
        }
      }
    }
  `);

  console.log(`courseName....`, courseName);
  const GatsbyCourses = data.allContentfulCourseContent.edges;
  const Course = GatsbyCourses.find((course) => {
    return course.node.title === courseName;
  }).node;

  console.log(Course);

  return (
    <>
      <Head title={`${Course.title}`} />
      <Layout>
        <TopBannerCourse
          courseTitle={Course.title}
          //   subtitle={Course.tag} This can be the subtitle
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
        <Accordion
          accordions={Course.courseContent.courseContent}
          title="Course Content"
        />
        <RelatedCourses title={Course.tag} currentHref={Course.href} />
      </Layout>
    </>
  );
};

export default GatsbyCourse;
