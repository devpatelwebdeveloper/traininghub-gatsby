import { useStaticQuery, graphql } from "gatsby";

export const HomePageCards = () => {
  const homepagecards = useStaticQuery(graphql`
    query {
      allContentfulTestimonials {
        edges {
          node {
            name
            course
            quote {
              json
            }
            avatar {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  return homepagecards;
};
