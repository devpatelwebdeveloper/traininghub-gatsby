import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import browser from "../../../utilities/window";

const Head = ({ title, metaDescription, metaTag, metaImage }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const url = browser.window.location.href;
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      {`<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60331ad29c4f165d47c5a1c0/1ev3q1h8j';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->`}
      <meta
        name="description"
        content={
          metaDescription
            ? metaDescription
            : "TrainingHub.io helps talented professionals and developers find success in IT careers they love through community-oriented classroom training and personalized support."
        }
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${title} | TrainingHub | Your gateway to IT`}
      />
      <meta
        property="og:description"
        content={
          metaDescription
            ? metaDescription
            : "TrainingHub.io helps talented professionals and developers find success in IT careers they love through community-oriented classroom training and personalized support."
        }
      />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TrainingHub.io" />

      <meta
        name="image"
        property="og:image"
        content={
          metaImage
            ? metaImage
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
      />
      <meta
        itemprop="thumbnailUrl"
        content={
          metaImage
            ? metaImage
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
      />
      <link
        rel="image_src"
        href={
          metaImage
            ? metaImage
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
      />
      <meta
        itemprop="image"
        content={
          metaImage
            ? metaImage
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
      />
      <meta
        name="twitter:image"
        content={
          metaImage
            ? metaImage
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content={
          metaDescription
            ? metaDescription
            : "TrainingHub.io helps talented professionals and developers find success in IT careers they love through community-oriented classroom training and personalized support."
        }
      />
      <meta
        name="twitter:title"
        content={`${title} | TrainingHub | Your gateway to IT`}
      />
      <meta property="twitter:url" content={url} />
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
