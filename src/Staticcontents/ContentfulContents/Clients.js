import { useStaticQuery, graphql } from "gatsby";

export const ClientList = () => {
  const clientList = useStaticQuery(graphql`
    query {
      allContentfulCompanyClients {
        edges {
          node {
            clientName
            clientLogo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  return clientList;
};
