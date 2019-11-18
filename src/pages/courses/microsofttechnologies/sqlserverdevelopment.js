import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Head from "../../../components/organisms/Head/Head";
import CourseOverview from "../../../components/molecules/CourseIntro/CourseIntro";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../../../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";

export default function CourseSingle() {
  return (
    <>
      <Head title="Sql Server Development - Microsot" />

      <Layout>
        <TopBannerCourse
          courseTitle="Microsoft SQl Developer"
          subtitle="Microsoft"
          text="Become Microsoft Sql Developer"
          courseImage="https://unsplash.it/1500?random"
        />
        <CourseOverview
          text="Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.
        "
        />
      </Layout>
    </>
  );
}
