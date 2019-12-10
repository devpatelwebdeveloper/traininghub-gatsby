import React from "react";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumberedTimeLine from "../components/blocks/NumeredTimeLine/NumeredTimeLine";
import { Statistics } from "../contents/Statistic";
import StatisticsCounter from "../components/blocks/Statistics/Statistics";
import { Values } from "../contents/Values";

export default function AboutPage() {
  return (
    <>
      <Head title="About us" />
      <Layout>
        <Section>
          <Row>
            <Col>
              <NumberedTimeLine lists={Values} title="Our Values" />
            </Col>
          </Row>
        </Section>
        <Section>
          <StatisticsCounter stats={Statistics} />
        </Section>
      </Layout>
    </>
  );
}
