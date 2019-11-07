import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import Container from "react-bootstrap/Container";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";

export default function CourseSingle() {
  return (
    <>
      <Head title="Courses" />
      <Layout>
        <TopBannerCourse
          CourseTitle="Microsoft SQl Developer"
          Subtitle="Microsoft"
          Text={`Become Microsoft Sql Developer`}
          CourseImage="https://unsplash.it/1500?random"
        />
        <section>
          <Container>
            <ContentGenericAligned />
          </Container>
        </section>
      </Layout>
    </>
  );
}
