import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/recruitment.svg";
import BlogItem from "../components/molecules/BlogItem/BlogItem";
import { graphql, useStaticQuery } from "gatsby";

const Sidebar = styled.div`
${Styles.ScreenSizes.small`
display:none;
   `}
  background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  border-radius: 8px;
  padding: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  p {
    span {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Subnav = styled.div`
  font-family: ${Styles.FontFamily.Paragraph};
  display: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 8px;
    margin-left: 8px;
    white-space: nowrap;
  }
  ${Styles.ScreenSizes.small`
display:flex;
position:sticky;
top:60px;
overflow-x:scroll;
background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  border:1px solid ${Styles.Colors.BaseBorderGrey};
  padding: 16px;
  z-index: 1020;
   `}
`;

export default function AboutPage() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  const blogs = useStaticQuery(graphql`
    query {
      allContentfulBlogs {
        edges {
          node {
            title
            slug
            blogImages {
              file {
                url
              }
            }
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
      allContentfulBlogsCategory {
        edges {
          node {
            blogCategoryName
            slug
          }
        }
      }
    }
  `);

  let origBlog = [];

  blogs.allContentfulBlogs.edges.map((blog) => {
    origBlog.push({
      ...blog,
      filteringCategories: ["all", blog.node.category.slug],
    });
    return null;
  });

  useEffect(() => {
    setProjects(origBlog);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = origBlog.map((p) => ({
      ...p,
      filtered: p.filteringCategories.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <Head title="Blogs" />
      <Layout>
        <TopBannerCourse
          courseTitle="Blogs"
          text="Explore insights, tips, and articles written by experts in a range of professional domains."
          background={Background}
        />
        <Subnav>
          <span
            onClick={(e) => {
              e.preventDefault();
              setFilter("all");
            }}>
            All
          </span>
          {blogs.allContentfulBlogsCategory.edges.map((category) => {
            return (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(category.node.slug);
                }}>
                {category.node.blogCategoryName}
              </span>
            );
          })}
        </Subnav>
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={2}>
              <Sidebar>
                <Paragraph>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("all");
                    }}>
                    All
                  </span>
                </Paragraph>
                {blogs.allContentfulBlogsCategory.edges.map((category) => {
                  return (
                    <Paragraph>
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setFilter(category.node.slug);
                        }}>
                        {category.node.blogCategoryName}
                      </span>
                    </Paragraph>
                  );
                })}
              </Sidebar>
            </Col>
            <Col md={10}>
              <Row>
                {projects.map((item) =>
                  item.filtered === true ? (
                    <>
                      <BlogItem key={item.node.title} blog={item.node} />
                    </>
                  ) : (
                    ""
                  ),
                )}
              </Row>
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
