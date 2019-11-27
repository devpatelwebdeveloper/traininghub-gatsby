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
import { SqlServerDeveloper } from "../../../contents/Accordions/Accordions";

export default function CourseSingle() {
  return (
    <>
      <Head title="Sql Server Development - Microsoft" />
      <Layout>
        <TopBannerCourse
          courseTitle="Microsoft SQL Developer"
          subtitle="Microsoft"
          text="Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum."
          courseImage="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg"
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="Microsoft SQL Server Developer"
            text="The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions."
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png"
            alt="Sql Server Developer"
            ImageLeft
            buttonOneLink="/contact"
            buttonOneText="Contact us"
            buttonOneExternal
          />
        </Section>
        <StudentJourney
          heading="Student Journey"
          paragraphContent="Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explaination for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain. We provide 100% job search assistance."
          imageOne="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png"
          imageOneAlt="Database management system"
          imageTwo="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg"
          imageTwoAlt="SQL Query"
        />
        <Accordion accordions={SqlServerDeveloper} title="Course Content" />
        <RelatedCourses title="Microsoft" />
      </Layout>
    </>
  );
}
