import React from "react";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Layout from "../components/templates/Layout/Layout";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Background from "../contents/icons/recruitment.svg";
import Section from "../components/organisms/Section/Section";
import Col from "react-bootstrap/Col";
import Head from "../components/organisms/Head/Head";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Button from "../components/molecules/Button/Button";

const contentOne = (
  <Paragraph>
    TrainingHub is owned by Centurion Technology Group, which connects clients
    with the most qualified IT professionals in the country for contract and
    permanent positions. Our clients have access to the most experienced
    technology talent out there, while qualified candidates have access to the
    most coveted jobs in IT. We have proven record of delivering effective
    recruitment solutions for permanent and contract roles with our Canadian and
    US clients. Our team will ensure your requirements are understood and
    delivered. Our values at the heart of everything we do.
  </Paragraph>
);
const contentTwo = (
  <Paragraph>
    You’re ambitious and innovative. You deserve to work for a company that
    shares those values. As technical experts whose focus is helping IT
    professionals find jobs, we can show you how to market your strengths to
    employers. Our success is built on getting to know you and learning about
    your goals, experiences, and personality. With this advantage, we help you
    to find the right job fit for you.
  </Paragraph>
);
const contentThree = (
  <React.Fragment>
    <Paragraph>
      We build skilled remote engineering teams so you can focus on hitting your
      goals. More than just recruiting, we takes care of everything remote teams
      need to thrive – from little things like managing office logistics to big
      things like benefits, legal, and community.
    </Paragraph>
    <ul>
      <li>Access World-Class Talent</li>
      <li>Build Teams That Are Skilled And Engaged</li>
      <li>Don’t Sweat The Big Or Small Stuff</li>
    </ul>
  </React.Fragment>
);

const contentFour = (
  <React.Fragment>
    <Paragraph>
      If you are looking to recruit someone who can transform your organization,
      we will give you access to more talent, more rapidly, in more places than
      any other specialist recruitment company.
    </Paragraph>
    <Paragraph>
      If you are looking for permanent, contract or temporary assignments our
      consultants will provide you with expert insight into the specific
      industry and our online database will connect you with the best vacancies
      with Canada’s leading employers.
    </Paragraph>
    <Paragraph>
      As a leader in providing IT skills and resources, CTech uses our market
      knowledge and expertise to match organizations with the specialists they
      need. Our IT Contracting division connects exceptional contractors with
      the right employer, so our clients have the caliber of experienced
      professionals to work on their diverse projects.
    </Paragraph>
  </React.Fragment>
);

export default function Recruitment() {
  return (
    <React.Fragment>
      <Head title="Recruitment" />
      <Layout>
        <TopBannerCourse
          courseTitle="Recruitment"
          subtitle="The step from Learning to Earning"
          text="We help Companies to find great Candidates and Candidates to get Amazing job"
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="What We Offer"
            text={contentOne}
            image="https://traininghub.io/wp-content/uploads/2019/07/Recruitment_Ctech.jpg"
            alt="Centurion Tech"
            buttonOneLink="https://www.ctech.xyz/"
            buttonOneText="Learn more"
            buttonOneExternal
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Job Seeker"
            text={contentTwo}
            image="http://traininghub.io/wp-content/uploads/2019/07/interview-tips.jpg"
            alt="Job Seeker"
            imageLeft
          />
        </Section>
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="Loan a resource with premises model"
            text={contentThree}
            image="https://traininghub.io/wp-content/uploads/2019/07/Recruitment_Ctech.jpg"
            alt="Recruitment"
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Employers"
            text={contentFour}
            image="http://traininghub.io/wp-content/uploads/2019/07/Employers.jpg"
            alt="Employers"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <Paragraph>Icon List</Paragraph>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
