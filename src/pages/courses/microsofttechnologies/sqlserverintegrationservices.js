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
import { SQLServerIntegrationServices } from "../../../contents/Accordions/Accordions";

export default function CourseSingle() {
  return (
    <>
      <Head title="Sql Server Development - Microsoft" />
      <Layout>
        <TopBannerCourse
          courseTitle="Microsoft SQL Server Integration Services"
          subtitle="Microsoft"
          text="In this SSIS training course, you’ll gain the skills to migrate and transform data with SQL Server Integration Services. You learn to solve data management problems by creating dynamic packages for migrating, processing, and reporting on data for business intelligence. Specifically, you learn to deploy packages to an SSIS server, assemble tasks to perform complex data migrations and enhance package functionality with scripting."
          courseImage="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg"
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="SQL Server Integration Services"
            text="In this SSIS training course, you’ll gain the skills to migrate and transform data with SQL Server Integration Services. You learn to solve data management problems by creating dynamic packages for migrating, processing, and reporting on data for business intelligence. Specifically, you learn to deploy packages to an SSIS server, assemble tasks to perform complex data migrations and enhance package functionality with scripting."
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png"
            alt="SQL Server Integration Services"
            ImageLeft
            buttonOneLink="/contact"
            buttonOneText="Contact us"
            buttonOneExternal
          />
        </Section>
        <StudentJourney
          heading="Student Journey"
          paragraphContent="The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explaination for better understanding. We provide 100% job search assistance. Upon completion of the course, you will have ability to  Solve data management problems by migrating and processing data, Perform nonstandard imports and exports using the Script component, Assemble tasks to perform complex data migrations
          Extract, Transform, and Load (ETL) data, Incrementally migrate data from SQL Server data sources using Change Data Capture (CDC), Deploy packages to an SSIS catalog"
          imageOne="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png"
          imageOneAlt="Database management system"
          imageTwo="https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg"
          imageTwoAlt="SQL Query"
        />
        <Accordion
          accordions={SQLServerIntegrationServices}
          title="Course Content"
        />
        <RelatedCourses title="Microsoft" />
      </Layout>
    </>
  );
}
