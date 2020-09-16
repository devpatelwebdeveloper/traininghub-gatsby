/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-styled-components",
  `gatsby-plugin-sass`,
  "gatsby-plugin-sitemap",
];

plugins.push(
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `limelight`,
        `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
      ],
      display: "swap",
    },
  },
  // {
  //   resolve: "gatsby-source-graphql",
  //   options: {
  //     // This type will contain remote schema Query type
  //     typeName: "traininghub",
  //     // This is the field under which it's accessible
  //     fieldName: "traininghub",
  //     // URL to query from
  //     url: "http://localhost:3000/graphql",
  //   },
  // }
);

module.exports = {
  plugins: plugins,
  siteMetadata: {
    title: "TrainingHub.io",
    author: "Dev",
    siteUrl: "https://www.traininghub.io",
  },
};
