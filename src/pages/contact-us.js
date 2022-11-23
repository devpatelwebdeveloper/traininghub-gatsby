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
import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { phone } from "react-icons-kit/fa/phone";
import { envelope } from "react-icons-kit/fa/envelope";

const ContactCol = styled(Col)`
  a {
    color: ${Styles.Colors.DefaultFont};
  }
`;

export default function Contact() {
  return (
    <>
      <Head title="Contact us" />
      <Layout>
        <Section marginTop="50px" marginBottom="50px">
          <Row>
            <ContactCol md={6}>
              <BaseTitle title="Get in touch" size="H3" center underline />
              <Paragraph>
                We feel proud in answering what we are doing! Feel free to
                contact us with any question of concerns or even if you would
                like you know more about our facility. We look forward to
                hearing from you!
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
              <hr />
              <BaseTitle title="US Location:" size="H5" />
              <Paragraph>
                <Icon size={32} icon={mapMarker} /> Unit 180, 2015 Lincoln Hwy,
                Edison, NJ 08817
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
          <Row>
            <Col md={6}>
              <Mapembed canada />
            </Col>
            <Col md={6}>
              <Mapembed />
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
