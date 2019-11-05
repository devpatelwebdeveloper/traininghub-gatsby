/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-styled-components",
]

module.exports = {
  plugins: plugins,
  siteMetadata: {
    title: "TrainingHub.io",
    author: "Dev",
  },
}
