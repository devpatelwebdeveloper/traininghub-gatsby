import React from "react";
import { graphql } from "gatsby";
import GatsbyCourse from "../components/templates/Layout/ContentfulCourse";

export const query = graphql`
  query($slug: String!) {
    contentfulCourseContent(slug: { eq: $slug }) {
      title
    }
  }
`;

const Course = (props) => {
  const Course = props.data.contentfulCourseContent;
  return (
    <>
      <GatsbyCourse courseName={Course.title} />
    </>
  );
};

export default Course;
