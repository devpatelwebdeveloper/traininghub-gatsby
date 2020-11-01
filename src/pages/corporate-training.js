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
import Tiles from "../components/blocks/Tiles/Tiles";
import IconList from "../components/blocks/IconList/IconList";
import { corporateIcon } from "../contents/icons/icons";
import Background from "../contents/icons/corporate.svg";

//Corporate
const corporateIntro = {
  title: "Corporate Training",
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/CorporateTraining_TrainingHub.jpg",
  content: (
    <Paragraph>
      Ready to create efficiency in your workforce by improving computer
      literacy? With over 12 years of training experience, TrainingHub can help
      you do just that. TrainingHub offers comprehensive training solutions to
      corporate clients. TrainingHub takes pride in its ability to offer a wide
      range of tailored programs on demand for personnel and corporations.
      Programs are often customized to meet specific client IT needs and vary in
      degree from high-level technical training to desktop applications. Some
      programs we offer instruction for include but are not limited to, MSBI,
      Microsoft SQL Developer, Python, Quality Engineering, and Web
      Technologies. Web-based and onsite training are also available.
      TrainingHub has served hundreds of organization's learning needs to date
      with a proven track record of success. Our world is shifting into an era
      where technology changes at a constant rate and we need to change with it.
      Get started today.
    </Paragraph>
  ),
};
const corporateCards = [
  {
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/corporate/Effective_TrainingHub.jpeg",
    alt: "Effective and Easy Learning",
    title: "Effective and Easy Learning",
    text:
      "We organize corporate training with Classroom/online/virtual sessions lead by industry expert trainers to deliver the best results with lots of discussions and Q&A sessions to give you the best training.",
  },
  {
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/corporate/Customized_TrainingHub.jpeg",
    alt: "Customized Corporate Programs",
    title: "Customized Corporate Programs",
    text:
      "We believe that when you search for corporate training you already have what type of skills or technology training you need that’s why we follow your guidelines for course content for training.",
  },
  {
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/corporate/UpdatedCourse_TrainingHub.jpeg",
    alt: "Updated Course Content",
    title: "Updated Course Content",
    text:
      "To make through this competitive market your employees always need to be ready with the latest skills, technology, scenarios, and that’s why we are associated with multiple experts and SMEs to perform regular updates on training content.",
  },
];
const whenWhere = {
  title: "IT Training When, Where and How You Want it",
  content: (
    <Paragraph>
      At TrainingHub our goal is to enhance the value of employees and all
      assets of an organization at a reduced cost, enabling technology
      professionals to acquire the necessary skills to boost productivity and
      performance. We offer courses tailored to your organization’s needs when
      you need them. TrainingHub offers courses in different locations
      throughout the United States and Canada or we can bring the classroom to
      you through on-site or remote instruction. TrainingHub's certified IT
      professionals are training your employees with the real-world experience
      gained from years of professional consulting. Our instructors take
      real-life skills and first-hand experience in the classroom and your
      business. If you cannot find a course you are looking for please contact
      us for availability.
    </Paragraph>
  ),
  image:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/corporate/WhenWhere_TrainingHub.jpeg",
};
const corporateOverview = [
  {
    title: "Desktop Training",
  },
  {
    title: "Interactive E-Learning",
  },
  {
    title: "Guaranteed to Run Classes",
  },
  {
    title: "Knowledge-Based Training",
  },
  {
    title: "On-Site Training",
  },
  {
    title: "Live Training",
  },
  {
    title: "Certification Testing",
  },
  {
    title: "Customized Private Training",
  },
  {
    title: "Post Training Support",
  },
  { title: "Industry based business case" },
  {
    title: "Blended Service & Training Packages",
  },
  {
    // title: "Remote Training from Anywhere with a Wireless Connection",
    title: "Remote Training from anywhere",
  },
];
const benefits = [
  {
    title: "We specialize in enhancing Workforce development",
    paragraph: (
      <>
        <Paragraph>
          TrainingHub Learning Solution's workforce development team gives
          corporate customers with the adaptability to select the best trainer
          and training programs.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Discover talent across the world",
    paragraph: (
      <>
        <Paragraph>
          Industry professionals have extensive professional experience and the
          corporate customer gets the opportunity to pick the best trainer who
          fulfills their requirements.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Interact with the right trainers",
    paragraph: (
      <>
        <Paragraph>
          When the right trainers are recognized, They Interacting directly with
          the customers about the training plans like the schedule and
          curriculum regarding the training.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Give the nod for trainers",
    paragraph: (
      <>
        <Paragraph>
          When appropriate trainers are distinguished, the corporate can arrange
          the training, choose the appropriate dates, and confirming training
          dates with customers.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Training delivered",
    paragraph: (
      <>
        <Paragraph>
          When appropriate trainers are recognized, the corporate can confirm
          the dates and arrange the training program on decided dates.
        </Paragraph>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Head title="Corporate Training" />
      <Layout>
        <TopBannerCourse
          courseTitle="Corporate Training"
          subtitle="Empower your team with hand-on skills to deliver amazing products"
          text="Empower your team into company's own digital transformation and skills gap. Tailored training program for your company based on industry cases."
          courseImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            imageLeft
            title={corporateIntro.title}
            text={corporateIntro.content}
            image={corporateIntro.image}
            alt={`${corporateIntro.title}_TrainingHub`}
          />
        </Section>
        <Tiles title="Benefits From TrainingHub.io" tiles={corporateCards} />
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <ContentGenericAligned
            title={whenWhere.title}
            text={whenWhere.content}
            image={whenWhere.image}
            alt={whenWhere.title}
          />
        </Section>
        <Section
          marginTop="25px"
          marginBottom="25px"
          padding="50px"
          background={Styles.Colors.BaseLightBlue}>
          <BaseTitle
            title="Corporate Service Overview"
            size="H2"
            center
            underline
          />
          <IconList lists={corporateOverview} icon={corporateIcon} />
        </Section>
        <Section marginTop="25px" marginBottom="25px" padding="50px">
          <Row>
            <Col md={12}>
              <BaseTitle title="Actions and Expertise:" size="H3" />
              {benefits.map((cont) => {
                return (
                  <>
                    <BaseTitle title={cont.title} size="H5" />
                    <Paragraph>{cont.paragraph}</Paragraph>
                  </>
                );
              })}
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
