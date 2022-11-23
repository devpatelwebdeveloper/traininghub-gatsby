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
  return testimonials;
};
