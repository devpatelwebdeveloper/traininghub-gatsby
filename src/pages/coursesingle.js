import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../components/blocks/StudentJourney/StudentJourney";

export default function CourseSingle() {
  return (
    <>
      <Head title="Courses" />
      <Layout>
        <TopBannerCourse
          CourseTitle="Microsoft SQl Developer"
          Subtitle="Microsoft"
          Text={`Become Microsoft Sql Developer`}
          CourseImage="https://unsplash.it/1500?random"
        />
        <ContentGenericAligned
          Title="Title"
          Text="Paragraph Paragraph"
          Image="https://unsplash.it/1500?random"
          Alt="Title"
          ImageLeft
          ButtonOneLink="https://www.google.com"
          ButtonOneText="Button one text"
          ButtonOneExternal
        />
        <StudentJourney
          heading="Heading Text"
          paragraphContent="Paragraph Text"
          imageOne="https://unsplash.it/1500?random"
          imageOneAlt="Image One Text"
          imageTwo="https://unsplash.it/1500?random"
          imageTwoAlt="Image Two Text"
        />
      </Layout>
    </>
  );
}
