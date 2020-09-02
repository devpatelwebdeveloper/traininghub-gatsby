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
import Accordion from "../components/blocks/Accordion/Accordion";

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

const About = {
  title: "About Us",
  imageLeft: true,
  cont: (
    <Paragraph>
      Welcome to TrainingHub.io, we offer training for leading Cutting Edge
      technologies such as Data Science, Big Data, Hadoop, spark Javascript,
      React JS, Angular, Node.js, MS SQL Server, Oracle, Python, Java Suite,
      etc.  We are dedicated to giving Online & Class Room Trainings. Our
      training will lead you to fast track in mastering with a focus on customer
      service, dependability, and uniqueness. Our trainees have an adequate
      chance to deploy the learned technologies with real-time scenarios and
      gain practical exposure to the technology environment. Our trainers are
      professionals with a minimum of 10+ years of real-time experience in the
      relative industry. Interested candidates can join TrainingHub.io and
      expect to master their skills to succeed as an IT professional.
      TrainingHub is also a platform for real-time industry
      experts/professionals who are interested in providing training.
    </Paragraph>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/Aboutus/Aboutus.png",
  buttonOneLink: "/contact-us",
  buttonOneText: "Contact us",
  buttonOneExternal: false,
  buttonTwoLink: "/courses",
  buttonTwoText: "Explore Courses",
};
const Objective = {
  title: "Objective",
  imageLeft: false,
  cont: (
    <Paragraph>
      is to Learn Something New…, And our methods of training and course
      curriculum are up to date to reaches the industry standards. With, the
      rapid change in technology and business demands in the learning approach
      increases the way of training for both organizations and individuals. We
      have set up a learning ecosystem to reflect that need. We offer flexible,
      cost-effective plans for individuals or, groups of people, and
      corporates. In the end, our objective is that the candidate/trainee should
      gain confidence in terms of coding on the very next day after finishing
      the training.
    </Paragraph>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/Aboutus/HandcraftedCourses.png",
};
const Trainer = {
  title: "Trainer",
  imageLeft: true,
  cont: (
    <Paragraph>
      trains the end-users on how to operate, maintain and configure new
      technology. Our trainers are MCSE certified, employed, technical experts,
      professionals working as real-time experts in fortune 500 companies. Our
      trainers stay up to date with evolving technologies. Our trainers will
      analyze all training requirements and developed appropriate strategies to
      monitor and analyze the trainee’s performance. Trainers also provide
      training related materials to the trainees.
    </Paragraph>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/Aboutus/Trainer.png",
};
const Support = {
  title: "Support",
  imageLeft: false,
  cont: (
    <React.Fragment>
      <Paragraph>
        our trainees with years of experience by the trainers in the real-time
        environment, we have initiated us as the pioneer in this industry.
      </Paragraph>
      <ul>
        <li>
          If you are already a working professional, Upgrade your technology
          with us to feel confident and make more money.
        </li>
        <li>
          If you are a recent graduate we, can help you in getting some
          project/industry-based exposure along with the training.
        </li>
        <li>
          If you want to make a career in IT, We can help you to define your
          career path and you can jump-start in IT.
        </li>
        <li>
          Based on your time-zone and convenience, we can help you with
          technology training. We have industry experts around the globe (who
          can serve you as per your requirements).
        </li>
      </ul>
    </React.Fragment>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/Aboutus/Support.png",
};
const Founder = {
  title: "Profile of Founder",
  imageLeft: true,
  cont: (
    <Paragraph>
      Founder of the TrainingHub is an entrepreneur in different sectors,
      Kalpesh Patel found it difficult to hire talented, knowledgeable, and
      READY TO START candidates. And this Sparked the Idea of TrainingHub.io—a
      startup for job-oriented training to prepare IT Professionals and
      recruitment. As an IT professional with over 20 years of experience,
      Kalpesh Patel holds a Bachelor of Engineering with a Masters in Computer
      Science. Having worked in different sectors like Banking, Insurance,
      Government, Product based companies, Transportation, Charity Fund Raising
      Organizations, Onsite-offshore Model, and many more. In the course of his
      profession, he wore all different hats from Full Stack Developer to Team
      Lead to Product Owner to Onsite – Offshore Team Manager to Project Leader
      to People Manager to Director. He has been working in so many different
      technologies primarily Microsoft Technologies, Data Warehousing, Business
      Intelligence, GIS-Based Tools. In his free time, he is a Community Leader
      and volunteers for the betterment of youths for a decade.
    </Paragraph>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/Aboutus/KalpeshPatel.jpg",
};
const Faq = [
  {
    title: "Who are trainers?",
    paragraph:
      "TrainingHub has a methodology to hire trainers and we make sure that trainers are experts in technology and have professional qualities.",
  },
  {
    title: "What is the qualification of Trainers?",
    paragraph:
      "The trainers are masters in their technologies and are certified consultants, who have significant experience in working with the technology and are real-time industry experts, who are working in fortune 500 companies.",
  },
  {
    title: "How do I execute a practical?",
    paragraph:
      "The method varies based on the technology. We make your work with real-time scenarios and scenario-based assignments with the periodical quiz to check your knowledge.",
  },
  {
    title: "What if I have queries after class completion?",
    paragraph:
      "For every class, there is a dedicated Helpline / Slack / Email / Number support, which you can use to get help.",
  },
  {
    title: "Is this a Live-Training?",
    paragraph:
      "If you have subscribed for Online Training than we provide sessions using online tools, or if you subscribe for In-class training we support and facilitate help through online tools based on the requirements.",
  },
  {
    title: "What is the difference between Live and Class Room Training?",
    paragraph:
      "Classroom Training allows live interaction with the instructor whereas in Live training the learners had to depend on electronic media and lack of proper communication.",
  },
  {
    title: "Is the course material accessible after course completion?",
    paragraph:
      "We provide enough training material as you go with the training. Our training materials are unique and help to understand industry trends and real-time scenarios and topics along with other topics.",
  },
  {
    title: "Is there a discount/offer that I can avail of?",
    paragraph:
      "Discounts differ from time to time, If you are a group/company please dial:+1.647.722.7220 (Whatsapp too), or Email to info@traininghub.io  based on your requirement.",
  },
  {
    title: "Will I get a refund If I cancel my enrollment?",
    paragraph:
      "We have a small batch size 6:1, as we strongly believe small batch sizes are required to get individual attention. So, we do not refund fees and cancel training for individuals. If you have a genuine scenario, we may help you to join another upcoming batch. If for any reason we cancel the training you will receive a 100% refund in 10 working days.",
  },
  {
    title: "Does TrainingHub.io provide a certificate after course completion?",
    paragraph:
      "TrainingHub provides the course completion certificate after course completion.",
  },
  {
    title: "Do you support the certification Path?",
    paragraph:
      "Please enquire about this with our desk number: +1.647.722.7220, keep visiting this section for more information shortly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head title="About us" />
      <Layout>
        <TopBannerCourse
          courseTitle="About us"
          subtitle="Founded by Frustrated Trainer"
          text="TrainingHub is not only a e-learning platform but also provides classroom, online & corporate training services globally with certified & real-time experienced trainers in the industry. We provide tailored course content to your organizations, delivered with cutting edge technologies and support. We fulfill your career aspirations like job-assistance, job-support, and customizable courses. Get unlimited access to the community, tech talks, and events organized by TrainingHub. We make learning easy, value & affordable."
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            textJustified
            imageLeft={About.imageLeft}
            title={About.title}
            text={About.cont}
            image={About.image}
            alt={`${About.title}_TrainingHub`}
            buttonOneLink={About.buttonOneLink}
            buttonOneText={About.buttonOneText}
            buttonOneExternal={About.buttonOneExternal}
            buttonTwoLink={About.buttonTwoLink}
            buttonTwoText={About.buttonTwoText}
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            textJustified
            title={Objective.title}
            text={Objective.cont}
            image={Objective.image}
            alt={Objective.title}
          />
        </Section>
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <ContentGenericAligned
            textJustified
            imageLeft={Trainer.imageLeft}
            title={Trainer.title}
            text={Trainer.cont}
            image={Trainer.image}
            alt={Trainer.title}
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <ContentGenericAligned
            textJustified
            imageLeft={Support.imageLeft}
            title={Support.title}
            text={Support.cont}
            image={Support.image}
            alt={Support.title}
          />
        </Section>
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            textJustified
            imageLeft={Founder.imageLeft}
            title={Founder.title}
            text={Founder.cont}
            image={Founder.image}
            alt={Founder.title}
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="25px"
          background={Styles.Colors.BaseLightBlue}>
          <BaseTitle title="By the numbers" size="H3" center underline />
          <StatisticsCounter stats={Statistics} />
        </Section>
        <Section>
          <Row>
            <Col>
              <BaseTitle title="Our Values" size="H2" center underline />
              <NumberedTimeLine lists={Values} title="Our Values" />
            </Col>
          </Row>
        </Section>

        <Accordion title="FAQs" accordions={Faq} />
      </Layout>
    </>
  );
}
