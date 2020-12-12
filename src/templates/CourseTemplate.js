import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Accordion from "../components/blocks/Accordion/Accordion";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../components/blocks/StudentJourney/StudentJourney";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RichTextOptions } from "../utilities/richtextFunction";

export const query = graphql`
  query($slug: String!) {
    contentfulCourseContent(slug: { eq: $slug }) {
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
        SqlServerDeveloper {
          title
          paragraph
        }
      }
    }
  }
`;

const Course = (props) => {
  const Course = props.data.contentfulCourseContent;
  return (
    <>
      <Head title={Course.title} />
      <Layout>
        <TopBannerCourse
          courseTitle={Course.title}
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
          accordions={Course.courseContent.SqlServerDeveloper}
          title="Course Content"
        />
      </Layout>
    </>
  );
};

export default Course;
