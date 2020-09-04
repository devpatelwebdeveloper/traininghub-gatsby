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
import { RecruitmentList } from "../contents/RecruitmentBullets";

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

const contentFive = (
  <React.Fragment>
    <Paragraph>
      Are you looking for placement in the USA ?
      <a href="https://www.ctech.xyz/" target="_blank" rel="noopener">
        Centurion Tech
      </a>{" "}
      is partnered with{" "}
      <a href="http://mintextech.com/" target="_blank" rel="noopener">
        MintexTech
      </a>
      . With{" "}
      <a href="http://mintextech.com/" target="_blank" rel="noopener">
        MintexTech
      </a>{" "}
      we will be able to help you out to get placement in united states of
      America provided you have valid visa status.
    </Paragraph>
    <Paragraph>
      <a href="http://mintextech.com/" target="_blank" rel="noopener">
        MintexTech
      </a>{" "}
      is 12 years old company in USA and serving across the country and so far
      served more than 2500+ people to be placed in different industry either on
      permanent or contract basis.
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
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/WhatWeOffer.png"
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
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/JobSeeker.png"
            alt="Job Seeker"
            imageLeft
          />
        </Section>
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="Loan a resource with premises model"
            text={contentThree}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/LoanPremises.png"
            alt="Loan a resource"
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
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/Employer.png"
            alt="Employers"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <IconList lists={RecruitmentList} />
        </Section>
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="Placement in USA"
            text={contentFive}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/USPlacement.jpg"
            alt="Placement in USA"
          />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
