import React from "react";
import Styles from "../styles/Styles";
import Layout from "../components/templates/Layout/Layout";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Background from "../contents/icons/recruitment.svg";
import Section from "../components/organisms/Section/Section";
import Head from "../components/organisms/Head/Head";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import Paragraph from "../components/atoms/Paragraph/Paragraph";

const contentOne = (
  <>
    <Paragraph>
      Accelerate your career, find a community, and get benefits - No matter
      where in the world you are to work. TrainingHub.io offers customized
      programs that help you to find the perfect job for your skills and
      experience. Follow our step-by-step guide to help you in finding a job you
      always wanted to work. We can help you with job search, write resumes, and
      cover letters. You can come and visit our location and meet our expert
      employment consultant and get started.
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
      stability and security. We can help you to understand the skills required
      for getting jobs and can arrange your training and provide 100% placement
      assistance to get the required job.
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
    <Paragraph>
      Our team is a diverse group of professionals, who are dedicated to
      providing people with the best learning experience and fun along the way.
      We encourage continuous learning and improvement, which is a great way to
      learn new skills. Keeping up to date for the market trends will increase
      the chance of opportunities and change our career graph accordingly. We
      provide below services besides the career path courses.
    </Paragraph>
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
      the employers. We have specific industry teams, who have deep
      understandings of that specific sector and its roles. So, we are well
      known to guide you towards your ideal job in your ideal - Fortune 500
      companies. We are unique in the industry by teaching you the latest
      cutting edge technologies used in the present market.
    </Paragraph>
  </React.Fragment>
);

const contentFive = (
  <React.Fragment>
    <Paragraph>
      Explore the IT field statistics and career-driven courses at the job
      market and get updated to them by joining with TrainingHub.io, Learn about
      various career paths. We will help you find your ideal job and steer your
      career in the right way after the successful completion of the training
      with our career path courses. So, why wait! get trained in one of our
      career path courses and fulfill your dream job opportunity. We define
      ourselves as pioneer in the market for career path courses. So, get in
      touch and experience a more considerable approach.
    </Paragraph>
  </React.Fragment>
);
const contentSix = (
  <Paragraph>
    Explore job opportunities to specific positions, and compare the wages
    between different locations with the same position to analyze the market
    trends. Get the latest news and reports by browsing. Our biggest strength is
    sourcing and identification of talent which helped us to establish
    partnerships with leading companies. Along with this, we help our clients
    update with current trends in the market to develop their HR strategy. Our
    team works closely with the hiring managers to Get qualified candidates to
    ensure the best fit in their teams.
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
          subtitle="Take Step From Learning to Earning!"
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
            title="What Makes Us Different"
            text={contentSeven}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/CareerChoice_TrainingHub.png"
            alt="What Makes Us Different"
          />
        </Section>
      </Layout>
    </React.Fragment>
  );
}

//code
