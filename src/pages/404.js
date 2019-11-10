import React from "react";
import styled from "styled-components";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Col from "react-bootstrap/Col";
import Head from "../components/organisms/Head/Head";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Button from "../components/molecules/Button/Button";

const CenteredCol = styled(Col)`
  text-align: center;
  align-item: center;
`;
const FourOFour = styled.img`
  width: 50%;
  height: 50%;
`;

export default function PageNotFound() {
  const Toptitle = "Top Title Test";
  const Subtitle = "Sub Title";
  return (
    <>
      <Head title="404 Page not Found" />
      <Layout>
        <Section>
          <CenteredCol>
            <FourOFour
              src="https://devashish-lms.s3.ca-central-1.amazonaws.com/404_TrainingHub.gif"
              alt="404 Page not found"
              alt="404 Page not found"
            />
            <Paragraph>The page you are looking is not available</Paragraph>
            <Button link="/" text="Back to Home" />
            <Button link="/courses" text="Explore Courses" />
          </CenteredCol>
        </Section>
      </Layout>
    </>
  );
}
