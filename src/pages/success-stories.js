import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextOptions } from "../utilities/richtextFunction";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import SuccessStory from "../components/molecules/SuccessStory/SuccessStory";
import Background from "../contents/icons/recruitment.svg";
import { graphql, useStaticQuery } from "gatsby";

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSuccessStories {
        edges {
          node {
            name
            courseName
            companyName
            jobTitle
            message {
              json
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const stories = data.allContentfulSuccessStories.edges;
  return (
    <>
      <Head title="Success Stories" />
      <Layout>
        <TopBannerCourse
          courseTitle="Student Success Stories"
          text="We have empowered professionals around the world, helping them develop the IT skills they need to boost their careers."
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            {stories.map((story, index) => {
              return (
                <SuccessStory
                  name={story.node.name}
                  course={story.node.courseName}
                  company={story.node.companyName}
                  title={story.node.jobTitle}
                  image={story.node.image.file.url}
                  story={documentToReactComponents(
                    story.node.message.json,
                    RichTextOptions,
                  )}
                  key={index}
                />
              );
            })}
          </Row>
        </Section>
      </Layout>
    </>
  );
}
