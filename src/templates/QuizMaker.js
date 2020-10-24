import React from "react";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/recruitment.svg";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulQuiz(slug: { eq: $slug }) {
      title
      classmakerQuizId
    }
  }
`;

export default function QuizPage(props) {
  console.log(props);

  return (
    <>
      <Head title={props.data.contentfulQuiz.title} />
      <Layout>
        <TopBannerCourse
          courseTitle={props.data.contentfulQuiz.title}
          text=""
          text=""
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={12}>
              <iframe
                src={`https://www.classmarker.com/online-test/start/?quiz=${props.data.contentfulQuiz.classmakerQuizId}`}
                frameborder="0"
                style={{ width: "100%", height: "800px" }}
              />
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
