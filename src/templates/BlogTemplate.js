import React from "react";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import SocialShare from "../components/molecules/SocialShare/SocialShare";
import RelatedArticles from "../components/molecules/RelatedArticles/RelatedArticles";
import Background from "../contents/icons/Blog.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";

const Sidebar = styled.div`
  background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  border-radius: 8px;
  padding: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
`;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      slug
      category {
        slug
      }
      shortDescription {
        shortDescription
      }
      blogImages {
        file {
          url
        }
      }
      content {
        raw
      }
    }
    allContentfulBlogs {
      edges {
        node {
          title
          slug
          category {
            blogCategoryName
            slug
          }
        }
      }
    }
  }
`;

export default function BlogTemplate(props) {
  const BlogContent = props.data.contentfulBlogs;
  const BlogParagraph = ({ children }) => <Paragraph>{children}</Paragraph>;
  const BlogTitle = ({ children, size }) => (
    <BaseTitle title={children} size={size} />
  );

  const BlogOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BlogParagraph>{children}</BlogParagraph>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <BlogTitle size="H2">{children}</BlogTitle>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <BlogTitle size="H3">{children}</BlogTitle>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <BlogTitle size="H4">{children}</BlogTitle>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <BlogTitle size="H5">{children}</BlogTitle>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <BlogTitle size="H6">{children}</BlogTitle>
      ),
      // "embedded-asset-block": (node) => {
      //   const alt = node.data.target.fields.title["en-US"];
      //   const url = node.data.target.fields.file["en-US"].url;
      //   console.log(`here.........`)
      //   // console.log(`image:`,node.data.target)
      //   return (
      //     <img
      //       alt={alt}
      //       src={url}
      //       style={{
      //         maxWidth: "100%",
      //         marginLeft: "auto",
      //         marginRight: "auto",
      //       }}
      //     />
      //   );
      // },
    },
  };


  let CategoryBlogs = [];

  props.data.allContentfulBlogs.edges.map((blog) => {
    if (
      blog.node.category.slug === BlogContent.category.slug &&
      blog.node.slug !== BlogContent.slug
    ) {
      CategoryBlogs.push(blog);
    }
    return null;
  });

  return (
    <>
      <Head
        title={BlogContent.title}
        metaImage={BlogContent.blogImages && BlogContent.blogImages.file.url}
        metaDescription={BlogContent.shortDescription.shortDescription}
      />
      <Layout title={`${BlogContent.title} - ${BlogContent.category.slug}`}>
        <TopBannerCourse
          courseTitle={BlogContent.title}
          text={BlogContent.shortDescription.shortDescription}
          background={Background}
          courseImage={
            BlogContent.blogImages && BlogContent.blogImages.file.url
          }
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={9}>
              {renderRichText(BlogContent.content, BlogOptions)}
            </Col>
            <Col md={3}>
              <Sidebar>
                {CategoryBlogs.length > 0 ? (
                  <RelatedArticles
                    RelatedBlogs={CategoryBlogs}
                    Parent="blogs"
                  />
                ) : null}

                <SocialShare
                  title={BlogContent.title}
                  url={`https://www.traininghub.io/blogs/${BlogContent.category.slug}/${BlogContent.slug}`}
                />
              </Sidebar>
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
