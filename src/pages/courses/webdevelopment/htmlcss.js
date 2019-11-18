import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Head from "../../../components/organisms/Head/Head";
// import CourseO from "../../../components/molecules/CourseIntro/CourseIntro";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import CourseOverview from "../../../components/blocks/CourseOverview/CourseOverview";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../../../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";

export default function CourseSingle() {
  return (
    <>
      <Head title="Sql Server Development - Microsot" />

      <Layout>
        <TopBannerCourse
          courseTitle="HTML CSS"
          subtitle="Web Development"
          text="The starter course to get hands dirty in coding"
          courseImage="https://unsplash.it/1500?random"
        />
        <CourseOverview introText="New to coding? Our entry-level Web Development course is perfect for you. You’ll gain a foundational knowledge of HTML & CSS and build websites from scratch in our most popular course." />
        <StudentJourney
          heading="This is the student Journey"
          paragraphContent="Your student journey begins with a free admissions challenge, which will teach fundamental web development concepts. As you move through the program, our team will continue to work with you, providing career guidance and professional development, every step of the way."></StudentJourney>
      </Layout>
    </>
  );
}
