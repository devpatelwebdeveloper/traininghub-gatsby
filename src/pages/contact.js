import React from "react";
import styled from "styled-components";
import Styles from "../././styles/Styles";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Mapembed from "../components/atoms/Gmap/Gmap";
import ContactForm from "../components/organisms/Forms/ContactForms";
import FounderCard from "../components/molecules/FounderImage/FounderImage";
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
        <Section marginTop="50px" marginBottom="50px">
          <Row>
            <ContactCol md={6}>
              <BaseTitle title="Get in touch" size="H3" center underline />
              <Paragraph>
                We feel proud in answering what we are doin! Feel free to
                contact us with any contact us with any question of concerns and
                if you have any questions or concerns or even if you would like
                you know more about ur facility. We look forward to hearing from
                you!
              </Paragraph>
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
            <Col md={6}>
              <BaseTitle title="Contact us" size="H3" center underline />
              <ContactForm />
            </Col>
          </Row>
        </Section>
        <Section fluid>
          <Mapembed />
        </Section>
        <Section>
          <Row>
            <Col md={9}>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </Col>
            <Col md={3}>
              <FounderCard />
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
