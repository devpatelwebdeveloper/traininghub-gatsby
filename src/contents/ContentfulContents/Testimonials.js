import { useStaticQuery, graphql } from "gatsby";

export const Testimonials = () => {
  const testimonials = useStaticQuery(graphql`
    query {
      allContentfulTestimonials {
        edges {
          node {
            name
            course
            quote {
              raw
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
  return testimonials;
};
