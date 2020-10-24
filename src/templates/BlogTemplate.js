import React from "react";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/Blog.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql, useStaticQuery } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      blogImage
      content {
        json
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
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return (
          <img
            alt={alt}
            src={url}
            style={{
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        );
      },
    },
  };

  return (
    <>
      <Head title={BlogContent.title} />
      <Layout>
        <TopBannerCourse
          courseTitle={BlogContent.title}
          text=""
          background={Background}
          courseImage={BlogContent.blogImage}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={12}>
              {documentToReactComponents(BlogContent.content.json, BlogOptions)}
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
