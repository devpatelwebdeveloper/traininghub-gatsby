import React from "react";
import styled from "styled-components";
import Styles from "../././styles/Styles";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { phone } from "react-icons-kit/fa/phone";
import { envelope } from "react-icons-kit/fa/envelope";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";

const ContactCol = styled(Col)`
  a {
    color: ${Styles.Colors.DefaultFont};
  }
`;

export default function Contact() {
  const Toptitle = "Top Title Test";
  const Subtitle = "Sub Title";
  return (
    <>
      <Head title="Contact us" />
      <Layout>
        <Section>
          <Row>
            <Col>
              <p>test</p>
            </Col>
            <ContactCol>
              <Paragraph>
                <Icon size={32} icon={mapMarker} /> Unit-402, 989 Derry Road E,
                Mississauga ON L5T 2J8
              </Paragraph>
              <Paragraph>
                <Icon size={32} icon={phone} /> 647-722-7220
              </Paragraph>
              <Paragraph>
                <Icon size={32} icon={envelope} />{" "}
                <a href="mailto:info@traininghub.io">info@traininghub.io</a>
              </Paragraph>
            </ContactCol>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
