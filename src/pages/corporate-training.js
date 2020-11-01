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
import Tiles from "../components/blocks/Tiles/Tiles";
import IconList from "../components/blocks/IconList/IconList";
import { corporateIcon } from "../contents/icons/icons";

import Background from "../contents/icons/recruitment.svg";
import StatisticsCounter from "../components/blocks/Statistics/Statistics";
import { Statistics, Values, PageContent } from "../contents/AboutContent";

const contentOne = (
  <Paragraph>
    Ready to create efficiency in your workforce by improving computer literacy?
    With over 12 years of training experience, TrainingHub can help you do just
    that. TrainingHub offers comprehensive training solutions to corporate
    clients. TrainingHub takes pride in its ability to offer a wide range of
    tailored programs on demand for personnel and corporations. Programs are
    often customized to meet specific client IT needs and vary in degree from
    high-level technical training to desktop applications. Some programs we
    offer instruction for include but are not limited to, MSBI, Microsoft SQL
    Developer, Python, Quality Engineering, and Web Technologies. Web-based and
    onsite training are also available. TrainingHub has served hundreds of
    organization's learning needs to date with a proven track record of success.
    Our world is shifting into an era where technology changes at a constant
    rate and we need to change with it. Get started today.
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
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/ExpertTraininghub.jpg",
    alt: "Effective and Easy Learning",
    title: "Effective and Easy Learning",
    text:
      "We organize corporate training with Classroom/online/virtual sessions lead by industry expert trainers to deliver the best results with lots of discussions and Q&A sessions to give you the best training.",
  },
  {
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/ExpertTraininghub.jpg",
    alt: "Customized Corporate Programs",
    title: "Customized Corporate Programs",
    text:
      "We believe that when you search for corporate training you already have what type of skills or technology training you need that’s why we follow your guidelines for course content for training.",
  },
  {
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/ExpertTraininghub.jpg",
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
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/CorporateTraining_TrainingHub.jpg",
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
  {
    title: "Blended Service, Support, & Training Packages",
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
          text="TrainingHub is not only a e-learning platform but also provides classroom, online & corporate training services globally with certified & real-time experienced trainers in the industry. We provide tailored course content to your organizations, delivered with cutting edge technologies and support. We fulfill your career aspirations like job-assistance, job-support, and customizable courses. Get unlimited access to the community, tech talks, and events organized by TrainingHub. We make learning easy, value & affordable."
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
        {/* <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            textJustified
            imageLeft={Founder.imageLeft}
            title={Founder.title}
            text={Founder.cont}
            image={Founder.image}
            alt={Founder.title}
          />
        </Section> */}
        {/* <Section
          marginTop="25px"
          marginBottom="25px"
          padding="25px"
          background={Styles.Colors.BaseLightBlue}>
          <BaseTitle title="By the numbers" size="H3" center underline />
          <StatisticsCounter stats={Statistics} />
        </Section> */}
        {/* <Section>
          <Row>
            <Col>
              <BaseTitle title="Our Values" size="H2" center underline />
              <NumberedTimeLine lists={Values} title="Our Values" />
            </Col>
          </Row>
        </Section> */}
      </Layout>
    </>
  );
}
