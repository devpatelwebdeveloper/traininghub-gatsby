import React, { useState, useEffect } from "react";
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
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

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

  //test
  const portfolio = [
    {
      name: "My best client",
      category: ["all", "frontend", "ux-ui"],
    },
    {
      name: "My favorite case",
      category: ["all", "mobile", "ux-ui"],
    },
    {
      name: "A old job",
      category: ["all", "frontend"],
    },
    {
      name: "It is a really cool website",
      category: ["all", "frontend", "ux-ui"],
    },
    {
      name: "Something more",
      category: ["all", "others"],
    },
  ];

  const port = blogs.allContentfulBlogs.edges;
  //test
  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
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
        <Section marginTop="50px" marginBottom="25px">
          <div className="portfolio__labels">
            <a
              href="/#"
              active={filter === "all"}
              onClick={(e) => {
                e.preventDefault();
                setFilter("all");
              }}>
              All
            </a>
            <a
              href="/#"
              active={filter === "frontend"}
              onClick={(e) => {
                e.preventDefault();
                setFilter("frontend");
              }}>
              Frontend
            </a>
            <a
              href="/#"
              active={filter === "mobile"}
              onClick={(e) => {
                e.preventDefault();
                setFilter("mobile");
              }}>
              Mobile
            </a>
            <a
              href="/#"
              active={filter === "ux-ui"}
              onClick={(e) => {
                e.preventDefault();
                setFilter("ux-ui");
              }}>
              UX/UI
            </a>
            <a
              href="/#"
              active={filter === "others"}
              onClick={(e) => {
                e.preventDefault();
                setFilter("others");
              }}>
              Others
            </a>
          </div>
          <div className="portfolio__container">
            {projects.map((item) =>
              item.filtered === true ? (
                <span key={item.name}>{item.name}</span>
              ) : (
                ""
              ),
            )}
          </div>
        </Section>
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
