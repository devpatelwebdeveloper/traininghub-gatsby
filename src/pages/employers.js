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

const contentOne = (
  <>
    <Paragraph>
      TrainingHub.io offers a range of services to employers. We facilitate in
      hiring top talent and support retention of a diverse workforce for Fortune
      500 and Mid-sized clients.
    </Paragraph>
    <Paragraph>
      TrainingHub.io is a pioneer in connecting employers with highly skilled
      professionals. We expose the incredible and diverse talent available to
      employers in today’s market. We fulfill the employer’s needs by
      understanding their business needs. We provide online services for
      pre-arrival clients who are already approved to work in Canada understood
      and delivered. Our values at the heart of everything we do.
    </Paragraph>
  </>
);
const contentTwo = (
  <>
    <Paragraph>
      IT recruiting can be a puzzling process for many hiring managers. Tech
      talents are high in demand, so companies need to provide a clear direction
      and incentives to hire the top talent. So, we will give you access to that
      level of expertise talents rapidly than any other recruiting
      organizations.
    </Paragraph>
    <Paragraph>
      If you are looking for a contract or temporary, permanent employees, our
      experts will guide you to industry-specific talents. It is possible to
      guide your applications, platforms with our online database to fulfill
      your business need. We deploy with the right tactics and find who can help
      you to gear up with rapid changes in modern technology.
    </Paragraph>
    <Paragraph>
      TrainingHub has partnered with the top innovative organizations, industry
      leaders to define the digital skills training for the employees & this
      network of partnerships connects with all the market trends and expertise
      to provide companies with professionals they need. Our employment
      resources connect to exceptional contractors with the right employer.
    </Paragraph>
  </>
);
const contentThree = (
  <React.Fragment>
    <Paragraph>
      Planning is the key to success. We provide skilled professionals so you
      can focus on reaching your goals. We just don’t recruit. We also take care
      of everything that the remote team needs. We manage services like office
      logistics and benefits, legal, and community in partnership with Centurion
      Technology Solutions inc.
    </Paragraph>
    <ul>
      <li>Access highly qualified professionals.</li>
      <li>Engage teams with qualified professionals.</li>
      <li>Leave the work to us.</li>
    </ul>
  </React.Fragment>
);

const contentFour = (
  <React.Fragment>
    <Paragraph>
      TrainingHub.io has partnered with Mintex Technologies, which helps clients
      to connect with highly qualified professionals for contract and permanent
      positions in the IT sector in North America. Our clients have access to
      the cutting edge technologies to talent the highly qualified candidates to
      access IT jobs. We provide a diverse range of recruitment solutions for
      contract and permanent roles for our Canadian and US clients. We assure
      our client’s requirements and deliver them on time. We value the concerns
      of the clients and provide the best solutions.
    </Paragraph>
  </React.Fragment>
);

const contentFive = (
  <React.Fragment>
    <Paragraph>
      TrainingHub provides the top professionals with training. Once the
      applicants accept, He/She will undergo a series of Mock - Interviews to
      make sure they are perfect and are into the right digital role.
    </Paragraph>
    <Paragraph>
      <strong>Trained By Experts</strong> - We teach and mentor our applicants
      in order to develop the skills based on industry requirements.
    </Paragraph>
    <Paragraph>
      <strong>Real Project Experience</strong> - We use an agile-based work
      environment for our applicants to make sure they get used to it and also
      the applicants complete the projects with real business scenarios.
    </Paragraph>
    <Paragraph>
      <strong>Cutting-edge skills</strong> - Our course curriculum is up to
      date, as they are monitored and altered by SME(Subject Matter Experts) who
      guarantees the applicants in gaining experience with the latest
      technologies and tools.
    </Paragraph>
    <Paragraph>
      <strong>Experience and Maturity</strong> - We have got client-centric
      culture, with all of the years in providing professional services and
      staffing. We assure you that job is done!
    </Paragraph>
  </React.Fragment>
);

export default function Recruitment() {
  return (
    <React.Fragment>
      <Head title="Recruitment- Employer" />
      <Layout>
        <TopBannerCourse
          courseTitle="Employer"
          subtitle="We’re in the business of connecting great minds!"
          text="TrainingHub.io offers customized programs that help you to find the perfect person for your requirement. Follow our step-by-step guide to help you in finding the right person that always wanted to work with you. We as a single consultant to a team will provide you the perfect match for your staffing needs."
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            title="Employer Services"
            text={contentOne}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/WhatWeOffer.png"
            alt="Employer Services"
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="Employers"
            text={contentTwo}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/Employer.png"
            alt="Employers"
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

        {/* <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <IconList />
        </Section> */}
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            title="What We Offer"
            text={contentFour}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/USPlacement.jpg"
            alt="What we Offer"
            imageLeft
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <ContentGenericAligned
            title="Why Hire Our Talents?"
            text={contentFive}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/recruitment/JobSeeker.png"
            alt="Why Hire Our Talents?"
          />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
