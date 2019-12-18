import React from "react";
import Styles from "../styles/Styles";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import NumberedTimeLine from "../components/blocks/NumeredTimeLine/NumeredTimeLine";

import Background from "../contents/icons/recruitment.svg";
import StatisticsCounter from "../components/blocks/Statistics/Statistics";
import { Statistics, Values, PageContent } from "../contents/AboutContent";

const contentOne = (
  <Paragraph>
    We are a permanent training business based in Mississauga, Ontario. We don’t
    aspire to be the biggest training business in the Canada. We do aspire to be
    the best and that’s why we’re so pleased to have Five Star ratings from our
    Trained Candidates . It shows us that we’re on the right track. We’re here
    to help so give us a call and test us out if you’re not sure about anything.
  </Paragraph>
);
const contentTwo = (
  <React.Fragment>
    <Paragraph>
      We offer a spectrum of courses that have been designed by experts to give
      you the most sought after IT skills within the Canadian /USA jobs market.
      Each of our course paths deliver multiple industry accredited
      qualifications that are highly valued by employers. This means that you
      are not just getting a course; you are getting the opportunity to have a
      whole new career in IT.
    </Paragraph>
    <Paragraph>
      All courses provided by TrainingHub are innovatively developed with a
      practical, industry relevant focus. An integral part of our training
      provision, is a personal and professional development stream, running
      parallel to academic studies. This embodies the ethos and spirit of
      TrainingHub, to furnish students with opportunities to enhance and improve
      personal skills, career skills, and to complete globally recognized
      industry certification running parallel to academic programs.
    </Paragraph>
  </React.Fragment>
);
const FounderProfile = (
  <Paragraph>
    After being entrepreneur in different sectors, Kalpesh Patel found its
    difficult to hire talented, knowledgeable and READY TO START candidates. And
    this Sparked the Idea of TrainingHub.io—startup for job oriented training to
    prepare IT Professionals and recruitment. As an IT professional with over 20
    years of experience, Kalpesh Patel holds Bachelors of Engineering with
    Masters in Computer Science. Having worked in different sectors like
    Banking, Insurance, Government, Product based companies, Transportation,
    Charity Fund Raising Organizations, Onsite-offshore Model and many more. In
    the course of his profession he wore all different hats from Full Stack
    Developer to Team Lead to Product Owner to Onsite – Offshore Team Manager to
    Project Leader to People Manager to Director. He has been working in so many
    different technologies primarily Microsoft Technologies, Data Warehousing,
    Business Intelligence, GIS Based Tools. In his free time, he is a Community
    Leader and volunteer for betterment of youths since decade.
  </Paragraph>
);

export default function AboutPage() {
  return (
    <>
      <Head title="About us" />
      <Layout>
        <TopBannerCourse
          courseTitle="About us"
          text="Founded by Frustrated Trainer Who Believed"
          text="A vision to upgrade your knowledge to serve better in Community"
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            imageLeft
            title="Who we are?"
            text={contentOne}
            image="https://traininghub.io/wp-content/uploads/2019/07/Recruitment_Ctech.jpg"
            alt="Centurion Tech"
            buttonOneLink="/contact-us"
            buttonOneText="Contact us"
            buttonOneExternal
            buttonTwoLink="/courses"
            buttonTwoText="Explore Courses"
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="About our handcrafted courses"
            text={contentTwo}
            image="http://traininghub.io/wp-content/uploads/2019/07/interview-tips.jpg"
            alt="Job Seeker"
          />
        </Section>

        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            imageLeft
            title={PageContent[0].title}
            text={PageContent[0].paragraph}
            image="https://traininghub.io/wp-content/uploads/2019/07/Recruitment_Ctech.jpg"
            alt="Profile of Founder"
          />
        </Section>

        <Section>
          <Row>
            <Col>
              <BaseTitle title="Our Values" size="H2" center underline />
              <NumberedTimeLine lists={Values} title="Our Values" />
            </Col>
          </Row>
        </Section>
        <Section
          marginTop="50px"
          marginBottom="25px"
          background={Styles.Colors.BaseLightBlue}>
          <BaseTitle title="By the numbers" size="H3" center underline />
          <StatisticsCounter stats={Statistics} />
        </Section>
      </Layout>
    </>
  );
}
