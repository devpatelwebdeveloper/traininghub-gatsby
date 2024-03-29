import { useStaticQuery, graphql } from "gatsby";

export const HomePageContents = () => {
  const homepageContents = useStaticQuery(graphql`
    query {
      allContentfulHomePageContent {
        edges {
          node {
            title
            description {
              raw
            }
            imageLink
          }
        }
      }
    }
  `);
  return homepageContents;
};
