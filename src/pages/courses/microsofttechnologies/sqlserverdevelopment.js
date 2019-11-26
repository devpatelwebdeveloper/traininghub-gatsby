import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Section from "../../../components/organisms/Section/Section";
import Head from "../../../components/organisms/Head/Head";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../../../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../../components/blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../../components/blocks/Accordion/Accordion";
import { SqlServerDeveloper } from "../../../contents/Accordions/SqlServerDeveloperAcc";

export default function CourseSingle() {
  return (
    <>
      <Head title="Sql Server Development - Microsoft" />
      <Layout>
        <TopBannerCourse
          courseTitle="Microsoft SQL Developer"
          subtitle="Microsoft"
          text="Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum."
          courseImage="https://unsplash.it/1500?random"
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="Microsoft SQL Server Developer"
            text="The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions."
            image="https://unsplash.it/1500?random"
            alt="Title"
            ImageLeft
            buttonOneLink="/contact"
            buttonOneText="Contact us"
            buttonOneExternal
          />
        </Section>
        <StudentJourney
          heading="Heading Text"
          paragraphContent="Paragraph Text"
          imageOne="https://unsplash.it/1500?random"
          imageOneAlt="Image One Text"
          imageTwo="https://unsplash.it/1500?random"
          imageTwoAlt="Image Two Text"
        />
        <Accordion accordions={SqlServerDeveloper} title="Course Content" />
        <RelatedCourses title="Microsoft" />
      </Layout>
    </>
  );
}
