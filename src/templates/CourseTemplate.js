import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RichTextOptions } from "../utilities/richtextFunction";

export const query = graphql`
  query($slug: String!) {
    contentfulCourseContent(slug: { eq: $slug }) {
      title
      courseIntroduction {
        json
      }
      topBannerImage {
        file {
          url
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
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={12}>
              {documentToReactComponents(
                Course.courseIntroduction.json,
                RichTextOptions,
              )}
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
};

export default Course;
