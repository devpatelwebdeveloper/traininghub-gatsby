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
import BlogItem from "../components/molecules/BlogItem/BlogItem";

export default function AboutPage() {
  return (
    <>
      <Head title="Privacy Policy" />
      <Layout>
        <TopBannerCourse
          courseTitle="Privacy Policy"
          text="Founded by Frustrated Trainer Who Believed"
          text="A vision to upgrade your knowledge to serve better in Community"
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </Row>
        </Section>
      </Layout>
    </>
  );
}
