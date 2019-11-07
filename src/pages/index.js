import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Container from "react-bootstrap/Container";
import Head from "../components/organisms/Head/Head";
import TopBanner from "../components/organisms/TopBanner/TopBanner";
import Tiles from "../components/blocks/Tiles/Tiles";
import Clients from "../components/blocks/Clients/Clients";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import CourseCards from "../components/blocks/CourseCards/CourseCards";

export default function HomePage() {
  const Toptitle = "Top Title Test";
  const Subtitle = "Sub Title";
  return (
    <>
      <Head title="Home" />
      <Layout>
        <TopBanner
          Title={Toptitle}
          Subtitle={Subtitle}
          Background="https://unsplash.it/1500?random"
        />
        <Clients />
        <Section>
          <BaseTitle title="Heading test" size="H1" center underline />
          <Container>
            <Tiles />
          </Container>
        </Section>
        <CourseCards />
      </Layout>
    </>
  );
}
