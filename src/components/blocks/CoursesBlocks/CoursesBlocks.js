import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { RichTextOptions } from "../../../utilities/richtextFunction";
import Section from "../../organisms/Section/Section";
import SingleCourseBlock from "../../molecules/SingleCourseBlock/SingleCourseBlock";
// import { Courses } from "../../../contents/Courses";
import { CourseQuery } from "../../../contents/ContentfulContents/ContentfulCourses";

export default function TilesBlock() {
  const ContentfulCourses = [];
  const data = CourseQuery();
  data.allContentfulCourseContent.edges.forEach((singleCourse) => {
    ContentfulCourses.push(singleCourse.node);
  });
  return (
    <Section>
      {/* {Courses.map((course) => {
        return (
          <SingleCourseBlock
            courseImg={course.courseImage}
            courseTitle={course.title}
            courseDescription={course.description}
            courseTech={course.tag}
            courseStartDate={course.startDate}
            exploreCourseButtonLink={course.href}
            enrolNowButtonLink="/contact-us"
          />
        );
      })} */}
      {ContentfulCourses.map((course) => {
        return (
          <SingleCourseBlock
            courseImg={course.topBannerImage.file.url}
            courseTitle={course.title}
            courseDescription={renderRichText(course.courseIntroduction, RichTextOptions)}
           
            courseTech={course.category.courseName}
            courseStartDate={
              course.startDate != null ? course.startDate : "Coming Soon"
            }
            exploreCourseButtonLink={`/courses/${course.category.slug}/${course.slug}`}
            enrolNowButtonLink="/contact-us"
          />
        );
      })}
    </Section>
  );
}
