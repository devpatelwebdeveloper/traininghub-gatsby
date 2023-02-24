import { useStaticQuery, graphql } from "gatsby";

export const HomePageTiles = () => {
  const homepagecards = useStaticQuery(graphql`
    query {
      allContentfulHomePageTiles {
        edges {
          node {
            title
            text {
              raw
            }
            image {
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
