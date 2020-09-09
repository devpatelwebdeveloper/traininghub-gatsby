import React from "react";
import Styles from "../styles/Styles";
import Layout from "../components/templates/Layout/Layout";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Background from "../contents/icons/recruitment.svg";
import Section from "../components/organisms/Section/Section";
import Head from "../components/organisms/Head/Head";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import IconList from "../components/blocks/IconList/IconList";
import { JobSeekerList } from "../contents/RecruitmentBullets";

const contentOne = (
  <>
    <Paragraph>
      Accelerate your career, find a community, and get benefits - No matter
      where in the world you are to work. TrainingHub offers customized programs
      that help you to find the perfect job for your skills and experience.
      Follow our step-by-step guide to help you in finding a job you always
      wanted to work. We can help you with job search, write resumes, and cover
      letters.
    </Paragraph>
    <Paragraph>
      <strong>
        Upgrade your skills by joining our learning programs to get the desired
        job in the IT industry in North America.
      </strong>
      We provide 100% job assistance for career path courses.
    </Paragraph>
  </>
);
const contentTwo = (
  <>
    <Paragraph>
      TrainingHub.io connects developers with fast-growing organizations and
      challenges - all by backing you with extensive benefits that protect your
      stability and security.
    </Paragraph>
    <ul>
      <li>An exciting portfolio of organizations.</li>
      <li>24*7 HR Support.</li>
      <li>Broad Health Care Coverage.</li>
    </ul>
  </>
);
const contentThree = (
  <React.Fragment>
    <ul>
      <li>Professional / Soft Skills Training.</li>
      <li>Career Counselling.</li>
      <li>
        Interview Preparations - Mock Interviews, Technical Interviews, etc.
      </li>
      <li>Domain-Specific Training.</li>
      <li>Cover letters/Resume preparations.</li>
      <li>Marketing the potential candidates.</li>
    </ul>
  </React.Fragment>
);

const contentFour = (
  <React.Fragment>
    <Paragraph>
      Save time and money - gain access to the top talent search programs
      partnering with the TrainingHub.io. We help you to simplify the interview
      fear by conducting Mock interviews and help you in gaining visibility to
      the employers.
    </Paragraph>
  </React.Fragment>
);

const contentFive = (
  <React.Fragment>
    <Paragraph>
      Explore the IT field statistics and career-driven courses at the job
      market and get updated to them by joining with TrainingHub.io, Learn about
      various career paths.
    </Paragraph>
  </React.Fragment>
);
const contentSix = (
  <Paragraph>
    Explore job opportunities to specific positions, and compare the wages
    between different locations with the same position to analyze the market
    trends. Get the latest news and reports by browsing.
  </Paragraph>
);
const contentSeven = (
  <>
    <ul>
      <li>Proven process of selection and recruitment.</li>
      <li>Full screening prior to CV submission.</li>
      <li>Reference / Credit checks.</li>
      <li>Highly Competitive rates.</li>
      <li>Client-focused.</li>
    </ul>
    <Paragraph>
      TrainingHub.io prioritizes the client’s requirements and translates into a
      tailored interview process and selects the most qualified resources. Over
      the years we have built a significant relationship with leading employers
      by fulfilling their requirements. Reach us to know better.
    </Paragraph>
  </>
);

export default function Recruitment() {
  return (
    <React.Fragment>
      <Head title="Job Seeker" />
      <Layout>
        <TopBannerCourse
          courseTitle="Job seeker"
          subtitle="The step from Learning to Earning"
          text="TrainingHub.io connects developers with fast-growing organizations and challenges - all by backing you with extensive benefits that protect your stability and security."
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="What We Offer"
            text={contentOne}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/WhatWeOffer_TrainingHub.png"
            alt="What we offer at TrainingHub.io"
            buttonOneLink="/courses"
            buttonOneText="Career path courses"
            buttonTwoLink="/contact-us"
            buttonTwoText="Contact us"
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Take on Big Challenges"
            text={contentTwo}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/TakeOnBigChallenge_TrainingHub.png"
            alt="Take on Big Challenges with TrainingHub.io"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px">
          <ContentGenericAligned
            title="Our Career Path Courses Covers Areas Such As..."
            text={contentThree}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/CareerPath_TrainingHub.png"
            alt="Career Path"
          />
        </Section>
        <Section padding="25px" background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Comprehensive Ecosystem"
            text={contentFour}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/InterviewMockTest_TrainingHub.png"
            alt="Comprehensive Ecosystem"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px">
          <ContentGenericAligned
            title="Choose a Career"
            text={contentFive}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/ChooseACareer_TrainingHub.png"
            alt="TrainingHub.io helps to choose Career"
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="25px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Explore the Market"
            text={contentSix}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/ExploreTheMarket_TrainingHub.png"
            alt="Explore the Market"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px">
          <ContentGenericAligned
            title="Choose a Career"
            text={contentSeven}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/CareerChoice_TrainingHub.png"
            alt="Choose A Career"
          />
        </Section>
      </Layout>
    </React.Fragment>
  );
}

//code
