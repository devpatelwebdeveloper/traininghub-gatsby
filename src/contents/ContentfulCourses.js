import { useStaticQuery, graphql } from "gatsby";

export const CourseQuery = () => {
  const courses = useStaticQuery(graphql`
    query {
      allContentfulCourseContent {
        edges {
          node {
            title
            slug
            category {
              courseName
              slug
              icon
            }
            courseIntroduction {
              json
            }
            topBannerImage {
              file {
                url
              }
            }
            courseIntroduction {
              json
            }
            description {
              json
            }
            courseImage {
              file {
                url
              }
            }
            studentJourneyDescription {
              json
            }
            studentJourneyImages {
              file {
                url
              }
            }
            courseContent {
              courseContent {
                title
                paragraph
              }
            }
          }
        }
      }
    }
  `);
  return courses;
};

// When we add date to one of the courses, add this back
// startDate(formatString: "MMM DD YYYY")
