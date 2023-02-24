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
              raw
            }
            topBannerImage {
              file {
                url
              }
            }
            courseIntroduction {
              raw
            }
            description {
              raw
            }
            courseImage {
              file {
                url
              }
            }
            studentJourneyDescription {
              raw
            }
            studentJourneyImages {
              file {
                url
              }
            }
            courseContentDetails {
              courseTopic {
                courseTopic
              }
              courseContentDetailDescription {
                raw
              }
            }
            courseContent {
              courseContent {
                title
                paragraph
              }
            }
            courseDescriptionAndFaq {
              raw
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
