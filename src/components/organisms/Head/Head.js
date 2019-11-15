import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const url = "https://www.traininghub.io/";
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta
        name="description"
        content="TrainingHub | Lean your career in IT with TrainingHub.io"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="TrainingHub | Your gateway to IT" />
      <meta
        property="og:description"
        content="TrainingHub.io helps talented professionals and developers find success in IT careers they love through community-oriented classroom training and personalized support."
      />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TrainingHub.io" />
      <meta property="og:image" content={`${url}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="TrainingHub.io helps talented professionals and developers find success in IT careers they love through community-oriented classroom training and personalized support."
      />
      <meta name="twitter:title" content="TrainingHub | Your gateway to IT" />
      <meta name="twitter:image" content={`${url}`} />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Helmet>
  );
};

export default Head;
