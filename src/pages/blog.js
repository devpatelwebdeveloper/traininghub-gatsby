import React from "react";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/recruitment.svg";
import BlogItem from "../components/molecules/BlogItem/BlogItem";
import { graphql, useStaticQuery } from "gatsby";

export default function AboutPage() {
  const blogs = useStaticQuery(graphql`
    query {
      allContentfulBlogs {
        edges {
          node {
            title
            slug
            blogImage
            shortDescription {
              shortDescription
            }
            category {
              blogCategoryName
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Head title="Blogs" />
      <Layout>
        <TopBannerCourse
          courseTitle="Blogs"
          text="Explore insights, tips, and articles written by experts in a range of professional domains."
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            {blogs.allContentfulBlogs.edges.map((blog) => {
              return <BlogItem blog={blog.node} />;
            })}
          </Row>
        </Section>
      </Layout>
    </>
  );
}
