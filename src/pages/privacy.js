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

const content = [
  {
    title: "Website Visitors",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          TrainingHub’s website collects non-personally-identifying information
          that web browsers and servers typically make available, such as the
          browser type, language preference, referring site, and the date and
          time of each visitor request.
        </Paragraph>
        <Paragraph>
          Our purpose in collecting this information is to better understand how
          visitors use our website. From time to time, we may release this
          information in the aggregate, e.g., by publishing a report on trends
          in the usage of our website.
        </Paragraph>
      </React.Fragment>
    ),
  },
  {
    title: "Voluntary Data Collection",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          Prospective applicants to TrainingHub’s various courses and programs
          are required to submit personally-identifying information as part of
          their application.
        </Paragraph>
        <Paragraph>
          We only collect information that is necessary or appropriate. Visitors
          can always refuse to supply this information, but it may prevent you
          from applying to our courses or careers.
        </Paragraph>
      </React.Fragment>
    ),
  },
  {
    title: "Protection of Certain Personally-Identifying Information",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          TrainingHub discloses personally-identifying information only to those
          of its employees, contractors, and affiliated organizations that (i)
          need to know that information in order to process it on TainingHub’s
          behalf, or to provide services, and (ii) that have agreed not to
          disclose it to others. Some of those employees, contractors and
          affiliated organizations may be located outside of your home country;
          by using TrainingHub’s website or its service, you consent to the
          transfer of such information to them.
        </Paragraph>
        <Paragraph>
          TrainingHub will not rent or sell your personal information to anyone.
          If you have supplied your email address to TrainingHub, you consent to
          receive occasional information about new courses, to solicit your
          feedback on how we’re doing, or to keep you up to date with what’s
          going on with TrainingHub and our programs. You may opt-out of these
          any time.
        </Paragraph>
        <Paragraph>
          If you send us a request we reserve the right to publish it in order
          to help us clarify or respond to your request or to help us support
          other users. TrainingHub takes all measures reasonably necessary to
          protect against the unauthorized access, use, alteration, or
          destruction of potentially personally-identifying and
          personally-identifying information.
        </Paragraph>
      </React.Fragment>
    ),
  },
  {
    title: "Copyright/Intellectual Property",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          All copyrights, patents, designs and other intellectual property
          rights in or relating to any course materials provided or made
          available in connection with our courses remain the sole property of
          TrainingHub. No part of any course materials may be reproduced, stored
          in a retrieval system, or transmitted in any form or by any means,
          electronic, mechanical, photocopying, recording or otherwise, or
          translated into any language, without the prior written permission of
          TrainingHub.
        </Paragraph>
        <Paragraph>
          Violation of this policy will result in losing access to TrainingHub
          course materials.
        </Paragraph>
      </React.Fragment>
    ),
  },
  {
    title: "Cookies",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          TrainingHub may use cookies to help TrainingHub identify and track
          visitors, their usage of TrainingHub’s website, and their website
          access preferences. TrainingHub visitors who do not wish to have
          cookies placed on their computers should set their browsers to refuse
          cookies before using TrainingHub’s websites, with the drawback that
          certain features of TrainingHub’s websites may not function properly
          without the aid of cookies.
        </Paragraph>
      </React.Fragment>
    ),
  },
  {
    title: "Privacy Policy Changes",
    paragraph: (
      <React.Fragment>
        <Paragraph>
          Although most changes are likely to be minor, TrainingHub may change
          its Privacy Policy from time to time. We encourage visitors to
          frequently check this page for any changes. Your continued use of this
          site after any change in this Privacy Policy will constitute your
          acceptance of such change.
        </Paragraph>
      </React.Fragment>
    ),
  },
];

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
            <Col md={12}>
              {content.map((cont) => {
                return (
                  <>
                    <BaseTitle title={cont.title} size="H3" />
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
