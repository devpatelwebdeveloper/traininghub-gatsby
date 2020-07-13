import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Head from "../../../components/organisms/Head/Head";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import Section from "../../../components/organisms/Section/Section";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../../components/blocks/RelatedCourses/RelatedCourses";

export default function CourseSingle() {
  return (
    <>
      <Head title="Microsoft Technologies" />
      <Layout>
        <TopBannerCourse
          courseTitle="Microsoft Technologies"
          subtitle="The most stable tech since decades"
          text="Get hands-on Microsoft SQL Server training to master the most widely used database management system and open the door to new career possibilities."
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="Microsoft Sql Server Development"
            text="Microsoft Technologies are most widely used database management system in big enterprise. We have catered our courses in a way that it serves the knowledge to students of all level of expertise from no prior knowledge to intermediate to Experts. We cover some most important duties of a SQL Developer like - build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions."
            image="https://i2.wp.com/www.stirista.com/wp-content/uploads/database-marketing-strategies.png?zoom=2.625&resize=364%2C275&ssl=1"
            alt="Microsoft Technologies"
          />
        </Section>
        <StudentJourney
          heading="Why Microsoft Technologies"
          paragraphContent="Microsoft's Database Management system is one of the most stable and widely used in big banking and enterprises. The average salary of Microsoft Sql Server Developer based on research is $85,000. The assignments during the course are actual problems that as a Developer student can face in their actual job place. "
        />
        <RelatedCourses
          title="Microsoft"
          topHeader="Current Available Courses"
        />
      </Layout>
    </>
  );
}
