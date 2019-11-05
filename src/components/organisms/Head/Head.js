import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const url = "https://devpatel.io/"
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta
        name="description"
        content="Devashish Patel | Front End Web Developer based in TO"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Devashish Patel | Front End Web Developer based in TO"
      />
      <meta
        property="og:description"
        content="Hello! Good to see you here, I am Frontend Web Developer based in Toronto Canada"
      />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dev Patel Web Developer" />
      <meta property="og:image" content={`${url}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Hello! Good to see you here, I am Frontend Web Developer based in Toronto Canada"
      />
      <meta
        name="twitter:title"
        content="Devashish Patel | Front End Web Developer based in TO"
      />
      <meta name="twitter:image" content={`${url}`} />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

export default Head
